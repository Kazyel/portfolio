import type { ProjectType } from "@/lib/types";

import { cn } from "@/lib/utils";
import { useSetAtom } from "jotai";
import { useLocale } from "next-intl";
import { isProjectOpenAtom, currentProjectAtom } from "@/lib/store/projects";
import { LanguageCode } from "@/lib/constants/langs";

import Image from "next/image";
import { ProjectTag } from "./project-tag";

export const ProjectCard = ({ ...props }: ProjectType) => {
  const setCurrentProject = useSetAtom(currentProjectAtom);
  const setIsProjectOpen = useSetAtom(isProjectOpenAtom);

  const currentLocale = useLocale() as LanguageCode;

  const openProject = () => {
    setCurrentProject(props);
    setIsProjectOpen(true);

    const projectSection = document.getElementById("projects-section");
    projectSection?.scrollIntoView({ behavior: "instant" });
  };

  return (
    <div
      id="project-card"
      className={cn(
        "group relative grid aspect-square cursor-pointer grid-cols-1 rounded-lg border-2 border-red-700/50 shadow-xl",
        "w-[clamp(300px,_50vw,_400px)]",
      )}
      onClick={openProject}
    >
      <ProjectTag status={props.status} />

      <div className="relative col-span-full row-span-full flex aspect-square h-full w-full overflow-hidden rounded-lg">
        <Image
          src={props.repoImage}
          alt={`${props.title}-image`}
          fill
          loading="lazy"
          decoding="async"
          quality={65}
          className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div
        className={cn(
          "z-20 col-span-full row-span-full flex flex-col gap-2 self-end rounded-lg px-6 py-8",
          "max-md:px-4 max-md:py-4",
        )}
      >
        <h3
          id="project-title"
          className={cn(
            "font-bold tracking-tighter text-red-800 transition-all duration-200",
            "group-hover:text-red-600",
            "text-2xl md:text-3xl xl:text-4xl",
          )}
        >
          {props.title}
        </h3>
        <p
          id="project-text"
          className={cn(
            "text-off-w/75 transition-all duration-200",
            "group-hover:text-off-w",
            "text-pretty max-xl:text-xs",
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
};
