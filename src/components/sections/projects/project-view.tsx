import type { ProjectType } from "@/lib/content/projects";

import { ProjectTemplate } from "@/components/sections/projects/project-template";

import { useAtomValue, useSetAtom } from "jotai";
import { currentProjectAtom, isProjectOpenAtom } from "@/lib/store";

export const ProjectView = ({ ...props }: ProjectType) => {
  const project = useAtomValue(currentProjectAtom);
  const setIsProjectOpen = useSetAtom(isProjectOpenAtom);

  if (!project) return;

  const handleProjectToggle = () => setIsProjectOpen((prev) => !prev);

  return (
    <div className="xl:max-h-[800px] 2xl:max-w-[1600px]">
      <div className="flex flex-col items-center justify-between">
        <button
          className="group text-off-w/75 mb-2 flex cursor-pointer items-center gap-1 self-start italic"
          onClick={handleProjectToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="group-hover:text-off-w size-5 transition-all duration-200 group-hover:-translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <span className="group-hover:text-off-w transition-all duration-200">
            Back to Projects
          </span>
        </button>

        <ProjectTemplate {...props} />
      </div>
    </div>
  );
};
