import type { ProjectType } from "@/content/projects";
import { atom } from "nanostores";
import ProjectTemplate from "@/components/projects/ProjectTemplate";

export const openedProject = atom<ProjectType>({
    title: "",
    description: "",
    text: [""],
    languages: [],
    repoLink: "",
    createComponent: () => () =>
        ProjectTemplate({
            title: "",
            repoLink: "",
            languages: [],
            text: [""],
        }),
});

export const isProjectOpen = atom<boolean>(false);
