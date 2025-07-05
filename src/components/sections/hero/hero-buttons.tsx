"use client";

import { useTranslations } from "next-intl";
import { type HTMLMotionProps, motion } from "framer-motion";
import { Contact2, StarsIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BUTTONS_MOTION: Omit<HTMLMotionProps<"div">, "ref" | "className"> = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.3, delay: 0.5 },
};

const buttonBaseClasses =
  "flex cursor-pointer items-center rounded-sm p-2 text-xl font-bold transition-all duration-200 max-md:text-base";
const iconClasses = "mr-2 size-6 max-md:size-6";

export const HeroButtons = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-wrap gap-x-6 self-start max-lg:self-center max-sm:gap-y-4">
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
              iconClasses,
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
          <Contact2 className={iconClasses} />
          {t("contact")}
        </a>
      </motion.div>
    </div>
  );
};
