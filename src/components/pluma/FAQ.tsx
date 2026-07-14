import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

type FAQItem = { q: string; a: string };
type Group = { title: string; items: FAQItem[] };

export function FAQ() {
  const [open, setOpen] = useState<string | null>("0-0");
  const { t } = useTranslation();
  const groups = t("faq.groups", { returnObjects: true }) as Group[];
  return (
    <section id="faq" className="bg-pluma-cosmo px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-4xl font-bold tracking-tight text-pluma-offwhite md:text-5xl">
          {t("faq.title")}
        </h2>

        <div className="mt-14 space-y-14">
          {groups.map((group, gi) => (
            <div key={group.title}>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-pluma-offwhite/40">
                {group.title}
              </h3>
              <div className="divide-y divide-border border-t border-border">
                {group.items.map((f, i) => {
                  const id = `${gi}-${i}`;
                  const isOpen = open === id;
                  return (
                    <div key={f.q}>
                      <button
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-pluma-fluor"
                        aria-expanded={isOpen}
                      >
                        <h4 className="font-display text-lg font-medium text-pluma-offwhite md:text-xl">
                          {f.q}
                        </h4>
                        {isOpen ? (
                          <Minus className="h-5 w-5 shrink-0 text-pluma-fluor" strokeWidth={1.5} />
                        ) : (
                          <Plus className="h-5 w-5 shrink-0 text-pluma-fluor" strokeWidth={1.5} />
                        )}
                      </button>
                      <div
                        className={`grid overflow-hidden transition-all duration-500 ease-out ${
                          isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0">
                          <p className="pr-12 text-base leading-relaxed text-pluma-offwhite/70">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
