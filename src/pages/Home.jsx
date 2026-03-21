import { useEffect, useState } from "react";
import { Link } from "react-router";
import SEO from "../components/SEO";
import AboutSection from "../components/layout/AboutSection";
import EventRegistrationSection from "../components/layout/EventRegistrationSection";
import FuturePlans from "../components/layout/FuturePlans";
import HeroSection from "../components/layout/HeroSection";
import OurWorks from "../components/layout/OurWorks";
import Services from "../components/layout/Services";
import { getHomePage } from "../services/api";

export default function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePage();

        // Normalize image URL
        if (data?.image) {
          const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

          data.image = data.image.startsWith("http")
            ? data.image
            : `${baseUrl}${data.image.startsWith("/") ? "" : "/"}${data.image}`;
        }

        setHomeData(data);

        // Preload hero image for performance
        if (data?.image) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = data.image;
          link.fetchPriority = "high";
          document.head.appendChild(link);
        }
      } catch (error) {
        console.error("Failed to fetch homepage data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* ✅ ALWAYS RENDER SEO (CRITICAL FIX FOR GOOGLE) */}
      <SEO
        title={
          homeData?.metaTitle ||
          "Wisdom Academy & Research Center (WAARC) | Nepal"
        }
        description={
          homeData?.metaDescription ||
          "Wisdom Academy & Research Center (WAARC) is a Nepal-based research and consultancy organization providing academic and professional services."
        }
        canonical="https://waarc.edu.np/"
        keywords={
          homeData?.metaKeywords ||
          "WAARC, Nepal research center, education Nepal, consultancy Nepal"
        }
        ogImage={homeData?.image || "https://waarc.edu.np/og-image.webp"}
      />

      <section>
        <HeroSection homeData={homeData} />

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
