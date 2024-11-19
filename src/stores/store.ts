import type { ProjectType } from "@/content/projects";
import { atom } from "nanostores";
import ProjectTemplate from "@/components/projects/ProjectTemplate";

export const openedProject = atom<ProjectType>({
    title: "",
    text: "",
    createComponent: () => () => ProjectTemplate(""),
});

export const isProjectOpen = atom<boolean>(false);
