"use client";

import type { CustomMotion } from "@/lib/types";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import { Contact2, StarsIcon } from "lucide-react";
import { MotionWrapper, m } from "@/components/motion-wrapper";

const BUTTONS_MOTION: CustomMotion<"div"> = {
  initial: { x: -10, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 1,
    delay: 0.75,
  },
};

const buttonBaseClasses =
  "flex cursor-pointer items-center rounded-sm p-2 text-xl font-bold transition-all duration-200 max-md:text-base whitespace-nowrap";

const iconBaseClasses = "mr-2 size-6 max-md:size-6";

export const HeroButtons = () => {
  const t = useTranslations("Hero");

  const handleClick = (section: string) => {
    const sectionEl = document.getElementById(section);
    if (!sectionEl) return;
    sectionEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionWrapper>
      <m.div
        {...BUTTONS_MOTION}
        className={cn(
          "flex flex-wrap gap-x-6 self-start",
          "max-lg:self-center max-sm:max-w-[450px] max-sm:gap-y-4 max-sm:self-start",
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
      </m.div>
    </MotionWrapper>
  );
};
