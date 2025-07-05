import { useClientTranslations } from "@/components/i18n-provider";
import { getServerLocale } from "@/lib/i18n/locale";
import { createTranslator, getTranslations } from "@/lib/i18n/translations";

export function useTranslations() {
  return useClientTranslations();
}

export async function getServerTranslator() {
  const locale = await getServerLocale();
  const messages = await getTranslations(locale);
  return createTranslator(messages);
}
