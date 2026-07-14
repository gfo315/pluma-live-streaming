import { useTranslation } from "react-i18next";

type Item = { title: string; text: string };

export function ForWhom() {
  const { t } = useTranslation();
  const items = t("forWhom.items", { returnObjects: true }) as Item[];
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          {t("forWhom.title")}
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-xl bg-pluma-deep/40 p-8 transition-all duration-300 hover:bg-pluma-deep/60 md:p-10"
            >
              <h3 className="font-display text-2xl font-medium text-pluma-offwhite">{it.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-pluma-offwhite/70">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
