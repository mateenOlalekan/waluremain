import React from "react";
import Confetti from "react-confetti";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <Confetti />
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-3">🎉 Success!</h2>
        <p className="text-gray-600 mb-4">
          Your account has been verified successfully.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
