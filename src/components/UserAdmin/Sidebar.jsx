import { useState } from "react";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  Clipboard,
  User,
  Star,
  Search,
} from "lucide-react";
import adminImg from "../../assets/image2.jpg";

import { Tooltip } from "react-tooltip"; 
import "react-tooltip/dist/react-tooltip.css"; 

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [text, setText] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Bookings", icon: Clipboard },
    { name: "User", icon: User },
    { name: "Review", icon: Star },
  ];

  const menuItems2 = [
    { name: "Settings", icon: Settings },
    { name: "Log Out", icon: LogOut },
  ];

  return (
    <div className="w-14 md:w-56 h-screen flex flex-col bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">


      {/* Menu 1 */}
      <nav className="flex-1 overflow-y-auto mt-4 space-y-1 p-2">
        {menuItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            data-tooltip-id={`tooltip-${name}`}
            data-tooltip-content={name}
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
      <nav className="mt-10 space-y-1 p-2">
        {/* 🔍 Search Box inside Menu 2 */}


        {menuItems2.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            data-tooltip-id={`tooltip-${name}`}
            data-tooltip-content={name}
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
                <div className="flex items-center gap-2 border rounded-lg px-2 py-1 mb-2">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search..."
            className="flex-1 outline-none bg-transparent text-sm text-gray-700 dark:text-gray-300"
          />
        </div>
      </nav>
      </nav>


    </div>
  );
}
