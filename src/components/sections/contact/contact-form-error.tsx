"use client";

import { motion } from "framer-motion";

const FORM_ERROR_MOTION = {
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
    <motion.p {...FORM_ERROR_MOTION} className="text-[0.65rem] text-red-300/75 italic">
      * {message}.
    </motion.p>
  );
};
