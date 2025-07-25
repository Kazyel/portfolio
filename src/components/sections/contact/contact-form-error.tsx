"use client";

import type { CustomMotion } from "@/lib/types";
import { MotionWrapper, m } from "@/components/motion-wrapper";

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
    <MotionWrapper>
      <m.p {...FORM_ERROR_MOTION} className="text-[10px] text-red-300/75 italic">
        * {message}.
      </m.p>
    </MotionWrapper>
  );
};
