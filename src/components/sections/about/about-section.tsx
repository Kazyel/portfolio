import Image from "next/image";

import { cn } from "@/lib/utils";
import images from "@/lib/constants/images";

import { MyInfo } from "@/components/sections/about/my-info";
import { BackgroundInkPaint } from "@/components/sections/about/background-ink-paint";
import { Marquee } from "@/components/ui/marquee";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const langs = [
  { name: "Go", src: images.go.src },
  { name: "TypeScript", src: images.ts.src },
  { name: "Node", src: images.node.src },
  { name: "React", src: images.react.src },
  { name: "Tailwind", src: images.tailwind.src },
  { name: "PostgreSQL", src: images.postgresql.src },
  { name: "Python", src: images.python.src },
  { name: "NextJS", src: images.nextjs.src },
  { name: "Git", src: images.git.src },
];

const LanguageCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={700}>
        <TooltipTrigger asChild>
          <figure
            className={cn(
              "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-3 sm:w-24 ",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
            )}
          >
            <Image className="size-full" alt={name + " logo"} src={src} width={96} height={96} />
          </figure>
        </TooltipTrigger>
        <TooltipContent className="text-[0.85rem] font-bold text-white">{name}</TooltipContent>
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
        className="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-y-6 bg-off-w max-xl:mb-12 max-xl:flex max-xl:flex-col max-xl:pb-20 max-xl:pt-20 max-sm:w-full xl:p-20"
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
