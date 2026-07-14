import { useTranslation } from "react-i18next";
import backstage1 from "@/assets/backstage-1.webp";
import backstage2 from "@/assets/backstage-2.webp";
import backstage3 from "@/assets/backstage-3.webp";

export function Opening() {
  const { t } = useTranslation();
  const paragraphs = t("opening.paragraphs", { returnObjects: true }) as string[];
  return (
    <section className="bg-pluma-cosmo px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16 lg:gap-20">
        <div className="md:col-span-6 md:sticky md:top-24 md:self-start">
          <p className="font-display text-3xl font-medium leading-tight text-pluma-offwhite md:text-4xl lg:text-5xl">
            {t("opening.headline")}
          </p>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-6 text-lg leading-relaxed text-pluma-offwhite/70 md:text-xl">
              {p}
            </p>
          ))}
        </div>

        <div className="md:col-span-6">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img src={backstage1} alt={t("opening.images.one")} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-sm object-cover" />
            <img src={backstage2} alt={t("opening.images.two")} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-sm object-cover" />
            <img src={backstage3} alt={t("opening.images.three")} loading="lazy" width={1280} height={1024} className="col-span-2 aspect-[16/10] w-full rounded-sm object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
