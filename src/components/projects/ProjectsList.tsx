import { projects } from "@/content/projects";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
    return (
        <div className="flex flex-col gap-10 pt-20 xl:flex-row">
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
