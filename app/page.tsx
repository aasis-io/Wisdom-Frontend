import type { Metadata } from "next";
import AboutSection from "@/components/layout/AboutSection";
import EventRegistrationSection from "@/components/layout/EventRegistrationSection";
import FuturePlans from "@/components/layout/FuturePlans";
import HeroSection from "@/components/layout/HeroSection";
import OurWorks from "@/components/layout/OurWorks";
import Services from "@/components/layout/Services";
import Link from "next/link";

async function getHomeData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/getHome`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();

    // Normalize image URL server-side
    if (data?.image && !data.image.startsWith("http")) {
      const baseUrl = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/$/, "");
      data.image = `${baseUrl}${data.image.startsWith("/") ? "" : "/"}${data.image}`;
    }
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomeData();
  return {
    title: data?.metaTitle || "Wisdom Academy & Research Center (WAARC)",
    description:
      data?.metaDescription ||
      "Wisdom Academy & Research Center (WAARC) is a Nepal-based research and consultancy organization providing academic and professional services.",
    keywords: data?.metaKeywords || "WAARC, Nepal research center, education Nepal, consultancy Nepal",
    alternates: { canonical: "https://waarc.edu.np/" },
    openGraph: {
      title: data?.metaTitle || "Wisdom Academy & Research Center (WAARC)",
      description: data?.metaDescription || "",
      url: "https://waarc.edu.np/",
      images: [{ url: data?.image || "/og-image.webp" }],
    },
    twitter: {
      title: data?.metaTitle || "Wisdom Academy & Research Center (WAARC)",
      description: data?.metaDescription || "",
      images: [data?.image || "/og-image.webp"],
    },
  };
}

export default async function HomePage() {
  const homeData = await getHomeData();

  return (
    <section>
      {/* SEO-only H1 for Google site name detection */}
      <h1 className="sr-only">Wisdom Academy & Research Center</h1>

      <HeroSection homeData={homeData} />

      <div className="bg-white py-12 lg:py-8">
        <Services />
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-block rounded-xl border border-gray-300 px-8 py-3 text-sm font-semibold text-[#1e2a4a] transition hover:bg-gray-100"
          >
            Explore All Services
          </Link>
        </div>
      </div>

      <AboutSection />
      <OurWorks />
      <EventRegistrationSection />
      <FuturePlans />
    </section>
  );
}
