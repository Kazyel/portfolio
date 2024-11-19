import ProjectLink from "./ProjectLink";
import ProjectsList from "./ProjectsList";

const AvailableProjects = () => {
    return (
        <div className="px-20">
            <div className="flex items-end justify-between border-l-8 border-red-800 pl-6">
                {/* <!-- Title --> */}
                <div className="flex flex-col">
                    <h2 className="text-6xl font-extrabold text-red-800">
                        Projects
                    </h2>
                    <p className="pt-4 text-lg font-semibold italic text-off-w">
                        The projects that I'm the most proud of...
                    </p>
                </div>

                {/* <!-- GitHub Link --> */}
                <ProjectLink
                    title="...for all projects, check out my GitHub"
                    url="https://github.com/Kazyel"
                />
            </div>

            {/* <!-- Projects --> */}
            <ProjectsList />
        </div>
    );
};

export default AvailableProjects;
