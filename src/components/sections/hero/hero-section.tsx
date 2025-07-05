import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { TextAnimate } from "@/components/ui/text-animate";
import { HeroButtons } from "@/components/sections/hero/hero-buttons";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import Image from "next/image";

const STATIC_COLOR = "#f3e5d7";
const DARK_COLOR = "#00000033";

const sectionClasses =
  "min-h-section-height relative flex flex-col items-center justify-center overflow-hidden max-lg:px-8";
const imageClasses = "pointer-events-none absolute opacity-35";
const textContainerClasses = "flex flex-col lg:items-start";
const textBaseClasses = "tracking-tighter text-pretty max-sm:leading-10";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero-section" className={sectionClasses}>
      <AnimatedGradientBackground
        containerClassName="max-lg:hidden"
        gradientStops={[45, 75, 100]}
        gradientColors={[DARK_COLOR, STATIC_COLOR + "44", STATIC_COLOR]}
      />

      <Image
        src="/images/kanagawa.webp"
        alt="Kanagawa Wave"
        className={cn(
          imageClasses,
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
        className={cn(imageClasses, "pagoda-animation -bottom-52 max-lg:hidden")}
        loading="eager"
        priority
        quality={85}
        width={1920}
        height={1080}
      />

      <div className="relative z-10 flex flex-col gap-y-12 lg:p-4">
        <div className={textContainerClasses}>
          <TextAnimate
            className={cn(
              textBaseClasses,
              "text-acc-yellow xs:max-lg:text-center mb-4 text-[3.5rem] font-extrabold",
              "max-xl:text-[3rem] max-md:text-[2.5rem] 2xl:text-[4rem]",
            )}
            animation="slideDown"
            once
          >
            {t("hello")}
          </TextAnimate>

          <TextAnimate
            className={cn(
              textBaseClasses,
              "hero-shadow-1 text-off-w xs:max-lg:text-center mb-4 text-[4rem] leading-[1em] font-semibold",
              "max-xs:text-[2.5rem] max-xl:text-[3.75rem] max-md:text-[3rem] 2xl:text-[5rem]",
            )}
            as="h2"
            delay={0.15}
            once
          >
            {t("mateus")}
          </TextAnimate>

          <TextAnimate
            className={cn(
              textBaseClasses,
              "hero-shadow-2 text-off-w xs:max-lg:text-center text-7xl font-extrabold",
              "max-xs:text-[2.5rem] max-xl:text-[4rem] max-md:text-[3rem]",
            )}
            as="h2"
            delay={0.3}
            animation="fadeIn"
            once
          >
            {t("more")}
          </TextAnimate>
        </div>

        <HeroButtons />
      </div>
    </section>
  );
}
