import { type IconType } from "@icons-pack/react-simple-icons";
import LANGUAGES from "@/lib/constants/langs";
import { cn } from "@/lib/utils";
import { MyInfo } from "./my-info";
import { BackgroundInkPaint } from "./background-ink-paint";
import { Marquee } from "@/components/ui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TECH_STACK = [
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

interface LanguageCardProps {
  src: IconType;
  name: string;
}

const LanguageCard = ({ src: Icon, name }: LanguageCardProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <figure
            className={cn(
              "relative ml-3 h-full w-fit cursor-pointer overflow-hidden rounded-lg border p-3 shadow-md",
              "max-xl:w-[4.75rem] max-md:w-[4rem] xl:w-[5.5rem]",
              "bg-off-w border-2 border-black/35 hover:bg-gray-950/[.05]",
            )}
          >
            <Icon className="size-full" />
          </figure>
        </TooltipTrigger>
        <TooltipContent className="text-[0.85rem] font-bold text-white">
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const TechStackMarquee = () => {
  return (
    <div className="relative flex flex-row items-center justify-center overflow-hidden max-xl:w-[700px] max-md:w-[400px] xl:w-[1000px]">
      <Marquee pauseOnHover className="[--duration:15s]">
        {TECH_STACK.map((tech) => (
          <LanguageCard key={tech.name} src={tech.src} name={tech.name} />
        ))}
      </Marquee>

      {/* Fade gradients */}
      <div className="from-off-w pointer-events-none absolute inset-y-0 left-0 z-0 w-1/5 bg-gradient-to-r" />
      <div className="from-off-w pointer-events-none absolute inset-y-0 right-0 z-0 w-1/5 bg-gradient-to-l" />
    </div>
  );
};

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className={cn(
        "min-h-section-height bg-off-w relative flex flex-col items-center justify-center overflow-clip",
        "max-xl:py-10 max-lg:scroll-mt-[56px]",
      )}
    >
      <MyInfo />
      <TechStackMarquee />
      <BackgroundInkPaint />
    </section>
  );
}
