import { useTranslation } from "react-i18next";
import { useWhatsappUrl } from "@/hooks/useWhatsappUrl";

export function FinalCTA() {
  const { t } = useTranslation();
  const whatsappUrl = useWhatsappUrl();
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-pluma-deep via-pluma-cosmo to-pluma-cosmo px-6 py-32 md:py-40"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-pluma-offwhite md:text-6xl">
          {t("finalCta.title")}
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-pluma-offwhite/80 whitespace-pre-line">
          {t("finalCta.subtitle")}
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block rounded-lg bg-pluma-sky px-10 py-5 text-lg font-medium text-pluma-offwhite transition-all duration-300 hover:bg-pluma-sky/90 hover:shadow-2xl hover:shadow-pluma-sky/30"
        >
          {t("finalCta.cta")}
        </a>
      </div>
    </section>
  );
}
