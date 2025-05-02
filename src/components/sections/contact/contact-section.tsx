"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TextAnimate } from "@/components/ui/text-animate";
import { ContactForm } from "@/components/sections/contact/contact-form";

const BACKGROUND_ANIMATION = {
  transition: { duration: 0.5, delay: 1.5 },
  viewport: { once: true, amount: 0.65 },
};

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="h-section-height relative flex flex-col items-center justify-center overflow-hidden bg-black/75 max-lg:scroll-mt-[56px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        {...BACKGROUND_ANIMATION}
        className="absolute inset-0"
      >
        <Image
          src="/images/samurai.webp"
          alt="Samurai Background"
          className="mx-auto opacity-15 grayscale"
          width={1000}
          height={1000}
          quality={75}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 0.1 }}
        {...BACKGROUND_ANIMATION}
        className="absolute inset-0"
      >
        <Image
          src="/images/torii.webp"
          alt="Samurai Background"
          className="pointer-events-none absolute -right-[300px] bottom-0 grayscale"
          width={900}
          height={900}
          quality={75}
          loading="lazy"
          decoding="async"
        />

        <Image
          src="/images/torii.webp"
          alt="Samurai Background"
          className="pointer-events-none absolute bottom-0 -left-[300px] -scale-x-[1] grayscale"
          width={900}
          height={900}
          quality={75}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <div className="flex w-full items-center justify-center gap-x-20">
        <div className="z-10 flex w-[600px] flex-col gap-y-6">
          <TextAnimate
            as="h1"
            className="text-off-w text-8xl font-extrabold tracking-tighter"
            delay={0.15}
            animation="slideRight"
            once
          >
            This journey ends here.
          </TextAnimate>

          <TextAnimate
            as="h2"
            by="line"
            className="text-acc-yellow-2 text-5xl"
            delay={0.75}
            animation="slideRight"
            once
          >
            Yet, ours yearns to begin.
          </TextAnimate>

          <div className="text-off-w/60 text-lg font-extralight tracking-wide italic">
            <TextAnimate delay={1.5} duration={1} by="line" animation="blurIn" once>
              A blade stays sheathed — until its purpose awakens...
            </TextAnimate>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
