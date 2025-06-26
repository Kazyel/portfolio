import type { ProjectType } from "@/lib/content/projects";

import Image from "next/image";
import { memo } from "react";
import { useSetAtom } from "jotai";
import { isProjectOpenAtom, currentProjectAtom } from "@/lib/store";

import { ShineBorder } from "@/components/ui/shine-border";

const SHINE_BORDER_COLOR = ["#9f0712cc", "#000000", "#9f071266"];

export const ProjectCard = memo(({ ...props }: ProjectType) => {
  const setCurrentProject = useSetAtom(currentProjectAtom);
  const setIsProjectOpen = useSetAtom(isProjectOpenAtom);

  const openProject = () => {
    setCurrentProject(props);
    setIsProjectOpen(true);

    const projectSection = document.getElementById("projects-section");

    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="project-card"
      className="group relative grid h-[400px] w-[400px] cursor-pointer grid-cols-1 rounded-lg shadow-xl max-xl:h-[325px] max-xl:w-[325px] max-lg:h-[500px] max-lg:w-[500px] max-md:h-[375px] max-md:w-[375px] max-sm:h-[325px] max-sm:w-[325px]"
      onClick={openProject}
    >
      <div className="border-off-w/25 col-span-full row-span-full flex flex-col overflow-hidden rounded-lg bg-stone-900">
        <Image
          src={
            "https://images.unsplash.com/photo-1508504509543-5ca56440e013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHx8MHx8fDA%3D"
          }
          alt={props.title + "-image"}
          width={500}
          height={500}
          loading="lazy"
          decoding="async"
          className="col-span-full row-span-full rounded-lg brightness-90 sepia"
        />
      </div>

      <div className="z-20 col-span-full row-span-full flex flex-col gap-2 self-end rounded-lg px-6 py-8">
        <h3
          id="project-title"
          className="text-4xl font-bold tracking-tighter text-red-800 transition-all duration-200 group-hover:text-red-600 max-xl:text-3xl max-lg:text-5xl max-md:text-3xl"
        >
          {props.title}
        </h3>
        <p
          id="project-text"
          className="text-off-w/75 group-hover:text-off-w transition-all duration-200 max-xl:text-sm max-lg:text-lg max-md:text-sm"
        >
          {props.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-black to-transparent opacity-100 transition-all duration-300 group-hover:opacity-90"></div>

      <ShineBorder
        borderWidth={2}
        shineColor={SHINE_BORDER_COLOR}
        className="rounded-lg"
      />
    </div>
  );
});
