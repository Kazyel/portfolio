import { useRef, type Key } from "react";
import { useStore } from "@nanostores/react";
import { isProjectOpen, openedProject } from "@/stores/store";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import AvailableProjects from "./AvailableProjects";
import RedSakura from "@/assets/imgs/higan.png";

const Projects = () => {
    const $isProjectOpen = useStore(isProjectOpen);
    const $openedProject = useStore(openedProject);
    const nodeRef = useRef<HTMLDivElement>(null);

    function OpenedProject() {
        if (!$openedProject) return;

        let ProjectComponent = $openedProject.createComponent({
            ...$openedProject,
        })!;

        return (
            <div className="max-h-[900px] p-8 xl:px-20 xl:pt-8 2xl:min-w-[1600px] 2xl:max-w-[1600px]">
                <div className="flex flex-col items-center justify-between">
                    <button
                        className="group mb-2 flex cursor-pointer items-center gap-1 self-start italic text-off-w/75"
                        onClick={() => isProjectOpen.set(!$isProjectOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 transition-all duration-200 group-hover:-translate-x-1 group-hover:text-off-w"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                            />
                        </svg>
                        <span className="transition-all duration-200 group-hover:text-off-w">
                            Back to Projects
                        </span>
                    </button>

                    <ProjectComponent />
                </div>
            </div>
        );
    }

    return (
        <section
            id="projects-section"
            className="bg-pattern relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-amber-900/10 max-xl:p-10"
        >
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={$isProjectOpen as unknown as Key}
                    nodeRef={nodeRef}
                    addEndListener={(done) => {
                        nodeRef.current!.addEventListener(
                            "transitionend",
                            done,
                            false,
                        );
                    }}
                    timeout={250}
                    classNames="fade"
                >
                    <div
                        ref={nodeRef}
                        className="z-20 flex min-h-screen flex-col items-center justify-center"
                    >
                        {!$isProjectOpen ? (
                            <AvailableProjects />
                        ) : (
                            <OpenedProject />
                        )}
                    </div>
                </CSSTransition>
            </SwitchTransition>

            {/* {Background Trees} */}
            <div>
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={700}
                    height={1000}
                    className="absolute bottom-0 left-28 z-10 aspect-square h-[1000px] w-[700px] opacity-40 mix-blend-color-burn max-xl:hidden"
                    loading="lazy"
                    decoding="async"
                />
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={400}
                    height={700}
                    className="absolute -bottom-12 -left-40 z-10 h-[700px] w-[400px] -rotate-45 opacity-20 mix-blend-color-burn max-xl:hidden"
                    loading="lazy"
                    decoding="async"
                />
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={500}
                    height={600}
                    className="absolute -bottom-20 left-[24rem] z-10 h-[600px] w-[500px] opacity-25 mix-blend-color-burn max-2xl:hidden"
                    loading="lazy"
                    decoding="async"
                />

                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={700}
                    height={1100}
                    className="absolute bottom-0 right-28 z-10 h-[1100px] w-[700px] scale-x-[-1] opacity-40 mix-blend-color-burn max-xl:hidden"
                    loading="lazy"
                    decoding="async"
                />
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={400}
                    height={700}
                    className="absolute -bottom-12 -right-40 z-10 h-[700px] w-[400px] rotate-45 opacity-20 mix-blend-color-burn max-xl:hidden"
                    loading="lazy"
                    decoding="async"
                />
                <img
                    src={RedSakura.src}
                    alt="Higan flower"
                    width={500}
                    height={600}
                    className="absolute -bottom-20 right-[24rem] z-10 h-[600px] w-[500px] scale-x-[-1] opacity-25 mix-blend-color-burn max-2xl:hidden"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className="absolute bottom-0 left-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-black/35 to-transparent opacity-100"></div>
        </section>
    );
};

export default Projects;
