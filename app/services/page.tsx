import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Services from "@/components/layout/Services";

export const metadata: Metadata = {
  title: "Our Services | WAARC",
  description: "Comprehensive research and consultancy services from Wisdom Academy & Research Center — tailored to informed decision-making.",
  alternates: { canonical: "https://waarc.edu.np/services" },
  openGraph: { title: "Our Services | WAARC", url: "https://waarc.edu.np/services" },
};

const breadcrumbsData = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbsData} />
      <section className="bg-white py-8 lg:py-8">
        <Services />
      </section>
    </>
  );
}
