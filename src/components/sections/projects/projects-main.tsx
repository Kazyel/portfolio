import { projects } from "@/lib/content/projects";

import { TextAnimate } from "@/components/ui/text-animate";
import { ProjectLink } from "@/components/sections/projects/project-link";
import { ProjectCard } from "@/components/sections/projects/project-card";

export const MainProjects = () => {
  return (
    <div className="px-20 max-lg:px-10 max-lg:py-10 max-sm:px-2">
      <div className="flex items-center justify-center max-lg:flex-col xl:items-end xl:justify-between">
        <div className="flex flex-col max-lg:items-center max-lg:justify-center">
          <TextAnimate
            className="text-7xl font-extrabold tracking-tighter text-red-800"
            once
          >
            My Projects
          </TextAnimate>

          <TextAnimate
            className="text-acc-yellow-2 pt-4 text-xl font-medium tracking-tight italic max-lg:text-center"
            once
          >
            Some projects of mine that I find the most interesting...
          </TextAnimate>
        </div>

        <ProjectLink
          title="For all projects, check out my GitHub"
          url="https://github.com/Kazyel"
          className="font-semibold italic max-lg:mt-4 max-lg:self-center max-lg:text-center"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-x-10 pt-20 max-lg:pt-10 lg:flex-row">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};
