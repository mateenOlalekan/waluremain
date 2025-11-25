import { Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/DefaultLogo.svg";
import shadow from "../assets/imgsrc.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section - Enhanced */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex flex-col space-y-3">
              <img src={logo} alt="Wavora Logo" className="w-40 filter brightness-0 invert" />
              <img src={shadow} alt="Shadow Logo" className="w-32 opacity-50" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Transforming ideas into exceptional digital experiences. Let's build something amazing together.
            </p>
            <div className="flex items-center gap-2 group cursor-pointer">
              <MapPin className="text-red-400 w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                View on the map
              </span>
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Contact - Enhanced with better styling */}
          <div className="space-y-6">
            <h2 className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">0909998877</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Wavora@wmail.com</span>
              </div>
            </div>
            
            {/* Social Media - Enhanced */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-300 text-sm">FOLLOW US</h3>
              <div className="flex space-x-3">
                {[
                  { Icon: Instagram, color: "bg-pink-500/10 hover:bg-pink-500/20", iconColor: "text-pink-400" },
                  { Icon: BsTwitterX, color: "bg-gray-500/10 hover:bg-gray-500/20", iconColor: "text-gray-400" },
                  { Icon: Linkedin, color: "bg-blue-500/10 hover:bg-blue-500/20", iconColor: "text-blue-400" }
                ].map(({ Icon, color, iconColor }, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-xl ${color} transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1`}
                  >
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features - Enhanced */}
          <div className="space-y-6">
            <h2 className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Features
            </h2>
            <div className="space-y-3">
              {["Features", "Pricing", "Booking", "Demo"].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-all duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Company - Enhanced */}
          <div className="space-y-6">
            <h2 className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Company
            </h2>
            <div className="space-y-3">
              {["About Us", "Blog", "FAQs", "Careers", "Contact"].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center group cursor-pointer"
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-all duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Wavora. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}