import { Link } from "react-router";
import AboutSection from "../components/layout/AboutSection";
import EventRegistrationSection from "../components/layout/EventRegistrationSection";
import FuturePlans from "../components/layout/FuturePlans";
import HeroSection from "../components/layout/HeroSection";
import OurWorks from "../components/layout/OurWorks";
import Services from "../components/layout/Services";
export default function Home() {
  return (
    <section>
      <HeroSection />
      <div className="bg-white py-12 lg:py-8">
        <Services />
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-block rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold text-[#1e2a4a] transition hover:bg-gray-100"
          >
            Explore All Services
          </Link>
        </div>
      </div>
      <AboutSection />
      <OurWorks />
      <EventRegistrationSection />
      <FuturePlans />
    </section>
  );
}
