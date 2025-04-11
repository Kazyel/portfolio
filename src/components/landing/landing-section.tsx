import { TextAnimate } from "@/components/ui/magicui/text-animate";
import { AuroraText } from "../ui/magicui/aurora-text";

export const LandingSection = () => {
  return (
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
  );
};
