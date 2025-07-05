"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateLocale(locale: string) {
  const cookieStore = await cookies();
  cookieStore.set("locale", locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  revalidatePath("/");
}
