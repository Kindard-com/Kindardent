"use client";
import { useState } from "react";

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  defaultOn: boolean;
}

const categories: CookieCategory[] = [
  {
    id: "necessary",
    name: "Strictly Necessary",
    description:
      "These cookies are essential for the website to function. They enable core features like security, session management, and checkout. They cannot be disabled.",
    required: true,
    defaultOn: true,
  },
  {
    id: "analytics",
    name: "Analytics & Performance",
    description:
      "Help us understand how visitors interact with our website by collecting and reporting information anonymously. Used to improve page performance and user flows.",
    required: false,
    defaultOn: true,
  },
  {
    id: "marketing",
    name: "Marketing & Personalisation",
    description:
      "Used to track visitors across websites to display relevant and personalised advertising. Also used to measure the effectiveness of ad campaigns.",
    required: false,
    defaultOn: false,
  },
  {
    id: "functional",
    name: "Functional",
    description:
      "Enable enhanced functionality and personalisation, such as live chat, size recommendations, and saved preferences. If disabled some features may not work.",
    required: false,
    defaultOn: true,
  },
];

export default function CookieSettingsPage() {
  const [settings, setSettings] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(categories.map((c) => [c.id, c.defaultOn]))
  );
  const [saved, setSaved] = useState(false);

  const toggle = (id: string) => {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
    setSaved(false);
  };

  const acceptAll = () => {
    setSettings(Object.fromEntries(categories.map((c) => [c.id, true])));
    setSaved(true);
  };
  const rejectAll = () => {
    setSettings(Object.fromEntries(categories.map((c) => [c.id, c.required])));
    setSaved(false);
  };
  const save = () => setSaved(true);

  return (
    <main>
      <div className="page-header-bar">
        <h1 className="heading-condensed" style={{ fontSize: "1.15rem", letterSpacing: "0.06em" }}>
          Cookie Settings
        </h1>
        <p className="label-caps" style={{ color: "var(--mid)" }}>
          Customise your privacy preferences
        </p>
      </div>

      <div className="page-body">
        <p style={{ fontWeight: 300, lineHeight: 1.7, marginBottom: "2rem", fontSize: "0.95rem", color: "#3a3a3a" }}>
          We use cookies to ensure our website operates correctly and to give you the best experience. Use the toggles below to manage your preferences. Your choices are saved per device and can be changed at any time.
        </p>

        {/* Cookie category cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {categories.map((cat, i) => {
            const isOn = settings[cat.id];
            return (
              <div
                key={cat.id}
                style={{
                  borderTop: i === 0 ? "var(--border-width) solid var(--black)" : "none",
                  borderBottom: "var(--border-width) solid var(--black)",
                  borderLeft: "var(--border-width) solid var(--black)",
                  borderRight: "var(--border-width) solid var(--black)",
                  padding: "1.5rem",
                  background: cat.required ? "#f9f8f5" : "var(--white)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span className="heading-condensed" style={{ fontSize: "1rem" }}>
                      {cat.name}
                    </span>
                    {cat.required && (
                      <span className="badge badge-mid">Required</span>
                    )}
                  </div>

                  {/* Toggle */}
                  <button
                    role="switch"
                    id={`cookie-toggle-${cat.id}`}
                    aria-checked={isOn}
                    aria-label={`${cat.name} cookies`}
                    disabled={cat.required}
                    onClick={() => !cat.required && toggle(cat.id)}
                    className="toggle-track"
                    data-on={isOn}
                    data-disabled={cat.required}
                    style={{ border: "none", outline: "none" }}
                  >
                    <span className="toggle-thumb" />
                  </button>
                </div>
                <p
                  style={{
                    marginTop: "0.75rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "#5a5856",
                  }}
                >
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom action bar */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-primary"
            id="cookie-save-btn"
            onClick={save}
            style={{ flex: "1", minWidth: "180px" }}
          >
            {saved ? "✓ Saved" : "SAVE SETTINGS"}
          </button>
          <button
            className="btn btn-ghost"
            id="cookie-accept-all-btn"
            onClick={acceptAll}
            style={{ flex: "1", minWidth: "140px" }}
          >
            ACCEPT ALL
          </button>
          <button
            id="cookie-reject-all-btn"
            onClick={rejectAll}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-condensed)",
              fontWeight: 700,
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--mid)",
              padding: "0.75rem",
            }}
          >
            Reject All
          </button>
        </div>
      </div>
    </main>
  );
}
