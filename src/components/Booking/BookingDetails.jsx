// components/Booking/BookingDetails.jsx
import React, { useState, useEffect } from "react";
import { Building, Calendar, Clock, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function BookingDetails() {
  const { register, setValue, formState: { errors }, watch } = useFormContext();
  const [currentMonth, setCurrentMonth] = useState(new Date());
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

  // Watch for form changes
  const formData = watch();

  const handleDateSelect = (day) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth() + 1;
    const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    setSelectedDate(dateStr);
    setValue("date", dateStr, { shouldValidate: true });
  };

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

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    const weeks = [];
    let currentDay = 1 - startDay;

    while (currentDay <= daysInMonth) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        if (currentDay > 0 && currentDay <= daysInMonth) {
          const dateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;
          const isSelected = selectedDate === dateStr;
          
          week.push(
            <button
              key={currentDay}
              type="button"
              onClick={() => handleDateSelect(currentDay)}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-colors ${
                isSelected 
                  ? "bg-green-500 text-white border-green-500" 
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {currentDay}
            </button>
          );
        } else {
          week.push(<div key={`empty-${currentDay}-${i}`} className="w-10 h-10" />);
        }
        currentDay++;
      }
      weeks.push(
        <div key={`week-${weeks.length}`} className="grid grid-cols-7 gap-1">
          {week}
        </div>
      );
    }
    return weeks;
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
              <p className="text-red-500 text-sm mt-1">{errors.roomType.message}</p>
            )}
          </div>



          {/* Calendar */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Date *
            </label>
            <div className="space-y-4 p-4 border border-gray-200 rounded-xl">
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="font-medium">
                  {currentMonth.toLocaleString("default", { month: "long" })} {currentMonth.getFullYear()}
                </span>
                <button
                  type="button"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-7 text-xs font-semibold text-gray-500 text-center">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
                {renderCalendar()}
              </div>
            </div>
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
            {selectedDate && (
              <p className="text-sm text-green-600 mt-2">Selected: {selectedDate}</p>
            )}
          </div>
        </div>

        {/* Right Column - Time Slots */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            Choose Time Slots (select at least one) *
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
          <p className="text-xs text-gray-500 mt-2">
            Selected: {selectedTimes.length} time slot(s)
          </p>
        </div>
      </div>
    </div>
  );
}