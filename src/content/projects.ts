import ProjectTemplate from "@/components/projects/ProjectTemplate";

type ProjectComponent = (title: string) => () => JSX.Element;

export type ProjectType = {
    title: string;
    text: string;
    createComponent: ProjectComponent;
};

export const projects: ProjectType[] = [
    {
        title: "Project 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        createComponent: (title: string) => () => ProjectTemplate(title),
    },
    {
        title: "Project 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        createComponent: (title: string) => () => ProjectTemplate(title),
    },
    {
        title: "Project 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        createComponent: (title: string) => () => ProjectTemplate(title),
    },
];
