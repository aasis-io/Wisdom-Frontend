import { Calendar, FileText, TrendingUp, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getAboutPage } from "../../services/api";
import LogoIn from "./../../assets/images/logoIn.svg";
import LogoOut from "./../../assets/images/logoOut.svg";

export default function WhyChooseUs() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutPage();

        // Fix image URL coming from backend
        if (data.image) {
          const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");
          data.image = data.image.startsWith("http")
            ? data.image
            : `${baseUrl}${data.image.startsWith("/") ? "" : "/"}${data.image}`;
        }

        setAboutData(data);
      } catch (err) {
        console.error("Failed to fetch About data", err);
      }
    };

    fetchData();
  }, []);

  if (!aboutData) return null;

  const cardsConfig = [
    { icon: <Calendar className="h-6 w-6" />, color: "bg-[#1e2a4a]" },
    { icon: <FileText className="h-6 w-6" />, color: "bg-[#f4b740]" },
    { icon: <Users className="h-6 w-6" />, color: "bg-[#f4b740]" },
    { icon: <TrendingUp className="h-6 w-6" />, color: "bg-[#1e2a4a]" },
  ];

  return (
    <>
      <h3 className="mb-12 text-center text-3xl font-extrabold text-[#1e2a4a]">
        Why Choose Us
      </h3>

      <div className="grid gap-16 lg:grid-cols-[40%_60%] items-center">
        {/* LEFT IMAGE WITH LOGOS */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <img
            src={aboutData.image}
            alt="Research work"
            className="w-full rounded-3xl"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl">
              <img
                src={LogoOut}
                alt="Rotating outer logo"
                className="absolute inset-0 h-full w-full animate-spin-slow"
              />
              <img
                src={LogoIn}
                alt="Inner logo"
                className="relative z-10 h-18 w-18"
              />
            </div>
          </div>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {aboutData.whyUs.map((card, index) => {
            const config = cardsConfig[index % cardsConfig.length];
            return (
              <div
                key={card.id}
                className="relative rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full text-white ${config.color}`}
                >
                  {config.icon}
                </div>

                <h4 className="mt-6 text-center text-lg font-bold text-[#1e2a4a]">
                  {card.title}
                </h4>

                <p className="mt-3 text-center text-base leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
