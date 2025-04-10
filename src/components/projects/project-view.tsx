import type { ProjectProps } from "@/lib/content/projects";

import { useStore } from "@nanostores/react";
import { currentProject, isProjectOpen } from "@/lib/stores/store";

import { ProjectTemplate } from "./project-template";

export const ProjectView = ({ ...props }: ProjectProps) => {
  const project = useStore(currentProject);
  const $isProjectOpen = useStore(isProjectOpen);

  if (!project) return;

  const handleProjectToggle = () => isProjectOpen.set(!$isProjectOpen);

  return (
    <div className="sm:p-8 xl:max-h-[800px] xl:px-20 xl:pt-8 2xl:min-w-[1600px] 2xl:max-w-[1600px]">
      <div className="flex flex-col items-center justify-between">
        <button
          className="group mb-2 flex cursor-pointer items-center gap-1 self-start italic text-off-w/75"
          onClick={handleProjectToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 transition-all duration-200 group-hover:-translate-x-1 group-hover:text-off-w"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <span className="transition-all duration-200 group-hover:text-off-w">
            Back to Projects
          </span>
        </button>

        <ProjectTemplate {...props} />
      </div>
    </div>
  );
};
