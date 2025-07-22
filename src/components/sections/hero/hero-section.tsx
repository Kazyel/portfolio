import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { TextAnimate } from "@/components/ui/text-animate";
import { HeroButtons } from "@/components/sections/hero/hero-buttons";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import Image from "next/image";

const STATIC_COLOR = "#f3e5d7";
const DARK_COLOR = "#00000033";

const imageBaseClasses = "pointer-events-none absolute opacity-35";
const textBaseClasses = "tracking-tighter text-pretty max-sm:leading-10";
const mobileTextDisposition = "max-xs:text-left sm:max-lg:text-center";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero-section"
      className={cn(
        "min-h-section-height relative flex flex-col items-center justify-center overflow-hidden px-12",
        "max-xs:px-6 max-sm:px-9",
      )}
    >
      {/* Gradient Background */}
      <AnimatedGradientBackground
        gradientStops={[45, 75, 100]}
        gradientColors={[DARK_COLOR, STATIC_COLOR + "44", STATIC_COLOR]}
      />

      {/* Background */}
      <Image
        src="/images/kanagawa.webp"
        alt="Kanagawa Wave"
        className={cn(
          imageBaseClasses,
          "kanagawa-animation bottom-0 w-full opacity-20 sepia",
        )}
        loading="eager"
        priority
        quality={85}
        width={1900}
        height={443}
      />
      <Image
        src="/images/pagoda.webp"
        alt="Pagoda"
        className={cn(imageBaseClasses, "pagoda-animation -bottom-52", "max-lg:hidden")}
        loading="eager"
        priority
        quality={85}
        width={1920}
        height={1080}
      />

      {/* Hero Content */}
      <div className={cn("relative flex w-full flex-col gap-y-12", "xl:max-w-[1250px]")}>
        <div className="w-full">
          <TextAnimate
            className={cn(
              textBaseClasses,
              mobileTextDisposition,
              "text-acc-yellow hero-shadow-1 mb-4 text-[3.5rem] font-extrabold",
              "max-xs:text-[2rem] max-xl:text-[3rem] max-md:text-[2.5rem] 2xl:text-[4rem]",
            )}
            as="h1"
            animation="slideDown"
            delay={0.2}
            by="text"
            once
          >
            {t("hello")}
          </TextAnimate>

          <TextAnimate
            className={cn(
              textBaseClasses,
              mobileTextDisposition,
              "hero-shadow-2 text-off-w mb-4 text-[4rem] leading-[1em] font-semibold",
              "max-xs:text-[2.5rem] max-xl:text-[3.75rem] max-md:text-[3rem] 2xl:text-[5rem]",
            )}
            as="h2"
            by="text"
            delay={0.4}
            once
          >
            {t("mateus")}
          </TextAnimate>

          <TextAnimate
            className={cn(
              textBaseClasses,
              mobileTextDisposition,
              "hero-shadow-3 text-off-w text-7xl font-extrabold",
              "max-xs:text-[2.5rem] xs:max-md:text-[3rem] max-xl:text-[4rem]",
            )}
            as="h2"
            delay={0.6}
            animation="fadeIn"
            by="text"
            once
          >
            {t("more")}
          </TextAnimate>
        </div>

        {/* Call to Action Buttons */}
        <HeroButtons />
      </div>
    </section>
  );
}
