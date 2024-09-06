import os
from sqlalchemy.orm import Session
from app.pdf_processor import extract_text_from_pdf
from app.models import SurveyResponse
import openai
from dotenv import load_dotenv
load_dotenv()


openai.api_key = os.getenv("OPENAI_API_KEY")
def query_openai_api(user_query: str, context: str = "") -> str:
    
    messages = [{"role": "user", "content": user_query}]
    
    if context:
    
        messages.insert(0, {"role": "system", "content": f"Context: {context}"})
        print(messages+"\n----------------with context-----------")
    
    try:
        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", 
            messages=messages
        )
        return completion['choices'][0]['message']['content']
    except Exception as e:
        return f"OpenAI API error: {str(e)}"

def handle_query(query: str, db: Session, upload_folder: str) -> str:
    
    print("----------------inside handel query------------------")
    if "pdf" in query.lower():
        pdf_files = os.listdir(upload_folder)
        
        if not pdf_files:
            print("--------no PDF--------")
            return "No PDF files found."

        
        pdf_path = os.path.join(upload_folder, pdf_files[0])
        extracted_text = extract_text_from_pdf(pdf_path)

        response = query_openai_api(query, extracted_text)
        return response
    
    
    # elif "survey" in query.lower():
    #     survey_responses = db.query(SurveyResponse).all()
    #     return f"Survey responses: {len(survey_responses)} found."
    
    else:
        return query_openai_api(query)

