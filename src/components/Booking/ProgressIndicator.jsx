// components/Booking/ProgressIndicator.jsx
import { Check } from "lucide-react";

export default function ProgressIndicator({ 
  steps, 
  currentStep, 
  onStepClick 
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      {steps.map((step, index) => {
        const isCompleted = step.id < currentStep;
        const isCurrent = step.id === currentStep;
        const isClickable = step.id < currentStep;

        return (
          <div key={step.id} className="flex items-center flex-1">
            {/* Step Indicator */}
            <button
              type="button"
              onClick={() => isClickable && onStepClick(step.id)}
              disabled={!isClickable}
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                isCompleted
                  ? "bg-green-500 border-green-500 text-white"
                  : isCurrent
                  ? "bg-white border-gray-400 text-gray-700 shadow-sm"
                  : "bg-white border-gray-300 text-gray-400"
              } ${isClickable ? "cursor-pointer hover:shadow-md" : "cursor-default"}`}
            >
              {isCompleted ? <Check size={18} /> : step.id}
            </button>

            {/* Step Label */}
            <div className="ml-3 flex flex-col">
              <span
                className={`text-sm font-medium ${
                  isCompleted
                    ? "text-green-600"
                    : isCurrent
                    ? "text-gray-900"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div
                className={`hidden sm:block flex-1 h-0.5 mx-4 transition-colors ${
                  isCompleted ? "bg-green-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}