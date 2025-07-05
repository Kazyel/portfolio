"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const changeLocale = async (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
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
          <button onClick={() => changeLocale("en")}>🇺🇸 English</button>
          <button onClick={() => changeLocale("pt")}>🇧🇷 Português</button>
        </div>
      )}
    </div>
  );
}
