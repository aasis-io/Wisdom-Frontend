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

// CLS FIX: skeleton items must match the exact height of real links
// (text-sm = 14px, leading-5 = 20px line-height) so swapping them
// in never causes a height change.
function LinkSkeleton({ count }) {
  return Array.from({ length: count }, (_, i) => (
    <li key={i} className="leading-5">
      <span className="inline-block h-3.5 w-24 rounded bg-white/20 animate-pulse" />
    </li>
  ));
}

function LinkColumn({ heading, links, loading, skeletonCount }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-white/90">{heading}</h4>
      <ul className="space-y-3 text-sm text-white/70">
        {loading ? (
          <LinkSkeleton count={skeletonCount} />
        ) : (
          links.map((link) => (
            <li key={link.id || link.name} className="leading-5">
              <a
                href={link.link || link.href}
                target={link.link ? "_blank" : undefined}
                rel={link.link ? "noopener noreferrer" : undefined}
                className="hover:text-white transition-colors"
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
  const [usefulLinks, setUsefulLinks] = useState(null); // null = loading
  const [socials, setSocials] = useState(null); // null = loading

  useEffect(() => {
    getUsefulLinks()
      .then(setUsefulLinks)
      .catch(() => setUsefulLinks([]));
    getSiteSettings()
      .then(setSocials)
      .catch(() => setSocials({}));
  }, []);

  const usefulLoading = usefulLinks === null;
  const socialsLoading = socials === null;

  return (
    <footer className="relative bg-[#0E1B3D] text-white">
      {/* WAVE
          CLS FIX: h-16 on the wrapper reserves exactly 64px before the SVG
          is parsed, so nothing below it shifts on load. */}
      <div className="absolute -top-1 left-0 w-full h-16 overflow-hidden leading-none z-10">
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
        <div className="grid gap-12 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* CLS FIX: aspect-[224/56] on the wrapper tells the browser
                exactly how tall the logo slot is before the SVG file arrives.
                Without this, height is 0 until the asset loads → shift.
                w-full h-full on the img fills that reserved space. */}
            <div className="w-56 aspect-224/56">
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

            {/* CLS FIX: removed min-h-6 — that was masking a font-swap shift,
                not fixing it. Fix font shifts at the source with
                font-display: optional in your global @font-face rule. */}
            <p className="max-w-sm text-sm text-white/70">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid gap-10 grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            <LinkColumn
              heading="Useful Links"
              links={usefulLinks ?? []}
              loading={usefulLoading}
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

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} WAARC. All rights reserved.
          </p>

          {/* CLS FIX: h-[34px] on the row reserves the exact height of the
              social buttons while the API call is in-flight. Skeleton circles
              are the same 34×34 as the real buttons so no shift occurs when
              they swap in. Hiding icons with opacity-0 (old approach) kept
              them in the layout but invisible — that still caused shifts when
              the row height changed. */}
          <div className="flex items-center gap-2 h-8.5">
            {socialsLoading
              ? socialIconsMap.map(({ name }) => (
                  <div
                    key={name}
                    className="w-8.5 h-8.5 rounded-full bg-white/10 animate-pulse"
                    aria-hidden="true"
                  />
                ))
              : socialIconsMap.map(({ name, icon: Icon }) => {
                  const link = socials?.[name];
                  if (!link) return null;
                  return (
                    <a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${name} page`}
                      className="flex items-center justify-center w-8.5 h-8.5 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                    >
                      <Icon size={16} aria-hidden="true" />
                    </a>
                  );
                })}
          </div>
        </div>
      </div>
    </footer>
  );
}
