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
      {/* ================= Header (Always Sharp) ================= */}
      <header className="relative z-30 w-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.04)]">
        {/* Top info bar */}
        <div className="hidden md:block bg-[#0E1B3D] text-white text-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#F4B740]" />
                <span>+977-9841XXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#F4B740]" />
                <span>info@waarc.org</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#F4B740]" />
                <span>Chandragiri Municipality - 6, Kathmandu</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4B740] text-[#0E1B3D] hover:opacity-90"
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div className="block md:hidden bg-[#0E1B3D] text-white text-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
            {/* Left: Phone icon and number */}
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#F4B740]" />
              <span>+977-9840033688</span>
            </div>

            {/* Right: Call Now button */}
            <a
              href="tel:+9779840033688"
              className="rounded bg-[#F4B740] px-3 py-1 text-[#0E1B3D] font-medium hover:opacity-90"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Main navbar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to={"/"}>
            <img src={Logo} alt="WAARC Logo" className="h-16 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 text-base font-medium text-gray-800 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="transition-colors hover:text-[#F4B740]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-[#0E1B3D]">
              <FaSearch size={16} />
            </button>

            <Link to={"/contact"} className="hidden md:inline-flex items-center gap-2 bg-[#0E1B3D] px-5 py-3 rounded-lg text-sm font-medium text-white hover:opacity-90">
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

        {/* Mobile menu */}
        <div
          className={`absolute left-0 top-full z-40 w-full border-t border-gray-200 bg-white shadow-md transition-all duration-300 lg:hidden ${
            mobileOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
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

            <Link to={"/contact"} className="mt-4 flex items-center gap-2 rounded-lg bg-[#F4B740] px-4 py-2 text-sm font-medium text-[#0E1B3D]">
              <HiOutlineMail size={18} />
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= Background Blur (Behind Header) ================= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
