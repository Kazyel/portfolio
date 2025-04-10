import type { ProjectProps } from "../content/projects";

import { atom } from "nanostores";

export const currentProject = atom<ProjectProps | null>(null);
export const isProjectOpen = atom(false);
