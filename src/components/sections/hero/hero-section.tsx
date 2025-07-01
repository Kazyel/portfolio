import Image from "next/image";

import { TextAnimate } from "@/components/ui/text-animate";
import { HeroButtons } from "@/components/sections/hero/hero-buttons";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

const STATIC_COLOR = "#f3e5d7";
const DARK_COLOR = "#00000033";

export default function HeroSection() {
  return (
    <>
      <section
        id="hero-section"
        className="relative flex flex-col items-center justify-center overflow-hidden max-lg:h-dvh max-lg:px-8 lg:h-screen"
      >
        <AnimatedGradientBackground
          containerClassName="max-lg:hidden"
          gradientStops={[45, 75, 100]}
          gradientColors={[DARK_COLOR, STATIC_COLOR + "44", STATIC_COLOR]}
        />

        <Image
          src={"/images/kanagawa.webp"}
          alt="Kanagawa Wave"
          className="kanagawa-animation pointer-events-none absolute bottom-0 w-full opacity-20 sepia"
          loading="eager"
          priority={true}
          quality={85}
          width={1900}
          height={443}
        />
        <Image
          src={"/images/pagoda.webp"}
          alt="Pagoda"
          className="pagoda-animation pointer-events-none absolute -bottom-52 opacity-35 max-lg:hidden"
          loading="eager"
          priority={true}
          quality={85}
          width={1920}
          height={1080}
        />

        <div className="relative z-10 flex flex-col gap-y-12 lg:p-4">
          <div className="flex flex-col lg:items-start">
            <TextAnimate
              className="text-acc-yellow xs:max-lg:text-center mb-4 text-[3.5rem] font-extrabold tracking-tighter text-pretty max-xl:text-[3rem] max-md:text-[2.5rem] max-sm:leading-10 2xl:text-[4rem]"
              animation="slideDown"
              once
            >
              Hey, web wanderer!
            </TextAnimate>

            <TextAnimate
              className="xs:max-lg:text-center hero-shadow-1 text-off-w max-xs:text-[2.5rem] mb-4 text-[4rem] leading-[1em] font-semibold tracking-tighter text-pretty max-xl:text-[3.75rem] max-md:text-[3rem] max-sm:leading-10 2xl:text-[5rem]"
              as="h2"
              delay={0.15}
              once
            >
              I'm Mateus Mascarelo,
            </TextAnimate>

            <TextAnimate
              className="text-off-w xs:max-lg:text-center hero-shadow-2 max-xs:text-[2.5rem] text-7xl font-extrabold tracking-tighter text-pretty max-xl:text-[4rem] max-md:text-[3rem]"
              as="h2"
              delay={0.3}
              animation="fadeIn"
              once
            >
              More than a web developer.
            </TextAnimate>
          </div>

          <HeroButtons />
        </div>
      </section>
    </>
  );
}
