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
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-blue-00 via-blue-200 to-white text-gray-900 px-8 py-12 font-sans">
      {/* Header */}
      <header className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-black mb-6 leading-tight">
          DareBeyond: <span className="text-blue-700">Elevate Your Potential</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Step outside your comfort zone with transformational challenges. Dare
          to dream, dare to grow—welcome to DareBeyond!
        </p>
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center gap-16 w-full">
        {/* Challenge Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-3xl text-center border border-gray-200 relative">
          {loading ? (
            <div className="animate-spin w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
          ) : currentChallenge ? (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                🚀 {currentChallenge.title}
              </h2>
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8">
                {currentChallenge.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-blue-50 p-6 rounded-xl border border-blue-200">
                {/* Benefits */}
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-3xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-900">Benefits:</p>
                    <p>{currentChallenge.benefits}</p>
                  </div>
                </div>
                {/* Time Limit */}
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 text-3xl">⏱️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Time Limit:</p>
                    <p>{currentChallenge.timeLimit}</p>
                  </div>
                </div>
              </div>
              <p className="italic text-gray-600 text-lg mt-8">
                “{currentChallenge.quote}”
              </p>
            </>
          ) : (
            <p className="text-gray-600 text-lg">
              Ready to elevate yourself? Click below to get started with DareBeyond!
            </p>
          )}
        </div>

        {/* Generate Challenge Button */}
        <button
          onClick={getRandomChallenge}
          className="px-10 py-4 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400"
        >
          Generate a New Challenge!
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 mt-16 space-y-6">
        <p className="text-gray-800">
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
        <div>
          <a
            href="https://www.producthunt.com/posts/darebeyond?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-darebeyond"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=627687&theme=neutral"
              alt="DareBeyond - Elevate your potential | Product Hunt"
              className="mx-auto"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
