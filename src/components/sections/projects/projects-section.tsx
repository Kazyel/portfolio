"use client";

import type { CustomMotion } from "@/lib/types";

import dynamic from "next/dynamic";
import { useAtomValue } from "jotai";
import { currentProjectAtom, isProjectOpenAtom } from "@/lib/store/projects";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import { ProjectsBackground } from "@/components/sections/projects/projects-background";

const DynamicProjectView = dynamic(
  () =>
    import("@/components/sections/projects/project-view").then((mod) => mod.ProjectView),
  { ssr: false },
);
const DynamicMainProjects = dynamic(
  () =>
    import("@/components/sections/projects/projects-main").then(
      (mod) => mod.MainProjects,
    ),
  { ssr: false },
);

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
    <section
      id="projects-section"
      className={cn(
        "relative flex min-h-dvh flex-col items-center justify-center overflow-clip bg-red-950/50",
        "max-lg:scroll-mt-[var(--navbar-height)]",
      )}
    >
      {isProjectOpen ? (
        <motion.div
          key="project-view"
          className="z-10 flex min-h-screen flex-col items-center justify-center p-10"
          {...PROJECT_MOTION}
        >
          <DynamicProjectView {...currentProject!} />
        </motion.div>
      ) : (
        <motion.div
          key="main-projects"
          className="z-10 flex min-h-screen flex-col items-center justify-center py-5"
          {...PROJECT_MOTION}
        >
          <DynamicMainProjects />
        </motion.div>
      )}

      <ProjectsBackground />
      <div className="absolute bottom-0 left-0 h-full w-full rounded-lg bg-gradient-to-t from-black/25 to-transparent opacity-100" />
    </section>
  );
}
