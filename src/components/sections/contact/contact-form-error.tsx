"use client";

import { motion } from "framer-motion";

interface ContactFormErrorProps {
  message: string;
}

export const ContactFormError = ({ message }: ContactFormErrorProps) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeInOut" } }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="text-[0.6rem] text-red-200/75 italic"
    >
      * {message}.
    </motion.p>
  );
};
