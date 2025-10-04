// components/Booking/PaymentDetails.jsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { Copy } from "lucide-react";

export default function PaymentDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Left Side (Empty / Placeholder) */}


      {/* Right Side (Form Content) */}
      <div className="w-full space-y-4 bg-white shadow-md rounded-xl p-6 border border-gray-100">
        {/* Header */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Bank Transfer
          </h2>
          <p className="text-sm text-gray-500">
            Enter your details below to complete your payment.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Bank Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bank Name
            </label>
            <input
              type="text"
              {...register("bankName")}
              placeholder="June Bank"
              className="w-full border rounded-lg px-3 py-2  border-green-500 text-sm focus:border-green-500 focus:ring focus:ring-green-200"
            />
            {errors.bankName && (
              <p className="text-red-500 text-xs mt-1">{errors.bankName.message}</p>
            )}
          </div>

          {/* Account Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Account Name
            </label>
            <input
              type="text"
              {...register("accountName")}
              placeholder="Wavora Ltd.Co"
              className="w-full border rounded-lg px-3 py-2  border-green-500 text-sm focus:border-green-500 focus:ring focus:ring-green-200"
            />
            {errors.accountName && (
              <p className="text-red-500 text-xs mt-1">{errors.accountName.message}</p>
            )}
          </div>

          {/* Account Number */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <button
                type="button"
                className="flex items-center text-xs text-green-600 hover:text-green-700"
              >
                <Copy size={14} className="mr-1" />
                Copy
              </button>
            </div>
            <input
              type="text"
              {...register("accountNumber")}
              placeholder="1234567890"
              className="w-full border rounded-lg px-3 py-2  border-green-500 text-sm focus:border-green-500 focus:ring focus:ring-green-200"
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.accountNumber.message}</p>
            )}
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              {...register("amount")}
              placeholder="#10,000"
              className="w-full border rounded-lg px-3 py-2  border-green-500 text-sm focus:border-green-500 focus:ring focus:ring-green-200"
            />
            {errors.amount && (
              <p className="text-red-500 text-xs mt-1">{errors.amount.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:block"></div>
    </div>
  );
}
