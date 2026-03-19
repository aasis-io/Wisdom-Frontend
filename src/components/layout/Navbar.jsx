import {
  ChevronDown,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { getSiteSettings } from "../../services/api";
import Logo from "./../../assets/images/logo-dark.svg";

// ─── Constants ────────────────────────────────────────────────────────────────

const DEFAULT_SETTINGS = {
  phone: "",
  email: "",
  location: "",
  facebook: "",
  twitter: "",
  linkedin: "",
  youtube: "",
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Work With Us",
    children: [
      { label: "Careers", href: "/career" },
      { label: "Collaboration", href: "/collaborate" },
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

const SOCIALS = [
  { key: "facebook", Icon: Facebook, label: "Facebook" },
  { key: "youtube", Icon: Youtube, label: "YouTube" },
  { key: "twitter", Icon: Twitter, label: "X (Twitter)" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Inline skeleton bar — matches surrounding text height so no layout shift
function Skeleton({ width = 80 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width,
        height: "0.75em",
        borderRadius: 3,
        verticalAlign: "middle",
        background: "rgba(255,255,255,0.18)",
        animation: "nb-pulse 1.4s ease-in-out infinite",
      }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Navbar() {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [settings, setSettings] = useState(null); // null = loading
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const mobileRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpen(null);
  }, [location.pathname]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fetch settings
  useEffect(() => {
    getSiteSettings()
      .then((data) => setSettings({ ...DEFAULT_SETTINGS, ...data }))
      .catch(() => setSettings(DEFAULT_SETTINGS));
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDesktopOpen(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Keyboard: close dropdown on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setDesktopOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleDesktop = useCallback(
    (label) => setDesktopOpen((prev) => (prev === label ? null : label)),
    []
  );
  const toggleMobileSub = useCallback(
    (label) => setMobileSubOpen((prev) => (prev === label ? null : label)),
    []
  );

  const loading = settings === null;

  return (
    <>
      {/* ── Scoped styles ───────────────────────────────────────────────── */}
      <style>{`
        @keyframes nb-pulse {
          0%,100% { opacity:.45; }
          50%      { opacity:.9;  }
        }
        @keyframes nb-dropdown {
          from { opacity:0; transform:translateY(-6px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes nb-mobile-in {
          from { opacity:0; transform:translateX(24px); }
          to   { opacity:1; transform:translateX(0);    }
        }

        /* ── Tokens ── */
        .nb {
          --nb-navy:   #0E1B3D;
          --nb-gold:   #F4B740;
          --nb-gold-d: #d89e30;
          --nb-text:   #1e293b;
          --nb-muted:  #64748b;
          --nb-bg:     #ffffff;
          --nb-border: rgba(0,0,0,0.07);
          --nb-font:   'Geist', 'DM Sans', system-ui, sans-serif;
          font-family: var(--nb-font);
        }

        /* ── Topbar ── */
        .nb-topbar {
          background: var(--nb-navy);
          color: rgba(255,255,255,0.80);
          font-size: 0.75rem;
          line-height: 1;
          /*
            CLS FIX: explicit height so the bar never reflows when
            dynamic contact text/social icons arrive from the API.
          */
          height: 40px;
          display: flex;
          align-items: center;
        }
        .nb-topbar-inner {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .nb-topbar-left  { display: flex; align-items: center; gap: 20px; }
        .nb-topbar-right { display: flex; align-items: center; gap: 6px;  }

        .nb-contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          white-space: nowrap;
          transition: color .15s;
        }
        .nb-contact-item:hover { color: #fff; }
        .nb-contact-item svg { color: var(--nb-gold); flex-shrink: 0; }

        /*
          CLS FIX: each contact slot has a fixed min-width that matches
          the widest possible content. The skeleton bar fills that exact space.
        */
        .nb-contact-phone { min-width: 110px; }
        .nb-contact-email { min-width: 160px; }
        .nb-contact-loc   { min-width: 180px; }

        /* Social icon buttons */
        .nb-social {
          display: flex;
          align-items: center;
          justify-content: center;
          /* CLS FIX: fixed size so layout doesn't shift when icons appear */
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--nb-gold);
          color: var(--nb-navy);
          text-decoration: none;
          flex-shrink: 0;
          transition: opacity .15s, transform .15s;
        }
        .nb-social:hover { opacity:.82; transform:scale(1.08); }
        /* skeleton social circle */
        .nb-social-sk {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          flex-shrink: 0;
          animation: nb-pulse 1.4s ease-in-out infinite;
        }

        /* ── Mobile topbar ── */
        .nb-topbar-mobile {
          background: var(--nb-navy);
          color: rgba(255,255,255,0.80);
          font-size: 0.75rem;
          height: 40px;
          display: flex;
          align-items: center;
        }
        .nb-topbar-mobile-inner {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nb-call-btn {
          background: var(--nb-gold);
          color: var(--nb-navy);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 5px;
          text-decoration: none;
          white-space: nowrap;
          transition: background .15s;
        }
        .nb-call-btn:hover { background: var(--nb-gold-d); }

        /* ── Main bar ── */
        .nb-main {
          background: var(--nb-bg);
          transition: box-shadow .2s;
        }
        .nb-main.scrolled {
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
        }
        .nb-main-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
          /*
            CLS FIX: fixed height so the bar never collapses or expands
            while the logo SVG loads.
          */
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* ── Logo ── */
        /*
          CLS FIX: wrapper reserves exact space (64×64) via aspect-ratio
          before the SVG asset is fetched, preventing unsized-image shift.
        */
        .nb-logo-wrap {
          width: 64px;
          aspect-ratio: 1 / 1;
          flex-shrink: 0;
        }
        .nb-logo-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* ── Desktop nav ── */
        .nb-desktop-nav {
          display: none;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        @media (min-width: 1024px) { .nb-desktop-nav { display: flex; } }

        .nb-nav-link,
        .nb-nav-btn {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--nb-text);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          transition: background .15s, color .15s;
          position: relative;
        }
        .nb-nav-link:hover,
        .nb-nav-btn:hover,
        .nb-nav-btn[aria-expanded="true"] {
          background: rgba(244,183,64,0.10);
          color: var(--nb-navy);
        }
        .nb-nav-link.active { color: var(--nb-gold-d); font-weight: 600; }

        .nb-chevron {
          transition: transform .2s;
          flex-shrink: 0;
        }
        .nb-chevron.open { transform: rotate(180deg); }

        /* ── Dropdown ── */
        .nb-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 180px;
          background: #fff;
          border: 1px solid var(--nb-border);
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          padding: 6px;
          z-index: 50;
          animation: nb-dropdown .15s ease;
        }
        .nb-dropdown-link {
          display: block;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.875rem;
          color: var(--nb-text);
          text-decoration: none;
          transition: background .12s, color .12s;
          white-space: nowrap;
        }
        .nb-dropdown-link:hover {
          background: rgba(14,27,61,0.06);
          color: var(--nb-navy);
        }

        /* ── Right actions ── */
        .nb-actions { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

        .nb-cta {
          display: none;
          align-items: center;
          gap: 8px;
          background: var(--nb-navy);
          color: #fff;
          font-size: 0.8125rem;
          font-weight: 500;
          padding: 9px 18px;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: background .15s, transform .15s;
        }
        @media (min-width: 768px) { .nb-cta { display: flex; } }
        .nb-cta:hover { background: #172d5e; transform: translateY(-1px); }

        .nb-menu-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: 1px solid var(--nb-border);
          border-radius: 8px;
          padding: 7px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: .05em;
          color: var(--nb-navy);
          cursor: pointer;
          transition: background .15s, border-color .15s;
        }
        .nb-menu-toggle:hover { background: rgba(14,27,61,0.05); }
        @media (min-width: 1024px) { .nb-menu-toggle { display: none; } }

        /* ── Mobile drawer ── */
        .nb-mobile-drawer {
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%;
          background: #fff;
          border-top: 1px solid var(--nb-border);
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          z-index: 40;
          transition: opacity .2s, visibility .2s;
        }
        .nb-mobile-drawer.closed { opacity: 0; visibility: hidden; pointer-events: none; }
        .nb-mobile-drawer.open   { opacity: 1; visibility: visible; }

        .nb-mobile-nav {
          max-height: calc(100dvh - 120px);
          overflow-y: auto;
          padding: 16px 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nb-m-link {
          display: block;
          padding: 11px 14px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--nb-text);
          text-decoration: none;
          transition: background .12s;
        }
        .nb-m-link:hover { background: rgba(14,27,61,0.05); }

        .nb-m-group-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 14px;
          border-radius: 8px;
          background: none;
          border: none;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--nb-text);
          cursor: pointer;
          text-align: left;
          transition: background .12s;
        }
        .nb-m-group-btn:hover { background: rgba(14,27,61,0.05); }

        .nb-m-children {
          padding: 4px 0 4px 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
          transition: max-height .25s ease, opacity .2s;
        }
        .nb-m-children.closed { max-height: 0; opacity: 0; }
        .nb-m-children.open   { max-height: 300px; opacity: 1; }

        .nb-m-child-link {
          display: block;
          padding: 9px 14px;
          border-radius: 7px;
          font-size: 0.85rem;
          color: var(--nb-muted);
          text-decoration: none;
          border-left: 2px solid var(--nb-border);
          margin-left: 8px;
          padding-left: 14px;
          transition: background .12s, color .12s, border-color .12s;
        }
        .nb-m-child-link:hover {
          background: rgba(14,27,61,0.05);
          color: var(--nb-navy);
          border-color: var(--nb-gold);
        }

        .nb-m-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--nb-gold);
          color: var(--nb-navy);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 12px 18px;
          border-radius: 9px;
          text-decoration: none;
          margin-top: 12px;
          transition: background .15s;
        }
        .nb-m-cta:hover { background: var(--nb-gold-d); }

        /* ── Overlay ── */
        .nb-overlay {
          position: fixed;
          inset: 0;
          z-index: 30;
          background: rgba(0,0,0,0.25);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          animation: nb-pulse .01s; /* force repaint */
        }
      `}</style>

      <header
        className="nb"
        style={{ position: "relative", zIndex: 50, width: "100%" }}
      >
        {/* ── Desktop topbar ────────────────────────────────────────────── */}
        <div
          className="nb-topbar"
          style={{ display: "none" }}
          /* show via media query in style block below */
        >
          <style>{`
            @media (min-width: 768px) { .nb-topbar { display: flex !important; } }
          `}</style>
          <div className="nb-topbar-inner">
            <div className="nb-topbar-left">
              {/* Phone */}
              <a
                href={settings?.phone ? `tel:${settings.phone}` : undefined}
                className={`nb-contact-item nb-contact-phone`}
              >
                <Phone size={13} aria-hidden="true" />
                {loading ? <Skeleton width={90} /> : settings.phone || "—"}
              </a>

              {/* Email */}
              <a
                href={settings?.email ? `mailto:${settings.email}` : undefined}
                className="nb-contact-item nb-contact-email"
              >
                <Mail size={13} aria-hidden="true" />
                {loading ? <Skeleton width={140} /> : settings.email || "—"}
              </a>

              {/* Location */}
              <span className="nb-contact-item nb-contact-loc">
                <MapPin size={13} aria-hidden="true" />
                {loading ? <Skeleton width={160} /> : settings.location || "—"}
              </span>
            </div>

            {/* Social icons */}
            <div className="nb-topbar-right">
              {loading
                ? SOCIALS.map(({ key }) => (
                    <div key={key} className="nb-social-sk" />
                  ))
                : SOCIALS.map(({ key, Icon, label }) => {
                    const href = settings[key];
                    if (!href) return null;
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${label} page`}
                        className="nb-social"
                      >
                        <Icon size={13} aria-hidden="true" />
                      </a>
                    );
                  })}
            </div>
          </div>
        </div>

        {/* ── Mobile topbar ─────────────────────────────────────────────── */}
        <div className="nb-topbar-mobile" style={{ display: "flex" }}>
          <style>{`
            @media (min-width: 768px) { .nb-topbar-mobile { display: none !important; } }
          `}</style>
          <div className="nb-topbar-mobile-inner">
            <span className="nb-contact-item" style={{ gap: 6 }}>
              <Phone
                size={13}
                aria-hidden="true"
                style={{ color: "#F4B740" }}
              />
              {loading ? <Skeleton width={90} /> : settings?.phone || "—"}
            </span>
            <a
              href={settings?.phone ? `tel:${settings.phone}` : "#"}
              className="nb-call-btn"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* ── Main bar ──────────────────────────────────────────────────── */}
        <div className={`nb-main${scrolled ? " scrolled" : ""}`}>
          <div className="nb-main-inner">
            {/* Logo */}
            <Link to="/" aria-label="Go to WAARC homepage">
              {/*
                CLS FIX: aspect-ratio wrapper reserves 64×64 before the SVG
                is fetched, so no unsized-image layout shift occurs.
              */}
              <div className="nb-logo-wrap">
                <img
                  src={Logo}
                  alt="Wisdom Academy & Research Center"
                  width={64}
                  height={64}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              ref={navRef}
              className="nb-desktop-nav"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.label} style={{ position: "relative" }}>
                    <button
                      className="nb-nav-btn"
                      aria-haspopup="true"
                      aria-expanded={desktopOpen === item.label}
                      onClick={() => toggleDesktop(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        aria-hidden="true"
                        className={`nb-chevron${
                          desktopOpen === item.label ? " open" : ""
                        }`}
                      />
                    </button>

                    {desktopOpen === item.label && (
                      <div className="nb-dropdown" role="menu">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            role="menuitem"
                            className="nb-dropdown-link"
                            onClick={() => setDesktopOpen(null)}
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
                    className={`nb-nav-link${
                      location.pathname === item.href ? " active" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="nb-actions">
              <Link to="/contact" className="nb-cta">
                <Mail size={16} aria-hidden="true" />
                Contact Us
              </Link>

              <button
                className="nb-menu-toggle"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="nb-mobile-drawer"
                onClick={() => setMobileOpen((v) => !v)}
              >
                MENU
                {mobileOpen ? (
                  <X size={18} aria-hidden="true" />
                ) : (
                  <Menu size={18} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile drawer ─────────────────────────────────────────────── */}
        <div
          id="nb-mobile-drawer"
          className={`nb-mobile-drawer ${mobileOpen ? "open" : "closed"}`}
          aria-hidden={!mobileOpen}
        >
          <nav
            ref={mobileRef}
            className="nb-mobile-nav"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="nb-m-group-btn"
                    aria-expanded={mobileSubOpen === item.label}
                    onClick={() => toggleMobileSub(item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className={`nb-chevron${
                        mobileSubOpen === item.label ? " open" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`nb-m-children ${
                      mobileSubOpen === item.label ? "open" : "closed"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="nb-m-child-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="nb-m-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              to="/contact"
              className="nb-m-cta"
              onClick={() => setMobileOpen(false)}
            >
              <Mail size={18} aria-hidden="true" />
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* ── Backdrop overlay ───────────────────────────────────────────── */}
      {mobileOpen && (
        <div
          className="nb-overlay"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
