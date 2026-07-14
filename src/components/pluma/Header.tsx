import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useWhatsappUrl } from "@/hooks/useWhatsappUrl";
import { SUPPORTED_LANGS, type Lang } from "@/i18n";
import plumaLogotype from "@/assets/pluma-logotype.svg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const whatsappUrl = useWhatsappUrl();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const current: Lang = SUPPORTED_LANGS.includes(lang as Lang) ? (lang as Lang) : "pt";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchTo = (target: Lang) => {
    if (target === current) return;
    try {
      window.localStorage.setItem("pluma-lang", target);
    } catch {}
    const hash = location.hash;
    navigate(`/${target}${hash}`, { replace: false });
  };

  const homeHref = `/${current}#top`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--pluma-cosmo)]/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Pluma"
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <a href={homeHref} aria-label={t("header.logoAlt")} className="flex items-center">
          <img src={plumaLogotype} alt="Pluma" className="h-7 w-auto md:h-8" />
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden items-center gap-8 text-sm text-pluma-offwhite/80 md:flex">
            <li><a href="#fazemos" className="pluma-underline transition-colors hover:text-pluma-fluor">{t("header.nav.capabilities")}</a></li>
            <li><a href="#processo" className="pluma-underline transition-colors hover:text-pluma-fluor">{t("header.nav.process")}</a></li>
            <li><a href="#faq" className="pluma-underline transition-colors hover:text-pluma-fluor">{t("header.nav.faq")}</a></li>
          </ul>
          <div
            role="group"
            aria-label={t("header.langSwitchAria")}
            className="flex items-center gap-1 text-xs text-pluma-offwhite/70"
          >
            <button
              type="button"
              onClick={() => switchTo("pt")}
              className={`px-1.5 py-1 transition-colors ${current === "pt" ? "text-pluma-fluor font-medium" : "hover:text-pluma-fluor"}`}
              aria-pressed={current === "pt"}
            >
              PT
            </button>
            <span aria-hidden="true" className="text-pluma-offwhite/30">|</span>
            <button
              type="button"
              onClick={() => switchTo("en")}
              className={`px-1.5 py-1 transition-colors ${current === "en" ? "text-pluma-fluor font-medium" : "hover:text-pluma-fluor"}`}
              aria-pressed={current === "en"}
            >
              EN
            </button>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-pluma-sky px-4 py-2 text-sm font-medium text-pluma-offwhite transition-all duration-300 hover:bg-pluma-sky/90 hover:shadow-lg hover:shadow-pluma-sky/20"
          >
            {t("header.cta")}
          </a>
        </div>
      </nav>
    </header>
  );
}
