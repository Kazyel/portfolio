"use client";

import { cn } from "@/lib/utils";
import { localeAtom } from "@/lib/store/language";
import { updateLocale } from "@/lib/actions/update-language";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LanguageSwitcherProps {
  currentStyles: {
    link: string;
    cv: string;
    icon: string;
    mobileNavbar: string;
    mobileLink: string;
  };
}

export default function LanguageSwitcher({ currentStyles }: LanguageSwitcherProps) {
  const [locale, setLocale] = useAtom(localeAtom);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLanguageChange = async (newLocale: string) => {
    setLocale(newLocale);
    await updateLocale(newLocale);
    router.refresh();
  };

  return (
    <div className="relative flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "size-5 cursor-pointer transition-all duration-150",
          currentStyles.icon,
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        ></path>
      </svg>

      {isOpen && (
        <div className="flex gap-x-2">
          <span className="text-xl" onClick={() => handleLanguageChange("en-us")}>
            🇺🇸
          </span>
          <span className="text-xl" onClick={() => handleLanguageChange("pt-br")}>
            🇧🇷
          </span>
        </div>
      )}
    </div>
  );
}
