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
  {
    label: "About Us",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Journal Database", href: "/journals" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const desktopRef = useRef(null); // Desktop dropdown reference
  const mobileRef = useRef(null); // Mobile dropdown reference

  // Close desktop dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (desktopRef.current && !desktopRef.current.contains(event.target)) {
        setDesktopAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* ================= Header ================= */}
      <header className="relative z-30 w-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
        {/* Top info bar (Desktop) */}
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
              <a
                href={SITE_SETTINGS.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D]"
              >
                <Facebook size={14} />
              </a>
              <a
                href={SITE_SETTINGS.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D]"
              >
                <Youtube size={14} />
              </a>
              <a
                href={SITE_SETTINGS.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D]"
              >
                <Twitter size={14} />
              </a>
              <a
                href={SITE_SETTINGS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D]"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile top bar */}
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

        {/* Main Navbar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/">
            <img src={Logo} alt="WAARC Logo" className="h-16 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-gray-800 relative">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} ref={desktopRef} className="relative">
                  <button
                    className="flex items-center gap-1 hover:text-[#F4B740] transition-colors"
                    onClick={() => setDesktopAboutOpen((prev) => !prev)}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        desktopAboutOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {desktopAboutOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-lg bg-white shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          onClick={() => setDesktopAboutOpen(false)}
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
                  className="hover:text-[#F4B740] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-[#0E1B3D] transition-colors">
              <Search size={16} />
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#0E1B3D] px-5 py-3 rounded-lg text-sm font-medium text-white"
            >
              <Mail size={20} />
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

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full w-full bg-white shadow-md transition-all lg:hidden ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} ref={mobileRef}>
                  <button
                    className="flex w-full items-center justify-between px-2 py-2 hover:text-[#0E1B3D] transition-colors"
                    onClick={() => setMobileAboutOpen((prev) => !prev)}
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        mobileAboutOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {mobileAboutOpen &&
                    item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
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
                  className="hover:text-[#0E1B3D] px-2 py-2 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              to="/contact"
              className="mt-4 flex items-center gap-2 rounded-lg bg-[#F4B740] px-4 py-2 text-sm font-medium text-[#0E1B3D] transition-colors"
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
