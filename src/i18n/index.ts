import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json";
import en from "./locales/en.json";

export const SUPPORTED_LANGS = ["pt", "en"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: { escapeValue: false },
  returnObjects: true,
});

export default i18n;

export function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const stored = window.localStorage.getItem("pluma-lang");
  if (stored === "pt" || stored === "en") return stored;
  const nav = window.navigator.language?.toLowerCase() ?? "";
  return nav.startsWith("pt") ? "pt" : "en";
}
