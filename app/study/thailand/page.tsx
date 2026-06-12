import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Study in Thailand | WAARC",
  description: "Affordable education, globally recognized universities, and a student-friendly environment for Nepali students in Thailand.",
  alternates: { canonical: "https://waarc.edu.np/study/thailand" },
  openGraph: { title: "Study in Thailand | WAARC", url: "https://waarc.edu.np/study/thailand" },
};

const sections = [
  {
    title: "Universities",
    description: "Partner universities in Thailand offering internationally recognized programs with affordable tuition fees and modern campuses.",
  },
  {
    title: "Intakes",
    description: "Multiple intakes throughout the year, allowing flexibility and faster enrollment compared to many other destinations.",
  },
  {
    title: "Pre-Enrollment Support",
    description: "Complete assistance with document preparation, eligibility checks, application submission, and interview guidance.",
  },
  {
    title: "Scholarships",
    description: "Guidance on merit-based and university-specific scholarships to help reduce tuition and living expenses.",
  },
];

export default function ThailandPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/services/study-advisory" className="hover:text-slate-900">Study</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-slate-900">Thailand</span>
          </div>
        </div>
      </section>

      {/* HERO BANNER */}
      <section className="relative h-[50vh] min-h-96">
        <Image
          src="/images/thailand-banner.jpg"
          alt="Study in Thailand"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <h1 className="text-5xl font-bold text-white">Study in Thailand</h1>
            <p className="mt-5 text-lg text-gray-200">
              Affordable education, globally recognized universities, and a student-friendly environment for Nepali students.
            </p>
            <Link
              href="/schedule-consultation"
              className="mt-8 inline-block rounded-xl bg-[#f2b84b] px-8 py-3 text-sm font-semibold text-[#1e2a4a] transition hover:bg-[#e6ac3f]"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">Why Study in Thailand?</h2>
            <p className="mt-4 text-slate-600">
              Thailand has become an emerging education destination in Asia, offering quality programs at affordable costs with simplified admission processes.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {sections.map((item, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 p-7 transition hover:shadow-md">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
