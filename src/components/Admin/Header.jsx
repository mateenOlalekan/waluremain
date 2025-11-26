// src/components/Header.jsx
import logo from "../../assets/logo.svg";
import { Bell, Search, Menu, X, ChevronDown, MessageCircle, Settings, LogOut, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const userMenuItems = [
    { icon: User, label: "My Profile", href: "#profile" },
    { icon: Settings, label: "Settings", href: "#settings" },
    { icon: MessageCircle, label: "Support", href: "#support" },
    { icon: LogOut, label: "Sign Out", href: "#logout", danger: true }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200/60 backdrop-blur-sm sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section - Page Title */}
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 hidden lg:block">
            Welcome to Wavora
          </h1>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
            <span>Dashboard</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-3 bg-gray-100/80 rounded-2xl px-4 py-2.5 shadow-sm w-full max-w-md mx-6 transition-all duration-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-green-500/20 focus-within:border-green-300">
          <Search className="text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search workspaces, bookings, or members..."
            className="outline-none bg-transparent text-sm w-full placeholder-gray-400"
          />
          <kbd className="hidden lg:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono text-gray-400 bg-white border border-gray-300 rounded-md">
            ⌘K
          </kbd>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200 group">
            <Bell className="text-gray-600 w-5 h-5 group-hover:text-gray-800 transition-colors" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-semibold shadow-lg">
              3
            </span>
          </button>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-3 p-1.5 rounded-2xl hover:bg-gray-100 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="text-right hidden lg:block">
                  <p className="text-sm font-semibold text-gray-900">John Okafar</p>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-shadow">
                    J
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* User Dropdown Menu */}
            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200/60 backdrop-blur-sm py-2 z-50 animate-fade-in">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="font-semibold text-gray-900">John Okafar</p>
                  <p className="text-sm text-gray-500">john@wavora.com</p>
                </div>
                
                {/* Menu Items */}
                <div className="py-2">
                  {userMenuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 group ${
                        item.danger 
                          ? 'text-red-600 hover:bg-red-50' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className={`w-4 h-4 ${item.danger ? 'text-red-500' : 'text-gray-400'} group-hover:scale-110 transition-transform`} />
                      {item.label}
                    </a>
                  ))}
                </div>
                
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="text-gray-600 w-5 h-5" />
            ) : (
              <Menu className="text-gray-600 w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search + Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 bg-white border-t border-gray-200">
          {/* Search for mobile */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3 shadow-sm">
            <Search className="text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search workspaces, bookings..."
              className="outline-none bg-transparent text-sm w-full"
            />
          </div>

          {/* Quick Actions for Mobile */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              <Bell className="w-4 h-4" />
              Notifications
            </button>
            <button className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>
      )}

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}