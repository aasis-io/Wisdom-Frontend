"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Book Consultation", href: "/schedule-consultation" },
  { name: "Contact Us", href: "/contact" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/career" },
];

const socialIconsMap = [
  { name: "facebook", icon: Facebook },
  { name: "twitter", icon: Twitter },
  { name: "linkedin", icon: Linkedin },
  { name: "instagram", icon: Instagram },
  { name: "youtube", icon: Youtube },
];

function LinkSkeleton({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="h-5"><div className="h-4 w-28 rounded bg-white/10" /></li>
      ))}
    </>
  );
}

function LinkColumn({ heading, links = [], loading, slots }: { heading: string; links: any[]; loading: boolean; slots: number }) {
  const safeLinks = links.slice(0, slots);
  return (
    <div className="min-h-[220px]">
      <h4 className="mb-4 text-sm font-semibold text-white/90">{heading}</h4>
      <ul className="space-y-3 text-sm text-white/70 min-h-[160px]">
        {loading ? (
          <LinkSkeleton count={slots} />
        ) : (
          Array.from({ length: slots }).map((_, i) => {
            const link = safeLinks[i];
            return (
              <li key={i} className="h-5">
                {link ? (
                  <Link href={link.link || link.href} className="block h-5 hover:text-white transition-colors">
                    {link.title || link.name}
                  </Link>
                ) : (
                  <div className="h-4 w-24 opacity-0" />
                )}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [usefulLinks, setUsefulLinks] = useState<any[]>([]);
  const [socials, setSocials] = useState<any>({});
  const [loadingLinks, setLoadingLinks] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getLink`)
      .then((r) => r.json())
      .then((data) => { setUsefulLinks(data || []); setLoadingLinks(false); })
      .catch(() => setLoadingLinks(false));

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getSiteSettings`)
      .then((r) => r.json())
      .then((data) => { setSocials(data || {}); })
      .catch(() => {});
  }, []);

  return (
    <footer className="relative bg-[#0E1B3D] text-white" style={{ contain: "layout paint style" }}>
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-28">
        <div className="grid gap-12 lg:grid-cols-5 min-h-[220px]">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5 min-h-[160px]">
            <div className="w-56 h-[56px]">
              <Image src="/images/logo-light.svg" alt="WAARC" width={224} height={56} className="w-full h-full object-contain" loading="eager" />
            </div>
            <p className="text-sm text-white/70 min-h-[40px]">Top learning experiences that create more talent in the world.</p>
          </div>

          {/* Links */}
          <div className="grid gap-10 grid-cols-2 lg:grid-cols-3 lg:col-span-3 min-h-[200px]">
            <LinkColumn heading="Useful Links" links={usefulLinks} loading={loadingLinks} slots={4} />
            <LinkColumn heading="Quick Links" links={quickLinks} loading={false} slots={5} />
            <LinkColumn heading="Company" links={companyLinks} loading={false} slots={3} />
          </div>
        </div>

        <div className="my-10 h-px bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 min-h-[56px]">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} WAARC. All rights reserved.</p>
          <div className="flex items-center gap-2 h-9 min-w-[220px]">
            {socialIconsMap.map(({ name, icon: Icon }) => {
              const link = socials?.[name];
              return (
                <a
                  key={name} href={link || "#"} aria-label={name}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10"
                  style={{ opacity: link ? 1 : 0.35 }}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
