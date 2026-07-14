import { Navigate } from "react-router-dom";
import { detectInitialLang } from "@/i18n";

export function RootRedirect() {
  const lang = detectInitialLang();
  return <Navigate to={`/${lang}`} replace />;
}
