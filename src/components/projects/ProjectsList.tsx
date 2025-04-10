import { projects } from "@/content/projects";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pt-20 max-lg:pt-10 lg:flex-row">
      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          title={project.title}
          description={project.description}
          text={project.text}
          createComponent={project.createComponent}
          languages={project.languages}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
