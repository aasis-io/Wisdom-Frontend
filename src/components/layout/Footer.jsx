import { Facebook, Github, Globe, Linkedin, Twitter } from "lucide-react";
import React from "react";

import Logo from "./../../assets/images/logo-light.svg"; // adjust path

export default function Footer() {
  return (
    <footer className="relative bg-[#0E1B3D] text-white">
      {/* WAVE TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
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

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-28">
        {/* OUTER GRID */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* BRANDING — 40% */}
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

          {/* LINKS — 60% */}
          <div className="grid gap-10 grid-cols-2 lg:col-span-3 lg:grid-cols-4">
            {/* QUICK LINKS */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Future Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Company
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    News
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Social
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/10" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-white/60">
            © 2025 WAARC. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-white/70">
            <a href="#" className="hover:text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Github size={18} />
            </a>
            <a href="#" className="hover:text-white">
              <Globe size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
