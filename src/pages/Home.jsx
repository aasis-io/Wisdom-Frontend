import { Link } from "react-router";
import SEO from "../components/SEO";
import AboutSection from "../components/layout/AboutSection";
import EventRegistrationSection from "../components/layout/EventRegistrationSection";
import FuturePlans from "../components/layout/FuturePlans";
import HeroSection from "../components/layout/HeroSection";
import OurWorks from "../components/layout/OurWorks";
import Services from "../components/layout/Services";
import ResearchImg from "./../assets/images/research.jpg";

export default function Home() {
  return (
    <>
      <SEO
        title="Wisdom Academy & Research Center (WAARC) | Research & Consultancy Nepal"
        description="Wisdom Academy & Research Center (WAARC) is a Nepal-based research and consultancy organization advancing policy insight, education, and global opportunities."
        canonical="https://waarc.edu.np/"
        keywords="WAARC, Wisdom Academy, research center Nepal, academic consultancy Nepal, policy research Nepal, global education Nepal"
        ogImage={ResearchImg}
      />

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
    </>
  );
}
