import {
  Camera,
  Coffee,
  Sofa,
  Paperclip,
  BookOpenText,
  BusFront,
} from "lucide-react";

const price = [
  {
    duration: "Weekly",
    fee: "#5,000",
    description:
      "Perfect for short term projects or travels, giving full access to workspace essentials.",
  },
  {
    duration: "Monthly",
    fee: "#20,000",
    description:
      "Choose a plan that fits your workflow. No long-term commitments and enjoy all the perks.",
  },
  {
    duration: "Yearly",
    fee: "#240,500",
    description: "Best value for long-term commitment with maximum benefits.",
  },
];

const extra = [
  {
    icon: Sofa,
    main: "Lounge",
    desc: "Our lounge offers a comfortable space to relax, rewind, and connect with people.",
  },
  {
    icon: Paperclip,
    main: "Event",
    desc: "Host trainings, meetings, or events in a modern, fully equipped, and comfortable space.",
  },
  {
    icon: Camera,
    main: "Media",
    desc: "Our room is equipped for podcast, video production, and virtual meetings.",
  },
  {
    icon: BusFront,
    main: "Parking Lot",
    desc: "We offer convenient, secure, and spacious parking while you focus on work and your team.",
  },
  {
    icon: BookOpenText,
    main: "Library",
    desc: "Our library offers the perfect setting for deep focus and inspiration.",
  },
  {
    icon: Coffee,
    main: "Coffee",
    desc: "Enjoy fresh brews and light bites to fuel your day.",
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="flex justify-center items-center px-4 py-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-10">
        {/* Pricing Plans */}
        <div className="flex flex-col text-center mb-8">
          <h2 className="text-2xl font-bold">Choose your plan</h2>
          <p className="text-gray-600">
            Flexible options for every workflow. Pick the plan that fits your
            pace, team, and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {price.map((item, index) => (
            <div
              key={index}
              className="border-2 border-green-500 rounded-xl p-6 flex flex-col items-center text-center gap-3"
            >
              <h3 className="text-xl font-semibold">{item.duration}</h3>
              <p className="text-lg font-bold text-green-600">{item.fee}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Get started
              </button>
            </div>
          ))}
        </div>

        {/* Extras Section */}
        <div className="flex flex-col text-center border-2 border-green-500 px-5 py-10 rounded-2xl mt-12">
          <h2 className="text-2xl font-bold">
            Enhance your experience with our extras
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2">
            Discover extra perks thoughtfully designed to support how you work,
            meet, grow, and connect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {extra.map((meta, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 p-6 rounded-2xl flex flex-col  gap-3 shadow-sm hover:shadow-md transition"
              >
                <div className="flex text-left gap-2 mb-2 text-green-500">
                  <meta.icon className="w-6 h-6" />
                  <p className="text-lg font-bold text-gray-800">
                    {meta.main}
                  </p>
                </div>
                <p className="text-lg text-gray-600">{meta.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
