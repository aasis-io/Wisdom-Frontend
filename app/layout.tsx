import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";
import GlobalAlert from "@/components/GlobalAlert";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waarc.edu.np"),
  title: {
    default: "Wisdom Academy & Research Center (WAARC)",
    template: "%s | WAARC",
  },
  description:
    "Wisdom Academy & Research Center (WAARC) is a Nepal-based research and consultancy organization providing academic and professional services.",
  keywords: ["WAARC", "Nepal research center", "education Nepal", "consultancy Nepal", "Wisdom Academy"],
  authors: [{ name: "Wisdom Academy & Research Center (WAARC)" }],
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Wisdom Academy & Research Center",
    type: "website",
    images: [{ url: "/og-image.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.webp"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Wisdom Academy & Research Center",
      alternateName: ["WAARC", "Wisdom Academy"],
      url: "https://waarc.edu.np/",
    },
    {
      "@type": "Organization",
      name: "Wisdom Academy & Research Center",
      alternateName: "WAARC",
      url: "https://waarc.edu.np/",
      logo: "https://waarc.edu.np/images/logo-light.svg",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <GlobalAlert />
        <div className="min-h-screen bg-offwhite flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
        <Toaster position="top-center" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
