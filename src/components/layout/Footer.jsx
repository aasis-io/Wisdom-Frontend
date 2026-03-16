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

export default function Footer() {
  const [usefulLinks, setUsefulLinks] = useState([]);
  const [socials, setSocials] = useState({});

  useEffect(() => {
    getUsefulLinks()
      .then(setUsefulLinks)
      .catch(() => {});
    getSiteSettings()
      .then(setSocials)
      .catch(() => {});
  }, []);

  const socialIconsMap = [
    { name: "facebook", icon: Facebook },
    { name: "twitter", icon: Twitter },
    { name: "linkedin", icon: Linkedin },
    { name: "instagram", icon: Instagram },
    { name: "youtube", icon: Youtube },
  ];

  // Placeholder skeleton for links to reserve space
  const renderLinks = (links, placeholderCount = 3) =>
    links.length > 0
      ? links.map((link) => (
          <li key={link.id || link.name}>
            <a
              href={link.link || link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {link.title || link.name}
            </a>
          </li>
        ))
      : Array(placeholderCount)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <span className="inline-block h-4 w-24 bg-white/20 animate-pulse rounded"></span>
            </li>
          ));

  return (
    <footer className="relative bg-[#0E1B3D] text-white">
      {/* WAVE TOP */}
      <div
        className="absolute -top-1 left-0 w-full overflow-hidden leading-none z-10"
        style={{ height: "80px" }}
      >
        <svg
          className="block h-full w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
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
          <div className="lg:col-span-2">
            <div className="mb-4 w-56">
              <img
                src={Logo}
                alt="Wisdom Academy & Research Center"
                width={224}
                height={56}
                className="w-full h-auto"
              />
            </div>

            <p className="max-w-sm text-sm text-white/70 min-h-6">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid gap-10 grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Useful Links
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {renderLinks(usefulLinks)}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {renderLinks(quickLinks)}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                {renderLinks(companyLinks)}
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row min-h-6">
          <p className="text-sm text-white/60">
            © 2026 WAARC. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-white/70 min-h-4.5">
            {socialIconsMap.map(({ name, icon: Icon }) => {
              const link = socials[name];
              return (
                <a
                  key={name}
                  href={link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${name} page`}
                  className={`hover:text-white ${
                    !link ? "pointer-events-none opacity-0" : ""
                  }`}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
