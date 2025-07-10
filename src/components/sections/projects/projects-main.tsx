import { cn } from "@/lib/utils";
import { projects } from "@/lib/content/projects";

import { TextAnimate } from "@/components/ui/text-animate";
import { ProjectLink } from "@/components/sections/projects/project-link";
import { ProjectCard } from "@/components/sections/projects/project-card";

export const MainProjects = () => {
  return (
    <div className="max-xl:p-12 xl:p-20">
      <div
        className={cn(
          "flex items-center justify-center",
          "max-xl:flex-col xl:items-end xl:justify-between",
        )}
      >
        <div className={cn("flex flex-col", "max-xl:items-center max-xl:justify-center")}>
          <TextAnimate
            className={cn(
              "text-7xl font-extrabold tracking-tighter text-red-800",
              "max-md:text-6xl",
            )}
            once
          >
            Projects
          </TextAnimate>

          <TextAnimate
            className={cn(
              "text-acc-yellow-2 pt-4 text-xl font-medium tracking-tight",
              "max-lg:text-center max-sm:text-base",
            )}
            once
            by="line"
            as="h2"
          >
            Some projects of mine that I find the most interesting...
          </TextAnimate>
        </div>

        <ProjectLink
          title="For all projects, check out my GitHub"
          url="https://github.com/Kazyel"
          className={cn(
            "font-semibold italic",
            "max-xl:mt-4 max-lg:self-center max-lg:text-center",
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-col flex-wrap items-center justify-center gap-10 pt-20",
          "max-xl:pt-10 md:flex-row",
        )}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
