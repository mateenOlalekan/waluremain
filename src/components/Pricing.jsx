import {
  Camera,
  Coffee,
  Sofa,
  Paperclip,
  BookOpenText,
  BusFront,
  Wifi,
  Users,
  Monitor,
  Printer,
  Utensils,
  Shield,
  Zap,
  Check,
  Star,
} from "lucide-react";

const pricingPlans = [
  {
    duration: "Weekly Pass",
    fee: "#5,000",
    originalFee: "#7,000",
    description: "Perfect for short-term projects or trial periods with full workspace access.",
    popular: false,
    savings: "28% off",
    features: [
      "High-speed internet access",
      "Complimentary coffee & tea",
      "Access to common areas",
      "Basic printing (50 pages)",
      "Meeting room discount",
      "Community events access"
    ],
    buttonText: "Start Weekly Trial",
    badge: "Great for starters"
  },
  {
    duration: "Monthly Pro",
    fee: "#20,000",
    originalFee: "#25,000",
    description: "Ideal for growing professionals and remote workers with enhanced benefits.",
    popular: true,
    savings: "20% off",
    features: [
      "All Weekly features included",
      "Unlimited printing",
      "2 hours meeting room credit",
      "Priority support",
      "Guest passes (2/month)",
      "Locker storage",
      "Event space discounts"
    ],
    buttonText: "Go Monthly Pro",
    badge: "MOST POPULAR"
  },
  {
    duration: "Yearly Elite",
    fee: "#240,500",
    originalFee: "#300,000",
    description: "Maximum value for committed professionals and teams with premium benefits.",
    popular: false,
    savings: "20% off",
    features: [
      "All Monthly features included",
      "Dedicated desk option",
      "10 hours meeting room monthly",
      "4 guest passes monthly",
      "24/7 access included",
      "Free event hosting credits",
      "Partner discounts",
      "Priority booking"
    ],
    buttonText: "Choose Yearly Elite",
    badge: "BEST VALUE"
  },
];

const amenities = [
  {
    icon: Sofa,
    main: "Premium Lounge",
    desc: "Our luxury lounge offers a comfortable space to relax, network, and connect with like-minded professionals.",
    features: ["Ergonomic seating", "Relaxation zones", "Networking events"]
  },
  {
    icon: Paperclip,
    main: "Event Spaces",
    desc: "Host trainings, meetings, or corporate events in our modern, fully equipped, and professionally managed spaces.",
    features: ["Full AV setup", "Flexible seating", "Catering services"]
  },
  {
    icon: Camera,
    main: "Media Studio",
    desc: "Professional-grade studio equipped for podcasts, video production, and virtual meetings with green screen.",
    features: ["4K recording", "Professional lighting", "Audio booth"]
  },
  {
    icon: BusFront,
    main: "Secure Parking",
    desc: "Convenient, secure, and spacious parking with 24/7 surveillance while you focus on work.",
    features: ["24/7 security", "EV charging", "Covered parking"]
  },
  {
    icon: BookOpenText,
    main: "Curated Library",
    desc: "Our extensive library offers the perfect setting for deep focus, research, and creative inspiration.",
    features: ["Silent zones", "Research materials", "Study carrels"]
  },
  {
    icon: Coffee,
    main: "Artisan Café",
    desc: "Enjoy fresh artisan brews, healthy bites, and gourmet snacks curated by local vendors throughout your day.",
    features: ["Local roasters", "Healthy menu", "All-day service"]
  },
];

const additionalFeatures = [
  { icon: Wifi, text: "Gigabit Fiber Internet" },
  { icon: Printer, text: "Color & B&W Printing" },
  { icon: Monitor, text: "Dual Monitor Setup" },
  { icon: Utensils, text: "Kitchen & Pantry" },
  { icon: Shield, text: "24/7 Security" },
  { icon: Zap, text: "Backup Power" },
  { icon: Users, text: "Community Slack" },
  { icon: Star, text: "Member Events" },
];

export default function Pricing() {
  return (
    <div id="pricing" className="flex justify-center items-center px-4 py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        

        {/* Additional Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every membership comes with our core amenities designed to support your productivity and comfort.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalFeatures.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <span className="font-semibold text-gray-900">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                Premium Amenities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Enhance Your Experience With Our <span className="text-green-600">Premium Extras</span>
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
              Discover extra perks thoughtfully designed to support how you work, meet, grow, and connect. 
              All available at special member rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group border-2 border-gray-100 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-green-200 bg-gradient-to-br from-white to-gray-50/50"
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <amenity.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{amenity.main}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed flex-1">{amenity.desc}</p>

                {/* Features */}
                <div className="space-y-2">
                  {amenity.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}