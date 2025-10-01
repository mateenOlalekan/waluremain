import Hero from "../components/Hero";
import Features from "../components/Feature";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Above from "../components/Above";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Above/>
    </div>
  );
}

export default HomePage;
