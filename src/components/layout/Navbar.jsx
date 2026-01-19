import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";
import Logo from "./../../assets/images/logo-dark.svg";

/* ================= Static Site Settings ================= */
const SITE_SETTINGS = {
  phone: "9840033688",
  email: "waarc2022@gmail.com",
  location: "Kathmandu, Nepal",
  facebook: "https://facebook.com/waarccenter",
  twitter: "https://twitter.com/waarccenter",
  linkedin: "https://linkedin.com/company/waarccenter",
  youtube: "https://youtube.com/@waarccenter",
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Journal Database", href: "/journals" },
  { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ================= Header ================= */}
      <header className="relative z-30 w-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
        {/* Top info bar (Desktop) */}
        <div className="hidden md:block bg-[#0E1B3D] text-white text-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#F4B740]" />
                <span>+977-{SITE_SETTINGS.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#F4B740]" />
                <span>{SITE_SETTINGS.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#F4B740]" />
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
                <FaFacebookF size={14} />
              </a>
              <a
                href={SITE_SETTINGS.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D]"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href={SITE_SETTINGS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D]"
              >
                <FaLinkedinIn size={14} />
              </a>
              <a
                href={SITE_SETTINGS.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D]"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile top bar */}
        <div className="block md:hidden bg-[#0E1B3D] text-white text-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#F4B740]" />
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

          <nav className="hidden lg:flex items-center gap-8 text-base font-medium text-gray-800">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-[#F4B740]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-[#0E1B3D]">
              <FaSearch size={16} />
            </button>

            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#0E1B3D] px-5 py-3 rounded-lg text-sm font-medium text-white"
            >
              <HiOutlineMail size={20} />
              Contact Us
            </Link>

            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <RxCross2 size={26} className="text-[#0E1B3D]" />
              ) : (
                <HiOutlineMenuAlt3 size={26} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-full w-full bg-white border-t shadow-md transition-all lg:hidden ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-[#0E1B3D]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-4 flex items-center gap-2 rounded-lg bg-[#F4B740] px-4 py-2 text-sm font-medium text-[#0E1B3D]"
            >
              <HiOutlineMail size={18} />
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
