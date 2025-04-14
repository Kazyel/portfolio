import { type IconType } from "@icons-pack/react-simple-icons";

import { cn } from "@/lib/utils";
import languages from "@/lib/constants/languages";

import { MyInfo } from "@/components/sections/about/my-info";
import { BackgroundInkPaint } from "@/components/sections/about/background-ink-paint";
import { Marquee } from "@/components/ui/marquee";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const langs = [
  { name: "Go", src: languages.go.src },
  { name: "TypeScript", src: languages.ts.src },
  { name: "Node", src: languages.node.src },
  { name: "React", src: languages.react.src },
  { name: "Tailwind", src: languages.tailwind.src },
  { name: "PostgreSQL", src: languages.postgresql.src },
  { name: "Python", src: languages.python.src },
  { name: "NextJS", src: languages.nextjs.src },
  { name: "Git", src: languages.git.src },
];

const LanguageCard = (props: { src: IconType; name: string }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={700}>
        <TooltipTrigger asChild>
          <figure
            className={cn(
              "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-3 sm:w-[5.5rem]",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
            )}
          >
            <props.src className="size-full" />
          </figure>
        </TooltipTrigger>
        <TooltipContent className="text-[0.85rem] font-bold text-white">
          {props.name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="section relative snap-start snap-always overflow-hidden xl:min-h-screen"
    >
      <div
        id="about-me"
        className="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-8 bg-off-w max-xl:mb-12 max-xl:flex max-xl:flex-col max-xl:pb-20 max-xl:pt-20 max-sm:w-full xl:p-20"
      >
        <MyInfo />

        <div className="relative flex w-[1000px] flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:15s]">
            {langs.map((lang) => (
              <LanguageCard key={lang.name} {...lang} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-off-w"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-off-w"></div>
        </div>
      </div>

      <BackgroundInkPaint />
    </section>
  );
}
