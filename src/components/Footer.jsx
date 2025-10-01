import { Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/DefaultLogo.svg";
import shadow from "../assets/imgsrc.svg";

export default function Footer() {
  return (
    <footer className="bg-[#BCF2D2] w-full flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl w-full">
        
        {/* Logo + Address */}
        <div className="flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <img src={logo} alt="Wavora Logo" className="w-36" />
            <img src={shadow} alt="Shadow Logo" className="w-28 opacity-70" />
          </div>
          <p className="text-gray-700 text-sm md:text-base">Wavora@wmail.com</p>
          <div className="flex items-center gap-2">
            <MapPin className="text-red-500 w-5 h-5" />
            <p className="text-gray-700 text-sm md:text-base">View on the map</p>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-5">
          <h2 className="font-bold text-xl md:text-2xl">Contact</h2>
          <div className="flex flex-col space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <p className="text-sm md:text-base">0909998877</p>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5" />
              <p className="text-sm md:text-base">Wavora_hub</p>
            </div>
            <div className="flex items-center gap-3">
              <BsTwitterX className="w-5 h-5" />
              <p className="text-sm md:text-base">Wavora_hub</p>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />
              <p className="text-sm md:text-base">Wavora_hub</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col space-y-5">
          <h2 className="font-bold text-xl md:text-2xl">Features</h2>
          <div className="flex flex-col space-y-2 text-gray-700">
            <p className="text-base hover:text-black cursor-pointer transition">Features</p>
            <p className="text-base hover:text-black cursor-pointer transition">Pricing</p>
            <p className="text-base hover:text-black cursor-pointer transition">Booking</p>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-5">
          <h2 className="font-bold text-xl md:text-2xl">Company</h2>
          <div className="flex flex-col space-y-2 text-gray-700">
            <p className="text-base hover:text-black cursor-pointer transition">About Us</p>
            <p className="text-base hover:text-black cursor-pointer transition">Blog</p>
            <p className="text-base hover:text-black cursor-pointer transition">FAQs</p>
            <p className="text-base hover:text-black cursor-pointer transition">Booking</p>
          </div>
        </div>
      </div>


    </footer>
  );
}
