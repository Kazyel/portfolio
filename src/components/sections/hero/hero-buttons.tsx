"use client";

import type { CustomMotion } from "@/lib/types";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import { Contact2, StarsIcon } from "lucide-react";
import { motion } from "framer-motion";

const BUTTONS_MOTION: CustomMotion<"div"> = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.3, delay: 0.5 },
};

const buttonBaseClasses =
  "flex cursor-pointer items-center rounded-sm p-2 text-xl font-bold transition-all duration-200 max-md:text-base";

const iconBaseClasses = "mr-2 size-6 max-md:size-6";

export const HeroButtons = () => {
  const t = useTranslations("Hero");

  return (
    <div
      className={cn(
        "flex flex-wrap gap-x-6 self-start",
        "max-lg:self-center max-sm:gap-y-4",
      )}
    >
      <motion.div {...BUTTONS_MOTION}>
        <a
          href="#about-section"
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
        </a>
      </motion.div>

      <motion.div {...BUTTONS_MOTION}>
        <a
          href="#contact-section"
          className={cn(
            buttonBaseClasses,
            "border-off-w/50 bg-off-w/15 text-off-w/85 border",
            "hover:border-acc-yellow-2 hover:bg-acc-yellow-2/15 hover:text-acc-yellow-2",
          )}
        >
          <Contact2 className={iconBaseClasses} />
          {t("contact")}
        </a>
      </motion.div>
    </div>
  );
};
