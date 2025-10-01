import React, { useState, useRef } from "react";
import SuccessModal from "../components/Modal";

const VerificationPage = () => {
  const [code, setCode] = useState(new Array(6).fill(""));
  const [showModal, setShowModal] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.join("").length === 6) {
      setShowModal(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-5">
      <div className="bg-white shadow-lg border rounded-2xl p-6 max-w-md w-full">
        <h2 className="text-xl font-bold text-center mb-3">
          Enter Verification Code
        </h2>
        <p className="text-center text-gray-500 mb-5">
          We’ve sent a 6-digit code to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex justify-center gap-2">
            {code.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                className="w-12 h-12 text-center text-lg border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Verify
          </button>
        </form>
      </div>

      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default VerificationPage;
