import { Facebook, Github, Globe, Linkedin, Twitter } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getUsefulLinks } from "../../services/api"; // adjust path
import Logo from "./../../assets/images/logo-light.svg";

/* -----------------------------
STATIC LINKS (OBJECT BASED)
----------------------------- */

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

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await getUsefulLinks();
        setUsefulLinks(data);
      } catch (error) {
        console.error("Failed to load useful links", error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <footer className="relative bg-[#0E1B3D] text-white">
      {/* WAVE TOP */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="block h-20 w-full"
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
                className="h-auto w-full"
              />
            </div>

            <p className="max-w-sm text-sm text-white/70">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid gap-10 grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {/* USEFUL LINKS (API) */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Useful Links
              </h4>

              <ul className="space-y-3 text-sm text-white/70">
                {usefulLinks.map((link) => (
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
            <a href="#">
              <Twitter size={18} />
            </a>
            <a href="#">
              <Linkedin size={18} />
            </a>
            <a href="#">
              <Facebook size={18} />
            </a>
            <a href="#">
              <Github size={18} />
            </a>
            <a href="#">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
