from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np

from disease_info import DISEASE_INFO

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = load_model("model/1.keras")


CLASS_NAMES = [
    "Potato___Early_blight",
    "Potato___Late_blight",
    "Potato___healthy"
]

IMAGE_SIZE = 256

@app.get("/")
def home():
    return {"message": "Plant Disease API Running"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    image = Image.open(file.file).convert("RGB")
    image = image.resize((IMAGE_SIZE, IMAGE_SIZE))

    img_array = np.array(image).astype(np.float32) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
 
    predictions = model.predict(img_array)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = float(np.max(predictions[0]) * 100)

    disease = DISEASE_INFO[predicted_class]

    return {
        "class": predicted_class,
        "confidence": round(confidence, 2),
        "description": disease["description"],
        "treatment": disease["treatment"]
    }