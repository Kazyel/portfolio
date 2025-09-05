import type { ProjectType } from "@/lib/types";

import { useAtomValue, useSetAtom } from "jotai";
import { currentProjectAtom, isProjectOpenAtom } from "@/lib/store/projects";
import { cn } from "@/lib/utils";

import { ProjectTemplate } from "@/components/sections/projects/project-template";
import { ProjectBackButton } from "./project-back-button";
import { useTranslations } from "next-intl";

const backButtonIconClasses = cn(
  "size-5 transition-all duration-200",
  "group-hover:text-off-w group-hover:-translate-x-1",
);

const backButtonTextClasses = cn(
  "transition-all duration-200",
  "group-hover:text-off-w",
);

export const ProjectView = ({ ...props }: ProjectType) => {
  const project = useAtomValue(currentProjectAtom);
  const setIsProjectOpen = useSetAtom(isProjectOpenAtom);
  const t = useTranslations("Projects");

  if (!project) return null;

  const handleProjectToggle = () => {
    const projectsSection = document.querySelector("#projects-section");
    if (!projectsSection) return;

    setIsProjectOpen((prev) => !prev);
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between pt-4",
        "max-lg:max-h-fit xl:max-h-[800px] 2xl:max-w-[1600px]",
      )}
    >
      <button
        className={cn(
          "group text-off-w/75 mb-2 flex cursor-pointer items-center gap-1 self-start italic",
        )}
        onClick={handleProjectToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={backButtonIconClasses}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        <span className={backButtonTextClasses}>{t("back")}</span>
      </button>

      <ProjectTemplate {...props} />
      <ProjectBackButton onClick={handleProjectToggle} />
    </div>
  );
};
