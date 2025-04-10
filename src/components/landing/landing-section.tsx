import { TextAnimate } from "@/components/magicui/text-animate";

export const LandingSection = () => {
  return (
    <section id="landing-section" className="relative z-10 overflow-hidden">
      <div className="max-lg:text-center lg:w-[1100px]">
        <p className="mb-4 text-[3rem] font-extrabold text-acc-yellow max-lg:text-[3rem] max-sm:text-[2.75rem]">
          <TextAnimate animation="slideDown" startOnView={false}>
            Hey, web wanderer!
          </TextAnimate>
        </p>

        <h2 className="font-light tracking-tight text-off-w max-md:text-2xl sm:mb-8 xl:text-7xl">
          <TextAnimate delay={0.25} startOnView={false}>
            I'm Mateus Mascarelo,
          </TextAnimate>
        </h2>

        <TextAnimate
          as="h2"
          delay={0.4}
          animation="fadeIn"
          startOnView={false}
          className="font-extrabold leading-[1] tracking-tighter text-off-w max-md:text-4xl max-sm:text-3xl xl:text-[5rem]"
        >
          More than a web developer.
        </TextAnimate>
      </div>
    </section>
  );
};
