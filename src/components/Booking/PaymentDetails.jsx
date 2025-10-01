// components/Booking/PaymentDetails.jsx
import React from "react";
import { useFormContext } from "react-hook-form";

export default function PaymentDetails() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Details
        </h2>
        <p className="text-gray-500">
          Enter your card details to securely process your payment.
        </p>
      </div>

      <div className="space-y-5">
        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment Method *
          </label>
          <select
            {...register("paymentMethod")}
            className="w-full border-2 border-green-500 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select payment method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="visa">Visa</option>
            <option value="mastercard">Mastercard</option>
          </select>
          {errors.paymentMethod && (
            <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
          )}
        </div>

        {/* Card Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number *
          </label>
          <input
            type="text"
            {...register("cardNumber")}
            placeholder="1234 5678 9012 3456"
            className="w-full border-2 border-green-500 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date (MM/YY) *
            </label>
            <input
              type="text"
              {...register("expiryDate")}
              placeholder="08/27"
              className="w-full border-2 border-green-500 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>
            )}
          </div>

          {/* CVV */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV *
            </label>
            <input
              type="password"
              {...register("cvv")}
              placeholder="123"
              className="w-full border-2 border-green-500 rounded-lg p-3 focus:ring-2 focus:ring-green-500"
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}