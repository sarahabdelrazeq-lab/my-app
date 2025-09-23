"use client";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

class MySpeechRecognitionPolyfill {
  private recognition: SpeechRecognition;

  constructor() {
    const NativeRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!NativeRecognition) {
      throw new Error("Web Speech API is not supported in this browser.");
    }

    this.recognition = new NativeRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = "en-US";

    // forward all native events
    this.onstart = null;
    this.onend = null;
    this.onerror = null;
    this.onresult = null;

    this.recognition.onstart = (e) => this.onstart?.(e);
    this.recognition.onend = (e) => this.onend?.(e);
    this.recognition.onerror = (e) => this.onerror?.(e);
    this.recognition.onresult = (e) => this.onresult?.(e);
  }

  // Required by W3C spec
  start() {
    this.recognition.start();
  }
  stop() {
    this.recognition.stop();
  }
  abort() {
    this.recognition.abort();
  }

  // Event handler placeholders
  onstart: ((e: Event) => void) | null;
  onend: ((e: Event) => void) | null;
  onerror: ((e: SpeechRecognitionErrorEvent) => void) | null;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;

  // Optional: expose config setters
  set lang(language: string) {
    this.recognition.lang = language;
  }
}

SpeechRecognition.applyPolyfill(MySpeechRecognitionPolyfill);

const Dictaphone = () => {
  const config = useSpeechRecognition();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
    isMicrophoneAvailable,
  } = config;
  console.log("configconfigconfig", config);

  if (!browserSupportsSpeechRecognition) {
    return <span>المتصفح لا يدعم التعرف على الكلام.</span>;
  }

  // Start listening with Arabic language
  const startListeningArabic = () => {
    SpeechRecognition.startListening({
      language: "ar-SA",
    });
  };

  // You can also create different functions for different Arabic dialects
  const startListeningEgyptian = () => {
    SpeechRecognition.startListening({
      language: "ar-SA",
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
          ابدأ (مع استمرار)
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
      browserSupportsSpeechRecognition:{" "}
      {browserSupportsSpeechRecognition ? "true" : "false"} <br />
      browserSupportsContinuousListening:{" "}
      {browserSupportsContinuousListening ? "true" : "false"} <br />
      isMicrophoneAvailable: {isMicrophoneAvailable ? "true" : "false"} <br />
    </div>
  );
};

export default Dictaphone;
