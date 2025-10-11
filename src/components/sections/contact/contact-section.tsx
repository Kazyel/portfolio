"use client";

import type { CustomMotion } from "@/lib/types";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { m } from "@/components/motion-wrapper";
import { useTranslations } from "next-intl";

const BACKGROUND_MOTION: CustomMotion<"div"> = {
  transition: { duration: 0.5, delay: 1.5 },
  viewport: { once: true, amount: 0.65 },
};

const toriiBaseClasses = cn("pointer-events-none absolute bottom-0");

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact-section"
      className={cn(
        "relative flex min-h-dvh items-center justify-center gap-x-20 gap-y-6 overflow-clip bg-black/75 px-8",
        "max-xl:px-12 max-xl:py-16 max-lg:min-h-max max-lg:scroll-mt-[var(--navbar-height)] max-lg:flex-col max-sm:px-8",
      )}
    >
      {/* Animated Background Overlays */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        {...BACKGROUND_MOTION}
        className="absolute bottom-0 max-lg:hidden"
      >
        <Image
          src="/images/samurai.avif"
          alt="Samurai Background"
          className="mx-auto opacity-15"
          width={1000}
          height={1000}
          quality={75}
          loading="lazy"
          decoding="async"
        />
      </m.div>

      <m.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 0.1 }}
        {...BACKGROUND_MOTION}
        className="absolute inset-0 max-xl:hidden"
      >
        <Image
          src="/images/torii.webp"
          alt="Torii Background"
          className={cn(toriiBaseClasses, "-right-[300px]")}
          width={900}
          height={900}
          quality={75}
          loading="lazy"
          decoding="async"
        />

        <Image
          src="/images/torii.webp"
          alt="Torii Background (Mirrored)"
          className={cn(toriiBaseClasses, "-left-[300px] -scale-x-[1]")}
          width={900}
          height={900}
          quality={75}
          loading="lazy"
          decoding="async"
        />
      </m.div>

      <div
        className={cn(
          "z-10 flex w-[600px] flex-col gap-y-6",
          "max-lg:w-full max-lg:gap-y-4 max-md:gap-y-2 sm:items-center",
        )}
      >
        <TextAnimate
          as="h1"
          className={cn(
            "text-off-w text-8xl font-extrabold tracking-tighter",
            "max-lg:text-5xl max-md:text-[2.75rem]",
          )}
          delay={0.15}
          animation="slideRight"
          once
        >
          {t("journey")}
        </TextAnimate>

        <TextAnimate
          as="h2"
          by="line"
          className={cn("text-acc-yellow-2 text-5xl", "max-lg:text-3xl max-md:text-3xl")}
          delay={0.75}
          animation="slideRight"
          once
        >
          {t("yet")}
        </TextAnimate>

        <div
          className={cn(
            "text-off-w/60 text-lg font-extralight tracking-wide italic",
            "max-lg:text-base max-md:text-base",
          )}
        >
          <TextAnimate delay={1.5} duration={1} by="line" animation="blurIn" once>
            {t("quote")}
          </TextAnimate>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
