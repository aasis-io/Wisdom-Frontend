import { Lightbulb, Target } from "lucide-react";
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SEO from "../components/SEO";
import Services from "../components/layout/Services";
import WhyChooseUs from "../components/layout/WhyChooseUs";
import { getAboutPage } from "../services/api"; // <-- backend API

// =================== DATA OBJECTS ===================
const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
];

const missionVision = [
  {
    icon: <Target className="h-10 w-10 text-yellow-400" />,
    title: "Our Mission",
    text: "To generate impactful research and educational solutions that advance knowledge and empower academic communities.",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    delayClass: "",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-yellow-400" />,
    title: "Our Vision",
    text: "To advance evidence-based research, policy, and educational excellence in Nepal.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    delayClass: "lg:mt-20",
  },
];

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutPage();
        setAboutData(data);
      } catch (err) {
        console.error("Failed to fetch About data", err);
      }
    };
    fetchData();
  }, []);

  if (!aboutData) return null; // could show loading spinner

  return (
    <>
      <SEO
        title={
          aboutData.metaTitle ||
          "About WAARC | Wisdom Academy & Research Center Nepal"
        }
        description={
          aboutData.metaDescription ||
          "Learn about WAARC, a Nepal-based research and consultancy organization advancing policy insight, scholarship, and global education."
        }
        canonical="https://waarc.edu.np/about"
        keywords={
          aboutData.metaKeywords ||
          "WAARC, Wisdom Academy and Research Center, research center Nepal, academic consultancy Nepal, policy research Nepal"
        }
      />

      <section className="bg-white">
        <div className="w-full overflow-hidden text-gray-800">
          {/* Breadcrumb */}
          <Breadcrumbs breadcrumbs={breadcrumbsData} />

          {/* Hero div */}
          <div className="relative min-h-[50vh]">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Education and research"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/90 via-[#1e293b]/70 to-transparent" />
            <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-3xl font-extrabold leading-tight md:text-4xl xl:text-5xl">
                  {aboutData.title}
                </h1>
                <p className="mt-6 text-lg text-gray-200">
                  A Nepal-based research and consulting institution connecting
                  local insight with global knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Story div */}
          <div className="relative bg-white pb-24 pt-16 overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-6">
              <div className="grid gap-14 lg:grid-cols-2 items-center">
                {/* Text */}
                <div className="space-y-6">
                  <h2 className="text-4xl font-extrabold text-[#1e2a4a] leading-tight">
                    Who We Are
                  </h2>
                  <div
                    className="text-lg text-gray-700 leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{
                      __html: (() => {
                        const txt = document.createElement("textarea");
                        txt.innerHTML = aboutData.description || "";
                        return txt.value;
                      })(),
                    }}
                  />
                </div>

                {/* Static Images */}
                <div className="relative flex justify-center items-center">
                  <div className="absolute -top-8 -right-2 h-20 w-20 rounded-full bg-linear-to-tr from-[#17254e] to-[#455171] opacity-50 animate-pulse"></div>
                  <div className="relative w-full max-w-md lg:max-w-lg">
                    <img
                      src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
                      alt="Team collaboration"
                      className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                      alt="Research planning"
                      className="absolute -bottom-12 md:-left-12 left-1/5 w-64 rounded-xl shadow-xl transform transition-transform duration-500 hover:rotate-3 hover:scale-105 md:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="relative overflow-hidden bg-[#e8e9ed] py-16">
            <div className="relative mx-auto max-w-6xl px-6">
              <div className="mb-12 max-w-3xl">
                <span className="text-base font-semibold uppercase tracking-wider text-yellow-500">
                  Our Foundation
                </span>
                <h2 className="mt-3 text-3xl font-bold text-[#1e2a4a]">
                  Purpose That Guides Our Work
                </h2>
                <p className="mt-5 text-base text-gray-600">
                  Guided by our vision and mission, we conduct research and
                  provide advisory services that turn knowledge into measurable
                  impact.
                </p>
              </div>
              <div className="grid gap-16 lg:grid-cols-2">
                {missionVision.map((card, i) => (
                  <div
                    key={i}
                    className={`group relative h-90 overflow-hidden rounded-3xl shadow-2xl ${card.delayClass}`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent" />
                    <div className="relative z-10 flex h-full flex-col justify-end p-10 text-white">
                      {card.icon}
                      <h3 className="mt-4 text-2xl font-semibold">
                        {card.title}
                      </h3>
                      <p className="mt-4 max-w-md text-gray-200">{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="py-8 bg-white">
            <Services />
          </div>

          {/* Features */}
          <div className="relative bg-[#f5f6fb] py-20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
              <WhyChooseUs />
            </div>
          </div>

          {/* CTA */}
          <div className="py-32 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-2xl md:text-4xl font-extrabold text-[#1e2a4a] leading-tight">
                Let’s Build Knowledge That Matters
              </h2>
              <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
                Collaborate with WAARC to transform research into actionable
                insights, creating solutions that empower, educate, and inspire
                meaningful impact.
              </p>
              <p className="mt-12">
                <a
                  href="https://waarc.edu.np/contact"
                  className="rounded-xl bg-[#17254e] px-14 py-5 font-semibold text-white shadow-2xl hover:bg-[#17254eee] duration-300"
                >
                  Contact Us
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
