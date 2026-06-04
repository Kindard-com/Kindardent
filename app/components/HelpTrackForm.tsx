"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HelpTrackForm() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      router.push(`/track?q=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: 0, maxWidth: "520px" }}
    >
      <input
        type="text"
        id="help-order-number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="ENTER ORDER #"
        aria-label="Order number"
        style={{
          flex: 1,
          padding: "0.875rem 1rem",
          border: "var(--border-width) solid var(--black)",
          fontFamily: "var(--font-condensed)",
          fontWeight: 700,
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          background: "var(--white)",
          outline: "none",
        }}
      />
      <button
        type="submit"
        className="btn btn-primary"
        style={{ fontSize: "1rem", padding: "0.875rem 1.25rem" }}
      >
        →
      </button>
    </form>
  );
}
