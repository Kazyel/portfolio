"use client";

import { cn } from "@/lib/utils";
import { m } from "motion/react";
import { useTranslations } from "next-intl";

export const HeroText = () => {
  const t = useTranslations("Hero");

  return (
    <div className="flex flex-col gap-y-6 sm:gap-y-12">
      <m.h2
        initial={{ y: -5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.15 }}
        viewport={{ once: true }}
        className={cn("text-acc-red tracking-tight", "xs:text-3xl text-lg")}
      >
        {t("greetings")}
      </m.h2>

      <div className="space-y-4">
        <m.h1
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn(
            "hero-shadow-1 text-off-w tracking font-extralight text-balance",
            "xs:text-4xl text-3xl sm:text-5xl lg:text-7xl",
          )}
        >
          {t("mateus")}
        </m.h1>

        <m.h2
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.75 }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn(
            "hero-shadow-1 text-off-w font-bold tracking-tight text-balance",
            "xs:text-5xl text-5xl leading-[1.2em] sm:text-6xl lg:text-[5rem]",
          )}
        >
          {t("front")}
        </m.h2>

        <m.h2
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 1.25 }}
          viewport={{ once: true, amount: 0.5 }}
          className={cn(
            "hero-shadow-1 text-acc-yellow-3 font-bold tracking-tight text-balance",
            "xs:text-5xl text-5xl leading-[1.2em] sm:text-6xl lg:text-[5rem]",
          )}
        >
          {t("fullstack")}
        </m.h2>
      </div>
    </div>
  );
};
