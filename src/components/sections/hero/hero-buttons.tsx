"use client";

import type { CustomMotion } from "@/lib/types";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Contact2, StarsIcon } from "lucide-react";
import { motion } from "framer-motion";

const BUTTONS_MOTION: CustomMotion<"div"> = {
  initial: { y: -10, opacity: 0 },
  transition: {
    type: "spring" as const,
    stiffness: 500,
    damping: 35,
    mass: 0.5,
    delay: 0.6,
  },
  animate: { y: 0, opacity: 1 },
};

const buttonBaseClasses =
  "flex cursor-pointer items-center rounded-sm p-2 text-xl font-bold transition-all duration-200 max-md:text-base";

const iconBaseClasses = "mr-2 size-6 max-md:size-6";

export const HeroButtons = () => {
  const t = useTranslations("Hero");

  const handleClick = (section: string) => {
    const sectionEl = document.getElementById(section);
    if (!sectionEl) return;
    sectionEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      {...BUTTONS_MOTION}
      className={cn(
        "flex flex-wrap gap-x-6 self-start",
        "max-lg:self-center max-sm:gap-y-4",
      )}
    >
      <button
        onClick={() => handleClick("about-section")}
        className={cn(
          buttonBaseClasses,
          "bg-acc-yellow-2 hover:bg-off-w border-2 border-black font-extrabold text-black",
          "group",
        )}
      >
        <StarsIcon
          className={cn(
            iconBaseClasses,
            "transition-transform duration-200 group-hover:rotate-90",
          )}
        />
        {t("start")}
      </button>

      <button
        onClick={() => handleClick("contact-section")}
        className={cn(
          buttonBaseClasses,
          "border-off-w/50 bg-off-w/15 text-off-w/85 border",
          "hover:border-acc-yellow-2 hover:bg-acc-yellow-2/15 hover:text-acc-yellow-2",
        )}
      >
        <Contact2 className={iconBaseClasses} />
        {t("contact")}
      </button>
    </motion.div>
  );
};
