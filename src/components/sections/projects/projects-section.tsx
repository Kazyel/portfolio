"use client";

import type { CustomMotion } from "@/lib/types";

import { useAtomValue } from "jotai";
import { currentProjectAtom, isProjectOpenAtom } from "@/lib/store/projects";
import { cn } from "@/lib/utils";

import { ProjectsBackground } from "@/components/sections/projects/projects-background";
import { ProjectView } from "@/components/sections/projects/project-view";
import { MainProjects } from "@/components/sections/projects/projects-main";
import { MotionWrapper, m } from "@/components/motion-wrapper";

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
    <MotionWrapper>
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
            className="z-10 flex min-h-screen flex-col items-center justify-center px-12 py-16 md:p-20"
            {...PROJECT_MOTION}
          >
            <ProjectView {...currentProject!} />
          </m.div>
        ) : (
          <m.div
            key="main-projects"
            className="z-10 flex flex-col items-center justify-center p-16 xl:p-24"
            {...PROJECT_MOTION}
          >
            <MainProjects />
          </m.div>
        )}

        <ProjectsBackground />

        <div className="absolute bottom-0 left-0 h-full w-full rounded-lg bg-gradient-to-t from-black/25 to-transparent opacity-100" />
      </section>
    </MotionWrapper>
  );
}
