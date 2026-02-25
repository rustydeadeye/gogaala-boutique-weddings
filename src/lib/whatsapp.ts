const DEFAULT_WHATSAPP_NUMBER = "919999999999";
const DEFAULT_WHATSAPP_MESSAGE = "Hi Gogaala team, I want to plan a wedding.";

export function getWhatsAppHref(message = DEFAULT_WHATSAPP_MESSAGE) {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER;
  const number = rawNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

