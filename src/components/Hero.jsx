import heroImg from "../../src/assets/hero.jpg";
import people from "../../src/assets/Avatars.jpg";
import Frame from "../../src/assets/group.jpg";

export default function Hero() {
  return (
    <section className="w-full py-12 lg:py-20 mt-10 bg-white">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-10">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Top Content */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              Where creatives,{" "}
              <span className="text-[#FBB03B]">
                startups and entrepreneurs thrive.
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md">
              Flexible workspace and a vibrant community designed to help you
              connect, create and thrive.
            </p>
            <button className="w-fit py-2.5 px-6 bg-black text-white text-sm sm:text-base rounded-xl hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>

          {/* Bottom Content */}
          <div className="mt-8">
            <img
              src={people}
              alt="Community members"
              className="w-24 sm:w-28 md:w-36 lg:w-40"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroImg}
            alt="Hero workspace"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#ECFDF3] mt-16 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            { value: "5+", label: "Experience" },
            { value: "50+", label: "Events" },
            { value: "50k+", label: "Customers" },
            { value: "15+", label: "Rooms" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-600 font-bold">
                {item.value}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frame + Overlay Section */}
      <div className="py-16 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Frame}
              alt="Frame workspace"
              className="w-3/4 max-w-md md:max-w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-8 text-left">
            <div>
              <h2 className="font-bold text-2xl sm:text-3xl mb-3">
                Establishing an environment for teamwork and creativity
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                A space built for freelancers, startups, or growing teams. Our
                space offers the perfect blend of inspiration, community, and
                flexibility.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl sm:text-3xl mb-3">Our Vision</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To become the leading co-working hub that redefines how people work, 
                connect, and grow—creating a vibrant, inclusive, and sustainable environment.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl sm:text-3xl mb-3">Our Mission</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                To support the growth of freelancers, startups, and remote professionals 
                through flexible workspaces, learning opportunities, and a culture of 
                collaboration.
              </p>
            </div>

            <button className="bg-black text-white text-sm sm:text-base px-6 py-2.5 rounded-lg hover:bg-gray-800 transition">
              Join us now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
