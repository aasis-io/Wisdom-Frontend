import React from "react";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Work1 from "./../../assets/images/work1.jpg";
// import Work2 from "./../../assets/images/work2.jpg";
// import Work3 from "./../../assets/images/work3.jpg";
// import PlanCard from "./PlanCard";

/*
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
];
*/

export default function FuturePlans() {
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
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

        {/* ========================= */}
        {/* Coming Soon Placeholder */}
        {/* ========================= */}
        <div className="flex min-h-70 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-center">
          <div className="animate-fade-in-up">
            <div className="relative mx-auto mb-6 h-20 w-20">
              {/* Outer orbit */}
              <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-[#1e2a4a]/30" />

              {/* Inner orbit */}
              <span className="absolute inset-3 animate-spin-reverse rounded-full border border-[#f4b740]/40" />

              {/* Orbiting nodes */}
              <span className="absolute left-1/2 -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-[#1e2a4a]" />
              <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-[#f4b740]" />
              <span className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#1e2a4a]" />

              {/* Core */}
              <span className="absolute inset-6 rounded-full bg-linear-to-br from-[#1e2a4a] to-[#f4b740] shadow-md" />
            </div>

            <h3 className="text-2xl font-bold text-[#1e2a4a]">Coming Soon</h3>

            <p className="mt-3 max-w-md text-gray-600">
              Our future research plans and strategic initiatives are currently
              under development. Stay tuned for updates.
            </p>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="mt-10 text-center">
          <button
            disabled
            className="cursor-not-allowed rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-400"
          >
            Explore All Plans
          </button>
        </div> */}

        {/* ========================= */}
        {/* Swiper (commented for now) */}
        {/* ========================= */}
        {/*
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

        <div className="custom-pagination2 mt-6 flex justify-center gap-3" />
        */}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
      `}</style>
    </section>
  );
}
