import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Career | WAARC",
  description: "Explore career opportunities at Wisdom Academy & Research Center (WAARC), Nepal.",
  alternates: { canonical: "https://waarc.edu.np/career" },
};

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Work with us", link: "" },
  { name: "Career", link: "/career" },
];

export default function CareerPage() {
  return (
    <div className="bg-white">
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <div className="h-96 flex items-center justify-center">
        <div className="p-8 max-w-md text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-6">
            We appreciate your interest in joining our team. <br />
            Currently, there are no vacancies available. Please stay in touch for future opportunities.
          </p>
          <Link
            href="/"
            className="px-8 py-4 bg-[#0E1B3D] text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
