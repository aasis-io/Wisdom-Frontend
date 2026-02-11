import {
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Logo from "./../../assets/images/logo-dark.svg";

/* ================= Static Site Settings ================= */
const SITE_SETTINGS = {
  phone: "984-7947004",
  email: "waarc2022@gmail.com",
  location: "Chandragiri-6, Kathmandu",
  facebook: "https://www.facebook.com/profile.php?id=100083376210991",
  twitter: "/",
  linkedin: "/",
  youtube: "https://www.youtube.com/@wisdomacademyandresearchce4071",
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Work With Us",
    children: [
      { label: "Careers", href: "/" },
      { label: "Collaboration", href: "/" },
    ],
  },

  {
    label: "About Us",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    label: "Media",
    children: [{ label: "Gallery", href: "/gallery" }],
  },
  { label: "Journal Database", href: "/journals" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpenMenu, setDesktopOpenMenu] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  /* Close desktop dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(e) {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setDesktopOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* Close mobile dropdown on outside click */
  useEffect(() => {
    function handleClickOutside(e) {
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="relative z-30 w-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
        {/* ================= Top Bar (Desktop) ================= */}
        <div className="hidden md:block bg-[#0E1B3D] text-white text-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="text-[#F4B740]" size={14} />
                <span>+977-{SITE_SETTINGS.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-[#F4B740]" size={14} />
                <span>{SITE_SETTINGS.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#F4B740]" size={14} />
                <span>{SITE_SETTINGS.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[
                { icon: Facebook, link: SITE_SETTINGS.facebook },
                { icon: Youtube, link: SITE_SETTINGS.youtube },
                { icon: Twitter, link: SITE_SETTINGS.twitter },
                { icon: Linkedin, link: SITE_SETTINGS.linkedin },
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D] hover:opacity-80 transition"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= Mobile Top Bar ================= */}
        <div className="block md:hidden bg-[#0E1B3D] text-white text-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <div className="flex items-center gap-2">
              <Phone className="text-[#F4B740]" size={14} />
              <span>+977-{SITE_SETTINGS.phone}</span>
            </div>
            <a
              href={`tel:+977${SITE_SETTINGS.phone}`}
              className="rounded bg-[#F4B740] px-3 py-1 text-[#0E1B3D] font-medium"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* ================= Main Navbar ================= */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/">
            <img src={Logo} alt="WAARC Logo" className="h-16 w-auto" />
          </Link>

          {/* ========== Desktop Navigation ========== */}
          <nav
            ref={desktopRef}
            className="hidden lg:flex items-center gap-8 text-base font-medium text-gray-800"
          >
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setDesktopOpenMenu(
                        desktopOpenMenu === item.label ? null : item.label
                      )
                    }
                    className="flex items-center gap-1 hover:text-[#F4B740]"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        desktopOpenMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {desktopOpenMenu === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setDesktopOpenMenu(null)}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="hover:text-[#F4B740]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* ========== Right Actions ========== */}
          <div className="flex items-center gap-4">
            <Search size={16} className="text-gray-700" />

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#0E1B3D] px-5 py-3 rounded-lg text-sm text-white"
            >
              <Mail size={18} />
              Contact Us
            </Link>

            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={26} className="text-[#0E1B3D]" />
              ) : (
                <Menu size={26} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* ================= Mobile Menu ================= */}
        <div
          className={`absolute left-0 top-full w-full bg-white shadow-md lg:hidden transition-all ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav
            ref={mobileRef}
            className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700"
          >
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileOpenMenu(
                        mobileOpenMenu === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between py-2"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileOpenMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileOpenMenu === item.label &&
                    item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-gray-100"
                      >
                        {child.label}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              to="/contact"
              className="mt-4 flex items-center gap-2 rounded-lg bg-[#F4B740] px-4 py-2 text-[#0E1B3D]"
            >
              <Mail size={18} />
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Background Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
