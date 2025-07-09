"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { BrazilFlag } from "./svgs/BrazilFlag";
import { USFlag } from "./svgs/USFlag";

interface LanguageSwitcherProps {
  currentStyles: {
    link: string;
    cv: string;
    icon: string;
    mobileNavbar: string;
    mobileLink: string;
  };
}

const SWITCHER_ANIMATION = {
  initial: { opacity: 0, y: -25 },
  transition: {
    type: "spring" as const,
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
};

export default function LanguageSwitcher({ currentStyles }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const changeLocale = async (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
  };

  return (
    <div className="relative" ref={dropdownRef}>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            {...SWITCHER_ANIMATION}
            className={cn(
              "bg-off-w absolute -bottom-24 flex flex-col gap-y-2 rounded-sm border border-black/65 p-2.5 text-sm font-medium",
              currentStyles.mobileNavbar,
            )}
          >
            <button
              className={cn(
                "flex cursor-pointer items-center gap-x-1.5",
                currentStyles.mobileLink,
              )}
              onClick={() => changeLocale("en")}
            >
              <USFlag />
              English
            </button>
            <button
              className={cn(
                "flex cursor-pointer items-center gap-x-1.5",
                currentStyles.mobileLink,
              )}
              onClick={() => changeLocale("pt")}
            >
              <BrazilFlag />
              Português
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
