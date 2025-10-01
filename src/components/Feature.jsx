import image1 from "../../src/assets/image1.jpg";
import image2 from "../../src/assets/image2.jpg";
import image3 from "../../src/assets/image3.jpg";

const pricing = [
  {
    imgSrc: image1,
    title: "Private Rooms",
    desc: "Secured, quiet space for work, meet and create — perfect for privacy and productivity.",
  },
  {
    imgSrc: image2,
    title: "Shared Rooms",
    desc: "The rooms are designed for freelancers, remote teams, and creatives alike — boosting productivity.",
  },
  {
    imgSrc: image3,
    title: "Conference Rooms",
    desc: "Sophisticated spaces for impactful meetings. Tech-ready, sleek, and bookable on demand.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#ECFDF3] w-full py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
              Discover flexible workspaces thoughtfully designed for focus,
              productivity and collaboration
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl">
              Experience a workspace that adapts to your needs — from private
              offices to open-plan desks — designed with productivity in mind.
            </p>
            <button className="px-6 py-2.5 bg-black text-white rounded-lg text-sm sm:text-base w-fit hover:bg-gray-800 transition">
              Read more
            </button>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-center">What we offer</h3>
            <div className="flex flex-col gap-3">
              {[
                "High speed internet and reliable power supply",
                "Secure Access",
                "Prime Location",
                "Event and Learning opportunities",
                "Thriving community",
                "Eco-friendly Initiatives",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-3 h-3 mt-1 rounded-full bg-black"></div>
                  <p className="text-sm sm:text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col text-center gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Explore our Versatile Spaces
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Our rooms are designed for flexibility and flow. Find the perfect
            space for every task, team, or idea. Pick the plan that fits your
            pace, team, and goals.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {pricing.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-56 sm:h-60 md:h-64 object-cover"
                />
                <div className="flex flex-col p-5 gap-3">
                  <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base w-full">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
