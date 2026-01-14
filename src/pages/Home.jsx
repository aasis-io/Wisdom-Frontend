import AboutSection from "../components/layout/AboutSection";
import EventRegistrationSection from "../components/layout/EventRegistrationSection";
import FuturePlans from "../components/layout/FuturePlans";
import HeroSection from "../components/layout/HeroSection";
import { NewsletterCTA } from "../components/layout/NewsletterCTA";
import OurWorks from "../components/layout/OurWorks";
import { RecentBlogs } from "../components/layout/RecentBlogs";
import ReviewsSection from "../components/layout/ReviewsSection";
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
      <Services />
      <AboutSection />
      <OurWorks />
      <EventRegistrationSection />
      <ReviewsSection />
      <FuturePlans />
      <NewsletterCTA />
      <RecentBlogs />
    </section>
  );
}
