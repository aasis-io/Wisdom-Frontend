import { Calendar, FileText, TrendingUp, Users } from "lucide-react";
import React from "react";
import About from "./../../assets/images/about.png";
import LogoIn from "./../../assets/images/logoIn.svg";
import LogoOut from "./../../assets/images/logoOut.svg";

// Mock backend data
const mockCardsData = [
  {
    title: "Research Excellence",
    text: "PhD-level research fellows with extensive publications in high-impact international journals.",
  },
  {
    title: "Publication Support",
    text: "End-to-end guidance in research writing and international journal publication.",
  },
  {
    title: "Global Education Consultancy",
    text: "Expert guidance for university admissions in Italy and Thailand from Nepal.",
  },
  {
    title: "Italy-Based Student Support",
    text: "Dedicated team members in Italy ensuring a smooth academic and living transition.",
  },
];

export default function WhyChooseUs() {
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
          <img src={About} alt="Research work" className="w-full rounded-3xl" />

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
          {mockCardsData.map((card, index) => {
            const config = cardsConfig[index]; // fixed icon & color
            return (
              <div
                key={index}
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
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
