import ProjectsCard from "./ProjectsCard";
import RedSakura from "@/assets/imgs/higan.png";
import { projects } from "@/constant/projects";
import { projectOpened } from "@/stores/store";
import { useCallback, useEffect, useState } from "react";

const Projects = () => {
    const [isOpen, setIsOpen] = useState(projectOpened.value.isOpen);

    const memoizedSetIsOpen = useCallback((newIsOpen: boolean) => {
        setIsOpen(newIsOpen);
    }, []);

    useEffect(() => {
        const unsubscribe = projectOpened.subscribe((value) =>
            memoizedSetIsOpen(value.isOpen),
        );

        return () => {
            unsubscribe();
        };
    }, [memoizedSetIsOpen]);

    return (
        <section
            id="projects-section"
            className="bg-pattern relative flex w-full flex-col justify-center overflow-hidden bg-amber-900/10 max-xl:p-10"
        >
            <div className="z-20 flex min-h-screen w-full flex-col items-center justify-center">
                {!isOpen ? (
                    <div className="px-20">
                        <div className="-full flex items-end justify-between border-l-8 border-red-800 pl-6">
                            {/* <!-- Title --> */}
                            <div className="flex flex-col">
                                <h2 className="text-6xl font-extrabold text-red-800">
                                    Projects
                                </h2>
                                <p className="pt-4 font-semibold italic text-off-w">
                                    The proudest projects I ever worked on.
                                </p>
                            </div>

                            {/* <!-- GitHub --> */}
                            <div className="group flex items-center gap-1">
                                <a
                                    href="https://github.com/Kazyel"
                                    target="_blank"
                                    className="cursor-pointer italic text-off-w/75 transition-all duration-200 group-hover:text-off-w"
                                >
                                    For all projects, check out my GitHub
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="mb-[6px] size-4 fill-off-w/75 transition-all duration-200 group-hover:fill-off-w"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        {/* <!-- Projects --> */}
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
                    </div>
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center">
                        <p
                            className="cursor-pointer text-xl font-bold text-off-w"
                            onClick={() => setIsOpen(false)}
                        >
                            Back to Projects
                        </p>
                        {projectOpened.value.component && (
                            <projectOpened.value.component />
                        )}
                    </div>
                )}
            </div>

            {/* <!-- Left Flowers --> */}
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

                {/* <!-- Right Flowers --> */}
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
