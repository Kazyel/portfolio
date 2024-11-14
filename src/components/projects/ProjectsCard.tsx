import { isProjectOpen, openedProject } from "@/stores/store";

type Props = {
    title: string;
    text: string;
    component: React.FC;
};

const ProjectsCard = ({ title, text, component }: Props) => {
    function openProject() {
        openedProject.set({
            title: title,
            text: text,
            component: component,
        });

        isProjectOpen.set(true);
    }

    return (
        <div
            id="project-card"
            className="relative grid max-w-[450px] cursor-pointer grid-cols-1 gap-10"
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
                    className="col-span-full row-span-full rounded-lg bg-blend-luminosity mix-blend-difference sepia"
                />
            </div>
            <div className="z-20 col-span-full row-span-full flex flex-col gap-2 self-end p-6">
                <h3
                    id="project-title"
                    className="text-4xl font-bold text-red-800"
                >
                    {title}
                </h3>
                <p id="project-text" className="font-light text-off-w/75">
                    {text}
                </p>
            </div>
            <div className="absolute bottom-0 left-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-black to-transparent opacity-100"></div>
        </div>
    );
};

export default ProjectsCard;
