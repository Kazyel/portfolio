import { TextAnimate } from "@/components/ui/magicui/text-animate";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

import Image from "next/image";
import KanagawaWave from "@/assets/imgs/kanagawa.png";
import Pagoda from "@/assets/imgs/pagoda.png";

const STATIC_COLOR = "#f3e5d7";
const DARK_COLOR = "#00000033";

export default function HeroSection() {
  return (
    <>
      <div className="snap-start relative max-lg:h-[calc(100dvh-4rem)] max-xl:px-10 lg:min-h-screen flex flex-col justify-center items-center bg-darkest">
        <AnimatedGradientBackground
          gradientStops={[45, 75, 100]}
          gradientColors={[DARK_COLOR, STATIC_COLOR + "44", STATIC_COLOR]}
        />

        <Image
          src={KanagawaWave}
          alt="Kanagawa Wave"
          className="absolute bottom-0 w-full opacity-15 sepia max-md:hidden pointer-events-none kanagawa-animation"
          loading="eager"
        />
        <Image
          src={Pagoda}
          alt="Pagoda"
          className="absolute -bottom-52 opacity-25 max-md:hidden max-w-[1920px] pagoda-animation pointer-events-none"
          loading="eager"
        />
        <section id="landing-section" className="relative">
          <div className="z-10 max-lg:text-center">
            <TextAnimate
              className="mb-4 text-5xl font-extrabold text-acc-yellow max-lg:text-[3rem] max-sm:text-[2.75rem]"
              animation="slideDown"
            >
              Hey, web wanderer!
            </TextAnimate>

            <TextAnimate
              className="font-extralight tracking-tight text-off-w max-md:text-2xl sm:mb-8 xl:text-7xl"
              as="h2"
              delay={0.15}
            >
              I'm Mateus Mascarelo,
            </TextAnimate>

            <TextAnimate
              as="h2"
              delay={0.3}
              animation="fadeIn"
              className="font-extrabold tracking-tighter text-off-w max-md:text-4xl max-sm:text-3xl xl:text-7xl"
            >
              More than a web developer.
            </TextAnimate>
          </div>
        </section>
      </div>
    </>
  );
}
