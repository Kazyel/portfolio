"use client";

import Image from "next/image";
import { type HTMLMotionProps, motion } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { cn } from "@/lib/utils";

const BACKGROUND_ANIMATION: Omit<HTMLMotionProps<"div">, "ref" | "className"> = {
  transition: { duration: 0.5, delay: 1.5 },
  viewport: { once: true, amount: 0.65 },
};

const sectionClasses = cn(
  "min-h-section-height relative flex items-center justify-center gap-x-20 gap-y-6 overflow-clip bg-black/75 px-8",
  "max-xl:py-10 max-lg:scroll-mt-[56px] max-lg:flex-col",
);

const samuraiBgClasses = cn("mx-auto opacity-15 grayscale");

const toriiBgClasses = cn(
  "pointer-events-none absolute bottom-0 grayscale",
  "loading-lazy decoding-async",
);

const textContainerClasses = cn(
  "z-10 flex w-[600px] flex-col gap-y-6",
  "max-lg:w-full max-lg:gap-y-4 max-md:gap-y-2 sm:items-center",
);

const heading1Classes = cn(
  "text-off-w text-8xl font-extrabold tracking-tighter",
  "max-lg:text-5xl max-md:text-[2.75rem]",
);

const heading2Classes = cn(
  "text-acc-yellow-2 text-5xl",
  "max-lg:text-3xl max-md:text-3xl",
);

const subtextClasses = cn(
  "text-off-w/60 text-lg font-extralight tracking-wide italic",
  "max-lg:text-base max-md:text-base",
);

export default function ContactSection() {
  return (
    <section id="contact-section" className={sectionClasses}>
      {/* Animated background overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        {...BACKGROUND_ANIMATION}
        className="absolute inset-0 max-lg:hidden"
      >
        <Image
          src="/images/samurai.webp"
          alt="Samurai Background"
          className={samuraiBgClasses}
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
        className="absolute inset-0 max-xl:hidden"
      >
        <Image
          src="/images/torii.webp"
          alt="Torii Background"
          className={cn(toriiBgClasses, "-right-[300px]")}
          width={900}
          height={900}
          quality={75}
          loading="lazy"
          decoding="async"
        />

        <Image
          src="/images/torii.webp"
          alt="Torii Background (Mirrored)"
          className={cn(toriiBgClasses, "-left-[300px] -scale-x-[1]")}
          width={900}
          height={900}
          quality={75}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <div className={textContainerClasses}>
        <TextAnimate
          as="h1"
          className={heading1Classes}
          delay={0.15}
          animation="slideRight"
          once
        >
          This journey ends here.
        </TextAnimate>

        <TextAnimate
          as="h2"
          by="line"
          className={heading2Classes}
          delay={0.75}
          animation="slideRight"
          once
        >
          Yet, ours yearns to begin.
        </TextAnimate>

        <div className={subtextClasses}>
          <TextAnimate delay={1.5} duration={1} by="line" animation="blurIn" once>
            A blade stays sheathed — until its purpose awakens...
          </TextAnimate>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
