function ResultCard({ result }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        {result.class}
      </h2>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>Confidence</span>
          <span>{result.confidence}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-600 h-4 rounded-full"
            style={{ width: `${result.confidence}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl mb-4">
        <h3 className="font-semibold mb-2">Description</h3>
        <p>{result.description}</p>
      </div>

      <div className="bg-green-50 p-4 rounded-xl border border-green-200">
        <h3 className="font-semibold text-green-700 mb-2">
          Treatment Recommendation
        </h3>
        <p>{result.treatment}</p>
      </div>

    </div>
  );
}

export default ResultCard;