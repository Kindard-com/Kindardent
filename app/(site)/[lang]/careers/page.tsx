"use client";


const jobs = [
  { dept: "Creative", title: "Creative Director", location: "Amsterdam", id: "jd-1" },
  { dept: "Growth", title: "Growth Marketer", location: "Remote / Amsterdam", id: "jd-2" },
  { dept: "Brand", title: "Brand Manager", location: "Amsterdam", id: "jd-3" },
  { dept: "Tech", title: "Full-Stack Developer", location: "Remote", id: "jd-4" },
  { dept: "Ops", title: "Customer Experience Lead", location: "Amsterdam", id: "jd-5" },
];

const perks = [
  "Remote first",
  "Amsterdam HQ access",
  "Brand wardrobe allowance",
  "Equity participation",
  "Learning & dev budget",
  "Annual team retreats",
];

const culture = [
  { emoji: "🏀", title: "Move Fast", body: "We ship quickly, iterate constantly, and trust the team to make calls." },
  { emoji: "🎨", title: "Stay Creative", body: "Every voice matters. Our best ideas come from the most unexpected places." },
  { emoji: "🌍", title: "Think Global", body: "Amsterdam roots. International mindset. We build for kids everywhere." },
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: "var(--black)",
          padding: "clamp(3rem, 8vw, 6rem) 2rem",
        }}
        aria-labelledby="careers-hero-heading"
      >
        <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "1rem" }}>Open Positions</p>
        <h1
          id="careers-hero-heading"
          className="heading-condensed"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            color: "var(--white)",
            lineHeight: 0.9,
            maxWidth: "800px",
          }}
        >
          BUILD THE FUTURE OF{" "}
          <span
            style={{
              background: "var(--accent)",
              color: "var(--black)",
              padding: "0 0.15em",
              display: "inline",
            }}
          >
            KIDS FASHION
          </span>
        </h1>
        <p style={{ marginTop: "1.5rem", fontWeight: 300, color: "var(--mid)", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.7 }}>
          We're a small, ambitious team building the brand we always wished existed. Come help us do it.
        </p>
      </section>

      {/* Culture cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 0,
          borderBottom: "var(--border-width) solid var(--black)",
        }}
        aria-labelledby="culture-heading"
      >
        {culture.map((c, i) => (
          <div
            key={c.title}
            style={{
              padding: "2rem",
              borderRight: i < culture.length - 1 ? "var(--border-width) solid var(--black)" : "none",
            }}
          >
            <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.75rem" }} aria-hidden="true">
              {c.emoji}
            </span>
            <p className="heading-condensed" style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              {c.title}
            </p>
            <p style={{ fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, color: "#3a3a3a" }}>
              {c.body}
            </p>
          </div>
        ))}
      </section>

      <div className="page-body-wide">

        {/* Job listings */}
        <section aria-labelledby="jobs-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="jobs-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "0" }}
          >
            Open Positions
          </h2>
          <div style={{ marginTop: "1.5rem" }}>
            {jobs.map((job, i) => (
              <a
                key={job.id}
                id={job.id}
                href={`/careers/${job.id}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto auto",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1.25rem 1rem",
                  borderTop: i === 0 ? "var(--border-width) solid var(--black)" : "none",
                  borderBottom: "var(--border-width) solid var(--black)",
                  transition: "background 0.15s",
                  textDecoration: "none",
                  color: "var(--black)",
                }}
                className="job-row"
              >
                <span className="badge badge-black">{job.dept}</span>
                <span className="heading-condensed" style={{ fontSize: "1.1rem" }}>{job.title}</span>
                <span style={{ fontWeight: 300, fontSize: "0.8rem", color: "var(--mid)", whiteSpace: "nowrap" }}>
                  {job.location}
                </span>
                <span
                  className="heading-condensed"
                  style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}
                >
                  APPLY →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Perks grid */}
        <section aria-labelledby="perks-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="perks-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}
          >
            What You Get
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {perks.map((perk) => (
              <span
                key={perk}
                style={{
                  border: "var(--border-width) solid var(--black)",
                  padding: "0.5rem 1rem",
                  fontFamily: "var(--font-condensed)",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {perk}
              </span>
            ))}
          </div>
        </section>

        {/* Open application CTA */}
        <div
          style={{
            border: "var(--border-width) solid var(--black)",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p className="heading-condensed" style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>
              Don't see your role?
            </p>
            <p style={{ fontWeight: 300, fontSize: "0.875rem", color: "#5a5856" }}>
              Send us a signal — we're always looking for exceptional people.
            </p>
          </div>
          <a
            href="mailto:careers@kindard.com"
            className="btn btn-primary"
            style={{ fontSize: "0.75rem" }}
          >
            SEND OPEN APPLICATION →
          </a>
        </div>
      </div>

      <style>{`
        .job-row:hover {
          background: var(--accent) !important;
          color: var(--black) !important;
        }
        .job-row:hover .badge-black {
          background: var(--black) !important;
          color: var(--accent) !important;
        }
      `}</style>
    </main>
  );
}
