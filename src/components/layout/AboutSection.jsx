import React from "react";
import { FaCalendarAlt, FaChartLine, FaFileAlt, FaUsers } from "react-icons/fa";
import About from "./../../assets/images/about.png";
import LogoIn from "./../../assets/images/logoIn.svg";
import LogoOut from "./../../assets/images/logoOut.svg";

export default function AboutSection() {
  return (
    <section className="relative bg-[#f5f6fb] py-20 overflow-hidden">
      {/* Subtle background pattern (optional) */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ABOUT HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2a4a]">
            About WAARC
          </h2>
          <p className="mt-2 font-semibold text-[#1e2a4a]">
            Wisdom Academy & Research Center
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Wisdom Academy and Research Center empowers scholars and guides
            students to world-class opportunities, shaping the future of
            research and global education.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f4b740] px-8 py-3 font-semibold lg:font-medium text-white shadow-md transition hover:scale-105 hover:bg-[#e6aa33]">
            Read More →
          </button>
        </div>

        {/* WHY CHOOSE US */}
        <div className="mt-16">
          <h3 className="mb-12 text-center text-3xl font-extrabold text-[#1e2a4a]">
            Why Choose Us
          </h3>

          <div className="grid gap-16 lg:grid-cols-[40%_60%] items-center">
            {/* LEFT IMAGES */}
            <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
              {/* Main Image */}
              <img
                src={About}
                alt="Research work"
                className="w-full rounded-3xl"
              />

              {/* Centered Logo Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl">
                  {/* Rotating Outer Logo */}
                  <img
                    src={LogoOut}
                    alt="Rotating outer logo"
                    className="absolute inset-0 h-full w-full animate-spin-slow"
                  />

                  {/* Static Inner Logo */}
                  <img
                    src={LogoIn}
                    alt="Inner logo"
                    className="relative z-10 h-18 w-18"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
              <FeatureCard
                icon={<FaCalendarAlt className="h-16" />}
                title="Research Excellence"
                text="PhD-level research fellows with extensive publications in high-impact international journals."
                color="bg-[#1e2a4a]"
              />

              <FeatureCard
                icon={<FaFileAlt className="h-16" />}
                title="Publication Support"
                text="End-to-end guidance in research writing and international journal publication."
                color="bg-[#f4b740]"
              />

              <FeatureCard
                icon={<FaUsers className="h-16" />}
                title="Global Education Consultancy"
                text="Expert guidance for university admissions in Italy and Thailand from Nepal."
                color="bg-[#f4b740]"
              />

              <FeatureCard
                icon={<FaChartLine className="h-16" />}
                title="Italy-Based Student Support"
                text="Dedicated team members in Italy ensuring a smooth academic and living transition."
                color="bg-[#1e2a4a]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FEATURE CARD COMPONENT */
function FeatureCard({ icon, title, text, color }) {
  return (
    <div className="relative rounded-3xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div
        className={`absolute -top-6 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full text-white ${color}`}
      >
        {icon}
      </div>

      <h4 className="mt-6 text-center text-lg font-bold text-[#1e2a4a]">
        {title}
      </h4>
      <p className="mt-3 text-center text-base leading-relaxed text-gray-600">
        {text}
      </p>
    </div>
  );
}
