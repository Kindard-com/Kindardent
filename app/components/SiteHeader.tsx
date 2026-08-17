"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ConnectWalletButton from "./ConnectWalletButton";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/app/context/I18nProvider";
import { localePath } from "@/lib/i18n/config";

export default function SiteHeader() {
  const { locale, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.shopAll, href: localePath(locale, "/") },
    { label: t.nav.whitepaper, href: localePath(locale, "/whitepaper") },
    { label: t.nav.invest, href: localePath(locale, "/buy") },
    { label: t.nav.cpStructure, href: localePath(locale, "/Structure_company") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid rgba(28,28,28,0.10)",
        transition: "box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
      }}
      aria-label="Main navigation"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div
          style={{ display: "flex", gap: "2rem", flex: 1 }}
          className="nav-left"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.65rem",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontWeight: 500,
                color: "#1C1C1C",
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
              }}
              className="nav-editorial-link"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href={localePath(locale, "/")}
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
          aria-label={t.nav.home}
        >
          <img
            src="/kindardent_with_logo.svg"
            alt="Kindardent Logo"
            style={{ height: "clamp(24px, 4vw, 32px)", width: "auto" }}
          />
        </Link>

        <div
          className="nav-right"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "0.75rem",
            flex: 1,
          }}
        >
          <LanguageSwitcher />

          <Link
            href={localePath(locale, "/profile")}
            aria-label={t.nav.profile}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#1C1C1C",
              padding: "0.4rem",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          <ConnectWalletButton label={t.nav.connectWallet} />

          <a
            href="https://kindard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid #1C1C1C",
              padding: "0.6rem 1.25rem",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              fontWeight: 500,
              color: "#1C1C1C",
              textDecoration: "none",
              overflow: "hidden",
              transition: "color 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              {t.nav.shopExternal}
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" />
              </svg>
            </span>
          </a>
        </div>

        <div
          className="mobile-actions"
          style={{ display: "none", alignItems: "center", gap: "0.5rem" }}
        >
          <LanguageSwitcher />
          <Link
            href={localePath(locale, "/profile")}
            aria-label={t.nav.profile}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#1C1C1C",
              padding: "0.4rem",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          <ConnectWalletButton label={t.nav.connectWallet} />

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.4rem",
              color: "#1C1C1C",
              display: "flex",
              alignItems: "center",
            }}
            aria-label={t.nav.openMenu}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          zIndex: 100,
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <img
            src="/kindardent_with_logo.svg"
            alt="Kindardent"
            style={{ height: "24px", width: "auto" }}
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "#1C1C1C",
              display: "flex",
              alignItems: "center",
            }}
            aria-label={t.nav.closeMenu}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: "clamp(2rem, 10vw, 3.5rem)",
                fontFamily: "var(--font-condensed, sans-serif)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                fontWeight: 700,
                color: "#1C1C1C",
                textDecoration: "none",
                lineHeight: 1.15,
                borderTop:
                  i === 0 ? "1px solid rgba(28,28,28,0.12)" : "none",
                borderBottom: "1px solid rgba(28,28,28,0.12)",
                padding: "0.6rem 0",
                display: "block",
                transition: "color 0.2s",
              }}
              className="mobile-nav-item"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "3rem",
          }}
        >
          <div>
            <ConnectWalletButton label={t.nav.connectWallet} />
          </div>
          <a
            href="https://kindard.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "1rem 1.25rem",
              textAlign: "center",
              background: "#1C1C1C",
              color: "#F9F6F0",
              textDecoration: "none",
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {t.nav.shopExternal} ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-left { display: none !important; }
          .nav-right { display: none !important; }
          .mobile-actions { display: flex !important; }
        }
        .nav-editorial-link:hover { color: #C86B53 !important; }
        .mobile-nav-item:hover { color: #C86B53 !important; }
        .nav-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #1C1C1C;
          transform: translateX(-100%);
          transition: transform 0.3s ease-out;
          z-index: 0;
        }
        .nav-cta-btn:hover::before { transform: translateX(0); }
        .nav-cta-btn:hover { color: #F9F6F0 !important; }
      `}</style>
    </nav>
  );
}
