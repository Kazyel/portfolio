import type { ProjectType } from "@/content/projects";
import { isProjectOpen, openedProject } from "@/stores/store";

const ProjectsCard = ({ title, text, createComponent }: ProjectType) => {
    function openProject() {
        openedProject.set({
            title: title,
            text: text,
            createComponent: createComponent,
        });

        isProjectOpen.set(true);
    }

    return (
        <div
            id="project-card"
            className="group relative grid max-w-[450px] cursor-pointer grid-cols-1 gap-10"
            onClick={openProject}
        >
            <div className="col-span-full row-span-full flex h-[450px] max-w-[450px] flex-col overflow-hidden rounded-lg bg-stone-900">
                <img
                    src={
                        "https://images.unsplash.com/photo-1508504509543-5ca56440e013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHx8MHx8fDA%3D"
                    }
                    alt="Project 1"
                    width={1000}
                    height={1000}
                    className="col-span-full row-span-full rounded-lg brightness-90 sepia"
                />
            </div>
            <div className="z-20 col-span-full row-span-full flex flex-col gap-2 self-end p-6">
                <h3
                    id="project-title"
                    className="text-4xl font-bold text-red-800 transition-all duration-200 group-hover:text-red-600"
                >
                    {title}
                </h3>
                <p
                    id="project-text"
                    className="text-off-w/75 transition-all duration-200 group-hover:text-off-w"
                >
                    {text}
                </p>
            </div>
            <div className="absolute bottom-0 left-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-black to-transparent opacity-100 transition-all duration-300 group-hover:opacity-90"></div>
        </div>
    );
};

export default ProjectsCard;
