import { useTranslation } from "react-i18next";
import { buildWhatsappUrl } from "@/lib/whatsappUrl";

export function useWhatsappUrl() {
  const { t } = useTranslation();
  return buildWhatsappUrl(t("whatsapp.message"));
}
