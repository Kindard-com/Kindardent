import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description: "30-day free returns on all Kindard Kids orders. Simple, fast, no hassle.",
};

const steps = [
  {
    num: "01",
    title: "Initiate Return",
    description: "Fill out our online return form with your order number and reason for return.",
  },
  {
    num: "02",
    title: "Print Label",
    description: "We'll email you a prepaid return shipping label. Print and attach to your parcel.",
  },
  {
    num: "03",
    title: "Drop Off",
    description: "Drop your parcel at any PostNL, DHL, or carrier location near you.",
  },
  {
    num: "04",
    title: "Refund in 5 Days",
    description: "Once we receive and inspect your return, your refund is processed within 5 business days.",
  },
];

const eligible = [
  { ok: true, text: "Unworn & unwashed items" },
  { ok: false, text: "Customised items" },
  { ok: true, text: "Original tags attached" },
  { ok: false, text: "Underwear / swimwear" },
  { ok: true, text: "Within 30 days of delivery" },
  { ok: false, text: "Items marked FINAL SALE" },
];

export default function ReturnsPage() {
  return (
    <main>
      {/* Hero banner */}
      <div
        style={{
          background: "var(--black)",
          padding: "3rem 2rem",
        }}
      >
        <h1
          className="heading-condensed"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            color: "var(--white)",
            fontStyle: "italic",
            lineHeight: 0.9,
          }}
        >
          30-DAY<br />FREE<br /><span style={{ color: "var(--accent)" }}>RETURNS</span>
        </h1>
        <p style={{ marginTop: "1rem", fontWeight: 300, color: "var(--mid)", fontSize: "1rem" }}>
          Change your mind? No worries — we've got you covered.
        </p>
      </div>

      <div className="page-body-wide">

        {/* Step-by-step */}
        <section aria-labelledby="steps-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="steps-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "2rem" }}
          >
            Return Process
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "0",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  padding: "2rem 1.5rem",
                  border: "var(--border-width) solid var(--black)",
                  borderLeft: i > 0 ? "none" : "var(--border-width) solid var(--black)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Giant ghost number */}
                <span
                  aria-hidden="true"
                  className="heading-condensed"
                  style={{
                    position: "absolute",
                    bottom: "-0.5rem",
                    right: "0.5rem",
                    fontSize: "8rem",
                    color: "var(--black)",
                    opacity: 0.06,
                    lineHeight: 1,
                    pointerEvents: "none",
                  }}
                >
                  {step.num}
                </span>
                <p className="heading-condensed" style={{ fontSize: "0.7rem", color: "var(--mid)", marginBottom: "0.5rem" }}>
                  STEP {step.num}
                </p>
                <p className="heading-condensed" style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
                  {step.title}
                </p>
                <p style={{ fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, color: "#3a3a3a" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Eligibility checklist */}
        <section aria-labelledby="eligibility-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="eligibility-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}
          >
            Eligibility
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "0.5rem 3rem",
            }}
          >
            {eligible.map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.6rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-condensed)",
                    fontWeight: 900,
                    fontSize: "1rem",
                    color: item.ok ? "var(--black)" : "var(--red)",
                    flexShrink: 0,
                  }}
                  aria-label={item.ok ? "Eligible" : "Not eligible"}
                >
                  {item.ok ? "✓" : "✗"}
                </span>
                <span style={{ fontWeight: 300, fontSize: "0.9rem" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Link
          href="/track"
          className="btn btn-primary btn-full"
          style={{ display: "flex", height: "56px", fontSize: "0.9rem", marginBottom: "1.5rem" }}
        >
          START YOUR RETURN →
        </Link>

        {/* Exchange note */}
        <div
          style={{
            border: "var(--border-width) solid var(--black)",
            borderLeft: "3px solid var(--accent)",
            padding: "1.25rem 1.5rem",
            background: "#fffde8",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.7 }}>
            <strong style={{ fontFamily: "var(--font-condensed)", fontWeight: 700 }}>Prefer an exchange?</strong>{" "}
            We'll reserve the new size or colour while processing your return — no need to place a new order first.
          </p>
        </div>
      </div>
    </main>
  );
}
