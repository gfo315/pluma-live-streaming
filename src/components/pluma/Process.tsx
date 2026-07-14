import { useTranslation } from "react-i18next";

type Step = { n: string; title: string; text: string };

export function Process() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as Step[];
  return (
    <section id="processo" className="bg-pluma-cosmo px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          {t("process.title")}
        </h2>
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="font-display text-5xl font-bold text-pluma-fluor md:text-6xl">{s.n}</span>
              <h3 className="mt-5 font-display text-xl font-medium text-pluma-offwhite">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-pluma-offwhite/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
