import React, { useState } from "react";
import { useAppContext } from "../../Context.jsx";

const Result = () => {
  const { result } = useAppContext();
  const [showToast, setShowToast] = useState(false);

  if (!result) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <div className="mt-6 bg-white p-5 sm:p-6 rounded-lg shadow-md border border-gray-200 max-w-3xl mx-4 sm:mx-auto transition">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-[#2E3C56]">
            🎯 Your Caption:
          </h2>
          <button
            onClick={handleCopy}
            className="self-start sm:self-auto text-sm bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700 transition"
          >
            📋 Copy
          </button>
        </div>

        <p className="text-gray-800 whitespace-pre-line mt-3 text-base leading-relaxed">
          {result}
        </p>
      </div>

      {/* ✅ Custom Toast UI */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50 animate-fade-in-out">
          ✅ Text copied!
        </div>
      )}
    </>
  );
};

export default Result;
