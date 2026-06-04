interface MarqueeProps {
  text: string;
  separator?: string;
  speed?: number; /* seconds for one full loop */
  background?: string;
  color?: string;
}

export default function Marquee({
  text,
  separator = "★",
  speed = 18,
  background = "var(--black)",
  color = "var(--white)",
}: MarqueeProps) {
  // Duplicate content so the seamless loop works
  const segment = `${text} ${separator} `;
  const repeated = segment.repeat(8);

  return (
    <div
      style={{ background, color, overflow: "hidden", padding: "0.65rem 0" }}
      aria-label={text}
    >
      <div
        className="marquee-track"
        style={{ gap: 0 }}
      >
        <span
          className="marquee-content"
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-condensed)",
            fontWeight: 700,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            animationDuration: `${speed}s`,
          }}
        >
          {repeated}
        </span>
        {/* Second copy for seamless wrap */}
        <span
          className="marquee-content"
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-condensed)",
            fontWeight: 700,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            animationDuration: `${speed}s`,
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
