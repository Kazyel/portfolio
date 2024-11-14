import { projects } from "@/constant/projects";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
    return (
        <div className="flex flex-col gap-10 pt-20 xl:flex-row">
            {projects.map((project, index) => (
                <ProjectsCard
                    key={index}
                    title={project.title}
                    text={project.text}
                    component={project.component}
                />
            ))}
        </div>
    );
};

export default ProjectsList;
