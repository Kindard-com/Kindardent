import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CP Structure",
  description: "Professional international company structure for the Kindard brand.",
};

const sections = [
  {
    id: "holding",
    label: "1. Parent Holding Company",
    details: [
      { k: "Company", v: "Kindardent Group AG" },
      { k: "Location", v: "Zurich, Switzerland" },
      { k: "Purpose", v: "Holding company, brand ownership, investors, strategy" },
    ]
  },
  {
    id: "operations",
    label: "2. European Fashion Operations",
    details: [
      { k: "Company", v: "Kindard Fashion Europe GmbH" },
      { k: "Location", v: "Switzerland / Germany" },
      { k: "Purpose", v: "Sales, warehousing, customer support" },
    ]
  },
  {
    id: "digital",
    label: "3. Digital & Technology Division",
    details: [
      { k: "Company", v: "Kindard Digital LTD" },
      { k: "Location", v: "United Kingdom" },
      { k: "Purpose", v: "Website, mobile app, backend systems, AI" },
    ]
  },
  {
    id: "logistics",
    label: "4. Logistics & Distribution",
    details: [
      { k: "Company", v: "Kindard Logistics BV" },
      { k: "Location", v: "Netherlands" },
      { k: "Purpose", v: "Warehousing, EU logistics, returns" },
    ]
  },
  {
    id: "ip",
    label: "5. Intellectual Property Structure",
    details: [
      { k: "Company", v: "Kindard IP Holding AG" },
      { k: "Location", v: "Zurich, Switzerland" },
      { k: "Purpose", v: "Trademark ownership, software rights, licensing" },
    ]
  },
];

export default function StructureCompanyPage() {
  return (
    <main>
      {/* Page header bar */}
      <div className="page-header-bar">
        <h1 className="heading-condensed" style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}>
          CP Structure
        </h1>
        <p className="label-caps" style={{ color: "var(--mid)" }}>
          Zurich Headquarters
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
          <nav aria-label="Company structure sections">
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
          
          {/* Intro & PDF Download */}
          <div
            style={{
              marginBottom: "3rem",
              padding: "2rem",
              border: "var(--border-width) solid var(--black)",
              borderLeft: "4px solid var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              background: "var(--white)"
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <h2 className="heading-condensed" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                Kindardent Group AG — Zurich
              </h2>
              <p style={{ fontWeight: 300, fontSize: "0.9rem", color: "var(--black)", lineHeight: 1.6 }}>
                This structure is designed for a modern premium kids fashion and digital commerce company with future expansion potential. Start lean and scalable with <strong>Kindardent Group AG (Holding)</strong> and <strong>Kindard Fashion Europe GmbH (Operations)</strong>.
              </p>
            </div>
            <a
              href="/Structure_company.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ fontSize: "0.75rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              VIEW PDF
            </a>
          </div>

          {/* Strategic Rationale Section */}
          <section style={{ marginBottom: "4rem" }}>
            <h2 className="heading-condensed" style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
              Strategic Architecture
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start" }}>
              <div>
                <p style={{ fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem", color: "#3a3a3a", marginBottom: "1rem" }}>
                  <strong>Why this structure?</strong> Setting up the parent holding company in Zurich provides unparalleled financial stability, robust investor protection, and a highly reputable global jurisdiction. By decoupling our European fashion operations, digital innovations, and intellectual property into their own dedicated entities, we isolate risk and allow each division to operate with maximum agility.
                </p>
                <p style={{ fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem", color: "#3a3a3a" }}>
                  Our digital team in the UK can innovate at the speed of tech, while our logistics hub in the Netherlands ensures seamless, duty-efficient distribution across the EU. This isn't just an organizational chart — it's a foundation built specifically for rapid, sustainable global scale.
                </p>
              </div>
              <div>
                <img 
                  src="/kdt.svg" 
                  alt="KDT Structure Diagram" 
                  style={{ width: "100%", height: "auto", border: "var(--border-width) solid var(--black)", display: "block" }} 
                />
              </div>
            </div>
          </section>

          {sections.map((s, i) => (
            <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} style={{ marginBottom: "2.5rem" }}>
              <h2
                id={`${s.id}-heading`}
                className="heading-condensed"
                style={{ fontSize: "1.5rem", marginBottom: "1.25rem", color: "var(--black)" }}
              >
                {s.label}
              </h2>
              
              <div style={{ border: "var(--border-width) solid var(--border)", borderRadius: "4px", overflow: "hidden" }}>
                {s.details.map((detail, idx) => (
                  <div 
                    key={detail.k} 
                    style={{ 
                      display: "flex", 
                      borderBottom: idx < s.details.length - 1 ? "var(--border-width) solid var(--border)" : "none",
                      background: idx % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)"
                    }}
                  >
                    <div style={{ width: "160px", padding: "0.75rem 1rem", borderRight: "var(--border-width) solid var(--border)", fontWeight: 500, fontSize: "0.85rem", color: "var(--black)" }}>
                      {detail.k}
                    </div>
                    <div style={{ flex: 1, padding: "0.75rem 1rem", fontWeight: 300, fontSize: "0.85rem", color: "#3a3a3a" }}>
                      {detail.v.startsWith("http://") || detail.v.startsWith("https://") ? (
                        <a href={detail.v} target="_blank" rel="noopener noreferrer" style={{ color: "var(--black)", textDecoration: "underline" }}>
                          {detail.v}
                        </a>
                      ) : (
                        detail.v
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Contact footer */}
          <div
            style={{
              marginTop: "4rem",
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
              Investor Relations or Structure inquiries?
            </p>
            <a
              href="mailto:investors@kindard.com"
              className="btn btn-ghost"
              style={{ fontSize: "0.75rem" }}
            >
              investors@kindard.com →
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
