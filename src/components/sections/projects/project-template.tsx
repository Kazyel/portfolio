import type { ProjectType } from "@/lib/content/projects";
import Image from "next/image";
import { ProjectLink } from "@/components/sections/projects/project-link";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";

const SHINE_BORDER_COLOR = ["#9f0712cc", "#000000", "#9f071266"];

const containerClasses = "z-20 flex w-full flex-col items-center";
const headerContainerClasses = "flex flex-col gap-4 self-start pt-5 pb-10";
const titleClasses = "text-5xl font-extrabold tracking-tighter text-red-800";
const descriptionClasses = "text-acc-yellow-2 text-sm font-semibold";
const projectLinkClasses = "self-start not-italic";

const gridContainerClasses = cn(
  "grid w-full grid-cols-3 grid-rows-3 xl:max-h-[700px]",
  "max-xl:flex max-xl:flex-col max-md:items-center max-md:justify-center",
);

const contentContainerClasses = cn(
  "col-span-2 row-span-3 flex flex-col items-center justify-between gap-y-8 text-pretty",
  "max-xl:mb-10 max-lg:justify-center xl:mr-16",
);

const textLineClasses = cn(
  "border-off-w/75 pb-4 text-lg leading-7 font-light text-neutral-200/85",
  "last:pb-0 max-md:text-base",
);

const languagesContainerClasses = cn(
  "bg-off-w flex items-center gap-8 place-self-start rounded p-3",
  "max-lg:flex-wrap max-sm:place-self-center xl:h-24",
);

const languageIconClasses = "aspect-square size-12 flex-1 xl:size-16";

const imageContainerClasses = cn(
  "relative col-span-1 row-span-3 aspect-square max-w-[500px] overflow-hidden rounded-lg",
  "max-xl:max-w-[300px]",
);

const imageClasses = "rounded-lg brightness-50 sepia";

export const ProjectTemplate = ({
  title,
  repoLink,
  languages,
  body,
  description,
}: ProjectType) => {
  return (
    <div className={containerClasses}>
      <div className={headerContainerClasses}>
        <TextAnimate as="h1" by="line" className={titleClasses} once>
          {title}
        </TextAnimate>

        <TextAnimate
          animation="slideUp"
          as="h2"
          className={descriptionClasses}
          by="line"
          once
        >
          {description}
        </TextAnimate>

        <ProjectLink
          className={projectLinkClasses}
          title="View this repository on GitHub"
          url={repoLink}
        />
      </div>

      <div className={gridContainerClasses}>
        <div className={contentContainerClasses}>
          <div>
            {body.map((line, index) => (
              <TextAnimate
                by="line"
                animation="slideLeft"
                delay={0.15}
                duration={0.1}
                key={index}
                once
                className={textLineClasses}
              >
                {line}
              </TextAnimate>
            ))}
          </div>

          <div className={languagesContainerClasses}>
            {languages.map((lang, index) => (
              <lang.src key={index} className={languageIconClasses} />
            ))}
          </div>
        </div>

        <div className={imageContainerClasses}>
          <Image
            src="https://images.unsplash.com/photo-1508504509543-5ca56440e013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHx8MHx8fDA%3D"
            alt="Project 1"
            loading="lazy"
            decoding="async"
            width={1000}
            height={1000}
            className={imageClasses}
          />

          <ShineBorder
            borderWidth={2}
            shineColor={SHINE_BORDER_COLOR}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
