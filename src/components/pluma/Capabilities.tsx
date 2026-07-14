import { Camera, Globe, Languages, HardDrive, ShieldCheck, ShoppingBag, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS: Record<string, LucideIcon> = {
  multicam: Camera,
  multiplatform: Globe,
  multilang: Languages,
  master: HardDrive,
  backup: ShieldCheck,
  ecommerce: ShoppingBag,
};

type Item = { key: string; title: string; text: string; badge?: boolean };

export function Capabilities() {
  const { t } = useTranslation();
  const items = t("capabilities.items", { returnObjects: true }) as Item[];
  const badgeText = t("capabilities.badgeNew");
  return (
    <section id="fazemos" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          {t("capabilities.title")}
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = ICONS[item.key] ?? Camera;
            return (
              <article
                key={item.key}
                className="group relative rounded-xl border border-border bg-pluma-deep/40 p-8 transition-all duration-300 hover:border-pluma-sky/40 hover:bg-pluma-deep/60"
              >
                {item.badge && (
                  <span className="absolute right-4 top-4 rounded-full border border-pluma-fluor/40 bg-pluma-fluor/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-pluma-fluor">
                    {badgeText}
                  </span>
                )}
                <Icon className="h-7 w-7 text-pluma-fluor transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-6 font-display text-xl font-medium text-pluma-offwhite">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-pluma-offwhite/70">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
