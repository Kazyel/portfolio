import type { ProjectType } from "@/lib/types";

import { cn } from "@/lib/utils";
import { memo } from "react";
import { useSetAtom } from "jotai";
import { useLocale } from "next-intl";
import { isProjectOpenAtom, currentProjectAtom } from "@/lib/store/projects";
import { LanguageCode } from "@/lib/constants/langs";

import Image from "next/image";

export const ProjectCard = memo(({ ...props }: ProjectType) => {
  const setCurrentProject = useSetAtom(currentProjectAtom);
  const setIsProjectOpen = useSetAtom(isProjectOpenAtom);

  const currentLocale = useLocale() as LanguageCode;

  const openProject = () => {
    setCurrentProject(props);
    setIsProjectOpen(true);

    const projectSection = document.getElementById("projects-section");
    projectSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="project-card"
      className={cn(
        "group relative grid h-[400px] w-[400px] cursor-pointer grid-cols-1 rounded-lg border-1 border-red-700/50 shadow-lg",
        "max-2xl:h-[350px] max-2xl:w-[350px]",
        "max-lg:h-[300px] max-lg:w-[300px]",
        "max-md:h-[375px] max-md:w-[375px]",
        "max-sm:h-[325px] max-sm:w-[325px]",
        "max-xs:h-[300px] max-xs:w-[300px]",
      )}
      onClick={openProject}
    >
      <div className="border-off-w/25 col-span-full row-span-full flex flex-col overflow-hidden rounded-lg bg-stone-900">
        <Image
          src="/images/placeholder.avif"
          alt={`${props.title}-image`}
          width={500}
          height={500}
          loading="lazy"
          decoding="async"
          quality={65}
          className="size-full rounded-lg"
        />
      </div>

      <div
        className={cn(
          "z-20 col-span-full row-span-full flex flex-col gap-2 self-end rounded-lg px-6 py-8",
          "max-lg:px-4",
        )}
      >
        <h3
          id="project-title"
          className={cn(
            "text-4xl font-bold tracking-tighter text-red-800 transition-all duration-200",
            "group-hover:text-red-600",
            "max-xl:text-3xl max-md:text-3xl",
          )}
        >
          {props.title}
        </h3>
        <p
          id="project-text"
          className={cn(
            "text-off-w/75 transition-all duration-200",
            "group-hover:text-off-w",
            "max-2xl:text-sm",
          )}
        >
          {props.description[currentLocale]}
        </p>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-black to-transparent opacity-100 transition-all duration-300",
          "group-hover:opacity-90",
        )}
      ></div>
    </div>
  );
});
