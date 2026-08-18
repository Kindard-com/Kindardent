import type { Metadata } from "next";
import FaqAccordion from "@/app/components/FaqAccordion";
import HelpTrackForm from "@/app/components/HelpTrackForm";

export const metadata: Metadata = {
  title: "Help & Contact",
  description: "Get in touch with Kindard Kids. Live chat, email, and WhatsApp support. We reply within 24 hours.",
};

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard delivery takes 3-5 business days within the EU. Express options (1-2 days) are available at checkout. See our Shipping Info page for full details and international timelines.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be cancelled or modified within 1 hour of placement. After that, the order enters fulfilment and cannot be changed. Please contact us immediately via live chat for the fastest response.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer 30-day free returns on all unworn, unwashed items with original tags attached. Customised items, underwear, swimwear, and items marked FINAL SALE are not eligible. Visit our Returns & Exchanges page to start a return.",
  },
  {
    question: "How do I find my child's size?",
    answer:
      "Our sizes run true-to-size. Check our Size Guide for a full measurement chart by age, height, chest, and waist. Our silhouettes are designed with generous movement room — when in doubt, size up.",
  },
  {
    question: "My item arrived damaged — what do I do?",
    answer:
      "We're sorry to hear that. Please contact us within 7 days of delivery with your order number and a photo of the damage. We'll arrange a replacement or full refund immediately, no questions asked.",
  },
];

export default function HelpPage() {
  return (
    <main>
      {/* Hero bar */}
      <div
        style={{
          background: "var(--black)",
          padding: "3rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <h1
          className="heading-condensed heading-xl"
          style={{ color: "var(--white)" }}
        >
          GET IN <span style={{ color: "var(--accent)" }}>TOUCH</span>
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "var(--mid)", fontSize: "1rem" }}>
          We reply within 24 hours — usually much faster.
        </p>
      </div>

      <div className="page-body-wide">

        {/* Contact method cards */}
        <section aria-labelledby="contact-heading">
          <h2
            id="contact-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}
          >
            Contact Methods
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "0",
            }}
          >
            {[
              {
                emoji: "💬",
                title: "Live Chat",
                detail: "MON–FRI 9AM–6PM CET",
                cta: "START CHAT",
                href: "#chat",
                btnClass: "btn-primary",
              },
              {
                emoji: "📧",
                title: "Email",
                detail: "hello@kindard.com",
                cta: "SEND EMAIL",
                href: "mailto:hello@kindard.com",
                btnClass: "btn-ghost",
              },
              {
                emoji: "📱",
                title: "WhatsApp",
                detail: "+31 6 00 000 000",
                cta: "MESSAGE US",
                href: "https://wa.me/310600000000",
                btnClass: "btn-ghost",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                style={{
                  padding: "2rem",
                  border: "var(--border-width) solid var(--black)",
                  borderLeft: i > 0 ? "none" : "var(--border-width) solid var(--black)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.75rem" }} aria-hidden="true">{card.emoji}</span>
                <p className="heading-condensed" style={{ fontSize: "1.1rem" }}>{card.title}</p>
                <p style={{ fontWeight: 300, fontSize: "0.875rem", color: "#5a5856" }}>{card.detail}</p>
                <a href={card.href} className={`btn ${card.btnClass}`} style={{ marginTop: "auto", fontSize: "0.75rem" }}>
                  {card.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* FAQ */}
        <section aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} id="help-faq" />
        </section>

        <hr className="section-divider" />

        {/* Order tracking input */}
        <section aria-labelledby="track-heading">
          <h2
            id="track-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1rem" }}
          >
            Track Your Order
          </h2>
          <HelpTrackForm />
        </section>

        <hr className="section-divider" />

        {/* HQ address */}
        <section
          aria-labelledby="hq-heading"
          style={{
            border: "var(--border-width) solid var(--black)",
            padding: "1.5rem",
            maxWidth: "400px",
          }}
        >
          <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "0.75rem" }}>Our Address</p>
          <h2 id="hq-heading" className="heading-condensed" style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
            Kindard HQ
          </h2>
          <p style={{ fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.7, color: "#3a3a3a" }}>
            Kindard Kids BV<br />
            Keizersgracht 123<br />
            1015 CW Amsterdam<br />
            Netherlands
          </p>
        </section>

      </div>
    </main>
  );
}
