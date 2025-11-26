// src/pages/dashboard/DashboardMain.jsx
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  Building,
  Zap,
  Star,
  Eye
} from 'lucide-react';

const DashboardMain = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    activeBookings: 0,
    hoursThisWeek: 0,
    totalSpent: 0
  });

  const [recentBookings, setRecentBookings] = useState([]);
  const [workspaceUsage, setWorkspaceUsage] = useState([]);

  useEffect(() => {
    // Simulate data loading
    setStats({
      totalBookings: 47,
      activeBookings: 3,
      hoursThisWeek: 28,
      totalSpent: 1240
    });

    setRecentBookings([
      {
        id: 1,
        workspace: "Creative Studio A",
        date: "2024-01-15",
        time: "09:00 - 17:00",
        duration: "8 hours",
        status: "active",
        type: "Dedicated Desk",
        price: 85
      },
      {
        id: 2,
        workspace: "Meeting Room B",
        date: "2024-01-14",
        time: "14:00 - 16:00",
        duration: "2 hours",
        status: "completed",
        type: "Meeting Room",
        price: 45
      },
      {
        id: 3,
        workspace: "Focus Pod 3",
        date: "2024-01-13",
        time: "10:00 - 13:00",
        duration: "3 hours",
        status: "completed",
        type: "Focus Pod",
        price: 35
      }
    ]);

    setWorkspaceUsage([
      { name: 'Mon', hours: 6, bookings: 2 },
      { name: 'Tue', hours: 8, bookings: 3 },
      { name: 'Wed', hours: 7, bookings: 2 },
      { name: 'Thu', hours: 9, bookings: 4 },
      { name: 'Fri', hours: 5, bookings: 2 },
      { name: 'Sat', hours: 3, bookings: 1 },
      { name: 'Sun', hours: 2, bookings: 1 }
    ]);
  }, []);

  const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${color.replace('text-', 'text-')}`} />
        </div>
        <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm mb-2">{title}</p>
      <div className={`flex items-center gap-1 text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change >= 0 ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        <span>{Math.abs(change)}% from last week</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Alex! 👋</h1>
            <p className="text-blue-100 text-lg">Here's what's happening with your workspace today</p>
          </div>
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
            <Calendar className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Bookings"
          value={stats.totalBookings}
          change={12}
          icon={Calendar}
          color="text-blue-500"
        />
        <StatCard
          title="Active Bookings"
          value={stats.activeBookings}
          change={8}
          icon={Zap}
          color="text-green-500"
        />
        <StatCard
          title="Hours This Week"
          value={stats.hoursThisWeek}
          change={-3}
          icon={Clock}
          color="text-amber-500"
        />
        <StatCard
          title="Total Spent"
          value={`$${stats.totalSpent}`}
          change={15}
          icon={DollarSign}
          color="text-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1">
              View All <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    booking.status === 'active' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{booking.workspace}</h3>
                    <p className="text-sm text-gray-600">{booking.date} • {booking.time}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {booking.status}
                      </span>
                      <span className="text-xs text-gray-500">{booking.type}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">${booking.price}</p>
                  <p className="text-sm text-gray-600">{booking.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workspace Usage */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Weekly Usage</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Bookings</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {workspaceUsage.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600 w-12">{day.name}</span>
                <div className="flex-1 mx-4">
                  <div className="flex items-center gap-1">
                    <div 
                      className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${(day.hours / 10) * 100}%` }}
                    ></div>
                    <div 
                      className="h-2 bg-green-500 rounded-full transition-all duration-500"
                      style={{ width: `${(day.bookings / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right text-sm text-gray-600 w-20">
                  {day.hours}h • {day.bookings} book
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Your favorite workspace</p>
                <p className="font-semibold text-gray-900">Creative Studio A</p>
              </div>
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Book Workspace", icon: Calendar, color: "blue" },
            { label: "Invite Friend", icon: Users, color: "green" },
            { label: "View Analytics", icon: TrendingUp, color: "purple" },
            { label: "Upgrade Plan", icon: Zap, color: "amber" }
          ].map((action, index) => (
            <button
              key={index}
              className={`p-4 rounded-xl border-2 border-${action.color}-200 bg-${action.color}-50 hover:bg-${action.color}-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group`}
            >
              <div className={`p-3 rounded-lg bg-${action.color}-100 inline-block mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className={`w-6 h-6 text-${action.color}-600`} />
              </div>
              <p className="font-semibold text-gray-900 text-left">{action.label}</p>
              <p className="text-sm text-gray-600 text-left mt-1">Get started quickly</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;