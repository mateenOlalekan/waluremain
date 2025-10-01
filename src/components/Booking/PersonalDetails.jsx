// components/Booking/PersonalDetails.jsx
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function PersonalDetails() {
  const [count, setCount] = useState(1);
  const { register, setValue, formState: { errors } } = useFormContext();

  const handleCountChange = (val) => {
    const newCount = Math.max(1, Math.min(50, val));
    setCount(newCount);
    setValue("number", newCount, { shouldValidate: true });
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full border-2 border-green-500 outline-none p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full border-2 border-green-500 outline-none p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full border-2 border-green-500 outline-none p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Add-ons */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Add-ons *
          </label>
          <select
            {...register("addons")}
            className="w-full border-2 border-green-500 outline-none p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
          >
            <option value="">Choose add-ons</option>
            <option value="wifi">High-speed WiFi</option>
            <option value="coffee">Coffee/Tea Service</option>
            <option value="parking">Parking Space</option>
          </select>
          {errors.addons && (
            <p className="text-red-500 text-sm mt-1">{errors.addons.message}</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration *
          </label>
          <select
            {...register("duration")}
            className="w-full border-2 border-green-500 outline-none p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
          >
            <option value="">Select duration</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hours</option>
            <option value="4">Half Day (4 hrs)</option>
            <option value="8">Full Day (8 hrs)</option>
          </select>
          {errors.duration && (
            <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>
          )}
        </div>

        {/* Number of People */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of People *
          </label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 w-fit border-2 border-green-500 rounded-xl px-4 py-2">
              <button
                type="button"
                onClick={() => handleCountChange(count - 1)}
                disabled={count <= 1}
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="px-4 min-w-[3rem] text-center font-medium">{count}</span>
              <button
                type="button"
                onClick={() => handleCountChange(count + 1)}
                disabled={count >= 50}
                className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500">Between 1-50 people</p>
          </div>
          {errors.number && (
            <p className="text-red-500 text-sm mt-1">{errors.number.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}