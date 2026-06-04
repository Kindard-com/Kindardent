import type { Metadata } from "next";
import Marquee from "../components/Marquee";

export const metadata: Metadata = {
  title: "Shipping Info",
  description: "Kindard Kids shipping methods, delivery times, costs, and sustainable packaging info.",
};

const shippingMethods = [
  { method: "Standard", delivery: "3–5 business days", cost: "€4.95", free: false },
  { method: "Express", delivery: "1–2 business days", cost: "€9.95", free: false },
  { method: "Same Day (NL)", delivery: "Today", cost: "€14.95", free: false },
  { method: "Free Shipping", delivery: "3–5 business days", cost: "Free", free: true },
];

const steps = [
  { label: "Order Placed", icon: "📦" },
  { label: "Processing", icon: "⚙️" },
  { label: "Shipped", icon: "🚚" },
  { label: "Delivered", icon: "✅" },
];

export default function ShippingPage() {
  return (
    <main>
      <div className="page-header-bar">
        <h1 className="heading-condensed" style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}>
          Shipping Information
        </h1>
      </div>

      {/* Marquee banner */}
      <Marquee
        text="FREE SHIPPING ON ORDERS OVER €75"
        separator="★"
        background="var(--black)"
        color="var(--white)"
      />

      <div className="page-body-wide">

        {/* Shipping table */}
        <section aria-labelledby="shipping-table-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="shipping-table-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}
          >
            Shipping Methods
          </h2>
          <div style={{ border: "var(--border-width) solid var(--black)", overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--black)" }}>
                  {["Method", "Delivery", "Cost"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.875rem 1.25rem",
                        fontFamily: "var(--font-condensed)",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--accent)",
                        textAlign: "left",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shippingMethods.map((row, i) => (
                  <tr
                    key={row.method}
                    style={{ background: i % 2 === 0 ? "var(--white)" : "#ebe9e4" }}
                  >
                    <td style={{ padding: "0.875rem 1.25rem", fontFamily: "var(--font-condensed)", fontWeight: 700, fontSize: "0.9rem" }}>
                      {row.method}
                    </td>
                    <td style={{ padding: "0.875rem 1.25rem", fontWeight: 300, fontSize: "0.875rem" }}>
                      {row.delivery}
                    </td>
                    <td style={{ padding: "0.875rem 1.25rem" }}>
                      <span
                        className="heading-condensed"
                        style={{
                          fontSize: "0.9rem",
                          color: row.free ? "var(--black)" : "inherit",
                          background: row.free ? "var(--accent)" : "transparent",
                          padding: row.free ? "0.15rem 0.5rem" : "0",
                        }}
                      >
                        {row.cost}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "0.75rem", fontWeight: 300, fontSize: "0.8rem", color: "var(--mid)" }}>
            * Free shipping automatically applied at checkout for orders ≥ €75.
          </p>
        </section>

        <hr className="section-divider" />

        {/* 4-step timeline */}
        <section aria-labelledby="process-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="process-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "2rem" }}
          >
            Your Order Journey
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              position: "relative",
            }}
          >
            {/* Connecting line */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "24px",
                left: "12.5%",
                right: "12.5%",
                height: "1px",
                borderTop: "2px dashed var(--black)",
                zIndex: 0,
              }}
            />
            {steps.map((step, i) => (
              <div
                key={step.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: i < 3 ? "var(--black)" : "var(--white)",
                    border: "var(--border-width) solid var(--black)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                  }}
                  aria-hidden="true"
                >
                  {step.icon}
                </div>
                <p
                  className="heading-condensed"
                  style={{ fontSize: "0.8rem", textAlign: "center" }}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Info cards */}
        <section aria-labelledby="info-heading">
          <h2
            id="info-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}
          >
            Good to Know
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              {
                icon: "🌿",
                title: "Sustainable Packaging",
                body: "All Kindard orders ship in 100% recycled, plastic-free packaging. Our shipping boxes are compostable.",
              },
              {
                icon: "📍",
                title: "Real-Time Tracking",
                body: "Once your order ships, you'll receive a tracking link via email. Track your order anytime on our Track My Order page.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  padding: "1.5rem",
                  border: "var(--border-width) solid var(--black)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "1.5rem" }} aria-hidden="true">{card.icon}</span>
                <p className="heading-condensed" style={{ fontSize: "1rem" }}>{card.title}</p>
                <p style={{ fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, color: "#3a3a3a" }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
