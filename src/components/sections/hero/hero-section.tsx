import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { TextAnimate } from "@/components/ui/text-animate";
import { HeroButtons } from "@/components/sections/hero/hero-buttons";
import Image from "next/image";

const STATIC_COLOR = "#f3e5d7";
const MID_COLOR = "#f3e5d744";
const DARK_COLOR = "#00000033";

const imageBaseClasses = "pointer-events-none absolute";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <main
      id="hero-section"
      className={cn(
        "relative flex min-h-dvh flex-col items-center justify-center overflow-hidden",
        "xs:px-12 px-6",
      )}
    >
      {/* Hero Content */}
      <section className="relative z-30 flex w-full flex-col gap-y-12 text-center">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <div className="flex max-w-[700px] flex-col gap-y-6 lg:max-w-[1000px]">
            <TextAnimate
              className={cn(
                "hero-shadow-2 text-acc-red font-semibold tracking-tighter",
                "text-xl sm:text-4xl lg:text-5xl",
              )}
              as="h1"
              animation="slideDown"
              delay={0}
              by="word"
              once
            >
              {t("greetings")}
            </TextAnimate>

            <TextAnimate
              className={cn(
                "hero-shadow-1 text-off-w font-extrabold tracking-tighter",
                "xs:text-6xl text-5xl md:text-7xl lg:text-7xl xl:text-8xl",
              )}
              as="h2"
              by="word"
              delay={0.2}
              once
            >
              {t("shape")}
            </TextAnimate>
          </div>

          <div className="flex max-w-[800px] flex-col gap-y-4">
            <TextAnimate
              className={cn(
                "text-acc-yellow-3/85 font-crimson font-light tracking-tight text-balance",
                "text-xl sm:text-2xl md:text-3xl",
              )}
              as="h2"
              delay={0.4}
              animation="fadeIn"
              by="word"
              once
            >
              {t("flow")}
            </TextAnimate>

            <TextAnimate
              className={cn(
                "text-acc-yellow-3 font-crimson font-bold text-pretty",
                "text-xl sm:text-2xl md:text-3xl",
              )}
              as="h2"
              delay={0.4}
              animation="fadeIn"
              by="line"
              once
            >
              {t("each")}
            </TextAnimate>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <HeroButtons />
      </section>

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
    </main>
  );
}
