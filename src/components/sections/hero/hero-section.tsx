// import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import Image from "next/image";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { TextAnimate } from "@/components/ui/text-animate";
import { HeroButtons } from "@/components/sections/hero/hero-buttons";

const STATIC_COLOR = "#f3e5d7";
const MID_COLOR = "#f3e5d744";
const DARK_COLOR = "#00000033";

const imageBaseClasses = "pointer-events-none absolute";

export default function HeroSection() {
  // const t = useTranslations("Hero");

  return (
    <section
      id="hero-section"
      className={cn(
        "relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-12",
        "max-xs:px-6 max-sm:px-9",
      )}
    >
      {/* Hero Content */}
      <div
        className={cn(
          "relative z-30 flex w-full flex-col gap-y-12 text-center",
          "max-w-[1250px]",
        )}
      >
        <div className="flex w-full flex-col gap-y-10">
          <TextAnimate
            className={cn(
              "hero-shadow-2 text-acc-red text-3xl font-semibold tracking-tighter lg:text-6xl",
            )}
            as="h1"
            animation="slideDown"
            delay={0}
            by="word"
            once
          >
            Be at ease, wanderer.
          </TextAnimate>

          <TextAnimate
            className={cn(
              "hero-shadow-1 text-off-w text-5xl font-extrabold tracking-tighter text-balance md:text-6xl lg:text-8xl",
            )}
            as="h2"
            by="word"
            delay={0.2}
            once
          >
            I'm a craftsman of the intangible web.
          </TextAnimate>

          <TextAnimate
            className={cn(
              "text-acc-yellow-3 font-merriweather text-xl font-extrabold tracking-tight text-balance lg:text-4xl",
            )}
            as="h2"
            delay={0.4}
            animation="fadeIn"
            by="word"
            once
          >
            Walking the endless road of creation, a path where every line tells
            a story, I shape ideas into living code.
          </TextAnimate>
        </div>

        {/* Call to Action Buttons */}
        <HeroButtons />
      </div>

      {/* Background */}
      <Image
        src="/images/kanagawa.avif"
        alt="Kanagawa Wave"
        className={cn(
          imageBaseClasses,
          "kanagawa-animation bottom-0 z-20 w-full opacity-20 sepia",
        )}
        loading="eager"
        priority
        quality={65}
        width={1900}
        height={443}
        sizes="100vw"
      />
      <Image
        src="/images/pagoda.avif"
        alt="Pagoda"
        className={cn(
          imageBaseClasses,
          "pagoda-animation -bottom-40 opacity-30",
          "max-md:hidden md:max-2xl:-bottom-0",
        )}
        loading="eager"
        priority
        quality={65}
        width={1920}
        height={1080}
        sizes="(max-width: 1024px) 0vw, 100vw"
      />

      {/* Gradient Background */}
      <AnimatedGradientBackground
        gradientStops={[45, 75, 100]}
        gradientColors={[DARK_COLOR, MID_COLOR, STATIC_COLOR]}
      />
    </section>
  );
}
