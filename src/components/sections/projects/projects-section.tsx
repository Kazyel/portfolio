"use client";

import type { CustomMotion } from "@/lib/types";

import { useAtomValue } from "jotai";
import { currentProjectAtom, isProjectOpenAtom } from "@/lib/store/projects";
import { cn } from "@/lib/utils";

import { ProjectsBackground } from "@/components/sections/projects/projects-background";
import { ProjectView } from "./project-view";
import { MainProjects } from "./projects-main";

import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

const PROJECT_MOTION: CustomMotion<"div"> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.25 },
};

export default function ProjectsSection() {
  const currentProject = useAtomValue(currentProjectAtom);
  const isProjectOpen = useAtomValue(isProjectOpenAtom);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="projects-section"
        className={cn(
          "relative flex min-h-dvh flex-col items-center justify-center overflow-clip bg-red-950/50",
          "max-lg:scroll-mt-[var(--navbar-height)]",
        )}
      >
        {isProjectOpen ? (
          <m.div
            key="project-view"
            className="z-10 flex min-h-screen flex-col items-center justify-center p-10"
            {...PROJECT_MOTION}
          >
            <ProjectView {...currentProject!} />
          </m.div>
        ) : (
          <m.div
            key="main-projects"
            className="z-10 flex min-h-screen flex-col items-center justify-center py-5"
            {...PROJECT_MOTION}
          >
            <MainProjects />
          </m.div>
        )}

        <ProjectsBackground />
        <div className="absolute bottom-0 left-0 h-full w-full rounded-lg bg-gradient-to-t from-black/25 to-transparent opacity-100" />
      </section>
    </LazyMotion>
  );
}
