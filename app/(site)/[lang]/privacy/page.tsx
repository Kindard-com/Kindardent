import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Kindard Kids collects, uses, and protects your personal data.",
};

const sections = [
  {
    id: "introduction",
    label: "Introduction",
    content: `Kindard Kids ("Kindard," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, mobile application, or make a purchase. Please read this policy carefully. By using our services, you consent to the practices described herein.`,
  },
  {
    id: "data-we-collect",
    label: "Data We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, place an order, or contact us. This includes: your name and email address; shipping and billing address; payment information (processed securely via our payment processor — we do not store raw card data); phone number (if provided); order history and preferences; and communications you send us. We also collect certain data automatically: device identifiers, IP address, browser type, pages visited, referring URLs, and cookie data.`,
  },
  {
    id: "how-we-use",
    label: "How We Use Your Data",
    content: `We use the information we collect to process transactions and fulfil orders; send transactional emails (order confirmations, shipping updates); respond to enquiries and provide customer support; personalise your shopping experience; send marketing communications (only with your explicit consent); improve our website and product offerings; comply with legal obligations; and detect and prevent fraud.`,
  },
  {
    id: "your-rights",
    label: "Your Rights",
    content: `Under GDPR and applicable privacy laws, you have the right to: access the personal data we hold about you; rectify any inaccurate data; request erasure of your data ("right to be forgotten"); restrict or object to certain processing; data portability; and withdraw consent at any time where processing is based on consent. To exercise these rights, contact us at privacy@kindard.com. We will respond within 30 days.`,
  },
  {
    id: "cookies",
    label: "Cookies",
    content: `We use cookies and similar tracking technologies to operate our website. Strictly necessary cookies are always active. You can manage your preferences for analytics, marketing, and functional cookies via our Cookie Settings page. Our cookie consent is implemented in compliance with ePrivacy Directive requirements. For full details, visit our Cookie Settings page.`,
  },
  {
    id: "contact",
    label: "Contact",
    content: `If you have questions about this Privacy Policy or wish to exercise your rights, please reach out to our Privacy team. We are headquartered in Amsterdam, Netherlands, and registered as a data controller under Dutch law.`,
  },
];

export default function PrivacyPage() {
  return (
    <main>
      {/* Page header bar */}
      <div className="page-header-bar">
        <h1 className="heading-condensed" style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}>
          Privacy Policy
        </h1>
        <p className="label-caps" style={{ color: "var(--mid)" }}>
          Last Updated: June 2026
        </p>
      </div>

      <div style={{ display: "flex", maxWidth: "1100px", margin: "0 auto" }}>

        {/* Sidebar anchor nav */}
        <aside
          style={{
            width: "200px",
            flexShrink: 0,
            borderRight: "var(--border-width) solid var(--black)",
            padding: "2rem 1.5rem",
            position: "sticky",
            top: "60px",
            height: "fit-content",
          }}
        >
          <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "1rem" }}>Contents</p>
          <nav aria-label="Privacy policy sections">
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      color: "var(--black)",
                      lineHeight: 1.4,
                      display: "block",
                      padding: "0.2rem 0",
                      borderLeft: "2px solid transparent",
                      paddingLeft: "0.5rem",
                      transition: "border-color 0.15s, color 0.15s",
                    }}
                    className="sidebar-anchor"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <div style={{ flex: 1, padding: "3rem 2.5rem" }}>
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`}>
              <h2
                id={`${s.id}-heading`}
                className="heading-condensed"
                style={{ fontSize: "1.75rem", marginBottom: "1.25rem" }}
              >
                {s.label}
              </h2>
              <p style={{ fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem", color: "#3a3a3a" }}>
                {s.content}
              </p>
              {i < sections.length - 1 && <hr className="section-divider" />}
            </section>
          ))}

          {/* Contact footer */}
          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              border: "var(--border-width) solid var(--black)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.9rem" }}>
              Questions? Contact our Privacy team.
            </p>
            <a
              href="mailto:privacy@kindard.com"
              className="btn btn-ghost"
              style={{ fontSize: "0.75rem" }}
            >
              privacy@kindard.com →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .sidebar-anchor:hover {
          border-left-color: var(--accent) !important;
          color: var(--black) !important;
        }
      `}</style>
    </main>
  );
}
