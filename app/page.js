"use client";
import { useState } from "react";
import challenges from "./challenges";

export default function Home() {
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomChallenge = () => {
    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      setCurrentChallenge(challenges[randomIndex]);
      setLoading(false);
    }, 500); // Simulating loading time
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-blue-50 to-white text-gray-900 p-8 sm:p-12 font-sans">
      {/* Header */}
      <header className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-black mb-6">
          DareBeyond: <span className="text-blue-700">Elevate Your Potential</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Push your boundaries with transformative challenges designed to foster personal growth. Embrace the DareBeyond experience!
        </p>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center gap-12 mt-12 w-full">
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 w-full max-w-2xl text-center transform transition-transform hover:scale-105 relative">
          {loading ? (
            <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
          ) : currentChallenge ? (
            <>
              {/* Challenge Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-5">
                🚀 {currentChallenge.title}
              </h2>

              {/* Challenge Description */}
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
                {currentChallenge.description}
              </p>

              {/* Benefits & Time Limit */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-left bg-gray-100 p-6 rounded-2xl mb-6">
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-2xl">✅</span>
                  <p>
                    <span className="font-semibold text-gray-900">Benefits:</span> {currentChallenge.benefits}
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-2xl">⏱️</span>
                  <p>
                    <span className="font-semibold text-gray-900">Time Limit:</span> {currentChallenge.timeLimit}
                  </p>
                </div>
              </div>

              {/* Motivational Quote */}
              <p className="italic text-gray-500 text-lg mt-8">
                “{currentChallenge.quote}”
              </p>
            </>
          ) : (
            <p className="text-gray-500 text-lg">
              Click the button below to start your journey with DareBeyond!
            </p>
          )}
        </div>

        {/* Generate Challenge Button */}
        <button
          onClick={getRandomChallenge}
          className="px-10 py-5 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-blue-400 mb-10"
        >
          Generate a New Challenge!
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 mt-20">
        <p className="mb-4 text-gray-800">
          Inspired by <i>The 4-Hour Workweek</i> and the pursuit of excellence.
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/sahil-khan-indie/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://www.producthunt.com/@sahil_khan_coder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Product Hunt
          </a>
          <a
            href="https://sahilkhan0.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            Newsletter
          </a>
        </div>
      </footer>
    </div>
  );
}
