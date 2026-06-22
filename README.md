# 🌱 AI Plant Disease Detection System

An AI-powered web application for detecting potato leaf diseases using Deep Learning.

## Features

- Upload plant leaf images
- Detect Potato Early Blight
- Detect Potato Late Blight
- Detect Healthy Leaves
- Confidence score
- Disease description
- Treatment recommendations

## Technologies

### Frontend
- React.js
- Axios

### Backend
- FastAPI
- TensorFlow
- Keras
- Pillow

## Dataset
PlantVillage Dataset

## Classes
- Potato___Early_blight
- Potato___Late_blight
- Potato___healthy

## Run Frontend

```bash
cd frontend
npm install
npm start
```

## Run Backend

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

## Project Structure

```
AI Plant Disease Detection System
│
├── frontend/
├── backend/
│   ├── main.py
│   ├── disease_info.py
│   ├── requirements.txt
│   └── model/
└── README.md
```
