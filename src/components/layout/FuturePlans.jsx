import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Work1 from "./../../assets/images/work1.jpg";
import Work2 from "./../../assets/images/work2.jpg";
import Work3 from "./../../assets/images/work3.jpg";
import PlanCard from "./PlanCard";

const plans = [
  {
    image: Work1,
    category: "Design",
    title: "Plan 1...",
    description:
      "Use Figma to get a job in UI Design, User Interface, User Experience design.",
  },
  {
    image: Work2,
    category: "Design",
    title: "Plan 2...",
    description:
      "Design Web Sites and Mobile Apps that Your Users Love and Return to Again.",
  },
  {
    image: Work3,
    category: "Design",
    title: "Plan 3...",
    description:
      "Learn how to apply User Experience (UX) principles to your website designs.",
  },
  {
    image: Work3,
    category: "Design",
    title: "Plan 4...",
    description:
      "Learn how to apply User Experience (UX) principles to your website designs.",
  },
];

export default function FuturePlans() {
  return (
    <section className="bg-white pt-8">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <span className="text-sm font-semibold text-[#f4b740]">
            Future Plans
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#1e2a4a] md:text-4xl">
            Advancing Research and Innovation
          </h2>

          <p className="mt-4 text-base text-gray-600">
            Focused on expanding interdisciplinary research, capacity-building
            initiatives, and policy-oriented consulting.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination2",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <PlanCard {...plan} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-pagination2 mt-6 flex justify-center gap-3" />

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#1e2a4a] transition hover:border-[#1e2a4a] hover:bg-gray-50">
            Explore All Plans
          </button>
        </div>
      </div>
    </section>
  );
}
