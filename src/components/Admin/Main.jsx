import React, { useState } from "react";
import {
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Admin from "../../assets/admin.png"; // adjust path if needed

// Data
const weeklyUsagePercent = 80;
const availableRooms = [
  { id: "shared", label: "Shared room", percent: 20, color: "#10B981" },
  { id: "private", label: "Private room", percent: 75, color: "#059669" },
  { id: "conference", label: "Conference room", percent: 100, color: "#047857" },
];
const recentlyUsed = [
  { name: "Shared room", value: 40, color: "#16A34A" },
  { name: "Private room", value: 35, color: "#F59E0B" },
  { name: "Conference room", value: 25, color: "#EF4444" },
];
const radialData = [{ name: "usage", value: weeklyUsagePercent, fill: "#10B981" }];
const barData = [
  { name: "APR", value: 25 },
  { name: "MAY", value: 8 },
  { name: "JUN", value: 30 },
  { name: "JUL", value: 18 },
  { name: "AUG", value: 14 },
];

export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date(2025, 7, 1));
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 7, 1));

  // Generate 14 days from current start date
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    return d;
  });

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const formatDate = (d) => d.toISOString().split("T")[0]; // yyyy-mm-dd

  // Navigation
  const goPrev = () => {
    const newStart = new Date(startDate);
    newStart.setDate(startDate.getDate() - 14);
    setStartDate(newStart);
  };

  const goNext = () => {
    const newStart = new Date(startDate);
    newStart.setDate(startDate.getDate() + 14);
    setStartDate(newStart);
  };

  // Display current range label
  const rangeLabel = `${days[0].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })} - ${days[13].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
      {/* ================= LEFT MAIN SECTION ================= */}
      <div className="lg:col-span-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Half */}
          <div className="flex flex-col gap-4">
            {/* Welcome Card */}
            <div className="bg-white rounded-2xl p-4 shadow-md border border-emerald-100 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Welcome back John!
                </h1>
                <p className="text-sm text-gray-600 mt-2">
                  Need a space? Let&apos;s get you booked
                </p>
                <button className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition text-sm md:text-base">
                  Book a space
                </button>
              </div>
              <div className="w-28 md:w-40 lg:w-52 mt-4 md:mt-0">
                <img
                  src={Admin}
                  alt="illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Bottom Row: 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1: Radial Usage */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="70%"
                      outerRadius="100%"
                      barSize={10}
                      data={radialData}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="value"
                        cornerRadius={20}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-lg font-semibold text-emerald-700">
                    {weeklyUsagePercent}%
                  </div>
                  <div className="text-sm text-gray-600">Weekly Usage</div>
                </div>
              </div>

              {/* Card 2: Available Rooms */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100">
                <h3 className="font-semibold text-sm mb-3">Available Rooms</h3>
                <ul className="space-y-2 text-sm">
                  {availableRooms.map((r) => (
                    <li
                      key={r.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: r.color }}
                        />
                        <span className="text-gray-700">{r.label}</span>
                      </div>
                      <span className="text-gray-600">{r.percent}%</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Recently Used */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex flex-col">
                <h3 className="font-semibold text-sm mb-3">Recently Used</h3>
                <div className="flex flex-col md:flex-row items-center gap-3">
                  <ul className="flex-1 w-full space-y-2 text-sm">
                    {recentlyUsed.map((r) => (
                      <li
                        key={r.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: r.color }}
                          />
                          <span className="text-gray-700">{r.name}</span>
                        </div>
                        <span className="text-gray-600">{r.value}%</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-16 h-16 md:w-20 md:h-20">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={recentlyUsed}
                          dataKey="value"
                          innerRadius="50%"
                          outerRadius="80%"
                        >
                          {recentlyUsed.map((entry, idx) => (
                            <Cell key={idx} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Half: Bar Chart */}
          <div className="bg-white rounded-2xl p-4 shadow border border-emerald-100 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-base md:text-lg">
                View History
              </h3>
              <span className="inline-flex items-center bg-emerald-500 text-white text-xs md:text-sm px-3 py-1 rounded">
                2025
              </span>
            </div>
            <div className="w-full h-56 md:h-72 lg:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 16, left: 8, right: 8, bottom: 12 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#16A34A"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100">
          <h3 className="font-semibold mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-2">Invoice</th>
                  <th className="py-2">Date</th>
                  <th className="py-2">Room</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((i) => (
                  <tr key={i} className="border-t">
                    <td className="py-3 text-gray-700">1114{i}</td>
                    <td className="py-3 text-gray-500">05-08-2025</td>
                    <td className="py-3 text-gray-700">Shared</td>
                    <td className="py-3 text-sm text-emerald-600">
                      Completed
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div className="lg:col-span-2 space-y-4">
        {/* Calendar */}
        <div className="bg-white rounded-2xl p-5 shadow border border-emerald-100">
          <div className="flex justify-between items-center mb-3">
            <button
              onClick={goPrev}
              className="p-1 rounded-full hover:bg-emerald-100 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <h4 className="font-medium text-sm md:text-base">{rangeLabel}</h4>
            <button
              onClick={goNext}
              className="p-1 rounded-full hover:bg-emerald-100 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-7 text-xs font-semibold text-gray-500 mb-2">
            {dayNames.map((d) => (
              <div key={d} className="text-center">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => {
              const isSelected = formatDate(day) === formatDate(selectedDate);
              return (
                <button
                  key={day.toISOString()}
                  onClick={() => setSelectedDate(day)}
                  className={`aspect-square flex items-center justify-center rounded-md text-sm transition 
                  ${
                    isSelected
                      ? "bg-emerald-500 text-white font-bold"
                      : "hover:bg-emerald-100 text-gray-700"
                  }`}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-5 shadow border border-emerald-100">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Notifications</h4>
            <a className="text-sm text-emerald-500 hover:underline">See all</a>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1" />
              <div>
                <div className="text-sm">Private room</div>
                <div className="text-xs text-gray-400">
                  Fri - August 8, 2025
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1" />
              <div>
                <div className="text-sm">Conference room</div>
                <div className="text-xs text-gray-400">
                  Fri - August 8, 2025
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Messages */}
        <div className="bg-white rounded-2xl p-5 shadow border border-emerald-100">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Messages</h4>
            <a className="text-sm text-emerald-500 hover:underline">See all</a>
          </div>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <div className="text-sm">Upcoming Event</div>
              <div className="text-xs text-gray-400">
                Fri - August 8, 2025
              </div>
            </li>
            <li>
              <div className="text-sm">Booking Reminder</div>
              <div className="text-xs text-gray-400">
                Fri - August 8, 2025
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
