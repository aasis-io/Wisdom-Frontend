import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Database,
  FileSearch,
  Globe,
  Lightbulb,
  LineChart,
  Microscope,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const hero = {
  title: "Research That Drives Evidence-Based Decisions",
  subtitle:
    "Rigorous, contextual, and policy-relevant research supporting institutions, policymakers, and development actors.",
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600",
};

const services = [
  {
    icon: FileSearch,
    title: "Policy & Applied Research",
    description:
      "Comprehensive policy analysis and sectoral research aligned with development priorities.",
    features: [
      "Policy analysis and evaluation",
      "Impact assessments",
      "Baseline and endline studies",
      "Sector-specific research",
      "Evidence synthesis and reviews",
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Insights",
    description:
      "Advanced quantitative and qualitative analysis transformed into actionable intelligence.",
    features: [
      "Statistical modeling and analysis",
      "Qualitative data coding",
      "Mixed-methods integration",
      "Predictive analytics",
      "Data visualization and reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    icon: Database,
    title: "Surveys & Field Studies",
    description:
      "End-to-end survey design and implementation with rigorous fieldwork protocols.",
    features: [
      "Survey instrument design",
      "Sampling strategy development",
      "Field team training and supervision",
      "Focus group discussions (FGDs)",
      "Key informant interviews (KIIs)",
    ],
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200",
  },
  {
    icon: BookOpen,
    title: "Academic & Institutional Research",
    description:
      "Scholarly research and knowledge products that advance understanding and inform practice.",
    features: [
      "Systematic literature reviews",
      "Meta-analysis",
      "Institutional assessments",
      "Peer-reviewed publications",
      "Technical reports and briefs",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
  },
];

const approach = {
  title: "Our Research Approach",
  subtitle:
    "We combine academic rigor with practical application to deliver research that matters.",
  principles: [
    {
      icon: Target,
      title: "Purpose-Driven",
      description:
        "Every research project is designed with clear objectives and tangible outcomes that address real-world challenges.",
    },
    {
      icon: Microscope,
      title: "Methodologically Rigorous",
      description:
        "We employ robust research designs, validated instruments, and internationally recognized quality standards.",
    },
    {
      icon: Users,
      title: "Participatory & Inclusive",
      description:
        "We engage stakeholders throughout the research process, ensuring diverse voices and perspectives are represented.",
    },
    {
      icon: Globe,
      title: "Contextually Grounded",
      description:
        "Our research is deeply informed by local contexts, cultures, and dynamics while maintaining global best practices.",
    },
    {
      icon: Lightbulb,
      title: "Action-Oriented",
      description:
        "We translate findings into clear, practical recommendations that stakeholders can implement.",
    },
    {
      icon: Award,
      title: "Ethical & Transparent",
      description:
        "We adhere to the highest ethical standards, ensuring integrity, confidentiality, and responsible research conduct.",
    },
  ],
};

const process = [
  {
    phase: "1. Research Scoping & Design",
    activities: [
      "Problem definition and research questions",
      "Literature review and theory of change",
      "Methodology selection and validation",
      "Ethical review and approval",
    ],
  },
  {
    phase: "2. Tool Development & Piloting",
    activities: [
      "Survey and interview guide design",
      "Sampling framework development",
      "Tool pre-testing and refinement",
      "Enumerator training materials",
    ],
  },
  {
    phase: "3. Data Collection & Quality Assurance",
    activities: [
      "Field team recruitment and training",
      "Real-time data quality monitoring",
      "Adaptive problem-solving",
      "Stakeholder communication",
    ],
  },
  {
    phase: "4. Analysis & Interpretation",
    activities: [
      "Quantitative and qualitative analysis",
      "Data triangulation",
      "Findings validation with stakeholders",
      "Insight generation and synthesis",
    ],
  },
  {
    phase: "5. Reporting & Dissemination",
    activities: [
      "Comprehensive research reports",
      "Policy briefs and summaries",
      "Stakeholder presentations",
      "Publication and knowledge sharing",
    ],
  },
];

const expertise = [
  {
    area: "Education & Skills Development",
    topics: [
      "Access and quality",
      "Teacher effectiveness",
      "Learning outcomes",
      "TVET and workforce readiness",
    ],
  },
  {
    area: "Health & Nutrition",
    topics: [
      "Public health systems",
      "Maternal and child health",
      "Disease prevention",
      "Health behavior change",
    ],
  },
  {
    area: "Governance & Institutions",
    topics: [
      "Public sector reform",
      "Accountability mechanisms",
      "Civic engagement",
      "Service delivery",
    ],
  },
  {
    area: "Economic Development",
    topics: [
      "Livelihoods and employment",
      "Market systems",
      "Financial inclusion",
      "SME development",
    ],
  },
  {
    area: "Social Protection",
    topics: [
      "Cash transfer programs",
      "Vulnerability assessment",
      "Social safety nets",
      "Resilience building",
    ],
  },
  {
    area: "Climate & Environment",
    topics: [
      "Climate adaptation",
      "Natural resource management",
      "Environmental sustainability",
      "Green transitions",
    ],
  },
];

const stats = [
  { number: "150+", label: "Research Projects Completed" },
  { number: "25+", label: "Countries Covered" },
  { number: "50,000+", label: "Survey Respondents Reached" },
  { number: "95%", label: "Client Satisfaction Rate" },
];

const primaryColor = "#17254e";
const secondaryColor = "#fbbf24"; // yellow-400

export default function Research() {
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
            <span className="text-slate-900">Research</span>
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
              {/* <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition">
                View Case Studies
              </button> */}
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
              Evidence That Informs Action
            </h2>
            <p className="mt-6 text-lg text-slate-700 leading-relaxed">
              In a world where decisions must be grounded in credible evidence,
              our research services bridge the gap between knowledge and action.
              We work with governments, multilateral organizations, NGOs, and
              academic institutions to generate research that is not only
              methodologically sound but also contextually relevant and
              practically applicable.
            </p>
            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              Our multidisciplinary team brings together expertise in economics,
              social sciences, statistics, and sectoral domains to tackle
              complex development challenges through rigorous inquiry.
            </p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Why Research Matters
              </h3>
              <p className="mt-3 text-slate-600">
                Quality research enables evidence-based policymaking, helps
                organizations measure impact, identifies what works and what
                doesn't, and ultimately improves outcomes for the communities we
                serve.
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
                Our Commitment
              </h3>
              <p className="mt-3 text-slate-700">
                We are committed to research excellence, ethical practice, and
                ensuring that our work contributes meaningfully to development
                outcomes and policy advancement.
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
              Comprehensive Research Services
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              From design to dissemination, we provide end-to-end research
              support tailored to your specific needs.
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

                  <div className="mt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Key Capabilities
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {item.features.slice(0, 4).map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0"
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
            Sectoral Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Deep knowledge across critical development sectors
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
                <TrendingUp
                  className="h-6 w-6"
                  style={{ color: primaryColor }}
                />
                <h3 className="text-lg font-semibold text-slate-900">
                  {sector.area}
                </h3>
              </div>
              <ul className="mt-5 space-y-2">
                {sector.topics.map((topic, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-slate-600"
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
              Partner With Us for Credible Research
            </h2>
            <p className="mt-4 text-base text-white/90">
              Transform evidence into insight and insight into action. Let's
              design research that drives meaningful change.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                style={{ backgroundColor: secondaryColor }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-slate-900 hover:opacity-90 transition"
              >
                Start a Research Project
                <ArrowRight className="h-5 w-5" />
              </button>
              {/* <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition">
                Download Our Capabilities Statement
                <Download className="h-5 w-5" />
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
