"use client";
import Link from "next/link";
import { useI18n } from "@/app/context/I18nProvider";
import { localePath } from "@/lib/i18n/config";

export default function SiteFooter() {
  const { locale, t } = useI18n();

  const legalLinks = [
    { label: t.footer.privacy, href: localePath(locale, "/privacy") },
    { label: t.footer.terms, href: localePath(locale, "/terms") },
    { label: t.footer.cookies, href: localePath(locale, "/cookie-settings") },
  ];

  const helpLinks = [
    { label: t.footer.helpContact, href: localePath(locale, "/help") },
    { label: t.footer.shipping, href: localePath(locale, "/shipping") },
    { label: t.footer.returns, href: localePath(locale, "/returns") },
    { label: t.footer.track, href: localePath(locale, "/track") },
    { label: t.footer.sizeGuide, href: localePath(locale, "/size-guide") },
    {
      label: t.nav.cpStructure,
      href: localePath(locale, "/Structure_company"),
    },
  ];

  const companyLinks = [
    { label: t.footer.about, href: localePath(locale, "/about") },
    { label: t.footer.sustainability, href: localePath(locale, "/sustainability") },
    { label: t.footer.careers, href: localePath(locale, "/careers") },
    { label: t.footer.stores, href: localePath(locale, "/stores") },
  ];

  return (
    <footer
      style={{
        borderTop: "var(--border-width) solid var(--black)",
        backgroundColor: "var(--white)",
      }}
    >
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
            {t.footer.joinTribe}
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
            {t.footer.joinSub}
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            gap: "0",
            flex: "1",
            maxWidth: "480px",
            minWidth: "280px",
          }}
        >
          <input
            type="email"
            id="footer-newsletter-email"
            placeholder={t.footer.emailPlaceholder}
            aria-label={t.footer.emailPlaceholder}
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
            {t.footer.subscribe}
          </button>
        </form>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "0",
          borderBottom: "var(--border-width) solid var(--black)",
        }}
      >
        {[
          { title: t.footer.legal, links: legalLinks },
          { title: t.footer.help, links: helpLinks },
          { title: t.footer.company, links: companyLinks },
        ].map((col, i) => (
          <div
            key={col.title}
            style={{
              padding: "2rem",
              borderRight:
                i < 2 ? "var(--border-width) solid var(--black)" : "none",
            }}
          >
            <p
              className="label-caps"
              style={{ color: "var(--mid)", marginBottom: "1rem" }}
            >
              {col.title}
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
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
          © {new Date().getFullYear()} {t.footer.copyright}
        </p>
        <p className="label-caps" style={{ color: "var(--mid)" }}>
          {t.footer.madeWith}
        </p>
      </div>
    </footer>
  );
}
