import images from "@/lib/constants/images";
import GitHub from "@/assets/imgs/github-mark.svg";
import { cn } from "@/lib/utils";

import InkPaint from "@/assets/imgs/ink-paint.png";
import InkPaint2 from "@/assets/imgs/ink-paint-2.png";

import { Marquee } from "@/components/ui/magicui/marquee";
import { MyInfo } from "@/components/about/my-info";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const langs = [
  { name: "Go", src: images.go.src, alt: "Go logo" },
  { name: "TypeScript", src: images.ts.src, alt: "TypeScript logo" },
  { name: "Node", src: images.node.src, alt: "Node logo" },
  { name: "React", src: images.react.src, alt: "React logo" },
  { name: "Tailwind", src: images.tailwind.src, alt: "Tailwind logo" },
  { name: "PostgreSQL", src: images.postgresql.src, alt: "PostgreSQL logo" },
  { name: "Python", src: images.python.src, alt: "Python logo" },
  { name: "NextJS", src: images.nextjs.src, alt: "NextJS logo" },
  { name: "GitHub", src: GitHub.src, alt: "GitHub logo" },
];

const LanguageCard = ({ src, alt, name }: { src: string; alt: string; name: string }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={700}>
        <TooltipTrigger asChild>
          <figure
            className={cn(
              "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-24",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            )}
          >
            <img className="size-full" alt={alt} src={src} />
          </figure>
        </TooltipTrigger>
        <TooltipContent className="text-[0.85rem] font-bold text-white">
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const AboutSection = () => {
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
              <LanguageCard key={lang.alt} {...lang} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-off-w"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-off-w"></div>
        </div>
      </div>

      <div>
        <img
          src={InkPaint.src}
          alt="Ink Paint"
          width={800}
          height={800}
          className="pointer-events-none absolute -bottom-24 -left-[26rem] w-[800px] opacity-20 mix-blend-multiply grayscale max-2xl:w-[800px] max-md:hidden"
        />

        <img
          src={InkPaint2.src}
          alt="Ink Paint 2"
          width={1100}
          height={1100}
          className="pointer-events-none absolute -right-[26rem] bottom-0 w-[1100px] opacity-50 mix-blend-multiply grayscale max-2xl:-right-96 max-xl:-bottom-8 max-md:hidden"
        />
      </div>
    </section>
  );
};
