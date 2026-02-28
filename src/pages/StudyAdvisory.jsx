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
    "Student-focused, transparent, and result-driven guidance for studying abroad, with specialized support for Italy and Thailand.",
  principles: [
    {
      icon: Users,
      title: "Italy: Hybrid & Expert-Led Consulting",
      description:
        "Students receive online counselling directly from our official representatives based in Italy, providing first-hand insights into universities, courses, scholarships, visa procedures, and student life.",
    },
    {
      icon: FileText,
      title: "Local Documentation & Nepal-Based Support",
      description:
        "Our Nepal office handles admissions processing, documentation, scholarship applications, visa guidance, and pre-departure preparation—ensuring transparency and strong local support for students and parents.",
    },
    {
      icon: Briefcase,
      title: "Thailand: End-to-End Support from Nepal",
      description:
        "All counselling for Thailand is provided directly from our Nepal office, with personalized guidance on universities, programs, affordability, and career pathways.",
    },
    {
      icon: Target,
      title: "Step-by-Step Process Management",
      description:
        "From initial counselling to admissions, visas, and travel preparation, we guide students through each stage with clarity and efficiency.",
    },
  ],
};

const whyChooseUs = {
  title: "Why Choose Us",
  subtitle:
    "Trusted guidance built on expertise, transparency, and a student-first approach.",
  points: [
    {
      icon: Scale,
      title: "Country-Specific Expertise",
      description:
        "Specialized knowledge for Italy and Thailand ensures accurate, up-to-date, and relevant guidance.",
    },
    {
      icon: Award,
      title: "Transparent & Ethical Counselling",
      description:
        "We believe in honest advice, realistic options, and clear communication at every stage.",
    },
    {
      icon: Users,
      title: "Strong International & Local Coordination",
      description:
        "Direct coordination between international representatives and our Nepal team ensures smooth and faster processing.",
    },
    {
      icon: Target,
      title: "Student-Centric Support",
      description:
        "We support students from application to arrival, helping them make informed decisions with confidence.",
    },
  ],
};

const primaryColor = "#17254e";
const secondaryColor = "#fbbf24";

export default function StudyAdvisory() {
  return (
    <div className="bg-white">
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
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-slate-200">{hero.subtitle}</p>
            <div className="mt-8">
              <Link
                to="/services"
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

      {/* STUDY DESTINATIONS */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Study Destinations
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
              Expert guidance for Nepali students planning to study in Italy and
              Thailand
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {studyDestinations.map((item, index) => (
              <Link key={index} to={item.path}>
                <div className="group rounded-3xl bg-white p-5 shadow-md hover:shadow-xl transition">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 shadow">
                      <img
                        src={item.flag}
                        alt={`${item.country} Flag`}
                        className="h-4 w-6 rounded-sm"
                      />
                      <span className="text-sm font-medium text-slate-800">
                        {item.country}
                      </span>
                    </div>
                  </div>
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

      {/* CONSULTING APPROACH */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            {approach.title}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            {approach.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {approach.principles.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition"
            >
              <div
                className="w-fit rounded-xl p-3"
                style={{ backgroundColor: `${primaryColor}10` }}
              >
                <item.icon
                  className="h-6 w-6"
                  style={{ color: primaryColor }}
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              {whyChooseUs.title}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
              {whyChooseUs.subtitle}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.points.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <div
                  className="mx-auto w-fit rounded-xl p-3"
                  style={{ backgroundColor: `${primaryColor}10` }}
                >
                  <item.icon
                    className="h-6 w-6"
                    style={{ color: primaryColor }}
                  />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div
          className="relative overflow-hidden rounded-3xl p-16 text-white"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`,
          }}
        >
          <div className="absolute right-0 top-1/6 opacity-10">
            <LineChart className="h-48 w-48" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-bold">
              Expert Guidance for Studying Abroad
            </h2>
            <p className="mt-4 text-white/90">
              Book a consultation to explore international education
              opportunities with confidence.
            </p>
            <div className="mt-8">
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
