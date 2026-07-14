import { useTranslation } from "react-i18next";
import { useWhatsappUrl } from "@/hooks/useWhatsappUrl";

export function Hero() {
  const { t } = useTranslation();
  const whatsappUrl = useWhatsappUrl();
  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center overflow-hidden md:min-h-screen"
    >
      <div className="pluma-hero-gradient absolute inset-0" aria-hidden="true" />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-pluma-cosmo/60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 lg:px-10">
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-pluma-offwhite md:text-7xl lg:text-8xl">
          {t("hero.title")}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pluma-offwhite/80 md:text-xl">
          {t("hero.subtitle")}
        </p>

        <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-pluma-sky px-8 py-4 text-base font-medium text-pluma-offwhite transition-all duration-300 hover:bg-pluma-sky/90 hover:shadow-xl hover:shadow-pluma-sky/30"
          >
            {t("hero.ctaPrimary")}
          </a>
          <a href="#processo" className="pluma-underline text-base text-pluma-offwhite/90 hover:text-pluma-fluor">
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
