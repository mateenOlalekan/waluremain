import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  Bell,
  Building2,
  Wallet,
  LogOut,
} from "lucide-react";
import adminImg from "../../assets/image2.jpg";
import { Tooltip } from "react-tooltip"; // 👈 import react-tooltip
import "react-tooltip/dist/react-tooltip.css"; // 👈 import styles

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "My booking", icon: Users },
    { name: "Explore spaces", icon: Building2 },
    { name: "My Wallet", icon: Wallet },
    { name: "Notifications", icon: Bell },
    { name: "Settings", icon: Settings },
    { name: "Log Out", icon: LogOut },
  ];

  return (
    <div className="w-14 md:w-56 h-screen flex flex-col bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
      {/* Admin Info */}
      <div className="items-center hidden flex-col justify-center border-b border-gray-200 dark:border-gray-700 py-6 px-4  md:flex">
        <img
          src={adminImg}
          alt="Admin"
          className="w-24 h-24 rounded-lg object-cover shadow-md border-2 border-green-500"
        />
        <h2 className="mt-3 font-semibold text-base md:text-lg text-gray-800 dark:text-gray-200">
          John Okafar
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          johnokafor@mail.com
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto mt-4 space-y-1 p-2">
        {menuItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            data-tooltip-id={`tooltip-${name}`} // 👈 bind tooltip
            data-tooltip-content={name} // 👈 show name on hover
            className={`w-full flex items-center gap-4 p-2 rounded-lg transition font-medium
              ${
                active === name
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-green-100 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
          >
            <Icon className="w-5 h-5" />
            <span className="hidden md:inline">{name}</span>
            <Tooltip id={`tooltip-${name}`} place="right" className="z-50" />
          </button>
        ))}
      </nav>
    </div>
  );
}
