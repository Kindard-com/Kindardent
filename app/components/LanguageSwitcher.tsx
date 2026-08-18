"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/app/context/I18nProvider";

export default function LanguageSwitcher() {
  const { locale } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (next: Locale) => {
    if (next === locale) return;
    const segments = pathname.split("/");
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    const nextPath = segments.join("/") || `/${next}`;
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=31536000`;
    router.push(nextPath);
  };

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        fontSize: "0.6rem",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        fontFamily: "var(--font-condensed, sans-serif)",
      }}
    >
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value as Locale)}
        aria-label="Select language"
        style={{
          border: "1px solid #1C1C1C",
          background: "#fff",
          padding: "0.35rem 0.5rem",
          fontSize: "0.6rem",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeNames[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
