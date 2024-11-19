import type { ProjectType } from "@/content/projects";
import { atom } from "nanostores";

export const openedProject = atom<ProjectType | null>(null);
export const isProjectOpen = atom<boolean>(false);
