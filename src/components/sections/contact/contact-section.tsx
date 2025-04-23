import { TextAnimate } from "@/components/ui/text-animate";
import { ContactForm } from "@/components/sections/contact/contact-form";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="h-section-height relative flex items-center justify-center gap-x-20 overflow-hidden bg-black/75"
    >
      <div className="flex w-[600px] flex-col gap-y-10">
        <TextAnimate
          as="h1"
          by="line"
          className="text-off-w text-8xl font-bold tracking-tighter"
          delay={0.2}
          animation="slideRight"
          once
        >
          This journey ends here.
        </TextAnimate>

        <TextAnimate
          as="h2"
          by="line"
          className="text-off-w text-5xl font-light"
          delay={1}
          animation="slideRight"
          once
        >
          Yet, ours yearns to begin.
        </TextAnimate>

        <div className="text-off-w/50 text-lg font-extralight tracking-wide">
          <TextAnimate delay={1.75} duration={1} by="line" animation="blurIn" once>
            A blade stays sheathed — until its purpose awakens...
          </TextAnimate>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
