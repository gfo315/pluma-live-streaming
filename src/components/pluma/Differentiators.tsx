import { useTranslation } from "react-i18next";

type Block = { title: string; text: string };

export function Differentiators() {
  const { t } = useTranslation();
  const blocks = t("differentiators.blocks", { returnObjects: true }) as Block[];
  return (
    <section className="bg-gradient-to-b from-pluma-cosmo via-pluma-deep/30 to-pluma-cosmo px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          {t("differentiators.title")}
        </h2>
        <div className="mt-16 space-y-20">
          {blocks.map((b) => (
            <article key={b.title} className="grid gap-8 border-t border-border pt-12 md:grid-cols-12 md:gap-12">
              <h3 className="font-display text-3xl font-medium leading-tight text-pluma-sky md:col-span-5 md:text-4xl">
                {b.title}
              </h3>
              <p className="text-base leading-relaxed text-pluma-offwhite/80 md:col-span-7 md:text-lg text-justify whitespace-pre-line">
                {b.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
