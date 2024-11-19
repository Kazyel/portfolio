import ProjectLink from "./ProjectLink";

const ProjectTemplate = (title: string) => {
    return (
        <div className="z-20 flex flex-col items-center justify-center">
            <h2 className="self-start pb-10 text-5xl font-bold text-red-800">
                {title}
            </h2>

            <div className="grid grid-cols-3 grid-rows-4 max-xl:flex max-xl:flex-col xl:max-h-[700px]">
                <div className="col-span-2 row-span-3 mr-16 flex flex-col justify-around border-l-2 border-off-w pl-6 text-lg text-off-w max-xl:mb-10">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eum laborum cum eaque velit sed dolore nostrum eos
                        fugit quod minus? Illo minima odio similique animi,
                        mollitia, ex sit praesentium delectus aut nihil quasi
                        natus ullam consequuntur, ab cumque magnam aliquid totam
                        cupiditate? Praesentium ex accusamus quia placeat
                        excepturi dolore velit suscipit porro deleniti
                        molestias, illo corrupti, non nobis ipsam aliquam qui
                        nisi optio id cupiditate! Reprehenderit cum repellat
                        magni cupiditate, est accusamus minima ad aperiam porro
                        rem id debitis et, sed qui.
                    </p>
                    <p>
                        Esse omnis beatae doloribus molestiae pariatur, dolores
                        totam quos rerum placeat perspiciatis cupiditate
                        similique fuga blanditiis! Exercitationem pariatur
                        quidem autem tempore cupiditate voluptatibus fuga
                        temporibus magnam, tempora expedita, doloribus quis rem
                        ipsum excepturi, similique nostrum laudantium adipisci
                        nobis repellat iusto corporis aperiam nam molestias?
                        Quis facere maiores tempora animi alias, ratione ex
                        numquam necessitatibus vel ad accusamus molestias
                        voluptate ipsam laboriosam dolorum praesentium, illo
                        dolore minus reiciendis rerum dolor commodi?
                    </p>
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

                <div className="col-span-1 col-start-3 row-span-4 flex h-[96px] flex-col justify-end">
                    <ProjectLink
                        title="View the repository on GitHub"
                        url="https://github.com/Kazyel/"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectTemplate;
