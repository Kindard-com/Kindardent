import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Kindard Kids' commitment to ethical fashion — organic materials, zero-plastic packaging, fair wages, and carbon neutrality by 2026.",
};

const pillars = [
  {
    icon: "🌱",
    title: "Materials",
    stat: "100% ORGANIC",
    body: "Every Kindard garment uses GOTS-certified organic cotton, free from toxic dyes and synthetic fertilizers. Our performance pieces use recycled GRS-certified polyester.",
  },
  {
    icon: "♻️",
    title: "Packaging",
    stat: "ZERO PLASTIC",
    body: "We eliminated all plastic packaging in 2024. Orders ship in FSC-certified recycled cardboard, sealed with compostable kraft tape. Even our shipping labels are paper-based.",
  },
  {
    icon: "🤝",
    title: "Manufacturing",
    stat: "FAIR WAGE CERTIFIED",
    body: "Our factories in Porto and Amsterdam are audited annually for fair wages, safe conditions, and worker representation. We pay a living wage premium above local minimums.",
  },
];

const progressItems = [
  { label: "Carbon Neutral by 2026", value: 72, done: false },
  { label: "Zero Plastic Packaging", value: 100, done: true },
  { label: "Fair Wage Certified", value: 85, done: false },
];

const certs = [
  { name: "GOTS", desc: "Global Organic Textile Standard" },
  { name: "B-Corp", desc: "B Corporation Certified" },
  { name: "1%", desc: "1% for the Planet Member" },
  { name: "GRS", desc: "Global Recycled Standard" },
];

const factories = [
  { city: "Amsterdam", role: "Design Studio & HQ", x: "48%", y: "28%" },
  { city: "Porto", role: "Primary Manufacturing", x: "38%", y: "38%" },
  { city: "Coimbatore", role: "Organic Cotton Mill", x: "68%", y: "52%" },
];

export default function SustainabilityPage() {
  return (
    <main>
      {/* Banner */}
      <section
        style={{
          background: "var(--black)",
          padding: "clamp(3rem, 8vw, 6rem) 2rem",
        }}
        aria-labelledby="sustain-hero-heading"
      >
        <h1
          id="sustain-hero-heading"
          className="heading-condensed"
          style={{
            fontSize: "clamp(3rem, 9vw, 8rem)",
            color: "var(--white)",
            fontStyle: "italic",
            lineHeight: 0.88,
          }}
        >
          FASHION<br />WITHOUT<br /><span style={{ color: "var(--accent)" }}>GUILT</span>
        </h1>
        <p style={{ marginTop: "1.5rem", fontWeight: 300, color: "var(--mid)", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.7 }}>
          We believe sustainable and stylish are not opposites. Here's how we back that up — with data, not marketing copy.
        </p>
      </section>

      {/* Three pillars */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 0,
          borderBottom: "var(--border-width) solid var(--black)",
        }}
        aria-labelledby="pillars-heading"
      >
        <h2 id="pillars-heading" className="sr-only">Our Three Pillars</h2>
        {pillars.map((p, i) => (
          <div
            key={p.title}
            style={{
              padding: "2.5rem 2rem",
              borderRight: i < pillars.length - 1 ? "var(--border-width) solid var(--black)" : "none",
            }}
          >
            <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }} aria-hidden="true">
              {p.icon}
            </span>
            <p className="heading-condensed" style={{ fontSize: "0.7rem", color: "var(--mid)", marginBottom: "0.35rem" }}>
              {p.title}
            </p>
            <p
              className="heading-condensed"
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "var(--black)",
              }}
            >
              {p.stat}
            </p>
            <p style={{ fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, color: "#3a3a3a" }}>
              {p.body}
            </p>
          </div>
        ))}
      </section>

      <div className="page-body-wide">

        {/* Progress tracker */}
        <section aria-labelledby="progress-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="progress-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}
          >
            Progress Tracker
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {progressItems.map((item) => (
              <div key={item.label}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <p className="heading-condensed" style={{ fontSize: "0.95rem" }}>{item.label}</p>
                  {item.done ? (
                    <span className="badge badge-black">✓ COMPLETED</span>
                  ) : (
                    <span className="heading-condensed" style={{ fontSize: "0.9rem", color: "var(--mid)" }}>
                      {item.value}%
                    </span>
                  )}
                </div>
                <div className="progress-bar-track">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${item.value}%` }}
                    role="progressbar"
                    aria-valuenow={item.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={item.label}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Supply chain map */}
        <section aria-labelledby="map-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="map-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}
          >
            Our Supply Chain
          </h2>
          <div
            style={{
              border: "var(--border-width) solid var(--black)",
              position: "relative",
              background: "#f0ede8",
              overflow: "hidden",
            }}
          >
            {/* Simplified world outline SVG */}
            <svg
              viewBox="0 0 800 400"
              style={{ width: "100%", display: "block" }}
              aria-hidden="true"
            >
              {/* Very rough world landmass suggestion */}
              <ellipse cx="400" cy="200" rx="370" ry="180" fill="none" stroke="var(--border)" strokeWidth="1" />
              {/* Europe blob */}
              <ellipse cx="390" cy="130" rx="60" ry="50" fill="#e8e5e0" stroke="var(--border)" strokeWidth="1" />
              {/* Africa blob */}
              <ellipse cx="390" cy="250" rx="50" ry="70" fill="#e8e5e0" stroke="var(--border)" strokeWidth="1" />
              {/* Asia blob */}
              <ellipse cx="590" cy="160" rx="100" ry="80" fill="#e8e5e0" stroke="var(--border)" strokeWidth="1" />
              {/* Americas blob */}
              <ellipse cx="180" cy="200" rx="80" ry="110" fill="#e8e5e0" stroke="var(--border)" strokeWidth="1" />

              {/* Factory pins */}
              {factories.map((f) => (
                <g key={f.city} transform={`translate(${parseFloat(f.x) * 8}, ${parseFloat(f.y) * 4})`}>
                  <circle r="6" fill="var(--accent)" stroke="var(--black)" strokeWidth="1.5" />
                  <text
                    x="10"
                    y="4"
                    fontFamily="var(--font-condensed, sans-serif)"
                    fontSize="11"
                    fontWeight="700"
                    fill="var(--black)"
                  >
                    {f.city}
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div style={{ padding: "1rem 1.5rem", borderTop: "var(--border-width) solid var(--black)", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {factories.map((f) => (
                <div key={f.city} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      border: "1.5px solid var(--black)",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  <span style={{ fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "0.8rem" }}>
                    {f.city}
                  </span>
                  <span style={{ fontWeight: 300, fontSize: "0.75rem", color: "var(--mid)" }}>
                    — {f.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section aria-labelledby="certs-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="certs-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}
          >
            Certifications
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0" }}>
            {certs.map((cert, i) => (
              <div
                key={cert.name}
                style={{
                  padding: "1.5rem 2rem",
                  border: "var(--border-width) solid var(--black)",
                  borderLeft: i > 0 ? "none" : "var(--border-width) solid var(--black)",
                  textAlign: "center",
                  minWidth: "140px",
                }}
              >
                <p className="heading-condensed" style={{ fontSize: "1.5rem" }}>{cert.name}</p>
                <p style={{ fontWeight: 300, fontSize: "0.75rem", color: "var(--mid)", marginTop: "0.25rem" }}>{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tree pledge */}
        <div
          style={{
            border: "var(--border-width) solid var(--black)",
            borderLeft: "4px solid var(--accent)",
            padding: "1.75rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <span style={{ fontSize: "2rem" }} aria-hidden="true">🌳</span>
          <div>
            <p className="heading-condensed" style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}>
              Every Purchase Plants a Tree
            </p>
            <p style={{ fontWeight: 300, fontSize: "0.875rem", color: "#5a5856", lineHeight: 1.6 }}>
              In partnership with One Tree Planted, every Kindard order triggers a tree planted in a reforestation project in Portugal, Morocco, or Indonesia.
            </p>
          </div>
        </div>

        <style>{`.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }`}</style>
      </div>
    </main>
  );
}
