import type { ProjectType } from "@/content/projects";
import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { atom } from "nanostores";

export const openedProject = atom<ProjectType>({
    title: "",
    text: "",
    createComponent: () => () => ProjectTemplate(""),
});

export const isProjectOpen = atom<boolean>(false);
