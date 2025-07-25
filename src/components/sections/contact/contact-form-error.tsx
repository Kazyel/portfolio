"use client";

import type { CustomMotion } from "@/lib/types";

import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

const FORM_ERROR_MOTION: CustomMotion<"p"> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } },
  transition: { duration: 0.25, ease: "easeInOut" },
};

interface ContactFormErrorProps {
  message: string;
}

export const ContactFormError = ({ message }: ContactFormErrorProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.p {...FORM_ERROR_MOTION} className="text-[10px] text-red-300/75 italic">
        * {message}.
      </m.p>
    </LazyMotion>
  );
};
