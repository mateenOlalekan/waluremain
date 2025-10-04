// src/components/LoadingScreen.jsx
import React from "react";

export default function LoadingScreen({ message = "Loading..." }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-6 px-6">
        {/* Logo (SVG) */}
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg transform-gpu animate-[spin_slow_4s_linear_infinite]"
            style={{ width: 64, height: 64 }}
            aria-hidden
          >
            {/* simple logo mark */}
            <svg viewBox="0 0 64 64" className="w-full h-full">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#000" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              <circle cx="32" cy="32" r="30" fill="url(#g)" />
              <path
                d="M18 40 L28 24 L46 34"
                fill="none"
                stroke="#0f172a"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />
            </svg>
          </div>

          <div className="text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
              Walure <span className="text-amber-500">Co-Work</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 -mt-1">Flexible workspace</p>
          </div>
        </div>

        {/* Animated spinner + shimmer bar */}
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-4">
            <div className="w-10 h-10 rounded-full border-4 border-gray-200 border-t-4 border-t-amber-500 animate-spin" />
          </div>

          {/* Skeleton / shimmer */}
          <div className="w-full h-3 rounded-full overflow-hidden bg-gray-200 relative">
            <div
              className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_linear_infinite]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
                transform: "translateX(-100%)",
              }}
            />
          </div>

          <p className="mt-3 text-center text-sm text-gray-600">{message}</p>
        </div>
      </div>

      {/* tiny custom animation classes (Tailwind JIT will pick these up as inline utilities) */}
      <style>{`
        @keyframes spin_slow { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-\\[spin_slow_4s_linear_infinite\\] { animation: spin_slow 4s linear infinite; }
        .animate-\\[shimmer_1\\.6s_linear_infinite\\] { animation: shimmer 1.6s linear infinite; }
      `}</style>
    </div>
  );
}
