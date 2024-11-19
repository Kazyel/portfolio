import type { ProjectProps } from "@/content/projects";
import ProjectLink from "./ProjectLink";

const ProjectTemplate = ({
    title,
    repoLink,
    languages,
    text,
    description,
}: ProjectProps) => {
    return (
        <div className="z-20 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-2 self-start pb-10 pt-4">
                <h2 className="text-5xl font-bold text-red-800">{title}</h2>
                <h3 className="text-lg font-light text-acc-yellow-2">
                    {description}
                </h3>
            </div>

            <div className="grid grid-cols-3 grid-rows-4 max-xl:flex max-xl:flex-col xl:max-h-[700px]">
                <div className="col-span-2 row-span-3 mr-16 flex flex-col items-center text-justify text-lg leading-7 text-off-w max-xl:mb-10">
                    {text.map((line, index) => (
                        <p
                            key={index}
                            className="border-l-2 border-off-w pb-4 pl-6"
                        >
                            {line}
                        </p>
                    ))}
                </div>

                <div className="col-span-1 row-span-3 aspect-square max-w-[500px] overflow-hidden rounded-lg max-xl:max-w-[300px]">
                    <img
                        src={
                            "https://images.unsplash.com/photo-1508504509543-5ca56440e013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHx8MHx8fDA%3D"
                        }
                        alt="Project 1"
                        width={1000}
                        height={1000}
                        className="rounded-lg brightness-50 sepia"
                    />
                </div>

                <div className="col-span-2 row-span-4 flex items-center gap-8">
                    <div className="flex h-[96px] gap-8 rounded bg-off-w p-4">
                        {languages.map((lang, index) => (
                            <img
                                key={index}
                                className="aspect-square size-16 max-w-[]"
                                src={`./src/assets/langs/${lang}.svg`}
                                alt={lang + " logo"}
                            ></img>
                        ))}
                    </div>
                </div>

                <div className="col-span-1 col-start-3 row-span-4 flex flex-col items-center justify-center">
                    <ProjectLink
                        title="View the repository on GitHub"
                        url={repoLink}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectTemplate;
