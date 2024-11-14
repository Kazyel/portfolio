import type React from "react";
import Project from "@/components/projects/Project";

type ProjectType = {
    title: string;
    text: string;
    component: React.FC;
};

export const projects: ProjectType[] = [
    {
        title: "Project 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        component: () => Project("Project 1"),
    },
    {
        title: "Project 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        component: () => Project("Project 2"),
    },
    {
        title: "Project 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        component: () => Project("Project 3"),
    },
];
