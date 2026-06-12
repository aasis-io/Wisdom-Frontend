import {
  BookOpen,
  Brain,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  FlaskConical,
  Globe,
  GraduationCap,
  Mail,
  PenTool,
  Plane,
  School,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Work with us", link: "" },
  { name: "Collaborate", link: "/collaborate" },
];
const heroImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600";

const whoCanCollaborate = [
  {
    icon: GraduationCap,
    label: "Universities & Colleges (National & International)",
  },
  { icon: School, label: "Educational Institutions & Academies" },
  { icon: BookOpen, label: "Research Centers & Think Tanks" },
  { icon: Globe, label: "International Education Providers" },
  { icon: Brain, label: "Researchers, Academicians & Subject Experts" },
  { icon: Building2, label: "NGOs & Professional Organizations" },
];

const areas = [
  {
    icon: FlaskConical,
    title: "Research & Publications",
    description:
      "Joint research projects, co-authored papers, and academic publications.",
  },
  {
    icon: CalendarDays,
    title: "Academic Events",
    description: "Co-hosting webinars, seminars, workshops, and conferences.",
  },
  {
    icon: Plane,
    title: "International Education Programs",
    description:
      "Partnerships for student exchange, study-abroad programs, and academic counseling.",
  },
  {
    icon: PenTool,
    title: "Training & Capacity Building",
    description:
      "Collaborative training programs in research writing, methodology, and academic skills.",
  },
  {
    icon: FileText,
    title: "Content & Knowledge Sharing",
    description:
      "Development of academic resources, courses, and learning materials.",
  },
];

const whyUs = [
  "Access to a diverse academic and student network",
  "Shared expertise and global exposure",
  "High-quality research and educational impact",
  "Long-term, mutually beneficial partnerships",
];

export default function Collaborate() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <Breadcrumbs breadcrumbs={breadcrumbsData} />

      {/* Hero */}
      <section className="relative h-[55vh]">
        <img
          src={heroImage}
          alt="Collaboration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#17254e]/80 via-[#17254e]/50 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-yellow-400">
              Partnership & Collaboration
            </p>
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl xl:text-5xl">
              Let's Build Something Meaningful Together
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              We believe in the power of collaboration to advance education,
              research, and global opportunities. We welcome partnerships with
              institutions, organizations, and professionals who share our
              vision of academic excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Collaborate */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-b border-slate-100">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-yellow-500">
            Partners
          </p>
          <h2 className="text-3xl font-bold text-slate-900">
            Who Can Collaborate With Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whoCanCollaborate.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 cursor-pointer  rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div className="shrink-0 rounded-xl bg-blue-950/5 p-4">
                <item.icon className="h-5 w-5 text-[#17254e]" />
              </div>
              <p className="font-medium text-slate-700">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of Collaboration */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-yellow-500">
              How We Work Together
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Areas of Collaboration
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl">
              We engage across multiple dimensions of academic and professional
              work, from research to training to global education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <div
                key={i}
                className="rounded-2xl cursor-pointer bg-white border border-slate-200 p-7 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                <div className="rounded-xl bg-blue-950/5 p-3 w-fit mb-5">
                  <area.icon className="h-5 w-5 text-[#17254e]" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Collaborate */}
      <section className="mx-auto max-w-7xl px-6 py-16 border-b border-slate-100">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-yellow-500">
              Our Value
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Collaborate With Us
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We bring together academic expertise, a global network, and a
              commitment to meaningful impact, making every partnership a step
              toward lasting change.
            </p>
          </div>
          <div className="space-y-4">
            {whyUs.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-12 md:p-16">
          <div className="max-w-xl">
            <Mail className="h-7 w-7 mb-5 text-[#17254e]" />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Interested in collaborating with us?
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              We would love to explore partnership opportunities that create
              meaningful academic and educational impact. Reach out and let's
              start the conversation.
            </p>
            <p>
              Contact us at:&nbsp;
              <a
                href="waarc2022@gmail.com"
                className="text-[#17254e] text-base underline"
              >
                waarc2022@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
