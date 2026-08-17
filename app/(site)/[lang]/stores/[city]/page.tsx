import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { stores, storesBySlug } from "../data";
import Marquee from "@/app/components/Marquee";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return stores.map((s) => ({ city: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const store = storesBySlug[city];
  if (!store) return {};
  return {
    title: `${store.fullName} — ${store.neighbourhood}`,
    description: `${store.heroTagline} Visit Kindard Kids in ${store.neighbourhood}, ${store.city}.`,
  };
}

export default async function StorePage({ params }: Props) {
  const { city } = await params;
  const store = storesBySlug[city];
  if (!store) notFound();

  return (
    <main>

      {/* Hero */}
      <section
        style={{
          background: "var(--black)",
          padding: "clamp(3rem, 8vw, 6rem) 2rem",
          position: "relative",
        }}
        aria-labelledby="store-hero-heading"
      >
        <p className="label-caps" style={{ color: "var(--accent)", marginBottom: "0.75rem" }}>
          {store.neighbourhood} · {store.city}
        </p>
        <h1
          id="store-hero-heading"
          className="heading-condensed"
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            color: "var(--white)",
            lineHeight: 0.88,
          }}
        >
          {store.fullName}
        </h1>
        <p style={{ marginTop: "1rem", fontWeight: 300, color: "var(--mid)", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.6 }}>
          {store.heroTagline}
        </p>
        <p
          style={{
            marginTop: "0.75rem",
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            color: "var(--border)",
            fontSize: "0.85rem",
          }}
        >
          {store.address}
        </p>
      </section>

      {/* Event ticker */}
      {store.upcomingEvent && (
        <Marquee
          text={`UPCOMING: ${store.upcomingEvent.name} — ${store.upcomingEvent.date} — RSVP AT ${store.email}`}
          separator="→"
          background="var(--accent)"
          color="var(--black)"
          speed={20}
        />
      )}

      <div className="page-body-wide">

        {/* Store details row */}
        <section
          aria-labelledby="details-heading"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 0,
            border: "var(--border-width) solid var(--black)",
            marginBottom: "3rem",
          }}
        >
          <h2 id="details-heading" className="sr-only">Store Details</h2>

          {/* Address */}
          <div style={{ padding: "1.75rem", borderRight: "var(--border-width) solid var(--black)" }}>
            <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "0.75rem" }}>📍 Address</p>
            <p style={{ fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7 }}>{store.address}</p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps"
              style={{ color: "var(--black)", textDecoration: "underline", display: "block", marginTop: "0.5rem" }}
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Hours */}
          <div style={{ padding: "1.75rem", borderRight: "var(--border-width) solid var(--black)" }}>
            <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "0.75rem" }}>🕒 Hours</p>
            {store.hours.map((h) => (
              <div key={h.days} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem", gap: "1rem" }}>
                <span style={{ fontWeight: 300, fontSize: "0.875rem" }}>{h.days}</span>
                <span className="heading-condensed" style={{ fontSize: "0.875rem" }}>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{ padding: "1.75rem" }}>
            <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "0.75rem" }}>📞 Contact</p>
            <p style={{ fontWeight: 300, fontSize: "0.875rem", marginBottom: "0.35rem" }}>{store.phone}</p>
            <a
              href={`mailto:${store.email}`}
              style={{
                fontWeight: 300,
                fontSize: "0.875rem",
                color: "var(--black)",
                textDecoration: "underline",
              }}
            >
              {store.email}
            </a>
          </div>
        </section>

        {/* In-store experience cards */}
        <section aria-labelledby="experience-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="experience-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}
          >
            In-Store Experience
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 0,
            }}
          >
            {store.experience.map((exp, i) => (
              <div
                key={exp.title}
                style={{
                  padding: "2rem",
                  border: "var(--border-width) solid var(--black)",
                  borderLeft: i > 0 ? "none" : "var(--border-width) solid var(--black)",
                }}
              >
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.75rem" }} aria-hidden="true">
                  {exp.emoji}
                </span>
                <p className="heading-condensed" style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                  {exp.title}
                </p>
                <p style={{ fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, color: "#3a3a3a" }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Map placeholder */}
        <section aria-labelledby="map-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="map-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}
          >
            Find Us
          </h2>
          <div
            style={{
              border: "var(--border-width) solid var(--black)",
              height: "280px",
              background: "#f0ede8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.5rem",
            }}
            aria-label={`Map for ${store.fullName}`}
          >
            <span style={{ fontSize: "2.5rem" }} aria-hidden="true">📍</span>
            <p className="heading-condensed" style={{ fontSize: "1rem" }}>{store.neighbourhood}</p>
            <p style={{ fontWeight: 300, fontSize: "0.8rem", color: "var(--mid)" }}>{store.address}</p>
          </div>
        </section>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href={`https://maps.apple.com/?q=${encodeURIComponent(store.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flex: 1, minWidth: "180px" }}
          >
            🍎 Open in Apple Maps
          </a>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ flex: 1, minWidth: "180px" }}
          >
            🗺 Open in Google Maps
          </a>
        </div>
      </div>

      <style>{`.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }`}</style>
    </main>
  );
}
