import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { getSiteSettings, getUsefulLinks } from "../../services/api";
import Logo from "./../../assets/images/logo-light.svg";

// ─── Static data ──────────────────────────────────────────────────────────────

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

const socialDefs = [
  { name: "facebook", Icon: Facebook },
  { name: "twitter", Icon: Twitter },
  { name: "linkedin", Icon: Linkedin },
  { name: "instagram", Icon: Instagram },
  { name: "youtube", Icon: Youtube },
];

// ─── Skeleton pulse (matches real link height so layout never shifts) ─────────
function LinkSkeleton({ count = 4 }) {
  return Array.from({ length: count }, (_, i) => (
    <li key={i} className="footer-skeleton-item">
      <span
        className="footer-skeleton-bar"
        style={{ width: `${56 + (i % 3) * 16}px` }}
      />
    </li>
  ));
}

// ─── Column component ─────────────────────────────────────────────────────────
function LinkColumn({ heading, links, isLoading, skeletonCount }) {
  return (
    <div className="footer-col">
      <h4 className="footer-col-heading">{heading}</h4>
      <ul className="footer-link-list">
        {isLoading ? (
          <LinkSkeleton count={skeletonCount} />
        ) : (
          links.map((link) => (
            <li key={link.id || link.name}>
              <a
                href={link.link || link.href}
                target={link.link ? "_blank" : undefined}
                rel={link.link ? "noopener noreferrer" : undefined}
                className="footer-link"
              >
                <span>{link.title || link.name}</span>
                {link.link && (
                  <ArrowUpRight
                    size={12}
                    className="footer-link-arrow"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
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
    <>
      {/* ── Scoped styles ─────────────────────────────────────────────────── */}
      <style>{`
        /* ── Tokens ── */
        .footer-root {
          --footer-bg:        #07112a;
          --footer-surface:   rgba(255,255,255,0.04);
          --footer-border:    rgba(255,255,255,0.08);
          --footer-text:      rgba(255,255,255,0.55);
          --footer-text-hi:   rgba(255,255,255,0.90);
          --footer-accent:    #4f8ef7;
          --footer-accent-lo: rgba(79,142,247,0.12);
          --footer-radius:    10px;
          --footer-font:      'Geist', 'DM Sans', system-ui, sans-serif;
        }

        /* ── Root ── */
        .footer-root {
          position: relative;
          background: var(--footer-bg);
          color: var(--footer-text);
          font-family: var(--footer-font);
          /* CLS FIX: contain layout so internal shifts don't affect parent */
          contain: layout;
        }

        /* ── Wave separator ── */
        .footer-wave {
          /* CLS FIX: explicit height so the svg slot is reserved immediately */
          height: 64px;
          overflow: hidden;
          line-height: 0;
          margin-bottom: -1px;
        }
        .footer-wave svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        /* ── Inner layout ── */
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 56px 32px 40px;
        }

        /* ── Top grid ── */
        .footer-top {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px 40px;
        }
        @media (min-width: 768px) {
          .footer-top { grid-template-columns: 1.6fr 1fr 1fr 1fr; }
        }

        /* ── Brand column ── */
        .footer-brand { display: flex; flex-direction: column; gap: 20px; }

        /* CLS FIX: logo wrapper reserves exact dimensions via aspect-ratio
           so zero layout shift even before the SVG is parsed */
        .footer-logo-wrap {
          width: 180px;
          /* aspect-ratio holds height = 180*(56/224) = 45px */
          aspect-ratio: 224 / 56;
          flex-shrink: 0;
        }
        .footer-logo-wrap img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .footer-tagline {
          font-size: 0.8125rem;
          line-height: 1.6;
          color: var(--footer-text);
          max-width: 240px;
          /* CLS FIX: remove min-h-6 hack; height is stable because font is
             preloaded and content is static */
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 4px;
        }
        .footer-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.75rem;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.18s;
        }
        .footer-contact-row:hover { color: var(--footer-text-hi); }
        .footer-contact-row svg { flex-shrink: 0; margin-top: 1px; }

        /* ── Link columns ── */
        .footer-col { display: flex; flex-direction: column; gap: 16px; }

        .footer-col-heading {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--footer-text-hi);
        }

        .footer-link-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* CLS FIX: every list item has a stable line-height so swapping
           skeleton → real links causes zero height change */
        .footer-link-list li {
          line-height: 1.4;
          font-size: 0.8125rem;
        }

        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.18s;
        }
        .footer-link:hover { color: var(--footer-text-hi); }
        .footer-link-arrow {
          opacity: 0;
          transform: translate(-2px, 2px);
          transition: opacity 0.18s, transform 0.18s;
        }
        .footer-link:hover .footer-link-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* CLS FIX: skeleton items match real item height exactly (line-height * font-size) */
        .footer-skeleton-item { line-height: 1.4; font-size: 0.8125rem; }
        .footer-skeleton-bar {
          display: inline-block;
          height: 0.8125rem; /* matches font-size so line box is identical */
          border-radius: 3px;
          background: rgba(255,255,255,0.10);
          animation: footer-pulse 1.4s ease-in-out infinite;
          vertical-align: middle;
        }
        @keyframes footer-pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1;   }
        }

        /* ── Divider ── */
        .footer-divider {
          height: 1px;
          background: var(--footer-border);
          margin: 48px 0 32px;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .footer-bottom { flex-direction: row; justify-content: space-between; }
        }

        .footer-copy {
          font-size: 0.75rem;
          color: var(--footer-text);
          margin: 0;
        }

        /* ── Social icons ── */
        /* CLS FIX: the social row has a fixed height so icons appearing/
           disappearing as socials loads doesn't shift anything */
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 4px;
          /* reserve height = icon size (18px) + 2*padding (8px each) */
          min-height: 34px;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: var(--footer-surface);
          border: 1px solid var(--footer-border);
          color: var(--footer-text);
          text-decoration: none;
          transition: background 0.18s, color 0.18s, border-color 0.18s,
                      transform 0.18s;
        }
        .footer-social-btn:hover {
          background: var(--footer-accent-lo);
          border-color: var(--footer-accent);
          color: var(--footer-accent);
          transform: translateY(-2px);
        }

        /* skeleton social buttons while loading */
        .footer-social-skeleton {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(255,255,255,0.06);
          animation: footer-pulse 1.4s ease-in-out infinite;
        }
        .footer-social-skeleton:nth-child(2) { animation-delay: 0.1s; }
        .footer-social-skeleton:nth-child(3) { animation-delay: 0.2s; }
        .footer-social-skeleton:nth-child(4) { animation-delay: 0.3s; }
        .footer-social-skeleton:nth-child(5) { animation-delay: 0.4s; }

        /* ── Legal row ── */
        .footer-legal {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--footer-border);
        }
        .footer-legal a {
          font-size: 0.6875rem;
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.18s;
        }
        .footer-legal a:hover { color: var(--footer-text-hi); }
        .footer-legal-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--footer-border);
          flex-shrink: 0;
        }
      `}</style>

      <footer className="footer-root">
        {/* ── Wave ─────────────────────────────────────────────────────────── */}
        {/*
          CLS FIX: explicit height="64" on the wrapper div (not just the SVG)
          means the browser allocates exactly 64px before any paint.
        */}
        <div className="footer-wave" aria-hidden="true">
          <svg
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,20 C360,56 1080,0 1440,20 L1440,0 L0,0 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* ── Body ─────────────────────────────────────────────────────────── */}
        <div className="footer-inner">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              {/*
                CLS FIX: aspect-ratio on the wrapper reserves height before
                the SVG asset is fetched, eliminating the unsized-image shift.
                width + height attributes are kept for browsers that don't
                support aspect-ratio (they fall back to the attributes).
              */}
              <div className="footer-logo-wrap">
                <img
                  src={Logo}
                  alt="Wisdom Academy & Research Center"
                  width={224}
                  height={56}
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/*
                CLS FIX: static text — no min-h hack needed.
                Font shift is handled at the app level via <link rel="preload">
                + font-display: optional in the global @font-face.
              */}
              <p className="footer-tagline">
                Top learning experiences that create more talent in the world.
              </p>

              <address
                className="footer-contact"
                style={{ fontStyle: "normal" }}
              >
                <span className="footer-contact-row">
                  <MapPin size={13} aria-hidden="true" />
                  Chandragiri-6, Kathmandu, Nepal
                </span>
                <a
                  href="mailto:info@waarc.edu.np"
                  className="footer-contact-row"
                >
                  <Mail size={13} aria-hidden="true" />
                  info@waarc.edu.np
                </a>
                <a href="tel:+97714000000" className="footer-contact-row">
                  <Phone size={13} aria-hidden="true" />
                  +977 1-400-0000
                </a>
              </address>
            </div>

            {/* Useful Links */}
            <LinkColumn
              heading="Useful Links"
              links={usefulLinks ?? []}
              isLoading={usefulLoading}
              skeletonCount={4}
            />

            {/* Quick Links */}
            <LinkColumn
              heading="Quick Links"
              links={quickLinks}
              isLoading={false}
              skeletonCount={5}
            />

            {/* Company */}
            <LinkColumn
              heading="Company"
              links={companyLinks}
              isLoading={false}
              skeletonCount={3}
            />
          </div>

          {/* Divider */}
          <div className="footer-divider" />

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} WAARC. All rights reserved.
            </p>

            {/*
              CLS FIX: min-height is set via CSS to 34px (button height) so
              the row never collapses while socials are loading. Skeleton
              buttons fill the same 34×34 slots as the real buttons.
            */}
            <div className="footer-socials" aria-label="Social media links">
              {socialsLoading
                ? socialDefs.map(({ name }) => (
                    <div
                      key={name}
                      className="footer-social-skeleton"
                      aria-hidden="true"
                    />
                  ))
                : socialDefs.map(({ name, Icon }) => {
                    const href = socials?.[name];
                    if (!href) return null;
                    return (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${name} page`}
                        className="footer-social-btn"
                      >
                        <Icon size={16} aria-hidden="true" />
                      </a>
                    );
                  })}
            </div>
          </div>

          {/* Legal */}
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer-legal-dot" aria-hidden="true" />
            <a href="/terms">Terms of Service</a>
            <span className="footer-legal-dot" aria-hidden="true" />
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </footer>
    </>
  );
}
