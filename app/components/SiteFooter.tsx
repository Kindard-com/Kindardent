"use client";
import Link from "next/link";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Settings", href: "/cookie-settings" },
];

const helpLinks = [
  { label: "Help & Contact", href: "https://kindard.com/help" },
  { label: "Shipping Info", href: "https://kindard.com/shipping" },
  { label: "Returns & Exchanges", href: "https://kindard.com/returns" },
  { label: "Track My Order", href: "https://kindard.com/track" },
  { label: "Size Guide", href: "https://kindard.com/size-guide" },
  { label: "CP Structure", href: "https://kindard.com/Structure_company" },
];

const companyLinks = [
  { label: "About Kindard", href: "https://kindard.com/about" },
  { label: "Sustainability", href: "https://kindard.com/sustainability" },
  { label: "Careers", href: "https://kindard.com/careers" },
  { label: "Stores", href: "https://kindard.com/stores" },
];

export default function SiteFooter() {
  return (
    <footer style={{ borderTop: "var(--border-width) solid var(--black)", backgroundColor: "var(--white)" }}>

      {/* Newsletter strip */}
      <div
        style={{
          backgroundColor: "var(--black)",
          padding: "2.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-condensed)",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--white)",
              lineHeight: 1,
            }}
          >
            JOIN THE TRIBE
          </p>
          <p
            style={{
              fontFamily: "var(--font-condensed)",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--mid)",
              marginTop: "0.35rem",
            }}
          >
            EXCLUSIVE DROPS. EARLY ACCESS. NOTHING ELSE.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", gap: "0", flex: "1", maxWidth: "480px", minWidth: "280px" }}
        >
          <input
            type="email"
            id="footer-newsletter-email"
            placeholder="YOUR EMAIL"
            aria-label="Email address for newsletter"
            style={{
              flex: 1,
              padding: "0.75rem 1rem",
              backgroundColor: "var(--white)",
              border: "var(--border-width) solid var(--white)",
              fontFamily: "var(--font-condensed)",
              fontWeight: 700,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--black)",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.25rem",
              backgroundColor: "var(--accent)",
              border: "var(--border-width) solid var(--accent)",
              color: "var(--black)",
              fontFamily: "var(--font-condensed)",
              fontWeight: 700,
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            SUBSCRIBE →
          </button>
        </form>
      </div>

      {/* Links grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "0",
          borderBottom: "var(--border-width) solid var(--black)",
        }}
      >
        {[
          { title: "Legal", links: legalLinks },
          { title: "Help", links: helpLinks },
          { title: "Company", links: companyLinks },
        ].map((col, i) => (
          <div
            key={col.title}
            style={{
              padding: "2rem",
              borderRight: i < 2 ? "var(--border-width) solid var(--black)" : "none",
            }}
          >
            <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "1rem" }}>
              {col.title}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      color: "var(--black)",
                      transition: "color 0.15s",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p className="label-caps" style={{ color: "var(--mid)" }}>
          © {new Date().getFullYear()} Kindard Kids — Amsterdam
        </p>
        <p className="label-caps" style={{ color: "var(--mid)" }}>
          MADE WITH INTENTION
        </p>
      </div>
    </footer>
  );
}
