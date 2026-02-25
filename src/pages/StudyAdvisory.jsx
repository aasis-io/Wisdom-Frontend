import {
  ArrowRight,
  Award,
  Briefcase,
  FileText,
  LineChart,
  Scale,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import Italy from "./../assets/images/italy.jpg";
import Thailand from "./../assets/images/thailand.jpg";
const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Study Advisory", link: "/study-advisory" },
];
const hero = {
  title: "Strategic Consulting for Development Impact",
  subtitle:
    "Expert advisory services that transform challenges into opportunities and strategies into sustainable outcomes.",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600",
};

const studyDestinations = [
  {
    country: "Italy",
    title: "Study in Italy",
    description: "Admissions, visas, scholarships & university guidance",
    image: Italy,
    flag: "https://flagcdn.com/w20/it.png",
    alt: "Study in Italy",
    path: "/study/italy",
  },
  {
    country: "Thailand",
    title: "Study in Thailand",
    description: "Affordable education, fast processing & full support",
    image: Thailand,
    flag: "https://flagcdn.com/w20/th.png",
    alt: "Study in Thailand",
    path: "/study/thailand",
  },
];

const approach = {
  title: "Our Consulting Approach",
  subtitle:
    "We combine global expertise with local insights to deliver solutions that work in real-world contexts.",
  principles: [
    {
      icon: Target,
      title: "Results-Focused",
      description:
        "Every engagement is designed to deliver tangible, measurable outcomes that advance your organizational goals.",
    },
    {
      icon: Users,
      title: "Collaborative Partnership",
      description:
        "We work alongside your team, building capacity and ownership rather than imposing external solutions.",
    },
    {
      icon: Briefcase,
      title: "Practical Expertise",
      description:
        "Our consultants bring hands-on experience from diverse development contexts and proven track records.",
    },
    {
      icon: Scale,
      title: "Context-Sensitive",
      description:
        "We adapt international best practices to fit local realities, ensuring sustainable and culturally appropriate solutions.",
    },
    {
      icon: FileText,
      title: "Evidence-Informed",
      description:
        "Our recommendations are grounded in rigorous research, data analysis, and documented best practices.",
    },
    {
      icon: Award,
      title: "Quality-Driven",
      description:
        "We maintain the highest standards of professionalism, delivering work that meets international quality benchmarks.",
    },
  ],
};

const primaryColor = "#17254e";
const secondaryColor = "#fbbf24"; // yellow-400

export default function Consulting() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      {/* HERO */}
      <section className="relative h-[60vh] lg:h-[50vh]">
        <img
          src={hero.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${primaryColor}ee, ${primaryColor}99)`,
          }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-slate-200">{hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={"/services"}
                style={{ backgroundColor: secondaryColor }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-slate-900 hover:opacity-90 transition"
              >
                Explore All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Study Destinations
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
              Expert guidance for Nepali students planning to study in Italy and
              Thailand
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {studyDestinations.map((item, index) => (
              <Link to={item.path}>
                <div
                  key={index}
                  className="group rounded-3xl bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Flag */}
                    <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow backdrop-blur">
                      <img
                        src={item.flag}
                        alt={`${item.country} Flag`}
                        className="h-4 w-6 rounded-sm object-cover"
                      />
                      <span className="text-sm font-medium text-slate-800">
                        {item.country}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-5 text-center">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            {approach.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            {approach.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {approach.principles.map((principle, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg shadow-sm transition-all duration-300"
              style={{ borderColor: "transparent" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = primaryColor + "40")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "transparent")
              }
            >
              <div
                className="rounded-xl p-3 w-fit"
                style={{ backgroundColor: `${primaryColor}10` }}
              >
                <principle.icon
                  className="h-6 w-6"
                  style={{ color: primaryColor }}
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {principle.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div
          className="relative overflow-hidden rounded-3xl p-16 text-white"
          style={{
            background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
          }}
        >
          <div className="absolute right-0 top-1/6 h-full w-1/3 opacity-10">
            <LineChart className="h-2/3 w-2/3" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-bold">
              Expert Guidance for Studying Abroad
            </h2>
            <p className="mt-4 text-base text-white/90">
              Get expert guidance on international education opportunities,
              admissions, scholarships, and visa procedures. Book your
              consultation today.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                style={{ backgroundColor: secondaryColor }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-slate-900 hover:opacity-90 transition"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
