import logo from "../../assets/logo.svg";
import { Bell, Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-600 shadow-md">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="h-10 w-auto" />

        {/* Search Bar (Hidden on small, expands on md+) */}
        <div className="hidden sm:flex items-center gap-2 bg-white rounded-lg px-3 py-1 shadow-sm w-full max-w-md mx-4">
          <Search className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for something..."
            className="outline-none bg-transparent text-sm w-full"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Desktop: User info */}
          <p className="text-white font-medium hidden md:block">John Okafar</p>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-green-600 font-bold shadow">
            J
          </div>
          <button className="relative p-2 rounded-full hover:bg-green-700 transition">
            <Bell className="text-white w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-green-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search + Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-3 space-y-3 bg-green-700">
          {/* Search for mobile */}
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
            <Search className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for something..."
              className="outline-none bg-transparent text-sm w-full"
            />
          </div>

          {/* User Info */}
          <div className="flex items-center gap-3 text-white">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-600 font-bold">
              J
            </div>
            <span className="font-medium">John Okafar</span>
          </div>
        </div>
      )}
    </header>
  );
}
