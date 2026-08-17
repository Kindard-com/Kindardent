import type { Metadata } from "next";
import Link from "next/link";
import { stores } from "./data";

export const metadata: Metadata = {
  title: "Stores",
  description: "Visit Kindard Kids flagship stores worldwide.",
};

export default function StoresPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "68px" }}>
      <section style={{ padding: "4rem 1.5rem 2rem", maxWidth: "1280px", margin: "0 auto" }}>
        <p className="label-caps" style={{ color: "var(--accent)", marginBottom: "1rem" }}>
          Flagships
        </p>
        <h1
          className="heading-editorial"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1rem", lineHeight: 1 }}
        >
          Stores
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--mid)",
            maxWidth: "560px",
            marginBottom: "3rem",
            fontWeight: 300,
          }}
        >
          Premium kids streetwear in person — book styling sessions and catch local drops.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {stores.map((store) => (
            <Link
              key={store.slug}
              href={`/stores/${store.slug}`}
              style={{
                display: "block",
                padding: "1.5rem",
                border: "1px solid var(--black)",
                background: "var(--white)",
                textDecoration: "none",
                color: "var(--black)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
              }}
            >
              <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "0.5rem" }}>
                {store.neighbourhood}
              </p>
              <h2 className="heading-condensed" style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                {store.city}
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.5 }}>
                {store.heroTagline}
              </p>
              <p
                style={{
                  marginTop: "1.25rem",
                  fontFamily: "var(--font-condensed)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                View store →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
