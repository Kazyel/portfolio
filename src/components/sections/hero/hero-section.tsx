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
        className="relative flex flex-col items-center justify-center overflow-hidden max-lg:h-[calc(100dvh-4rem)] max-lg:px-10 lg:h-screen"
      >
        <AnimatedGradientBackground
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

        <div className="relative z-10 flex flex-col gap-y-12 max-xl:items-center">
          <div className="max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-center max-lg:text-center">
            <TextAnimate
              className="text-acc-yellow mb-4 text-[3.5rem] font-extrabold tracking-tighter max-xl:text-[3rem] max-md:text-[2rem]"
              animation="slideDown"
              once
            >
              Hey, web wanderer!
            </TextAnimate>

            <TextAnimate
              className="text-off-w mb-4 text-[4rem] leading-[1em] font-extralight tracking-tighter max-xl:text-[3.75rem] max-md:text-[2.25rem]"
              as="h2"
              delay={0.15}
              once
            >
              I'm Mateus Mascarelo,
            </TextAnimate>

            <TextAnimate
              as="h2"
              delay={0.3}
              animation="fadeIn"
              className="text-off-w text-7xl font-extrabold tracking-tighter max-xl:text-[4rem] max-md:text-[2.5rem]"
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
