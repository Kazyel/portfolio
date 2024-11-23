import images from "./images";
import ProjectTemplate from "@/components/projects/ProjectTemplate";

export type ProjectProps = {
    title: string;
    text: string[];
    languages: Record<string, string>[];
    repoLink: string;
    description: string;
};

type ProjectComponent = ({
    title,
    repoLink,
    languages,
    text,
    description,
}: ProjectProps) => () => JSX.Element;

export type ProjectType = {
    createComponent: ProjectComponent;
} & ProjectProps;

const createComponent =
    ({ title, repoLink, languages, text, description }: ProjectProps) =>
    () =>
        ProjectTemplate({ title, repoLink, languages, text, description });

export const projects: ProjectType[] = [
    {
        title: "Kazanto",
        description:
            "Directly from your terminal, a new Pokémon journey awaits. Explore, catch, inspect and more.",
        text: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        ],
        repoLink: "https://github.com/Kazyel/Kazanto",
        languages: [{ ...images.go }, { ...images.bash }],
        createComponent,
    },
    {
        title: "APSystem API",
        description:
            "API for fetching and displaying data collected from solar panels in a cool and visual way.",
        text: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        ],
        repoLink: "https://github.com/Kazyel/API_APSystem",
        languages: [
            { ...images.node },
            { ...images.js },
            { ...images.ts },
            { ...images.fastify },
            { ...images.prisma },
        ],
        createComponent,
    },
    {
        title: "This Portfolio",
        description: "Hey, this is my portfolio! Working on it right now.",
        text: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        ],
        repoLink: "https://github.com/Kazyel/portfolio",
        languages: [
            { ...images.react },
            { ...images.astro },
            { ...images.tailwind },
            { ...images.ts },
        ],
        createComponent,
    },
];
