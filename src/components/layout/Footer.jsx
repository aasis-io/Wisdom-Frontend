import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getSiteSettings, getUsefulLinks } from "../../services/api";
import Logo from "./../../assets/images/logo-light.svg";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/work" },
  { name: "Future Plans", href: "/future-plans" },
  { name: "Contact Us", href: "/contact" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "News", href: "/news" },
];

const socialIconsMap = [
  { name: "facebook", icon: Facebook },
  { name: "twitter", icon: Twitter },
  { name: "linkedin", icon: Linkedin },
  { name: "instagram", icon: Instagram },
  { name: "youtube", icon: Youtube },
];

function LinkSkeleton({ count }) {
  return Array.from({ length: count }).map((_, i) => (
    <li key={i} className="h-5">
      <div className="h-4 w-32 rounded bg-white/10 animate-pulse" />
    </li>
  ));
}

function LinkColumn({ heading, links, loading, skeletonCount }) {
  return (
    <div className="min-h-[200px]">
      <h4 className="mb-4 text-sm font-semibold text-white/90">{heading}</h4>

      <ul className="space-y-3 text-sm text-white/70 min-h-[140px]">
        {loading ? (
          <LinkSkeleton count={skeletonCount} />
        ) : (
          links.slice(0, skeletonCount).map((link, idx) => (
            <li key={link.id || link.name || idx} className="h-5">
              <a
                href={link.link || link.href}
                target={link.link ? "_blank" : undefined}
                rel={link.link ? "noopener noreferrer" : undefined}
                className="hover:text-white transition-colors block h-5"
              >
                {link.title || link.name}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default function Footer() {
  // ✅ NEVER NULL → prevents layout shift
  const [usefulLinks, setUsefulLinks] = useState([]);
  const [socials, setSocials] = useState({});

  const [loadingLinks, setLoadingLinks] = useState(true);
  const [loadingSocials, setLoadingSocials] = useState(true);

  useEffect(() => {
    getUsefulLinks()
      .then((data) => {
        setUsefulLinks(data || []);
        setLoadingLinks(false);
      })
      .catch(() => {
        setUsefulLinks([]);
        setLoadingLinks(false);
      });

    getSiteSettings()
      .then((data) => {
        setSocials(data || {});
        setLoadingSocials(false);
      })
      .catch(() => {
        setSocials({});
        setLoadingSocials(false);
      });
  }, []);

  return (
    <footer className="relative bg-[#0E1B3D] text-white contain-layout">
      {/* Wave (fixed height, no shift) */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden pointer-events-none">
        <svg
          className="block h-full w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,30 C240,45 480,25 720,30 960,35 1200,45 1440,30 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-28">
        <div className="grid gap-12 lg:grid-cols-5 min-h-[220px]">
          {/* BRAND */}
          <div className="lg:col-span-2 flex flex-col gap-5 min-h-[160px]">
            <div className="w-56 h-[56px]">
              <img
                src={Logo}
                alt="Wisdom Academy & Research Center"
                width={224}
                height={56}
                className="w-full h-full object-contain"
                loading="eager"
                decoding="async"
              />
            </div>

            <p className="max-w-sm text-sm text-white/70 min-h-[40px]">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid gap-10 grid-cols-2 lg:col-span-3 lg:grid-cols-3 min-h-[200px]">
            <LinkColumn
              heading="Useful Links"
              links={usefulLinks}
              loading={loadingLinks}
              skeletonCount={4}
            />

            <LinkColumn
              heading="Quick Links"
              links={quickLinks}
              loading={false}
              skeletonCount={5}
            />

            <LinkColumn
              heading="Company"
              links={companyLinks}
              loading={false}
              skeletonCount={3}
            />
          </div>
        </div>

        {/* Divider (fixed height) */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom (stable layout) */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row min-h-[56px]">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} WAARC. All rights reserved.
          </p>

          <div className="flex items-center gap-2 h-9">
            {socialIconsMap.map(({ name, icon: Icon }) => {
              const link = socials?.[name];

              return (
                <a
                  key={name}
                  href={link || "#"}
                  aria-label={name}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/70"
                  style={{
                    opacity: link ? 1 : 0.35,
                    minWidth: "36px",
                    minHeight: "36px",
                  }}
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
