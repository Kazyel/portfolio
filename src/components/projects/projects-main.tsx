import { TextAnimate } from "@/components/magicui/text-animate";
import { ProjectLink } from "@/components/projects/project-link";
import { ProjectsList } from "@/components/projects/projects-list";

export const MainProjects = () => {
  return (
    <div className="px-20 max-lg:px-10 max-lg:py-10 max-sm:px-2">
      <div className="flex items-center justify-center max-lg:flex-col xl:items-end xl:justify-between xl:border-l-8 xl:border-red-800 xl:pl-6">
        {/* <!-- Title --> */}
        <div className="flex flex-col max-lg:items-center max-lg:justify-center">
          <TextAnimate className="text-6xl font-extrabold tracking-tighter text-red-800">
            My Projects
          </TextAnimate>
          <TextAnimate className="tracking-light pt-4 text-2xl font-light tracking-wider text-off-w max-lg:text-center">
            Some projects of mine that I find the most interesting...
          </TextAnimate>
        </div>

        {/* <!-- GitHub Link --> */}
        <ProjectLink
          title="For all projects, check out my GitHub"
          url="https://github.com/Kazyel"
          className="max-lg:mt-4 max-lg:self-center max-lg:text-center"
        />
      </div>

      {/* <!-- Projects --> */}
      <ProjectsList />
    </div>
  );
};
