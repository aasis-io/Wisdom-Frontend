import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import ConsultingImg from "./../../assets/images/consulting.jpg";
import ResearchImg from "./../../assets/images/research.jpg";

/* ---------------- SERVICES DATA ---------------- */

const services = [
  {
    title: "Research",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut",
    image: ResearchImg,
    path: "/services/research",
  },
  {
    title: "Education and Study Abroad Advisory",
    description:
      "Guiding students towards the right education and global opportunities",
    image: ConsultingImg,
    path: "/services/consulting",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-12 lg:py-8">
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
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm text-gray-200">
                  {service.description}
                </p>

                <Link
                  to={service.path}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#f2b84b] px-6 py-3 text-sm font-semibold text-[#1e2a4a] transition hover:bg-[#e6ac3f]"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="mt-8 flex justify-center gap-3">
          <span className="h-2 w-10 rounded-full bg-[#f2b84b]" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
          <span className="h-2 w-2 rounded-full bg-gray-300" />
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-block rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold text-[#1e2a4a] transition hover:bg-gray-100"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
