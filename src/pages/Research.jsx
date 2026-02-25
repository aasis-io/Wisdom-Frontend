import {
  ArrowRight,
  BarChart3,
  BookOpen,
  FlaskConical,
  Globe,
  GraduationCap,
  MonitorPlay,
} from "lucide-react";
import { Link } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import ResearchImg from "./../assets/images/research.jpg";
const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Research", link: "/research" },
];
const services = [
  {
    icon: FlaskConical,
    title: "Research Paper Writing Support",
    description:
      "Expert guidance to help researchers develop, structure, and write high-quality research papers that meet academic and international standards.",
    tags: ["Paper Structure", "Academic Writing", "Peer Review Prep"],
  },
  {
    icon: Globe,
    title: "International Journal Publication Support",
    description:
      "Assistance throughout the journal publication process, including journal selection, manuscript preparation, submission, and responding to reviewer comments.",
    tags: ["Journal Selection", "Manuscript Prep", "Reviewer Response"],
  },
  {
    icon: BarChart3,
    title: "Research Methodology Training",
    description:
      "Practical training on research design, data collection, analysis techniques, and ethical research practices for academic and professional research.",
    tags: ["Research Design", "Data Analysis", "Ethics"],
  },
  {
    icon: MonitorPlay,
    title: "Webinars & Seminars on Research Writing",
    description:
      "Interactive online and offline sessions designed to strengthen research writing skills, improve publication success, and build research capacity.",
    tags: ["Online Sessions", "Workshops", "Capacity Building"],
  },
  {
    icon: GraduationCap,
    title: "Thesis & Dissertation Guidance",
    description:
      "Comprehensive academic support for students and researchers in planning, writing, and completing their thesis or dissertation according to university guidelines.",
    tags: ["Thesis Planning", "Dissertation Writing", "University Standards"],
  },
];
const primaryColor = "#17254e";

export default function Research() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs breadcrumbs={breadcrumbsData} />

      {/* Hero */}
      <section className="bg-[#17254e] relative">
        <img
          src={ResearchImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#17254e]/80 via-[#17254e]/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-yellow-400">
              Academic & Research Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Research & Academic Services
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              Empowering researchers, scholars, and institutions with expert
              support across every stage of the academic research journey.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-slate-900 bg-yellow-400 hover:opacity-90 transition text-sm"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-yellow-500">
            What We Offer
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Our Research Services
          </h2>
          <p className="mt-3 text-slate-500 max-w-3xl">
            From initial concept to international publication, end-to-end
            support tailored to your academic goals.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="shrink-0 rounded-xl bg-blue-950/5 p-3 w-fit">
                  <service.icon className="h-5 w-5 text-[#17254e]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-medium rounded-full px-3 py-1 bg-blue-950/5 text-[#17254e]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-3xl p-12 md:p-16 bg-[#17254e]">
          <div className="max-w-xl">
            <BookOpen className="h-7 w-7 mb-5 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to advance your research journey?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              Connect with our academic experts today and take the next step
              toward publication, recognition, and impact.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-slate-900 bg-yellow-400 text-sm hover:opacity-90 transition"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
