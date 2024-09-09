# AI Chat Application

### A ChatGPT-Powered Document & Database Query Application

This application allows users to chat with documents they upload (PDFs) and query a SQLite database simultaneously, powered by advanced language models like OpenAI's GPT. Users can seamlessly interact with their documents, extracting and querying data in real-time through an intuitive chat interface. The system fetches information from both documents and databases to respond to user queries effectively.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: FastAPI, Python, SQLite
- **NLP**: Large Language Models (LLMs)

## Steps to Run the Application
1. **Clone the repository**
   ```bash
   git clone https://github.com/AryanshuCreates/AiChatApp.git
2. **Backend Setup**
- Navigate to the backend directory
   ```bash
   cd backend
- Install the required dependencies
   ```bash
   pip install -r requirements.txt
- Add a .env file and include your ChatGPT API key
  ```env
  CHATGPT_API_KEY=your-api-key-here
- Run the backend
  ```bash
  uvicorn main:app --reload
3. **Frontend Setup**
- Navigate to the frontend directory
  ```bash
  cd frontend
- Install the frontend dependencies
  ```bash
  npm install
- Start the frontend
  ```bash
  npm run dev
4. **You'er good to go!**
   - The application should now be running. You can access it at the specified local address (usually http://localhost:3000 for frontend and http://localhost:8000 for backend).





  
