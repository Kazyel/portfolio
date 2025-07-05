"use client";

import { type HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FORM_ERROR_MOTION: Omit<HTMLMotionProps<"p">, "ref" | "className"> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } },
  transition: { duration: 0.25, ease: "easeInOut" },
};

const errorTextClasses = cn("text-[10px] text-red-300/75 italic");

interface ContactFormErrorProps {
  message: string;
}

export const ContactFormError = ({ message }: ContactFormErrorProps) => {
  return (
    <motion.p {...FORM_ERROR_MOTION} className={errorTextClasses}>
      * {message}.
    </motion.p>
  );
};
