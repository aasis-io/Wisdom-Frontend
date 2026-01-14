import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import Bg from "./../../assets/images/bg.png";
import Hero from "./../../assets/images/hero.png";
import Wave from "./../../assets/images/wave.svg";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-l-indigo-950/10">
      {/* Background with subtle dark overlay */}
      <div className="absolute inset-0 opacity-20">
        <img src={Bg} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:pt-16 lg:pb-24">
      <div className="grid gap-12 lg:grid-cols-[40%_60%] items-center">
          {/* Left Content */}
          <div className="lg:text-left">
            <h1 className="text-4xl font-extrabold leading-snug text-[#1e2a4a] sm:text-4xl md:text-5xl xl:text-5xl">
              Where Research
              <br />
              Meets Real-World
              <br />
              Impact
            </h1>

            <p className="mt-6 max-w-lg mx-auto text-base text-gray-700 sm:mx-0 sm:text-md md:text-lg">
              A knowledge-driven academy delivering research, advisory, and
              development consultancy services.
            </p>

            <div className="mt-8 flex">
              <button className="rounded-xl bg-[#1e2a4a] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#16203a]">
                Get in touch
              </button>
            </div>

            {/* Icons Row */}
            <div className="mt-10 flex gap-8">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaLightbulb className="text-xl text-[#1e2a4a]" />
                <span>Research</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <FaBullseye className="text-xl text-[#1e2a4a]" />
                <span>Consultancy</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-4xl">
            <img
              src={Hero}
              alt="Team discussion"
              className="w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="pointer-events-none absolute -bottom-1.5 left-0 w-full h-8 sm:h-10 md:h-12 lg:h-12 overflow-hidden">
        <img
          src={Wave}
          alt="Decorative wave"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
