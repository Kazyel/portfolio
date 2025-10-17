"use client";

import type { CustomMotion } from "@/lib/types";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/constants/socials";

import { TextAnimate } from "@/components/ui/text-animate";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ShineBorder } from "@/components/ui/shine-border";
import { m } from "@/components/motion-wrapper";

const BACKGROUND_MOTION: CustomMotion<"div"> = {
  transition: { duration: 2.5, delay: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.65 },
};

const toriiBaseClasses = cn("pointer-events-none absolute bottom-0");

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact-section"
      className={cn(
        "relative flex items-center justify-center gap-x-20 gap-y-10 overflow-clip bg-gradient-to-t from-transparent to-black",
        "min-h-max flex-col px-6 py-16 max-lg:scroll-mt-[var(--navbar-height)] sm:px-12 sm:py-16 lg:min-h-dvh lg:flex-row",
      )}
    >
      {/* Samurai Background */}
      {/* <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        {...BACKGROUND_MOTION}
        className="absolute bottom-0 hidden lg:block"
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
      </m.div> */}

      {/* Torii Backgrounds */}
      <m.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 0.1 }}
        {...BACKGROUND_MOTION}
        className="absolute inset-0 hidden 2xl:block"
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
          "z-10 flex flex-col gap-y-6 md:max-w-[600px]",
          "max-lg:w-full max-lg:gap-y-4 max-md:gap-y-2 sm:items-center",
        )}
      >
        <TextAnimate
          as="h1"
          className={cn(
            "text-off-w text-center font-extrabold tracking-tight text-balance lg:text-left lg:text-pretty",
            "text-4xl md:text-6xl lg:text-8xl",
          )}
          animation="slideRight"
          once
        >
          {t("journey")}
        </TextAnimate>

        <TextAnimate
          as="h2"
          by="line"
          className={cn(
            "text-acc-yellow-2 text-center text-5xl text-balance lg:text-left",
            "text-xl md:text-4xl lg:text-5xl",
          )}
          delay={0.3}
          animation="slideRight"
          once
        >
          {t("yet")}
        </TextAnimate>
      </div>

      <div className="flex w-full flex-col items-center justify-center sm:w-fit">
        <ContactForm />

        <m.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.75,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          viewport={{ once: true, amount: 0.65 }}
          className="relative flex w-full items-center justify-center"
        >
          <div className="bg-acc-yellow-2 h-px w-full translate-y-0.5" />

          <p className="text-acc-yellow-3 flex-auto shrink-0 bg-transparent px-6 py-4 text-center text-sm font-bold text-pretty sm:text-base">
            {t("follow-me")}
          </p>

          <div className="bg-acc-yellow-2 h-px w-full translate-y-0.5" />
        </m.div>

        {/* Social Links */}
        <m.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          viewport={{ once: true, amount: 0.65 }}
          className="border-off-w/20 relative z-20 flex w-full gap-4 rounded-lg border bg-black p-3 sm:w-[425px]"
        >
          {Object.entries(SOCIAL_LINKS).map(([key, social]) => (
            <Link
              key={key}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "border-off-w/50 hover:border-acc-yellow-3 bg-off-w hover:bg-acc-yellow-2 group flex flex-1 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded border transition-all duration-200",
              )}
            >
              <m.span className="flex w-full items-center justify-center gap-x-2 p-2">
                <social.icon
                  className={cn(
                    "size-5 shrink-0 text-black transition-all duration-200 sm:size-5",
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-extrabold text-black transition-all duration-200",
                  )}
                >
                  {social.text}
                </span>
              </m.span>
            </Link>
          ))}

          <ShineBorder shineColor={["#F3E5D7bb", "#F3E5D755", "#F3E5D733"]} />
        </m.div>
      </div>
    </section>
  );
}
