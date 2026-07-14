import { WHATSAPP_PHONE } from "./whatsapp";

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
