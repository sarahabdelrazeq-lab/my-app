"use client";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const config = useSpeechRecognition();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = config;
  console.log("configconfigconfig", config);

  if (!browserSupportsSpeechRecognition) {
    return <span>المتصفح لا يدعم التعرف على الكلام.</span>;
  }

  // Start listening with Arabic language
  const startListeningArabic = () => {
    SpeechRecognition.startListening({
      language: "ar-SA", // Arabic (Saudi Arabia)
      continuous: true,
      interimResults: true,
    });
  };

  // You can also create different functions for different Arabic dialects
  const startListeningEgyptian = () => {
    SpeechRecognition.startListening({
      language: "ar-EG", // Arabic (Egypt)
      continuous: true,
      interimResults: true,
    });
  };

  const startListeningUAE = () => {
    SpeechRecognition.startListening({
      language: "ar-AE", // Arabic (UAE)
      continuous: true,
      interimResults: true,
    });
  };

  return (
    <div
      className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg"
      dir="rtl"
    >
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-700">
          الميكروفون: {listening ? "مفعل" : "معطل"}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={startListeningArabic}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ابدأ (السعودية)
        </button>

        <button
          onClick={startListeningEgyptian}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          ابدأ (مصر)
        </button>

        <button
          onClick={startListeningUAE}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
        >
          ابدأ (الإمارات)
        </button>

        <button
          onClick={SpeechRecognition.stopListening}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          توقف
        </button>

        <button
          onClick={resetTranscript}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          مسح
        </button>
      </div>

      <div className="p-4 bg-gray-50 rounded border min-h-[100px]">
        <p className="text-gray-800 leading-relaxed">
          {transcript || "ابدأ بالتحدث..."}
        </p>
      </div>

      {listening && (
        <div className="mt-3 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            🎤 يتم الاستماع...
          </span>
        </div>
      )}
    </div>
  );
};

export default Dictaphone;
