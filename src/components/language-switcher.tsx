"use client";

import type { CustomMotion } from "@/lib/types";

import { SetStateAction, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { cn } from "@/lib/utils";
import useOnClickOutside from "@/hooks/use-on-click-outside";

import { BrazilFlag } from "./svgs/BrazilFlag";
import { USFlag } from "./svgs/USFlag";
import { Loader2 } from "lucide-react";
import { International } from "./svgs/International";

import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";

interface LanguageSwitcherProps {
  currentStyles: {
    link: string;
    cv: string;
    icon: string;
    mobileNavbar: string;
    mobileLink: string;
  };
  setIsAnyMenuOpen?: (value: SetStateAction<boolean>) => void;
}

const LANGUAGES = {
  en: {
    code: "en",
    name: "English",
    flag: USFlag,
    nativeName: "English",
  },
  pt: {
    code: "pt",
    name: "Português",
    flag: BrazilFlag,
    nativeName: "Português",
  },
} as const;

type LanguageCode = keyof typeof LANGUAGES;

const SWITCHER_ANIMATION: CustomMotion<"div"> = {
  initial: {
    opacity: 0,
    y: -5,
    filter: "blur(2px)",
  },
  animate: {
    opacity: 1,
    y: 5,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: 0,
    filter: "blur(2px)",
  },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.3,
  },
} as const;

export default function LanguageSwitcher({ currentStyles }: LanguageSwitcherProps) {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, [setIsSwitcherOpen], isSwitcherOpen);
  const currentLocale = useLocale() as LanguageCode;
  const router = useRouter();

  const changeLocale = async (newLocale: LanguageCode) => {
    setIsSwitcherOpen(false);
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;

      setIsSwitcherOpen(false);
      router.refresh();
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Switcher Button */}
      <m.button
        onClick={() => setIsSwitcherOpen((prev) => !prev)}
        className={cn(
          "flex items-center transition-all duration-200",
          "disabled:cursor-not-allowed disabled:opacity-50",
          currentStyles.icon,
        )}
        type="button"
        aria-haspopup="menu"
        aria-label="Change language"
        aria-expanded={isSwitcherOpen}
        disabled={isPending}
      >
        {isPending ? (
          <Loader2 className={cn("text-off-w size-6 animate-spin", currentStyles.icon)} />
        ) : (
          <>
            <International
              className={cn(
                "size-6 cursor-pointer transition-all duration-200 ease-in-out",
                currentStyles.icon,
              )}
            />
          </>
        )}
      </m.button>

      {/* Language Switcher Menu */}
      <AnimatePresence>
        {isSwitcherOpen && (
          <m.div
            {...SWITCHER_ANIMATION}
            className={cn(
              "absolute top-12 z-50 flex min-w-max flex-col gap-y-3 rounded-sm border border-black/20 p-4 shadow-lg",
              "max-md:-right-10 md:max-lg:-left-4",
              currentStyles.mobileNavbar,
            )}
            role="menu"
            aria-label="Language selection menu"
          >
            {/* Available Languages */}
            {Object.entries(LANGUAGES).map(([code, language]) => {
              const LanguageFlag = language.flag;
              const isActive = code === currentLocale;

              return (
                <m.button
                  key={code}
                  onClick={() => changeLocale(code as LanguageCode)}
                  className={cn(
                    "flex cursor-pointer text-sm font-medium",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    currentStyles.mobileLink,
                  )}
                  role="menuitem"
                  aria-current={isActive ? "true" : "false"}
                  disabled={isPending || isActive}
                >
                  <div className="flex items-center gap-2">
                    <LanguageFlag className="size-5 flex-shrink-0" />

                    <span>{language.nativeName}</span>
                  </div>
                </m.button>
              );
            })}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
