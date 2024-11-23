import ProjectLink from "./ProjectLink";
import ProjectsList from "./ProjectsList";

const AvailableProjects = () => {
    return (
        <div className="px-20 max-lg:px-10 max-lg:py-10 max-sm:px-2">
            <div className="flex items-center justify-center max-lg:flex-col xl:items-end xl:justify-between xl:border-l-8 xl:border-red-800 xl:pl-6">
                {/* <!-- Title --> */}
                <div className="flex flex-col max-lg:items-center max-lg:justify-center">
                    <h2 className="text-6xl font-extrabold text-red-800">
                        Projects
                    </h2>
                    <p className="pt-4 text-lg font-semibold italic text-off-w max-lg:text-center">
                        The projects that I'm the most proud of...
                    </p>
                </div>

                {/* <!-- GitHub Link --> */}
                <ProjectLink
                    title="...for all projects, check out my GitHub"
                    url="https://github.com/Kazyel"
                    className="max-lg:mt-4 max-lg:self-center max-lg:text-center"
                />
            </div>

            {/* <!-- Projects --> */}
            <ProjectsList />
        </div>
    );
};

export default AvailableProjects;
