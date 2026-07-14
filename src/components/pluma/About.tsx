import { useTranslation } from "react-i18next";
import guidoPhoto from "@/assets/guido.webp";

export function About() {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <img
            src={guidoPhoto}
            alt={t("about.photoAlt")}
            loading="lazy"
            className="aspect-square w-full max-w-[400px] rounded-xl border border-border object-cover"
          />
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
            {t("about.title")}
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-pluma-offwhite/80 whitespace-pre-line">
            {t("about.bio")}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-pluma-offwhite/80">
            {t("about.closer")}
          </p>
        </div>
      </div>
    </section>
  );
}
