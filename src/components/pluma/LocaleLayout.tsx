import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGS, type Lang } from "@/i18n";

export function LocaleLayout() {
  const location = useLocation();
  const { i18n } = useTranslation();

  const seg = location.pathname.split("/")[1];
  const isValid = SUPPORTED_LANGS.includes(seg as Lang);
  const currentLang = (isValid ? (seg as Lang) : "pt") as Lang;

  useEffect(() => {
    if (!isValid) return;
    if (i18n.language !== currentLang) i18n.changeLanguage(currentLang);
    try {
      window.localStorage.setItem("pluma-lang", currentLang);
    } catch {}
  }, [currentLang, i18n, isValid]);

  if (!isValid) return <Navigate to="/en" replace />;

  const htmlLang = currentLang === "pt" ? "pt-BR" : "en";

  return (
    <>
      <Helmet>
        <html lang={htmlLang} />
      </Helmet>
      <Outlet />
    </>
  );
}
