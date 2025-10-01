// components/Booking/Confirmation.jsx
import React from "react";
import { Check, Edit2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function Confirmation({ onEdit }) {
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <div className="space-y-3">
      {/* Success Message */}
      <div className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-xl">
        <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-800">Your booking has been confirmed!</h3>
          <p className="text-green-700 mt-1">
            Your workspace has successfully been reserved. We've sent your booking details to your email. 
            We look forward to hosting you.
          </p>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-green-700 border-b pb-2">
            Personal Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <strong>Name:</strong> {data.name || "Not provided"}
            </div>
            <div>
              <strong>Email:</strong> {data.email || "Not provided"}
            </div>
            <div>
              <strong>Phone:</strong> {data.phone || "Not provided"}
            </div>
            <div>
              <strong>Add-ons:</strong> {data.addons ? data.addons.charAt(0).toUpperCase() + data.addons.slice(1) : "None"}
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-green-700 border-b pb-2">
            Booking Details
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <strong>Room Type:</strong> {data.roomType ? data.roomType.charAt(0).toUpperCase() + data.roomType.slice(1) : "Not selected"}
            </div>
            <div>
              <strong>Date:</strong> {data.date || "Not selected"}
            </div>
            <div>
              <strong>Time Slots:</strong> 
              {data.time && data.time.length > 0 ? (
                <ul className="list-disc list-inside mt-1">
                  {data.time.map((time, index) => (
                    <li key={index}>{time}</li>
                  ))}
                </ul>
              ) : "Not selected"}
            </div>
            <div>
              <strong>Number of People:</strong> {data.number || 1}
            </div>
            <div>
              <strong>Duration:</strong> {data.duration || "Not specified"} hours
            </div>
            {data.requests && (
              <div className="md:col-span-2">
                <strong>Special Requests:</strong> 
                <p className="mt-1 text-gray-600">{data.requests}</p>
              </div>
            )}
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-green-700 border-b pb-2">
            Payment Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <strong>Payment Method:</strong> {data.paymentMethod ? data.paymentMethod.charAt(0).toUpperCase() + data.paymentMethod.slice(1) : "Not selected"}
            </div>
            {data.cardNumber && (
              <div>
                <strong>Card Number:</strong> •••• •••• •••• {data.cardNumber.slice(-4)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center pt-4">
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Edit2 size={16} />
          Edit Details
        </button>
        
        <div className="text-right">
          <p className="text-sm text-gray-500">Need help with your booking?</p>
          <p className="text-green-600 font-medium">support@workspace.com</p>
        </div>
      </div>
    </div>
  );
}