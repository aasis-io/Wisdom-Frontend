import { Link } from "react-router";
import AboutSection from "../components/layout/AboutSection";
import EventRegistrationSection from "../components/layout/EventRegistrationSection";
import FuturePlans from "../components/layout/FuturePlans";
import HeroSection from "../components/layout/HeroSection";
import OurWorks from "../components/layout/OurWorks";
import Services from "../components/layout/Services";

// src/pages/Home.jsx
export default function Home() {
  return (
    <section>
      {/* <Reveal>
        <HeroSection />
      </Reveal>

      <Reveal delay={0.05}>
        <Services />
      </Reveal>

      <Reveal delay={0.1}>
        <AboutSection />
      </Reveal>

      <Reveal delay={0.15}>
        <OurWorks />
      </Reveal>

      <Reveal delay={0.2}>
        <EventRegistrationSection />
      </Reveal>

      <Reveal delay={0.25}>
        <FuturePlans />
      </Reveal>

      <Reveal delay={0.3}>
        <NewsletterCTA />
      </Reveal>

      <Reveal delay={0.3}>
        <RecentBlogs />
      </Reveal> */}

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
      {/* <ReviewsSection /> */}
      <FuturePlans />
      {/* <NewsletterCTA />
      <RecentBlogs /> */}
    </section>
  );
}
