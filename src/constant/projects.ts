import Project1 from "@/components/projects/Project1";
import Project2 from "@/components/projects/Project2";
import Project3 from "@/components/projects/Project3";

type Project = {
    title: string;
    text: string;
    component: React.FC;
};

export const projects: Project[] = [
    {
        title: "Project 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        component: Project1,
    },
    {
        title: "Project 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        component: Project2,
    },
    {
        title: "Project 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptate.",
        component: Project3,
    },
];
