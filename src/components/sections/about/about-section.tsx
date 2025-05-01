import { type IconType } from "@icons-pack/react-simple-icons";

import LANGUAGES from "@/lib/constants/languages";
import { cn } from "@/lib/utils";

import { MyInfo } from "@/components/sections/about/my-info";
import { BackgroundInkPaint } from "@/components/sections/about/background-ink-paint";
import { Marquee } from "@/components/ui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const langs = [
  { name: "Go", src: LANGUAGES.go.src },
  { name: "TypeScript", src: LANGUAGES.ts.src },
  { name: "NodeJS", src: LANGUAGES.node.src },
  { name: "React", src: LANGUAGES.react.src },
  { name: "Tailwind", src: LANGUAGES.tailwind.src },
  { name: "PostgreSQL", src: LANGUAGES.postgresql.src },
  { name: "Python", src: LANGUAGES.python.src },
  { name: "NextJS", src: LANGUAGES.nextjs.src },
  { name: "Git", src: LANGUAGES.git.src },
] as const;

const LanguageCard = (props: { src: IconType; name: string }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <figure
            className={cn(
              "bg-off-w relative ml-3 h-full w-fit cursor-pointer overflow-hidden rounded-lg border p-3 shadow-md max-xl:w-[4.75rem] max-md:w-[4rem] xl:w-[5.5rem]",
              "border-2 border-black/35 hover:bg-gray-950/[.05]",
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
      className="h-section-height bg-off-w relative overflow-hidden max-xl:h-max max-xl:py-10"
    >
      <div
        id="about-me"
        className="flex h-full w-full flex-col items-center justify-center"
      >
        <MyInfo />

        <div className="relative flex flex-row items-center justify-center overflow-hidden max-xl:w-[700px] max-md:w-[400px] xl:w-[1000px]">
          <Marquee pauseOnHover className="[--duration:15s]">
            {langs.map((lang) => (
              <LanguageCard key={lang.name} {...lang} />
            ))}
          </Marquee>

          <div className="from-off-w pointer-events-none absolute inset-y-0 left-0 z-0 w-1/5 bg-gradient-to-r"></div>
          <div className="from-off-w pointer-events-none absolute inset-y-0 right-0 z-0 w-1/5 bg-gradient-to-l"></div>
        </div>
      </div>

      <BackgroundInkPaint />
    </section>
  );
}
