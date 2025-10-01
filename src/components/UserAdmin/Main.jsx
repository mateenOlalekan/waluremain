import React, { useMemo, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ReTooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  Search as SearchIcon,
  Building2,
  ClipboardCheck,
  Trash2,
  Share2,
  Copy,
  Pencil,
} from "lucide-react";
import { BiLogOut, BiLogIn } from "react-icons/bi";

/* --- Data & config --- */
const stats = [
  {
    id: 1,
    title: "Total booking",
    value: "3556",
    note: "+12% this week",
    color: "bg-amber-200",
    icon: ClipboardCheck,
  },
  {
    id: 2,
    title: "Scheduled Rooms",
    value: "2555",
    note: "+25% this week",
    color: "bg-gray-200",
    icon: Building2,
  },
  {
    id: 3,
    title: "Check-out",
    value: "3556",
    note: "+12% this week",
    color: "bg-yellow-200",
    icon: BiLogOut,
  },
  {
    id: 4,
    title: "Check-out",
    value: "3556",
    note: "+12% this week",
    color: "bg-emerald-200",
    icon: BiLogIn,
  },
];

const donutData = [{ name: "usage", value: 80, fill: "#10B981" }];

const revenueData = [
  { month: "JAN", value: 10 },
  { month: "FEB", value: 25 },
  { month: "MAR", value: 20 },
  { month: "APR", value: 40 },
  { month: "MAY", value: 55 },
  { month: "JUN", value: 45 },
  { month: "JUL", value: 75 },
  { month: "AUG", value: 95 },
];

const transactionsSeed = [
  { invoice: "111445", date: "05-08-2025", room: "Shared", status: "Completed" },
  { invoice: "111446", date: "05-08-2025", room: "Private", status: "Pending" },
  { invoice: "111447", date: "05-08-2025", room: "Shared", status: "Failed" },
  { invoice: "111448", date: "05-08-2025", room: "Shared", status: "Completed" },
];

export default function Dashboard() {
  const [query, setQuery] = useState("");
  const [transactions] = useState(transactionsSeed);
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 7, 10)); // Aug 10 2025

  const filteredTx = useMemo(
    () =>
      transactions.filter(
        (t) =>
          t.invoice.includes(query) ||
          t.date.includes(query) ||
          t.room.toLowerCase().includes(query.toLowerCase()) ||
          t.status.toLowerCase().includes(query.toLowerCase())
      ),
    [transactions, query]
  );

  // Calendar generator for Aug 2025
  const year = 2025,
    month = 7; // August (0-based)
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) calendarCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarCells.push(new Date(year, month, d));

  return (
    <div className="min-h-screen bg-gray-50 p-2">
      <div className="mx-auto grid grid-cols-1 gap-2 max-w-[1250px]">
        <main className="space-y-2">
          {/* Top stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.id} className={`rounded-2xl p-4 ${s.color} shadow`}>
                  <div className="flex justify-between items-start">
                    <div className="w-full">
                      <h4 className="text-xs text-gray-600">{s.title}</h4>
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-semibold mt-2">{s.value}</div>
                        {Icon ? <Icon className="w-6 h-6 text-emerald-700 ml-2" /> : null}
                      </div>
                      <div className="text-xs flex items-center gap-1 text-gray-500 mt-1">
                        <IoMdArrowDropup />
                        <span>{s.note}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Membership + Revenue */}
          <div className="bg-white rounded-2xl p-4 shadow border border-emerald-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
              {/* Membership donut */}
              <div className="col-span-1 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex flex-col">
                  <h5 className="text-sm font-medium mb-4">Membership Growth</h5>
                  <div className="flex flex-col items-center gap-6">
                    <div style={{ width: 120, height: 120 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                          cx="50%"
                          cy="50%"
                          innerRadius="70%"
                          outerRadius="100%"
                          barSize={10}
                          data={donutData}
                          startAngle={90}
                          endAngle={-270}
                        >
                          <RadialBar dataKey="value" cornerRadius={100} />
                        </RadialBarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-semibold">80%</div>
                      <div className="text-sm text-gray-500">New Members</div>
                      <div className="text-sm text-gray-400 mt-1">Returning members</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue chart */}
              <div className="col-span-2 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-sm font-medium">Revenue Metrics</h5>
                  <div>
                    <button className="bg-emerald-600 text-white px-3 py-1 rounded text-xs">Weekly</button>
                  </div>
                </div>
                <div style={{ width: "100%", height: 220 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ReTooltip />
                      <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* bottom row: transactions + calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold">Recent Transactions</h4>
                    <div className="text-xs text-gray-500">Overview of this month</div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button className="bg-emerald-500 text-white px-3 py-1 rounded text-sm">Add</button>
                    <button className="bg-gray-100 px-3 py-1 rounded text-sm">Send</button>
                  </div>
                  <input
                    className="w-full border rounded px-3 py-2 outline-none text-sm"
                    placeholder="Search transactions..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <div className="flex items-center justify-between gap-2">
                    <Pencil />
                    <Share2 />
                    <Copy />
                    <Trash2 />
                  </div>
                </div>

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
                      {filteredTx.length ? (
                        filteredTx.map((t, idx) => (
                          <tr key={idx} className="border-t">
                            <td className="py-3">{t.invoice}</td>
                            <td className="py-3 text-gray-500">{t.date}</td>
                            <td className="py-3">{t.room}</td>
                            <td
                              className={`py-3 ${
                                t.status === "Failed"
                                  ? "text-red-500"
                                  : t.status === "Pending"
                                  ? "text-yellow-600"
                                  : "text-emerald-600"
                              }`}
                            >
                              {t.status}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="py-6 text-center text-gray-400">
                            No transactions found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* calendar */}
            <aside className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Aug 2025</h4>
                  <div className="text-sm text-gray-500">‹ ›</div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-xs text-center text-gray-500 mb-2">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                    <div key={d} className="py-1">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1 text-sm">
                  {calendarCells.map((dt, idx) =>
                    dt ? (
                      <button
                        key={idx}
                        onClick={() => setSelectedDate(dt)}
                        className={`py-2 rounded ${
                          dt.toDateString() === selectedDate.toDateString()
                            ? "bg-emerald-500 text-white"
                            : "hover:bg-emerald-50"
                        }`}
                      >
                        {dt.getDate()}
                      </button>
                    ) : (
                      <div key={idx} className="py-2"></div>
                    )
                  )}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
