"use server";

import { headers, cookies } from "next/headers";

export async function getServerLocale(): Promise<string> {
  try {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get("locale");

    if (localeCookie?.value) {
      return localeCookie.value;
    }

    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language");

    if (
      acceptLanguage?.includes("pt") ||
      acceptLanguage?.includes("pt-BR") ||
      acceptLanguage?.includes("br")
    ) {
      return "pt-br";
    }

    return "en-us";
  } catch (error) {
    console.error("Error getting server locale:", error);
    return "en-us";
  }
}
