import ProjectsList from "./ProjectsList";

const AvailableProjects = () => {
    return (
        <div className="px-20">
            <div className="flex w-full items-end justify-between border-l-8 border-red-800 pl-6">
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
            <ProjectsList />
        </div>
    );
};

export default AvailableProjects;