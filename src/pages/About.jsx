import {
  ChevronRight,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import React from "react";
import { FaCalendarAlt, FaChartLine, FaFileAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router";
import AboutImg from "./../assets/images/about.png";
import LogoIn from "./../assets/images/logoIn.svg";
import LogoOut from "./../assets/images/logoOut.svg";

const KnowledgePattern = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern
        id="knowledge-pattern"
        width="80"
        height="80"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="10" cy="10" r="1.5" fill="#1e2a4a" opacity="0.15" />
        <circle cx="60" cy="20" r="1.5" fill="#1e2a4a" opacity="0.12" />
        <circle cx="30" cy="50" r="1.5" fill="#1e2a4a" opacity="0.1" />
        <line
          x1="10"
          y1="10"
          x2="60"
          y2="20"
          stroke="#1e2a4a"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <line
          x1="30"
          y1="50"
          x2="60"
          y2="20"
          stroke="#1e2a4a"
          strokeWidth="0.5"
          opacity="0.08"
        />
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill="url(#knowledge-pattern)" />
  </svg>
);

const services = [
  {
    id: 1,
    title: "Research Services",
    description:
      "Academic research, policy studies, data analysis, and evidence-based reporting tailored to real-world needs.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    icon: GraduationCap,
    alt: "Research",
  },
  {
    id: 2,
    title: "Consultancy Services",
    description:
      "Strategic advisory, capacity building, monitoring & evaluation, and institutional development.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    icon: Users,
    alt: "Consulting",
  },
];

export default function About() {
  return (
    <main className="w-full overflow-hidden text-gray-800">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={"/"} className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={"/about"} className="hover:text-slate-900">
              About Us
            </Link>
          </div>
        </div>
      </section>
      {/* HERO with image + gradient */}
      <section className="relative min-h-[50vh]">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          alt="Education and research"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/90 via-[#1e293b]/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl xl:text-5xl">
              About Wisdom Academy & Research Center
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              A Nepal-based research and consulting institution connecting local
              insight with global knowledge.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block h-20 w-full"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C240,45 480,25 720,30 960,35 1200,45 1440,30 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* STORY SECTION with textured background */}
      <section className="relative bg-white pb-24 pt-12 overflow-hidden">
        {/* Subtle SVG Pattern Background */}

        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="#b7c0cb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-[#1e2a4a] leading-tight">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Wisdom Academy & Research Center (WAARC) is a professional
                research and consultancy organization based in Nepal, committed
                to advancing knowledge, policy insight, and institutional
                capacity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you're thirsty, you search for water. But if you're hungry
                for worldwide education, inspiration, and growth, you search for
                us. WAARC brings education, research, and consulting expertise
                to your fingertips — empowering minds and enriching skills.
              </p>
              {/* <a
                href="#"
                className="inline-block mt-4 rounded-lg bg-gradient-to-r from-[#17254e] to-[#2e3b60] px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Learn More
              </a> */}
            </div>

            {/* Image Content */}
            <div className="relative flex justify-center items-center">
              <div className="absolute -top-8 -right-2 h-20 w-20 rounded-full bg-linear-to-tr from-[#17254e] to-[#455171] opacity-50 animate-pulse"></div>

              <div className="relative w-full max-w-md lg:max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt="Team collaboration"
                  className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
                  alt="Research planning"
                  className="absolute -bottom-12 md:-left-12 left-1/5 w-64 rounded-xl shadow-xl transform transition-transform duration-500 hover:rotate-3 hover:scale-105 md:block"
                />
                {/* Optional floating accent circle */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION with image cards */}
      <section className="relative overflow-hidden bg-[#d1d3dc] py-16">
        <div className="absolute z-30 top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block h-20 w-full"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C240,45 480,25 720,30 960,35 1200,45 1440,30 L1440,0 L0,0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        {/* SVG Pattern Background */}
        <KnowledgePattern />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Heading */}
          <div className="mb-12 max-w-3xl">
            <span className="text-base font-semibold uppercase tracking-wider text-yellow-500">
              Our Foundation
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e2a4a]">
              Purpose That Guides Our Work
            </h2>
            <p className="mt-5 text-base text-gray-600">
              Our mission and vision shape how we research, advise, and
              collaborate — ensuring knowledge leads to meaningful impact.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Mission Card */}
            <div className="group relative h-90 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
                alt="Our Mission"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-10 text-white">
                <Target className="h-10 w-10 text-yellow-400" />
                <h3 className="mt-4 text-2xl font-semibold">Our Mission</h3>
                <p className="mt-4 max-w-md text-sm text-gray-200">
                  To deliver rigorous research and strategic consultancy that
                  enables evidence-based decision-making, strengthens
                  institutions, and supports sustainable development.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative h-90 overflow-hidden rounded-3xl shadow-2xl lg:mt-20">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                alt="Our Vision"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-10 text-white">
                <Lightbulb className="h-10 w-10 text-yellow-400" />
                <h3 className="mt-4 text-2xl font-semibold">Our Vision</h3>
                <p className="mt-4 max-w-md text-sm text-gray-200">
                  To be a globally respected research and consulting center that
                  connects Nepal’s insights with global knowledge systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES with visual depth */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1e2a4a]">What We Do</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">
              We help institutions and professionals navigate complexity with
              clarity and confidence.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className="group relative h-105 overflow-hidden rounded-2xl shadow-2xl"
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                    <Icon className="h-9 w-9 text-yellow-400" />

                    <h3 className="mt-4 text-2xl font-semibold leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-base text-gray-200">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <button className="mt-6 w-fit rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-[#1e2a4a] transition hover:bg-yellow-300">
                      Learn more
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================== WHY CHOOSE WAARC =================== */}
      <section className="relative bg-[#f5f6fb] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <h3 className="mb-12 text-center text-3xl font-extrabold text-[#1e2a4a]">
            Why Choose Us
          </h3>

          <div className="grid gap-16 lg:grid-cols-[40%_60%] items-center">
            {/* LEFT IMAGES */}
            <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
              {/* Main Image */}
              <img src={AboutImg} alt="Research work" className="w-full" />

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
                title="Tailored Consulting Solutions"
                text="Customized strategies designed to meet your unique goals and challenges."
                color="bg-[#1e2a4a]"
              />

              <FeatureCard
                icon={<FaFileAlt className="h-16" />}
                title="Evidence-Based Approach"
                text="Rigorous research methods that ensure credible, reliable, and actionable insights."
                color="bg-[#f4b740]"
              />

              <FeatureCard
                icon={<FaUsers className="h-16" />}
                title="Multidisciplinary Expertise"
                text="A diverse team bridging academia, policy, and industry perspectives."
                color="bg-[#f4b740]"
              />

              <FeatureCard
                icon={<FaChartLine className="h-16" />}
                title="Impact-Oriented Outcomes"
                text="Focused on real-world results that inform decisions and drive meaningful change."
                color="bg-[#1e2a4a]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =================== CTA / LET’S BUILD KNOWLEDGE =================== */}
      <section className="relative py-32 bg-white  overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#1e2a4a] leading-tight">
            Let’s Build Knowledge That Matters
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Collaborate with WAARC to transform research into actionable
            insights, creating solutions that empower, educate, and inspire
            meaningful impact.
          </p>
          <button className="mt-12 rounded-xl bg-linear-to-r from-[#17254e] to-[#455171] px-14 py-5 font-semibold text-white shadow-2xl transition-transform hover:scale-105 hover:shadow-3xl">
            Contact Us
          </button>
        </div>
      </section>
    </main>
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
