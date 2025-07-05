"use server";

export async function getTranslations(locale: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/messages/${locale}.json`,
    );
    const messages = await res.json();
    return messages;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    const fallbackRes = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/messages/en-us.json`,
    );
    return fallbackRes.json();
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
