import { motion } from "framer-motion";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Work1 from "./../../assets/images/work1.webp";
import Work2 from "./../../assets/images/work2.webp";
import Work3 from "./../../assets/images/work3.webp";
import WorkCard from "./WorkCard";

const works = [
  {
    image: Work1,
    category: "",
    title: "Work 1...",
    description:
      "Coming soon.....",
  },
  {
    image: Work2,
    category: "",
    title: "Work 2...",
    description:
      "Coming soon.....",
  },
  {
    image: Work3,
    category: "",
    title: "Work 3...",
    description:
      "Coming soon.....",
  },
  {
    image: Work3,
    category: "",
    title: "Work 4...",
    description:
      "Coming soon.....",
  },
];

export default function OurWorks() {
  return (
    <section className="bg-white pt-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <span className="text-sm font-semibold text-[#f4b740]">
            Our Works
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-[#1e2a4a] md:text-4xl">
            Where Research Meets Global Education
          </h2>

          {/* <p className="mt-4 text-base text-gray-600">
            Delivering research, analysis, and consultancy that inform decisions
            and drive impact.
          </p> */}
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {works.map((work, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <WorkCard {...work} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-pagination mt-6 flex justify-center gap-3" />

        {/* CTA */}
        <div className="mt-10 text-center">
          <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#1e2a4a] transition hover:border-[#1e2a4a] hover:bg-gray-50">
            Explore All Works
          </button>
        </div>
      </div>
    </section>
  );
}
