"use client";
import { useState } from "react";

const sections = [
  {
    num: "01",
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Kindard Kids website, mobile app, or services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately. These terms apply to all visitors, users, and customers.",
    pullQuote: "USE OF THIS SITE CONSTITUTES ACCEPTANCE OF ALL TERMS.",
  },
  {
    num: "02",
    title: "Eligibility",
    content:
      "You must be at least 18 years old, or have parental/guardian consent, to use our services and make purchases. By placing an order you represent that you meet this requirement.",
    pullQuote: null,
  },
  {
    num: "03",
    title: "Products & Pricing",
    content:
      "All prices are listed in EUR and are inclusive of VAT where applicable. We reserve the right to modify prices at any time. In the event of a pricing error, we will notify you before processing payment. Product images are for illustrative purposes; slight colour variations may occur.",
    pullQuote: "PRICES MAY CHANGE. YOUR ORDER IS CONFIRMED ONLY UPON PAYMENT.",
  },
  {
    num: "04",
    title: "Orders & Payment",
    content:
      "Once you place an order, you will receive an email confirmation. Acceptance of your order occurs only when we dispatch the goods. We accept major credit/debit cards, iDEAL, Klarna, and PayPal. All transactions are encrypted via TLS.",
    pullQuote: null,
  },
  {
    num: "05",
    title: "Shipping & Returns",
    content:
      "Delivery timelines are estimates only and not guaranteed. For return eligibility and procedures, please refer to our Returns & Exchanges policy. Kindard is not responsible for delays caused by customs, weather, or carrier issues.",
    pullQuote: null,
  },
  {
    num: "06",
    title: "Intellectual Property",
    content:
      "All content on this site — including logos, imagery, typography, and copy — is the intellectual property of Kindard Kids BV. Reproduction without prior written consent is prohibited.",
    pullQuote: "ALL CONTENT IS PROTECTED. DO NOT REPRODUCE WITHOUT PERMISSION.",
  },
  {
    num: "07",
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Kindard Kids shall not be liable for indirect, incidental, or consequential damages arising from use of our services. Our total liability shall not exceed the amount paid for the relevant order.",
    pullQuote: null,
  },
];

export default function TermsPage() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <main>
      {/* Hero bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          height: "60px",
          borderBottom: "var(--border-width) solid var(--black)",
        }}
      >
        <h1
          className="heading-condensed"
          style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}
        >
          Terms of Service
        </h1>
        <p className="label-caps" style={{ color: "var(--mid)" }}>
          Effective: June 2026
        </p>
      </div>

      <div className="page-body">
        <p style={{ fontWeight: 300, lineHeight: 1.7, marginBottom: "2.5rem", color: "#3a3a3a", fontSize: "0.95rem" }}>
          Please read these terms carefully before using our services. They contain important information about your rights and obligations.
        </p>

        {/* Accordion sections */}
        <div>
          {sections.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderTop: i === 0 ? "var(--border-width) solid var(--black)" : "none",
                  borderBottom: "var(--border-width) solid var(--black)",
                  ...(isOpen ? {
                    borderLeft: "3px solid var(--accent)",
                    paddingLeft: "1rem",
                    background: "#fffde8",
                  } : {}),
                }}
              >
                <button
                  aria-expanded={isOpen}
                  aria-controls={`terms-body-${i}`}
                  id={`terms-trigger-${i}`}
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "baseline", gap: "1.25rem" }}>
                    <span
                      className="heading-condensed"
                      style={{ fontSize: "1.5rem", color: "var(--mid)", lineHeight: 1 }}
                    >
                      {s.num}
                    </span>
                    <span
                      className="heading-condensed"
                      style={{ fontSize: "1.1rem" }}
                    >
                      {s.title}
                    </span>
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-condensed)",
                      fontSize: "1.3rem",
                      fontWeight: 300,
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform 0.2s ease",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`terms-body-${i}`}
                  role="region"
                  aria-labelledby={`terms-trigger-${i}`}
                  className={`accordion-body ${isOpen ? "open" : ""}`}
                  hidden={!isOpen}
                >
                  <div style={{ paddingBottom: "1.5rem" }}>
                    <p style={{ fontWeight: 300, lineHeight: 1.8, fontSize: "0.9rem", color: "#3a3a3a", marginBottom: s.pullQuote ? "1.25rem" : 0 }}>
                      {s.content}
                    </p>
                    {s.pullQuote && (
                      <div className="pull-quote" style={{ marginTop: "1rem" }}>
                        {s.pullQuote}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <button
          className="btn btn-primary btn-full"
          style={{ marginTop: "3rem", height: "56px", fontSize: "0.9rem" }}
          onClick={() => alert("Terms accepted")}
        >
          I ACCEPT THE TERMS →
        </button>
      </div>
    </main>
  );
}
