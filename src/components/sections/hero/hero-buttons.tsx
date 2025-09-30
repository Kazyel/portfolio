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
  "flex cursor-pointer items-center rounded-sm p-1.5 md:p-2.5 text-[0.85rem] shrink-0 md:text-base transition-all duration-150 shadow-md font-medium tracking-tighter";

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
        className={cn("flex flex-wrap justify-center", "gap-4 sm:gap-6")}
      >
        <button
          onClick={() => handleClick("about-section")}
          className={cn(
            buttonBaseClasses,
            "bg-acc-yellow-2 text-darkest",
            "hover:bg-acc-yellow-3 sm:hover:-translate-y-1",
          )}
        >
          {t("start")}

          <MousePointerClick className="ml-2 size-4.5 sm:size-6" />
        </button>

        <button
          onClick={() => handleClick("contact-section")}
          className={cn(
            buttonBaseClasses,
            "text-off-w/40 border-off-w/25 bg-off-w/05 border",
            "hover:border-acc-red/60 hover:bg-acc-red/10 hover:text-acc-red sm:hover:-translate-y-1",
          )}
        >
          {t("contact")}

          <MessagesSquare className="ml-2 size-4.5 sm:size-6" />
        </button>
      </m.div>
    </MotionWrapper>
  );
};
