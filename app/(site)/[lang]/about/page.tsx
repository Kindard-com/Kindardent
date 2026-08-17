import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About Kindard",
  description: "We don't make clothes for children. We make streetwear they happen to fit. Founded 2024, Amsterdam.",
};

const stats = [
  { number: "10K+", label: "Families" },
  { number: "4.9★", label: "Rating" },
  { number: "12", label: "Countries" },
  { number: "100%", label: "Organic" },
];

const values = [
  { title: "Indestructible Quality", body: "Built to outlast the chaos of childhood. Double-stitched seams, reinforced hems, and fabrics tested for 200+ washes." },
  { title: "Unrestricted Movement", body: "Drop shoulders, elastic waistbands, and four-way stretch. Because kids don't stop moving, and neither should their clothes." },
  { title: "Guilt-Free Materials", body: "100% GOTS-certified organic cotton and recycled polyester. No toxic dyes. No compromise." },
  { title: "Youth Culture", body: "We take cues from skateparks, basketball courts, and school corridors — not from adult runways scaled down." },
];

export default function AboutPage() {
  return (
    <main>
      {/* Section 1: Manifesto hero */}
      <section
        style={{
          background: "var(--black)",
          padding: "clamp(3rem, 8vw, 7rem) 2rem",
          position: "relative",
        }}
        aria-labelledby="manifesto-heading"
      >
        <p
          className="label-caps"
          style={{
            color: "var(--accent)",
            marginBottom: "2rem",
          }}
        >
          FOUNDED 2024 · AMSTERDAM
        </p>
        <h1
          id="manifesto-heading"
          className="heading-condensed"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
            color: "var(--white)",
            fontStyle: "italic",
            lineHeight: 0.9,
            maxWidth: "900px",
          }}
        >
          WE DON'T MAKE CLOTHES<br />FOR CHILDREN.<br />
          <span style={{ color: "var(--accent)" }}>WE MAKE STREETWEAR</span><br />
          THEY HAPPEN TO FIT.
        </h1>
      </section>

      {/* Section 2: Story columns */}
      <section
        style={{
          borderBottom: "var(--border-width) solid var(--black)",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 0,
        }}
        aria-labelledby="story-heading"
      >
        {/* Left: visual column */}
        <div
          style={{
            background: "var(--black) url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200') no-repeat center center / cover",
            minHeight: "400px",
            borderRight: "var(--border-width) solid var(--black)",
          }}
          aria-hidden="true"
        />

        {/* Right: story text */}
        <div style={{ padding: "3rem 2.5rem" }}>
          <h2
            id="story-heading"
            className="heading-condensed"
            style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
          >
            Our Story
          </h2>
          <p style={{ fontWeight: 300, lineHeight: 1.9, color: "#3a3a3a", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            Kindard was born from a frustration shared by every style-conscious parent: why does kids' clothing have to look so... childish? We set out to change that. In 2024, we launched from a studio in Amsterdam's Jordaan district with one principle — treat kids like the cultural participants they are.
          </p>

          <blockquote
            className="heading-condensed"
            style={{
              fontSize: "1.2rem",
              borderLeft: "3px solid var(--accent)",
              paddingLeft: "1.25rem",
              marginBottom: "1.5rem",
              color: "var(--black)",
            }}
          >
            "KIDS HAVE STYLE.<br />THEY JUST NEEDED CLOTHES TO MATCH."
          </blockquote>

          <p style={{ fontWeight: 300, lineHeight: 1.9, color: "#3a3a3a", fontSize: "0.95rem" }}>
            Every Kindard piece starts with a silhouette inspired by adult streetwear — then rebuilt from scratch for how children actually live. Oversized. Durable. Washable. Real. We work with GOTS-certified organic cotton mills in Portugal and fair-wage factories in Amsterdam. No greenwashing. No shortcuts.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/" className="btn btn-primary" style={{ padding: "0.75rem 2rem", fontSize: "0.85rem" }}>
              SHOP THE COLLECTION →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Stats bar */}
      <section
        style={{
          background: "var(--black)",
          padding: "2.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 0,
          borderBottom: "var(--border-width) solid var(--black)",
        }}
        aria-label="Kindard by the numbers"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              textAlign: "center",
              padding: "1.5rem",
              borderRight: i < stats.length - 1 ? "var(--border-width) solid #2a2a2a" : "none",
            }}
          >
            <p className="stat-number">{stat.number}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Section 4: Values grid */}
      <section
        style={{ padding: "3rem 2rem" }}
        aria-labelledby="values-heading"
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            id="values-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}
          >
            What We Stand For
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 0,
            }}
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  padding: "2rem",
                  border: "var(--border-width) solid var(--black)",
                  borderTop: i < 2 ? "var(--border-width) solid var(--black)" : "none",
                  borderLeft: i % 2 === 0 ? "var(--border-width) solid var(--black)" : "none",
                }}
              >
                <p className="heading-condensed" style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                  {v.title}
                </p>
                <p style={{ fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, color: "#3a3a3a" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Team */}
      <section
        style={{
          background: "#f0ede8",
          padding: "3rem 2rem",
          borderTop: "var(--border-width) solid var(--black)",
        }}
        aria-labelledby="team-heading"
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2
            id="team-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}
          >
            The Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { name: "Léa Dubois", role: "Founder & Creative Director", location: "Amsterdam" },
              { name: "Jamal Osei", role: "Head of Product", location: "Amsterdam / Accra" },
              { name: "Noor van der Berg", role: "Brand & Marketing", location: "Amsterdam" },
              { name: "Tomás Herrera", role: "Operations & Supply Chain", location: "Porto" },
            ].map((person) => (
              <div
                key={person.name}
                style={{
                  background: "var(--black)",
                  padding: "1.75rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--border)",
                    marginBottom: "0.5rem",
                  }}
                  aria-hidden="true"
                />
                <p className="heading-condensed" style={{ fontSize: "1rem", color: "var(--white)" }}>
                  {person.name}
                </p>
                <p style={{ fontWeight: 300, fontSize: "0.8rem", color: "var(--mid)" }}>
                  {person.role}
                </p>
                <p className="label-caps" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>
                  {person.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
