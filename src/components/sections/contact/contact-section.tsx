"use client";

import { motion } from "framer-motion";

import { TextAnimate } from "@/components/ui/text-animate";
import { ContactForm } from "@/components/sections/contact/contact-form";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="h-section-height relative flex items-center justify-center gap-16 overflow-hidden bg-black/75"
    >
      <div className="flex w-[600px] flex-col gap-y-10">
        <TextAnimate
          as="h1"
          by="line"
          className="text-off-w text-8xl tracking-tight"
          delay={0.2}
          animation="slideRight"
          once
        >
          This journey ends here.
        </TextAnimate>

        <TextAnimate
          as="h2"
          by="line"
          className="text-off-w text-5xl tracking-tight"
          delay={1}
          animation="slideRight"
          once
        >
          Yet, ours yearns to begin.
        </TextAnimate>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="text-off-w/50 border-off-w/25 border-l-2 pl-4 text-lg font-extralight tracking-wide"
        >
          <TextAnimate delay={1.75} duration={1} by="line" animation="blurIn">
            A blade stays sheathed — until its purpose awakens...
          </TextAnimate>
        </motion.div>
      </div>

      <ContactForm />
    </section>
  );
}
