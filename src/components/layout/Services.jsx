import React from "react";
import { Link } from "react-router";

import ConsultingImg from "./../../assets/images/education.webp";
import ResearchImg from "./../../assets/images/research.webp";

const services = [
  {
    title: "Education and Study Abroad Advisory",
    description:
      "Guiding students towards the right education and global opportunities",
    image: ConsultingImg,
    path: "https://waarc.edu.np/services/study-advisory",
    width: 600, // image width in px
    height: 400, // image height in px
  },
  {
    title: "Research",
    description:
      "Research-Driven Insights for Policy, Education, and Development",
    image: ResearchImg,
    path: "https://waarc.edu.np/services/research",
    width: 600,
    height: 400,
  },
];

export default function Services() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-[#1e2a4a]">
            Our Services
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Comprehensive research and consultancy services tailored to informed
            decision-making.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {services.map((service, idx) => (
            <Link key={idx} to={service.path} className="block">
              <div
                className="group relative overflow-hidden rounded-3xl w-full"
                style={{ aspectRatio: `${service.width} / ${service.height}` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  width={service.width}
                  height={service.height}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="mt-8 flex justify-center gap-3">
          <span className="h-2 w-10 rounded-full bg-[#f2b84b]" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
