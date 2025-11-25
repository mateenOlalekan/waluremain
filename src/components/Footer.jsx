import {
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/logo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ECFDF3] text-gray-800 border-t border-green-200 pt-16 pb-10 mt-20 relative">
      {/* Decorative light shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-green-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-green-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-green-500 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Section */}
          <div className="space-y-6 col-span-2 md:col-span-1">
            <img src={logo} alt="Logo" className="w-40" />

            <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
              Wavora helps teams create seamless, smart, and scalable digital
              experiences. Build, innovate, and grow using modern tools that
              work beautifully together.
            </p>

            <div className="flex items-center gap-2 group cursor-pointer">
              <MapPin className="text-green-700 w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="text-gray-700 text-sm group-hover:text-green-700 transition-colors">
                View on Map
              </span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-green-700" />
            </div>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h2 className="font-bold text-lg text-green-700">Products</h2>
            <div className="space-y-3">
              {[
                "Platform Overview",
                "Features & Tools",
                "Pricing",
              ].map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer text-gray-700 hover:text-green-700 transition flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-600 transition"></span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h2 className="font-bold text-lg text-green-700">Company</h2>
            <div className="space-y-3">
              {[
                "About Us",
                "Mission & Vision",
                "Careers",
                "Blog & Insights",
              ].map((item, index) => (
                <p
                  key={index}
                  className="cursor-pointer text-gray-700 hover:text-green-700 transition flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full group-hover:bg-green-600 transition"></span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Get in Touch */}
          <div className="space-y-6">
            <h2 className="font-bold text-lg text-green-700">Get in Touch</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition">
                  <Phone className="w-4 h-4 text-green-700" />
                </div>
                <span className="text-gray-700 group-hover:text-green-700 transition">
                  090 999 8877
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition">
                  <Mail className="w-4 h-4 text-green-700" />
                </div>
                <span className="text-gray-700 group-hover:text-green-700 transition">
                  support@wavora.com
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-700 text-sm">FOLLOW US</h3>

              <div className="flex space-x-3">
                {[
                  {
                    Icon: Instagram,
                    bg: "bg-pink-500/10 hover:bg-pink-500/20",
                    color: "text-pink-600",
                  },
                  {
                    Icon: BsTwitterX,
                    bg: "bg-gray-500/10 hover:bg-gray-500/20",
                    color: "text-black",
                  },
                  {
                    Icon: Linkedin,
                    bg: "bg-blue-500/10 hover:bg-blue-500/20",
                    color: "text-blue-600",
                  },
                ].map(({ Icon, bg, color }, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-xl ${bg} transition transform hover:scale-105 cursor-pointer`}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-300 pt-8 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-600">
              © {currentYear} Wavora — Empowering Digital Innovation.
            </p>

            <div className="flex space-x-6 text-gray-600">
              <span className="cursor-pointer hover:text-green-700 transition">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:text-green-700 transition">
                Terms of Service
              </span>
              <span className="cursor-pointer hover:text-green-700 transition">
                Cookies
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer