"use client";

import type { CustomMotion } from "@/lib/types";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import { MessagesSquare, MousePointerClick } from "lucide-react";
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
  "flex cursor-pointer items-center rounded-sm p-2.5 text-xl transition-all duration-150 max-md:text-base whitespace-nowrap";

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
          "flex flex-wrap justify-center gap-x-6",
          "max-sm:max-w-[450px] max-sm:gap-y-4",
        )}
      >
        <button
          onClick={() => handleClick("about-section")}
          className={cn(
            buttonBaseClasses,
            "bg-acc-yellow-2",
            "hover:bg-acc-yellow-3 text-darkest hover:-translate-y-1",
          )}
        >
          {t("start")}

          <MousePointerClick className={cn("ml-2 size-6")} />
        </button>

        <button
          onClick={() => handleClick("contact-section")}
          className={cn(
            buttonBaseClasses,
            "border-off-w/35 bg-off-w/15 text-off-w/75 border",
            "hover:border-acc-red/60 hover:bg-acc-red/15 hover:text-acc-red hover:-translate-y-1",
          )}
        >
          {t("contact")}

          <MessagesSquare className={cn("ml-2 size-6")} />
        </button>
      </m.div>
    </MotionWrapper>
  );
};
