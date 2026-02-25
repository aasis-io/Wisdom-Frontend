import React from "react";
import WhyChooseUs from "./WhyChooseUs";

export default function AboutSection() {
  return (
    <section className="relative bg-[#f5f6fb] py-20 overflow-hidden">
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
          <WhyChooseUs />
        </div>
      </div>
    </section>
  );
}
