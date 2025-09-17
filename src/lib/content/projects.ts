import type { ProjectType } from "@/lib/types";

import projects from "@/lib/content/projects.json";
import { TECH_LANGUAGES, TechCode } from "@/lib/constants/langs";

export const PROJECTS: ProjectType[] = projects.map((project) => {
  return {
    ...project,
    languages: project.languages.map((lang) => {
      return TECH_LANGUAGES[lang as TechCode];
    }),
  };
});
