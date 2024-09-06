
import os
from fastapi import UploadFile
from sqlalchemy.orm import Session
from app.models import SessionLocal

def save_pdf_file(file: UploadFile, upload_folder: str) -> str:
    file_location = os.path.join(upload_folder, file.filename)
    with open(file_location, "wb+") as file_object:
        file_object.write(file.file.read())
    return file_location

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
