from fastapi import FastAPI, File, UploadFile, Form, HTTPException, Depends
from sqlalchemy.orm import Session
import os
from app.utils import save_pdf_file, get_db
from app.pdf_processor import extract_text_from_pdf
from app.query_handler import handle_query
from fastapi.middleware.cors import CORSMiddleware
import openai

app = FastAPI()

origins = [
    "http://localhost:5173",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

UPLOAD_FOLDER = "uploads/uploaded_pdfs"

# @app.post("/upload_pdf")
# async def upload_pdf(file: UploadFile = File(...)):
#     file_path = save_pdf_file(file, UPLOAD_FOLDER)
#     if not file_path:
#         raise HTTPException(status_code=500, detail="File upload failed")
#     return {"filename": file.filename, "path": file_path}

@app.post("/ask")
async def ask(
    query: str = Form(...), 
    file: UploadFile = File(None), 
    db: Session = Depends(get_db)
):
    if file:
        # Process file if provided
        file_path = save_pdf_file(file, UPLOAD_FOLDER)
        if not file_path:
            raise HTTPException(status_code=500, detail="File upload failed")

        extracted_text = extract_text_from_pdf(file_path)
        response = handle_query(query, db, UPLOAD_FOLDER)
    else:
        response = handle_query(query, db, UPLOAD_FOLDER)
    
    return {"response": response}
