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
    const fetchLinks = async () => {
      try {
        const data = await getUsefulLinks();
        setUsefulLinks(data);
      } catch (error) {
        console.error("Failed to load useful links", error);
      }
    };

    const fetchSettings = async () => {
      try {
        const data = await getSiteSettings();
        setSocials(data);
      } catch (error) {
        console.error("Failed to load site settings", error);
      }
    };

    fetchLinks();
    fetchSettings();
  }, []);

  const socialIconsMap = [
    { name: "facebook", icon: Facebook },
    { name: "twitter", icon: Twitter },
    { name: "linkedin", icon: Linkedin },
    { name: "instagram", icon: Instagram },
    { name: "youtube", icon: Youtube },
  ];

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
                width={224} // reserve width
                height={56} // reserve height (maintain aspect ratio)
                className="w-full h-auto"
              />
            </div>

            <p className="max-w-sm text-sm text-white/70">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid gap-10 grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {/* USEFUL LINKS */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Useful Links
              </h4>

              <ul className="space-y-3 text-sm text-white/70">
                {usefulLinks.length > 0
                  ? usefulLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))
                  : Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <li key={i}>
                          <span className="inline-block h-4 w-24 bg-white/20 animate-pulse rounded"></span>
                        </li>
                      ))}
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Quick Links
              </h4>

              <ul className="space-y-3 text-sm text-white/70">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Company
              </h4>

              <ul className="space-y-3 text-sm text-white/70">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/60">
            © 2026 WAARC. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-white/70">
            {socialIconsMap.map(({ name, icon: Icon }) => {
              const link = socials[name];
              return (
                <a
                  key={name}
                  href={link || "#"} // reserve space even if empty
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
