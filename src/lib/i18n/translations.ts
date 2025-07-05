"use server";

export async function getTranslations(locale: string) {
  try {
    const messages = await import(`../i18n/messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    const fallback = await import(`../i18n/messages/en-us.json`);
    return fallback.default;
  }
}

export async function createTranslator(messages: any) {
  return function t(key: string): string {
    const keys = key.split(".");
    let value = messages;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    return value !== undefined ? value : key;
  };
}
