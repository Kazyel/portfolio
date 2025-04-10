import { projects } from "@/lib/content/projects";

import { ProjectCard } from "@/components/projects/project-card";

export const ProjectsList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-x-10 pt-20 max-lg:pt-10 lg:flex-row">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          body={project.body}
          languages={project.languages}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
};
