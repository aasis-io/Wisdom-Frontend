import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router";
import Bg from "./../../assets/images/bg.webp";
import Wave from "./../../assets/images/wave.svg";

// Skeleton (prevents layout shift)
function HeroSkeleton() {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero Section Loading"
      aria-busy="true"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src={Bg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:pt-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[40%_60%] items-center">
          <div className="space-y-4">
            <div className="h-12 w-3/4 rounded-lg bg-gray-200 animate-pulse" />
            <div className="h-12 w-1/2 rounded-lg bg-gray-200 animate-pulse" />

            <div className="mt-6 space-y-2">
              <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-4/6 rounded bg-gray-200 animate-pulse" />
            </div>

            <div className="mt-8 h-12 w-40 rounded-xl bg-gray-300 animate-pulse" />
          </div>

          <div
            className="w-full rounded-3xl bg-gray-200 animate-pulse"
            style={{ aspectRatio: "3 / 2" }}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-1.5 left-0 w-full h-8 sm:h-10 md:h-12 overflow-hidden">
        <img
          src={Wave}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
}

export default function HeroSection({ homeData }) {
  if (!homeData) return <HeroSkeleton />;

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={Bg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:pt-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[40%_60%] items-center">
          {/* LEFT */}
          <div className="lg:text-left">
            <h1 className="text-4xl font-extrabold leading-snug text-[#17254e] sm:text-5xl">
              {homeData.title}
            </h1>

            <p className="mt-6 max-w-lg text-gray-700 text-base sm:text-lg">
              {homeData.description}
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block rounded-xl bg-[#1e2a4a] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#16203a]"
              >
                Get in touch
              </Link>
            </div>

            {/* Icons */}
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

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-4xl">
            <img
              src={homeData.image}
              alt={
                homeData.title
                  ? `WAARC Hero image showing ${homeData.title}`
                  : "WAARC Hero image"
              }
              className="w-full rounded-3xl object-cover"
              width={1200}
              height={800}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="pointer-events-none absolute -bottom-1.5 left-0 w-full h-8 sm:h-10 md:h-12 overflow-hidden">
        <img
          src={Wave}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}