import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { Header } from "@/components/pluma/Header";
import { Footer } from "@/components/pluma/Footer";
import { WhatsAppFloat } from "@/components/pluma/WhatsAppFloat";
import type { Lang } from "@/i18n";
import ptContent from "@/content/privacy.pt.md?raw";
import enContent from "@/content/privacy.en.md?raw";

const SITE_URL = "https://cinematic-stream-landing.lovable.app";

const SLUGS: Record<Lang, string> = {
  pt: "politica-de-privacidade",
  en: "privacy-policy",
};

const META: Record<Lang, { title: string; description: string; htmlLocale: string }> = {
  pt: {
    title: "Política de Privacidade | Pluma",
    description:
      "Política de privacidade da Pluma Agência e Produtora Audiovisual. Como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais em conformidade com a LGPD.",
    htmlLocale: "pt_BR",
  },
  en: {
    title: "Privacy Policy | Pluma",
    description:
      "Pluma's privacy policy. How we collect, use, store, and protect your personal data in compliance with LGPD and GDPR standards.",
    htmlLocale: "en",
  },
};

export function PrivacyPage({ lang }: { lang: Lang }) {
  const meta = META[lang];
  const content = lang === "pt" ? ptContent : enContent;
  const canonical = `${SITE_URL}/${lang}/${SLUGS[lang]}`;
  const altPt = `${SITE_URL}/pt/${SLUGS.pt}`;
  const altEn = `${SITE_URL}/en/${SLUGS.en}`;

  return (
    <div className="min-h-screen bg-pluma-cosmo text-pluma-offwhite">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={altPt} />
        <link rel="alternate" hrefLang="en" href={altEn} />
        <link rel="alternate" hrefLang="x-default" href={altEn} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={meta.htmlLocale} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Helmet>
      <Header />
      <main className="px-6 pt-32 pb-24">
        <article className="mx-auto max-w-[720px] pluma-prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
