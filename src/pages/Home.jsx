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

        // Fix image URL
        if (data.image) {
          const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");
          data.image = data.image.startsWith("http")
            ? data.image
            : `${baseUrl}${data.image.startsWith("/") ? "" : "/"}${data.image}`;
        }

        setHomeData(data);
      } catch (error) {
        console.error("Failed to fetch homepage data", error);
      }
    };

    fetchData();
  }, []);

  if (!homeData) return null;

  return (
    <>
      <SEO
        title={homeData.metaTitle}
        description={homeData.metaDescription}
        canonical="https://waarc.edu.np/"
        keywords={homeData.metaKeywords}
        ogImage={homeData.image}
      />

      <section>
        <HeroSection homeData={homeData} />

        <div className="bg-white py-12 lg:py-8">
          <Services />
          <div className="mt-8 text-center">
            <Link
              to={"https://waarc.edu.np/services"}
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
