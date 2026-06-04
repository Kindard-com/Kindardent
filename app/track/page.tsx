"use client";
import { useState } from "react";

interface TrackingEvent {
  label: string;
  date: string;
  detail?: string;
  done: boolean;
}

const mockTracking: TrackingEvent[] = [
  { label: "Order Placed", date: "Jan 12", done: true },
  { label: "Processing", date: "Jan 12", done: true },
  { label: "Shipped", date: "Jan 13", detail: "DHL Express", done: true },
  { label: "Out for Delivery", date: "Jan 14", done: false },
  { label: "Delivered", date: "—", done: false },
];

export default function TrackPage() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [smsNumber, setSmsNumber] = useState("");
  const [smsSubscribed, setSmsSubscribed] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) setSubmitted(true);
  };

  return (
    <main>
      <div className="page-header-bar">
        <h1 className="heading-condensed" style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}>
          Track My Order
        </h1>
      </div>

      <div className="page-body">

        {/* Search */}
        <section aria-labelledby="track-search-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="track-search-heading"
            className="heading-condensed"
            style={{ fontSize: "1.75rem", marginBottom: "1.5rem", textAlign: "center" }}
          >
            Where's My Order?
          </h2>
          <form
            onSubmit={handleTrack}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              border: "2px solid var(--black)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            <input
              type="text"
              id="track-order-input"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSubmitted(false); }}
              placeholder="ENTER ORDER # OR EMAIL"
              aria-label="Order number or email address"
              style={{
                padding: "1.25rem 1.25rem",
                border: "none",
                fontFamily: "var(--font-condensed)",
                fontWeight: 700,
                fontSize: "0.9rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                background: "var(--white)",
                outline: "none",
                width: "100%",
              }}
            />
            <button
              type="submit"
              className="btn btn-primary btn-full"
              style={{ borderTop: "2px solid var(--black)", height: "52px", fontSize: "0.85rem" }}
            >
              TRACK ORDER →
            </button>
          </form>
        </section>

        {/* Tracking result */}
        {submitted && (
          <>
            {/* Package details card */}
            <section
              aria-labelledby="package-heading"
              style={{
                border: "var(--border-width) solid var(--black)",
                padding: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "0.75rem" }}>Package Details</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
                {[
                  { label: "Order", value: "#12345" },
                  { label: "Items", value: "2 items" },
                  { label: "Route", value: "AMS → NYC" },
                  { label: "Carrier", value: "DHL Express" },
                  { label: "Tracking", value: "1Z999AA10123" },
                ].map((d) => (
                  <div key={d.label}>
                    <p className="label-caps" style={{ color: "var(--mid)", marginBottom: "0.25rem" }}>{d.label}</p>
                    <p className="heading-condensed" style={{ fontSize: "0.95rem" }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline */}
            <section aria-labelledby="timeline-heading" style={{ marginBottom: "2rem" }}>
              <h2
                id="timeline-heading"
                className="heading-condensed"
                style={{ fontSize: "1rem", marginBottom: "1.5rem" }}
              >
                Delivery Status
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {mockTracking.map((event, i) => (
                  <div
                    key={event.label}
                    style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
                  >
                    {/* Node + line */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div
                        className={`timeline-node ${event.done ? "active" : ""}`}
                        aria-label={event.done ? "Completed" : "Pending"}
                      />
                      {i < mockTracking.length - 1 && (
                        <div
                          style={{
                            width: "1px",
                            flex: 1,
                            minHeight: "36px",
                            background: event.done ? "var(--black)" : "var(--border)",
                          }}
                        />
                      )}
                    </div>
                    {/* Text */}
                    <div style={{ paddingBottom: i < mockTracking.length - 1 ? "1.25rem" : 0 }}>
                      <p
                        className="heading-condensed"
                        style={{
                          fontSize: "0.95rem",
                          color: event.done ? "var(--black)" : "var(--mid)",
                        }}
                      >
                        {event.label}
                      </p>
                      <p style={{ fontWeight: 300, fontSize: "0.8rem", color: "var(--mid)" }}>
                        {event.date}{event.detail ? ` — ${event.detail}` : ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Map placeholder */}
            <div
              style={{
                border: "var(--border-width) solid var(--black)",
                height: "180px",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                background: "#f0ede8",
              }}
              aria-label="Delivery route map"
            >
              <svg viewBox="0 0 400 160" width="100%" height="100%" aria-hidden="true">
                {/* Stylised world outline suggestion */}
                <path d="M20 80 Q120 30 200 80 Q280 130 380 60" stroke="var(--black)" strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
                {/* Origin dot */}
                <circle cx="20" cy="80" r="6" fill="var(--black)" />
                <text x="24" y="74" fontFamily="var(--font-condensed, sans-serif)" fontSize="10" fontWeight="700" fill="var(--black)">AMS</text>
                {/* Current dot */}
                <circle cx="200" cy="80" r="8" fill="var(--accent)" stroke="var(--black)" strokeWidth="1.5" />
                <text x="204" y="74" fontFamily="var(--font-condensed, sans-serif)" fontSize="10" fontWeight="700" fill="var(--black)">In Transit</text>
                {/* Destination dot */}
                <circle cx="380" cy="60" r="6" fill="var(--border)" stroke="var(--black)" strokeWidth="1.5" />
                <text x="350" y="54" fontFamily="var(--font-condensed, sans-serif)" fontSize="10" fontWeight="700" fill="var(--mid)">NYC</text>
              </svg>
            </div>

            {/* SMS opt-in */}
            <div
              style={{
                border: "var(--border-width) solid var(--black)",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <p className="heading-condensed" style={{ fontSize: "0.9rem", flex: "1", minWidth: "180px" }}>
                Get SMS Updates
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); setSmsSubscribed(true); }}
                style={{ display: "flex", gap: 0, flex: 2, minWidth: "240px" }}
              >
                <input
                  type="tel"
                  id="sms-phone-input"
                  value={smsNumber}
                  onChange={(e) => setSmsNumber(e.target.value)}
                  placeholder="+31 6 00 000 000"
                  aria-label="Phone number for SMS updates"
                  disabled={smsSubscribed}
                  style={{
                    flex: 1,
                    padding: "0.65rem 0.875rem",
                    border: "var(--border-width) solid var(--black)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    background: "var(--white)",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={smsSubscribed}
                  style={{ fontSize: "0.75rem", padding: "0.65rem 1rem" }}
                >
                  {smsSubscribed ? "✓ Done" : "Subscribe"}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
