"use client";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  id?: string;
}

export default function FaqAccordion({ items, id = "faq" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="accordion-item"
            data-open={isOpen}
            style={isOpen ? {
              borderLeft: "3px solid var(--accent)",
              paddingLeft: "1rem",
              background: "#fffde8",
              borderBottom: "var(--border-width) solid var(--black)",
            } : {}}
          >
            <button
              id={`${id}-trigger-${i}`}
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`${id}-body-${i}`}
              onClick={() => toggle(i)}
            >
              <span>{item.question}</span>
              <span className="accordion-icon" aria-hidden="true">+</span>
            </button>
            <div
              id={`${id}-body-${i}`}
              role="region"
              aria-labelledby={`${id}-trigger-${i}`}
              className={`accordion-body ${isOpen ? "open" : ""}`}
              hidden={!isOpen}
            >
              <div className="accordion-body-inner">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
