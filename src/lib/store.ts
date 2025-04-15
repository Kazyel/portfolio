import type { ProjectType } from "@/lib/content/projects";

import { atom } from "jotai";

export const currentProjectAtom = atom<ProjectType | null>(null);

export const isProjectOpenAtom = atom(false);
