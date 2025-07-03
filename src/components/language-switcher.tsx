"use client";

import { updateLocale } from "@/lib/actions/update-language";
import { localeAtom } from "@/lib/store/language";
import { useAtom } from "jotai";

import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useAtom(localeAtom);
  const router = useRouter();

  const handleLanguageChange = async (newLocale: string) => {
    setLocale(newLocale);
    await updateLocale(newLocale);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="rounded border px-3 py-1"
      >
        <option className="text-xl" value="en-us">
          🇺🇸
        </option>
        <option className="text-xl" value="pt-br">
          🇧🇷
        </option>
      </select>
    </div>
  );
}
