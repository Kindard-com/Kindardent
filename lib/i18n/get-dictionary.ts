import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  en: () => import("@/messages/en.json").then((m) => m.default),
  de: () => import("@/messages/de.json").then((m) => m.default),
  fr: () => import("@/messages/fr.json").then((m) => m.default),
  nl: () => import("@/messages/nl.json").then((m) => m.default),
  es: () => import("@/messages/es.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader();
}
