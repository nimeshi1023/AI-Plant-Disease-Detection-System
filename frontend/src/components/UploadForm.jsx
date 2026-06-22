import { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

function UploadForm() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData
      );

      setResult(response.data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

      <h1 className="text-4xl font-bold text-white text-center mb-3">
        🌱 AI Plant Disease Detection
      </h1>

      <p className="text-center text-gray-200 mb-8">
        Upload a plant leaf image and let AI identify diseases instantly
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        <div>

          <label className="block border-2 border-dashed border-green-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-white/10 transition">

            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />

            <div className="text-white">
              📷 Click to Upload Image
            </div>

          </label>

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="mt-5 rounded-2xl w-full h-72 object-cover shadow-lg"
            />
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Analyzing..." : "Detect Disease"}
          </button>

        </div>

        <div>
          {result ? (
            <ResultCard result={result} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-200 text-lg">
              Prediction results will appear here
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default UploadForm;