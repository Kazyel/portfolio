import type { ProjectType } from "@/lib/content/projects";

import { isProjectOpen, currentProject } from "@/lib/stores/store";
import { memo } from "react";

export const ProjectCard = memo(({ ...props }: Omit<ProjectType, "id">) => {
  const openProject = () => {
    currentProject.set(props);
    isProjectOpen.set(true);
  };

  return (
    <div
      id="project-card"
      className="group relative grid h-[400px] w-[400px] cursor-pointer grid-cols-1 rounded-lg max-sm:h-[275px] max-sm:w-[275px] max-sm:max-w-[275px]"
      onClick={openProject}
    >
      <div className="col-span-full row-span-full flex flex-col overflow-hidden rounded-lg border-off-w/25 bg-stone-900">
        <img
          src={
            "https://images.unsplash.com/photo-1508504509543-5ca56440e013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHx8MHx8fDA%3D"
          }
          alt={props.title + "-image"}
          width={400}
          height={400}
          loading="lazy"
          decoding="async"
          className="col-span-full row-span-full rounded-lg brightness-90 sepia"
        />
      </div>

      <div className="z-20 col-span-full row-span-full flex flex-col gap-2 self-end rounded-lg px-6 py-8">
        <h3
          id="project-title"
          className="text-4xl font-bold tracking-tighter text-red-800 transition-all duration-200 group-hover:text-red-600 max-sm:text-2xl"
        >
          {props.title}
        </h3>
        <p
          id="project-text"
          className="text-off-w/75 transition-all duration-200 group-hover:text-off-w max-sm:text-sm"
        >
          {props.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-black to-transparent opacity-100 transition-all duration-300 group-hover:opacity-90"></div>
    </div>
  );
});
