import {
  ArrowRight,
  Award,
  Briefcase,
  FileText,
  Scale,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import Italy from "./../assets/images/italy.jpg";
import Thailand from "./../assets/images/thailand.jpg";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { PhoneInput, defaultCountries } from "react-international-phone";

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
    path: "https://waarc.edu.np/study/italy",
  },
  {
    country: "Thailand",
    title: "Study in Thailand",
    description: "Affordable education, fast processing & full support",
    image: Thailand,
    flag: "https://flagcdn.com/w20/th.png",
    alt: "Study in Thailand",
    path: "https://waarc.edu.np/study/thailand",
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
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [purposeType, setPurposeType] = useState("");
  const [phone, setPhone] = useState("");
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formRef.current.honeypot.value) return;

    setLoading(true);

    try {
      // build full purpose text
      let fullPurpose = "";

      if (purposeType === "study") {
        fullPurpose = "Study abroad counselling";
      } else if (purposeType === "research") {
        fullPurpose = "Academic research consultation";
      } else if (purposeType === "office") {
        fullPurpose = "Office visit appointment";
      } else if (purposeType === "others") {
        const custom = formRef.current.custom_purpose?.value || "";
        fullPurpose = custom || "Others";
      }
      if (formRef.current.honeypot.value) return;
      if (!phone || phone.trim().length < 6) {
        toast.error("Please enter a valid WhatsApp number");
        return;
      }
      // inject full purpose into form (so EmailJS sends correct value)
      let hiddenPurpose = formRef.current.querySelector(
        'input[name="purpose"]'
      );

      if (!hiddenPurpose) {
        hiddenPurpose = document.createElement("input");
        hiddenPurpose.type = "hidden";
        hiddenPurpose.name = "purpose";
        formRef.current.appendChild(hiddenPurpose);
      }

      hiddenPurpose.value = fullPurpose;

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Consultation booked successfully!");
      formRef.current.reset();
      setPurposeType("");
      setPhone("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to book consultation. Try again.");
    } finally {
      setLoading(false);
    }
  };

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
              <div key={index}>
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
              </div>
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

      {/* CTA (UPDATED WITH FORM) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div
          className="relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`,
          }}
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
              Schedule an Appointment
            </h2>

            <p className="mt-3 sm:mt-4 text-white/80 text-sm sm:text-base max-w-xl">
              Schedule a consultation with us to discuss your needs and get
              expert guidance.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 sm:mt-10 space-y-6 w-full"
            >
              {/* Honeypot */}
              <input type="text" name="honeypot" className="hidden" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full min-w-0">
                {/* Full Name */}
                <div className="w-full min-w-0">
                  <label className="text-xs sm:text-sm text-white/70 mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    placeholder="John Doe"
                    required
                    className="w-full min-w-0 box-border text-[16px] sm:text-base rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/20 transition-all"
                  />
                </div>

                {/* Purpose Dropdown */}
                <div className="w-full min-w-0 relative z-20">
                  <label className="text-xs sm:text-sm text-white/70 mb-2 block">
                    Purpose *
                  </label>

                  <select
                    name="purpose_type"
                    value={purposeType}
                    onChange={(e) => setPurposeType(e.target.value)}
                    required
                    className="w-full min-w-0 text-[16px] sm:text-base rounded-xl border border-white/20 px-4 py-3.5 text-white bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 transition-all appearance-none"
                  >
                    <option value="">Select purpose</option>
                    <option value="study">Study abroad counselling</option>
                    <option value="research">
                      Academic research consultation
                    </option>
                    <option value="office">Office visit appointment</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                {/* Custom Purpose */}
                {purposeType === "others" && (
                  <div className="w-full min-w-0 md:col-span-2">
                    <label className="text-xs sm:text-sm text-white/70 mb-2 block">
                      Please specify your purpose *
                    </label>
                    <input
                      type="text"
                      name="custom_purpose"
                      placeholder="Write your purpose..."
                      required
                      className="w-full min-w-0 box-border text-[16px] sm:text-base rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/20 transition-all"
                    />
                  </div>
                )}

                {/* WhatsApp / Phone */}
                <div className="relative z-30 w-full min-w-0 md:col-span-2">
                  <label className="text-xs sm:text-sm text-white/70 mb-2 block">
                    WhatsApp Number *
                  </label>

                  <div className="relative rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg px-3 py-2">
                    <PhoneInput
                      defaultCountry="np"
                      value={phone}
                      onChange={setPhone}
                      countries={defaultCountries}
                      forceDialCode
                      disableCountryGuess
                      inputProps={{
                        name: "whatsapp",
                        required: true,
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "40px",
                        fontSize: "16px",
                        border: "none",
                        outline: "none",
                        background: "transparent",
                        color: "#ffffff",
                      }}
                      countrySelectorStyleProps={{
                        buttonStyle: {
                          background: "rgba(255,255,255,0.15)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: "10px",
                          color: "#fff",
                        },
                        dropdownStyleProps: {
                          style: {
                            backgroundColor: "#ffffff",
                            color: "#111827",
                            borderRadius: "12px",
                            zIndex: 99999,
                            position: "absolute",
                            boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="w-full min-w-0">
                  <label className="text-xs sm:text-sm text-white/70 mb-2 block">
                    Preferred Date *
                  </label>

                  <input
                    type="date"
                    name="date"
                    min={today}
                    required
                    className="w-full min-w-0 max-w-full box-border overflow-hidden appearance-none text-[16px] sm:text-base rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/20 transition-all"
                    style={{
                      WebkitAppearance: "none", // ✅ Safari fix
                    }}
                  />
                </div>

                {/* Time */}
                <div className="w-full min-w-0">
                  <label className="text-xs sm:text-sm text-white/70 mb-2 block">
                    Preferred Time *
                  </label>

                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full min-w-0 max-w-full box-border overflow-hidden appearance-none text-[16px] sm:text-base rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/20 transition-all"
                    style={{
                      WebkitAppearance: "none", // ✅ Safari fix
                    }}
                  />
                </div>
              </div>

              {/* Note */}
              <p className="text-xs text-white/50">
                All times are in Nepal Standard Time (NPT)
              </p>

              {/* CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: secondaryColor }}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-slate-900 shadow-md transition-all duration-200 ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:scale-[1.02] hover:shadow-lg"
                  }`}
                >
                  {loading ? "Booking..." : "Book Consultation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
