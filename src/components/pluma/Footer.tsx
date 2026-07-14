import { useTranslation } from "react-i18next";
import plumaLogotype from "@/assets/pluma-logotype.svg";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-pluma-cosmo border-t border-border px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <img src={plumaLogotype} alt="Pluma" className="h-7 w-auto" />
            <p className="mt-3 text-sm text-pluma-offwhite/50 max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>
          <address className="not-italic space-y-2 text-sm text-pluma-offwhite/70">
            <p>
              <a href="https://www.instagram.com/pluma.ag" target="_blank" rel="noopener noreferrer" className="pluma-underline hover:text-pluma-fluor">
                {t("footer.instagram")}
              </a>
            </p>
            <p>{t("footer.whatsappLabel")} (21) 99894-9892</p>
            <p>{t("footer.cnpjLabel")} 31.226.493/0001-06</p>
          </address>
        </div>
        <p className="mt-12 border-t border-border pt-6 text-xs text-pluma-offwhite/40">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
