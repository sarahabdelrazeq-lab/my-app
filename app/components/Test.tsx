"use client";
import React, { useCallback, useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const config = useSpeechRecognition();
  const {
    transcript,
    listening: browserListening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening,
    isMicrophoneAvailable,
    interimTranscript,
  } = config;
  const [micStatus, setMicStatus] = useState<
    "granted" | "denied" | "prompt" | "unsupported"
  >("unsupported");
  const listening =
    isMicrophoneAvailable && micStatus === "granted" && browserListening;

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
      // interimResults: true,
    });
  };

  const checkPermission = useCallback(async () => {
      try {
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        setMicStatus("granted");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        if (err.name === "NotAllowedError") {
          setMicStatus("denied");
        } else if (err.name === "NotFoundError") {
          setMicStatus("unsupported");
        } else {
          setMicStatus("unsupported");
        }
      }
  }, []);

  const onClick = useCallback(async () => {
    await checkPermission();
    startListeningArabic();
  }, [checkPermission]);

  const onClick2 = useCallback(async () => {
    await checkPermission();
    startListeningEgyptian();
  }, [checkPermission]);

  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions
        .query({ name: "microphone" as PermissionName })
        .then((result) => {
          setMicStatus(result.state);

          result.onchange = () => setMicStatus(result.state);
        })
        .catch(() => setMicStatus("unsupported"));
    } else {
      setMicStatus("unsupported");
    }
  }, []);

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
          onClick={onClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ابدأ (السعودية)
        </button>

        <button
          onClick={onClick2}
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
      transcript: {transcript} <br />
      interimTranscript: {interimTranscript} <br />
      micStatus: {micStatus} <br />
    </div>
  );
};

export default Dictaphone;
