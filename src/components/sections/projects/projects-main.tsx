import { projects } from "@/lib/content/projects";

import { TextAnimate } from "@/components/ui/text-animate";
import { ProjectLink } from "@/components/sections/projects/project-link";
import { ProjectCard } from "@/components/sections/projects/project-card";

export const MainProjects = () => {
  return (
    <div className="px-20 max-lg:px-10 max-lg:py-10 max-sm:px-2">
      <div className="flex items-center justify-center max-lg:flex-col xl:items-end xl:justify-between xl:border-l-8 xl:border-red-800 xl:pl-6">
        <div className="flex flex-col max-lg:items-center max-lg:justify-center">
          <TextAnimate
            duration={0.1}
            className="text-6xl font-extrabold tracking-tighter text-red-800"
          >
            My Projects
          </TextAnimate>

          <TextAnimate
            duration={0.1}
            className="tracking-light pt-4 text-2xl font-light text-off-w max-lg:text-center"
          >
            Some projects of mine that I find the most interesting...
          </TextAnimate>
        </div>

        <ProjectLink
          title="For all projects, check out my GitHub"
          url="https://github.com/Kazyel"
          className="max-lg:mt-4 max-lg:self-center max-lg:text-center"
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
