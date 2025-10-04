// components/Booking/BookingDetails.jsx
import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function BookingDetails() {
  const { register, setValue, formState: { errors } } = useFormContext();
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
  ];

  // Initialize form values
  useEffect(() => {
    setValue("time", []);
    setValue("date", "");
  }, [setValue]);

  const handleTimeSelect = (time) => {
    let newTimes;
    if (selectedTimes.includes(time)) {
      newTimes = selectedTimes.filter((t) => t !== time);
    } else {
      newTimes = [...selectedTimes, time];
    }

    setSelectedTimes(newTimes);
    setValue("time", newTimes, { shouldValidate: true });
  };

  const calendarDays = [
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
  ];

  const handleDateSelect = (day) => {
    const fullDate = `2025-08-${day.toString().padStart(2, "0")}`;
    setSelectedDate(fullDate);
    setValue("date", fullDate, { shouldValidate: true });
  };

  return (
    <div className="space-y-3">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Room Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select a Space *
            </label>
            <select
              {...register("roomType")}
              className="w-full border-2 border-green-500 rounded-xl p-3 focus:ring-2 focus:ring-green-500"
            >
              <option value="">Choose a space</option>
              <option value="private">Private Office</option>
              <option value="public">Public Workspace</option>
              <option value="conference">Conference Room</option>
            </select>
            {errors.roomType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.roomType.message}
              </p>
            )}
          </div>

          {/* Calendar */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Select Date
            </h2>

            {/* Calendar Grid */}
            <div className="mb-6">
              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["S", "M", "T", "W", "TH", "F", "S"].map((day, index) => (
                  <div
                    key={index}
                    className="text-center text-sm font-medium text-gray-600 py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar days */}
              {calendarDays.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="grid grid-cols-7 gap-1 mb-1"
                >
                  {week.map((day, dayIndex) => (
                    <button
                      key={dayIndex}
                      onClick={() => handleDateSelect(day)}
                      className={`h-10 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                        selectedDate.endsWith(`-${day.toString().padStart(2, "0")}`)
                          ? "bg-green-500 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">Limited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Booked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Time Slots */}
        <div className="rounded-xl h-fit p-3 shadow-lg">
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Available Slots
          </label>
          <div className="grid grid-cols-1 gap-3">
            {timeSlots.map((time) => {
              const isSelected = selectedTimes.includes(time);

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => handleTimeSelect(time)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-green-600 text-white border-green-600 shadow-md"
                      : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
                  }`}
                >
                  <span>{time}</span>
                  {isSelected && <CheckCircle className="w-4 h-4" />}
                </button>
              );
            })}
          </div>
          {errors.time && (
            <p className="text-red-500 text-sm mt-2">{errors.time.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
