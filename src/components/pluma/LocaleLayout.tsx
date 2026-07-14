import { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, type Lang } from "@/i18n";

const SITE_URL = "https://cinematic-stream-landing.lovable.app";

function orgJsonLd(lang: Lang) {
  const inLanguage = lang === "pt" ? "pt-BR" : "en";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/${lang}#organization`,
        inLanguage,
        name: "Pluma Agência e Produtora Audiovisual",
        alternateName: "Pluma",
        url: `${SITE_URL}/${lang}`,
        logo: `${SITE_URL}/logo.png`,
        telephone: "+5521998949892",
        email: "contato@pluma.ag",
        taxID: "31.226.493/0001-06",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Rio de Janeiro",
          addressRegion: "RJ",
          addressCountry: "BR",
        },
        areaServed: [
          { "@type": "City", name: "Rio de Janeiro" },
          { "@type": "City", name: "São Paulo" },
        ],
        sameAs: ["https://www.instagram.com/pluma.std"],
      },
    ],
  };
}

type FAQGroup = { title: string; items: { q: string; a: string }[] };

function faqJsonLd(lang: Lang, groups: FAQGroup[]) {
  const inLanguage = lang === "pt" ? "pt-BR" : "en";
  const questions = groups.flatMap((g) =>
    g.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  );
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: questions,
  };
}

export function LocaleLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n, t } = useTranslation();

  const isValid = SUPPORTED_LANGS.includes(lang as Lang);
  const currentLang = (isValid ? (lang as Lang) : "pt") as Lang;

  useEffect(() => {
    if (!isValid) return;
    if (i18n.language !== currentLang) i18n.changeLanguage(currentLang);
    try {
      window.localStorage.setItem("pluma-lang", currentLang);
    } catch {}
  }, [currentLang, i18n, isValid]);

  if (!isValid) return <Navigate to="/en" replace />;

  const htmlLang = t("meta.htmlLang");
  const title = t("meta.title");
  const description = t("meta.description");
  const canonical = `${SITE_URL}/${currentLang}`;
  const faqGroups = t("faq.groups", { returnObjects: true }) as FAQGroup[];

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={`${SITE_URL}/pt`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={htmlLang.replace("-", "_")} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd(currentLang))}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd(currentLang, faqGroups))}</script>
      </Helmet>
      <Outlet />
    </>
  );
}
