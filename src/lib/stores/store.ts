import type { ProjectType } from "../content/projects";

import { atom } from "nanostores";

export const currentProject = atom<Omit<ProjectType, "id"> | null>(null);
export const isProjectOpen = atom(false);
