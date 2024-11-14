import { useStore } from "@nanostores/react";
import { isProjectOpen, openedProject } from "@/stores/store";
import RedSakura from "@/assets/imgs/higan.png";
import AvailableProjects from "./AvailableProjects";

const Projects = () => {
    const $isProjectOpen = useStore(isProjectOpen);

    function ProjectOpened() {
        const ProjectComponent = openedProject.value.component!;

        return (
            <div className="flex h-full w-full flex-col items-center justify-center">
                <p
                    className="cursor-pointer text-xl font-bold text-off-w"
                    onClick={() => isProjectOpen.set(!$isProjectOpen)}
                >
                    Back to Projects
                </p>

                <ProjectComponent />
            </div>
        );
    }

    return (
        <section
            id="projects-section"
            className="bg-pattern relative flex w-full flex-col justify-center overflow-hidden bg-amber-900/10 max-xl:p-10"
        >
            <div className="z-20 flex min-h-screen w-full flex-col items-center justify-center">
                {!$isProjectOpen ? <AvailableProjects /> : <ProjectOpened />}
            </div>

            {/* {Background Trees} */}
            <div>
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={700}
                    height={1000}
                    className="absolute bottom-0 left-28 z-10 aspect-square h-[1000px] w-[700px] opacity-35 mix-blend-color-burn max-xl:hidden"
                    loading="lazy"
                />
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={400}
                    height={700}
                    className="absolute -bottom-12 -left-40 z-10 h-[700px] w-[400px] -rotate-45 opacity-20 mix-blend-color-burn max-xl:hidden"
                    loading="lazy"
                />
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={500}
                    height={600}
                    className="absolute -bottom-20 left-[24rem] z-10 h-[600px] w-[500px] opacity-25 mix-blend-color-burn max-2xl:hidden"
                    loading="lazy"
                />

                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={700}
                    height={1100}
                    className="absolute bottom-0 right-28 z-10 h-[1100px] w-[700px] scale-x-[-1] opacity-35 mix-blend-color-burn max-xl:hidden"
                    loading="lazy"
                />
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={400}
                    height={700}
                    className="absolute -bottom-12 -right-40 z-10 h-[700px] w-[400px] rotate-45 opacity-20 mix-blend-color-burn max-xl:hidden"
                    loading="lazy"
                />
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={500}
                    height={600}
                    className="absolute -bottom-20 right-[24rem] z-10 h-[600px] w-[500px] scale-x-[-1] opacity-25 mix-blend-color-burn max-2xl:hidden"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Projects;
