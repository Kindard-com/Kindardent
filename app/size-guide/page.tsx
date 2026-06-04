"use client";
import { useState } from "react";

type SizeTab = "tops" | "bottoms" | "shoes";

const sizeData: Record<SizeTab, { headers: string[]; rows: (string | number)[][] }> = {
  tops: {
    headers: ["Size", "Age", "Height (cm)", "Chest (cm)", "Waist (cm)"],
    rows: [
      ["2Y", "1–2", "80–92", "50", "47"],
      ["3Y", "2–3", "92–98", "52", "49"],
      ["4Y", "3–4", "98–104", "54", "51"],
      ["5Y", "4–5", "104–110", "56", "52"],
      ["6Y", "5–6", "110–116", "58", "53"],
      ["7Y", "6–7", "116–122", "60", "54"],
      ["8Y", "7–8", "122–128", "62", "55"],
      ["10Y", "9–10", "128–140", "66", "57"],
      ["12Y", "11–12", "140–152", "70", "59"],
      ["14Y", "13–14", "152–164", "76", "62"],
    ],
  },
  bottoms: {
    headers: ["Size", "Age", "Height (cm)", "Waist (cm)", "Hip (cm)", "Inseam (cm)"],
    rows: [
      ["2Y", "1–2", "80–92", "47", "50", "30"],
      ["3Y", "2–3", "92–98", "49", "52", "34"],
      ["4Y", "3–4", "98–104", "51", "54", "38"],
      ["5Y", "4–5", "104–110", "52", "56", "42"],
      ["6Y", "5–6", "110–116", "53", "58", "46"],
      ["7Y", "6–7", "116–122", "54", "60", "49"],
      ["8Y", "7–8", "122–128", "55", "63", "52"],
      ["10Y", "9–10", "128–140", "57", "67", "58"],
      ["12Y", "11–12", "140–152", "59", "72", "64"],
      ["14Y", "13–14", "152–164", "62", "78", "70"],
    ],
  },
  shoes: {
    headers: ["EU Size", "UK Size", "US Size", "Foot Length (mm)"],
    rows: [
      ["22", "5.5", "6", "140"],
      ["24", "7", "7.5", "150"],
      ["26", "8.5", "9", "165"],
      ["28", "10", "10.5", "180"],
      ["30", "11.5", "12", "190"],
      ["32", "13", "13.5", "205"],
      ["34", "2", "2.5", "220"],
      ["36", "3.5", "4", "235"],
      ["38", "5", "5.5", "245"],
    ],
  },
};

const tabs: { id: SizeTab; label: string }[] = [
  { id: "tops", label: "TOPS" },
  { id: "bottoms", label: "BOTTOMS" },
  { id: "shoes", label: "SHOES" },
];

export default function SizeGuidePage() {
  const [activeTab, setActiveTab] = useState<SizeTab>("tops");
  const data = sizeData[activeTab];

  return (
    <main>
      <div className="page-header-bar">
        <h1 className="heading-condensed" style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}>
          Size Guide
        </h1>
        <p className="label-caps" style={{ color: "var(--mid)" }}>Ages 2–14</p>
      </div>

      <div className="page-body-wide">

        {/* Intro */}
        <p style={{ fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem", color: "#3a3a3a" }}>
          Fits designed for real kids — oversized drop-shoulder silhouettes with room for movement and growth.
        </p>

        {/* Tab bar */}
        <div className="tab-bar" role="tablist" aria-label="Size chart categories" style={{ marginBottom: 0 }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              id={`size-tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`size-panel-${tab.id}`}
              className="tab-btn"
              data-active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div
          id={`size-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`size-tab-${activeTab}`}
          style={{ border: "var(--border-width) solid var(--black)", overflowX: "auto", borderTop: "none" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "var(--black)" }}>
                {data.headers.map((h, i) => (
                  <th
                    key={h}
                    style={{
                      padding: "0.75rem 1rem",
                      fontFamily: "var(--font-condensed)",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: i === 0 ? "var(--accent)" : "var(--white)",
                      textAlign: "left",
                      whiteSpace: "nowrap",
                      position: i === 0 ? "sticky" : "static",
                      left: i === 0 ? 0 : "auto",
                      zIndex: i === 0 ? 1 : 0,
                      background: i === 0 ? "var(--black)" : "transparent",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? "var(--white)" : "#ebe9e4" }}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "0.75rem 1rem",
                        fontFamily: ci === 0 ? "var(--font-condensed)" : "var(--font-body)",
                        fontWeight: ci === 0 ? 700 : 300,
                        fontSize: "0.875rem",
                        whiteSpace: "nowrap",
                        position: ci === 0 ? "sticky" : "static",
                        left: ci === 0 ? 0 : "auto",
                        background: ci === 0 ? (ri % 2 === 0 ? "var(--white)" : "#ebe9e4") : "transparent",
                        zIndex: ci === 0 ? 1 : 0,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: "0.75rem", fontWeight: 300, fontSize: "0.8rem", color: "var(--mid)" }}>
          All measurements in centimetres unless stated. Charts are guidelines — actual fit may vary by style.
        </p>

        <hr className="section-divider" />

        {/* How to measure */}
        <section aria-labelledby="measure-heading" style={{ marginBottom: "3rem" }}>
          <h2
            id="measure-heading"
            className="heading-condensed"
            style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}
          >
            How to Measure
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { label: "Height", icon: "↕", desc: "Stand straight against a wall. Measure from the floor to the top of the head." },
              { label: "Chest", icon: "○", desc: "Wrap tape around the fullest part of the chest, keeping it parallel to the floor." },
              { label: "Waist", icon: "◎", desc: "Measure around the natural waist — the narrowest part of the torso." },
              { label: "Hip", icon: "◈", desc: "Measure around the fullest part of the hips, about 20cm below the waist." },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1.5rem",
                  border: "var(--border-width) solid var(--black)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-condensed)",
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "var(--black)",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <p className="heading-condensed" style={{ fontSize: "1rem" }}>{item.label}</p>
                <p style={{ fontWeight: 300, fontSize: "0.85rem", lineHeight: 1.6, color: "#3a3a3a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fit philosophy callout */}
        <div
          style={{
            background: "var(--black)",
            padding: "2rem",
            marginBottom: "2rem",
          }}
        >
          <p
            className="heading-condensed"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              color: "var(--accent)",
              marginBottom: "0.75rem",
            }}
          >
            KINDARD FIT PHILOSOPHY
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "var(--mid)", lineHeight: 1.7, fontSize: "0.9rem" }}>
            Kindard cuts run true-to-size with generous room for movement. Still unsure? Size up — our silhouettes are designed oversized and look great with extra room.
          </p>
        </div>

        {/* Chat CTA */}
        <a
          href="/help"
          className="btn btn-ghost"
          style={{ display: "inline-flex", gap: "0.5rem" }}
        >
          <span aria-hidden="true">💬</span> CHAT WITH US — WE'LL HELP YOU SIZE
        </a>
      </div>
    </main>
  );
}
