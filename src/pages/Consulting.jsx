import {
    ArrowRight,
    Award,
    Briefcase,
    CheckCircle2,
    ChevronRight,
    FileText,
    Lightbulb,
    LineChart,
    Scale,
    Settings,
    ShieldCheck,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";
import { Link } from "react-router";

const hero = {
  title: "Strategic Consulting for Development Impact",
  subtitle:
    "Expert advisory services that transform challenges into opportunities and strategies into sustainable outcomes.",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600",
};

const services = [
  {
    icon: Lightbulb,
    title: "Strategy Development & Planning",
    description:
      "Comprehensive strategic planning and organizational development to achieve your mission.",
    features: [
      "Strategic planning and visioning",
      "Theory of change development",
      "Organizational capacity assessments",
      "Strategic roadmap design",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
  },
  {
    icon: Settings,
    title: "Program Design & Implementation",
    description:
      "End-to-end program design and implementation support for maximum effectiveness.",
    features: [
      "Program design and frameworks",
      "Implementation planning",
      "Monitoring and evaluation systems",
      "Stakeholder engagement strategies",
    ],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
  },
  {
    icon: ShieldCheck,
    title: "Policy Advisory & Advocacy",
    description:
      "Evidence-based policy advice and advocacy support for systemic change.",
    features: [
      "Policy analysis and recommendations",
      "Advocacy strategy development",
      "Policy brief development",
      "Stakeholder consultation facilitation",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200",
  },
  {
    icon: TrendingUp,
    title: "Performance & Impact Measurement",
    description:
      "Robust systems to track, measure, and communicate your development impact.",
    features: [
      "Results frameworks and indicators",
      "Impact measurement systems",
      "Performance dashboards",
      "Learning and adaptation support",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
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

const expertise = [
  {
    area: "Organizational Development",
    description:
      "Building strong, adaptive organizations capable of sustained impact.",
    topics: [
      "Strategic planning and governance",
      "Capacity building and training",
      "Change management processes",
      "Organizational restructuring",
      "Leadership development",
      "Institutional strengthening",
    ],
  },
  {
    area: "Program Management",
    description:
      "Designing and managing programs that deliver measurable results.",
    topics: [
      "Program design and frameworks",
      "Implementation support and oversight",
      "Quality assurance systems",
      "Risk management strategies",
      "Adaptive management approaches",
      "Portfolio optimization",
    ],
  },
  {
    area: "Monitoring & Evaluation",
    description: "Evidence systems that drive learning and accountability.",
    topics: [
      "M&E framework design",
      "Data systems development",
      "Performance tracking dashboards",
      "Impact evaluation methodologies",
      "Learning agenda development",
      "Results-based management",
    ],
  },
  {
    area: "Public Sector Advisory",
    description: "Strengthening government systems and service delivery.",
    topics: [
      "Policy development and analysis",
      "Institutional reform programs",
      "Service delivery improvement",
      "Decentralization support",
      "Public financial management",
      "E-governance solutions",
    ],
  },
  {
    area: "Financial Management",
    description:
      "Financial planning and sustainability for development organizations.",
    topics: [
      "Budget planning and forecasting",
      "Financial sustainability strategies",
      "Resource mobilization",
      "Cost-effectiveness analysis",
      "Financial systems strengthening",
      "Value for money assessments",
    ],
  },
  {
    area: "Partnership & Coordination",
    description: "Building effective collaborations for collective impact.",
    topics: [
      "Multi-stakeholder platforms",
      "Partnership strategy development",
      "Coordination mechanisms design",
      "Network facilitation",
      "Public-private partnerships",
      "Community engagement strategies",
    ],
  },
];

const stats = [
  { number: "200+", label: "Consulting Projects Delivered" },
  { number: "30+", label: "Countries Served" },
  { number: "85%", label: "Repeat Client Rate" },
  { number: "15+", label: "Years of Experience" },
];

const primaryColor = "#17254e";
const secondaryColor = "#fbbf24"; // yellow-400

export default function Consulting() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to={"/"} className="hover:text-slate-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={"/services"} className="hover:text-slate-900">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Consulting</span>
          </div>
        </div>
      </section>
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

      {/* STATS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-4xl font-bold"
                  style={{ color: primaryColor }}
                >
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Strategic Guidance for Sustainable Change
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              In the complex landscape of development work, having the right
              strategic partner can make the difference between good intentions
              and transformative impact. Our consulting services provide the
              expertise, frameworks, and hands-on support needed to design,
              implement, and scale effective development programs.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              We work with governments, international organizations, NGOs, and
              private sector partners to solve complex challenges, strengthen
              systems, and achieve lasting development outcomes.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Why Consulting Matters
              </h3>
              <p className="mt-3 text-slate-600">
                Expert consulting brings fresh perspectives, specialized
                knowledge, and proven methodologies to help organizations
                navigate challenges, optimize resources, and accelerate progress
                toward their goals.
              </p>
            </div>
            <div
              className="rounded-2xl border p-6"
              style={{
                borderColor: `${secondaryColor}40`,
                backgroundColor: `${secondaryColor}10`,
              }}
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: primaryColor }}
              >
                Our Promise
              </h3>
              <p className="mt-3 text-slate-700">
                We deliver actionable insights, practical solutions, and
                measurable results. Our success is measured by your success in
                creating positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - DETAILED */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Comprehensive Consulting Services
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Tailored advisory support across the full development program
              lifecycle.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt=""
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-xl p-3"
                      style={{ backgroundColor: `${primaryColor}12` }}
                    >
                      <item.icon
                        className="h-6 w-6"
                        style={{ color: primaryColor }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {item.details}
                  </p>

                  <div className="mt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Key Capabilities
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {item.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 flex-shrink-0"
                            style={{ color: secondaryColor }}
                          />
                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* <button
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                    style={{ color: primaryColor }}
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </button> */}
                </div>
              </div>
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

      {/* EXPERTISE AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Areas of Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Specialized knowledge across key consulting domains
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((sector, i) => (
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
              <div className="flex items-center gap-3">
                <Briefcase
                  className="h-6 w-6"
                  style={{ color: primaryColor }}
                />
                <h3 className="text-lg font-semibold text-slate-900">
                  {sector.area}
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {sector.description}
              </p>
              <ul className="mt-5 space-y-2">
                {sector.topics.map((topic, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: secondaryColor }}
                    />
                    {topic}
                  </li>
                ))}
              </ul>
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
              Ready to Transform Your Strategy into Impact?
            </h2>
            <p className="mt-4 text-base text-white/90">
              Let's collaborate to design solutions that drive meaningful,
              sustainable change in your organization and the communities you
              serve.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                style={{ backgroundColor: secondaryColor }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-slate-900 hover:opacity-90 transition"
              >
                Schedule a Consultation
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
