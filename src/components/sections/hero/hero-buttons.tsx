"use client";

import { useTranslations } from "@/hooks/use-translations";
import { type HTMLMotionProps, motion } from "framer-motion";
import { Contact2, StarsIcon } from "lucide-react";

const BUTTONS_MOTION: Omit<HTMLMotionProps<"div">, "ref" | "className"> = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.3, delay: 0.5 },
};

export const HeroButtons = () => {
  const { t } = useTranslations();

  return (
    <div className="flex flex-wrap gap-x-6 self-start max-lg:self-center max-sm:gap-y-4">
      <motion.div {...BUTTONS_MOTION}>
        <a
          href="#about-section"
          className="bg-acc-yellow-2 hover:bg-off-w group flex cursor-pointer items-center rounded-sm border-2 border-black p-2 text-xl font-extrabold text-black transition-all duration-200 max-md:text-base"
        >
          <StarsIcon className="mr-2 size-6 transition-all duration-200 group-hover:rotate-90 max-md:size-6" />
          {t("start")}
        </a>
      </motion.div>

      <motion.div {...BUTTONS_MOTION}>
        <a
          href="#contact-section"
          className="text-off-w/85 border-off-w/85 bg-off-w/15 hover:bg-acc-yellow-2/15 hover:text-acc-yellow-2 hover:border-acc-yellow-2 flex cursor-pointer items-center rounded-sm border p-2 text-xl font-bold transition-all duration-200 max-md:text-base"
        >
          <Contact2 className="mr-2 size-6 max-md:size-6" />
          {t("contact")}
        </a>
      </motion.div>
    </div>
  );
};
