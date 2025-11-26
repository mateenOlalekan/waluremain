import { useState } from "react";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  Clipboard,
  User,
  Star,
  Search,
  ChevronRight,
  Building,
  Calendar,
  Bell,
  HelpCircle,
  CreditCard,
  Users,
  BarChart3,
  Zap,
  Crown,
  Moon,
  Sun
} from "lucide-react";
import adminImg from "../../assets/image2.jpg";

import { Tooltip } from "react-tooltip"; 
import "react-tooltip/dist/react-tooltip.css"; 

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");
  const [searchText, setSearchText] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const mainMenuItems = [
    { name: "Dashboard", icon: LayoutDashboard, badge: null },
    { name: "Bookings", icon: Clipboard, badge: "3" },
    { name: "Workspaces", icon: Building, badge: null },
    { name: "Members", icon: Users, badge: "12" },
    { name: "Analytics", icon: BarChart3, badge: "Pro" },
    { name: "Billing", icon: CreditCard, badge: null },
  ];

  const userMenuItems = [
    { name: "Profile", icon: User },
  ];

  const systemMenuItems = [
    { name: "Settings", icon: Settings },
    { name: "Log Out", icon: LogOut },
  ];

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-60'} h-screen flex flex-col bg-gradient-to-b from-white to-gray-50/80 dark:from-gray-900 dark:to-gray-800 shadow-xl border-r border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 ease-in-out backdrop-blur-sm relative group`}>
      
      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight className={`w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
      </button>

      {/* User Profile Section */}
      <div className={`p-6 border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-500 ${isCollapsed ? 'px-4' : ''}`}>
        <div className={`flex items-center gap-3 transition-all duration-500 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="relative">
            <img 
              src={adminImg} 
              alt="Profile" 
              className="w-12 h-12 rounded-2xl object-cover border-2 border-white dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white dark:border-gray-600 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {!isCollapsed && (
            <div className="flex-1 min-w-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg truncate">Alex Morgan</h3>
                <Crown className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Premium Member</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">75%</span>
              </div>
            </div>
          )}
        </div>
      </div>




      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto space-y-3 py-3 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        
        {/* Main Menu */}
        <div className="space-y-1 px-4">
          <h3 className={`text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 transition-all duration-500 ${
            isCollapsed ? 'text-center opacity-0' : 'opacity-100'
          }`}>Workspace</h3>
          {mainMenuItems.map(({ name, icon: Icon, badge }) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              data-tooltip-id={`tooltip-${name}`}
              data-tooltip-content={name}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                active === name
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800/50 hover:text-green-600 dark:hover:text-green-400 hover:shadow-md'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                active === name ? 'text-white' : ''
              }`} />
              
              {!isCollapsed && (
                <>
                  <span className="font-medium flex-1 text-left">{name}</span>
                  {badge && (
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold transition-all duration-300 ${
                      active === name 
                        ? 'bg-white/20 text-white' 
                        : badge === 'Pro' 
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                          : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {badge}
                    </span>
                  )}
                </>
              )}
              
              {/* Active indicator */}
              {active === name && (
                <div className="absolute right-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
              
              <Tooltip id={`tooltip-${name}`} place="right" className="z-50" />
            </button>
          ))}
        </div>

        {/* User Menu */}
        <div className="space-y-1 px-4">
          <h3 className={`text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 transition-all duration-500 ${
            isCollapsed ? 'text-center opacity-0' : 'opacity-100'
          }`}>Account</h3>
          {userMenuItems.map(({ name, icon: Icon, badge }) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              data-tooltip-id={`tooltip-${name}`}
              data-tooltip-content={name}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
                active === name
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                active === name ? 'text-white' : ''
              }`} />
              
              {!isCollapsed && (
                <>
                  <span className="font-medium flex-1 text-left">{name}</span>
                  {badge && (
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      active === name 
                        ? 'bg-white/20 text-white' 
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                    }`}>
                      {badge}
                    </span>
                  )}
                </>
              )}
              <Tooltip id={`tooltip-${name}`} place="right" className="z-50" />
            </button>
          ))}
        </div>

        {/* System Menu */}
        <div className="space-y-1 px-4">
          <h3 className={`text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 transition-all duration-500 ${
            isCollapsed ? 'text-center opacity-0' : 'opacity-100'
          }`}>System</h3>
          {systemMenuItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              data-tooltip-id={`tooltip-${name}`}
              data-tooltip-content={name}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
                active === name
                  ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg shadow-gray-500/25'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-700 dark:hover:text-gray-200 hover:shadow-md'
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                active === name ? 'text-white' : ''
              }`} />
              {!isCollapsed && <span className="font-medium flex-1 text-left">{name}</span>}
              <Tooltip id={`tooltip-${name}`} place="right" className="z-50" />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50 space-y-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group ${
            isDarkMode 
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25' 
              : 'text-gray-600 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800/50 hover:text-amber-600 dark:hover:text-amber-400'
          }`}
          data-tooltip-id="tooltip-theme"
          data-tooltip-content={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <Moon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          )}
          {!isCollapsed && (
            <span className="font-medium flex-1 text-left">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          )}
          <Tooltip id="tooltip-theme" place="right" className="z-50" />
        </button>


      </div>
    </div>
  );
}