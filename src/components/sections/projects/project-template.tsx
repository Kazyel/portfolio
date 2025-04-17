import type { ProjectType } from "@/lib/content/projects";

import Image from "next/image";

import { ProjectLink } from "@/components/sections/projects/project-link";
import { TextAnimate } from "@/components/ui/text-animate";

export const ProjectTemplate = ({
  title,
  repoLink,
  languages,
  body,
  description,
}: ProjectType) => {
  return (
    <div className="z-20 flex w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-2 self-start pt-4 pb-10">
        <TextAnimate
          as="h1"
          by="line"
          className="text-5xl font-bold tracking-tighter text-red-800"
        >
          {title}
        </TextAnimate>

        <TextAnimate
          animation="slideUp"
          as="h2"
          className="text-acc-yellow-2 text-lg font-semibold tracking-tight"
        >
          {description}
        </TextAnimate>
      </div>

      <div className="grid grid-cols-3 grid-rows-4 max-xl:flex max-xl:flex-col max-xl:justify-center max-lg:items-center xl:max-h-[700px]">
        <div className="col-span-2 row-span-3 flex flex-col items-center justify-between gap-y-8 text-lg leading-7 max-xl:mb-10 max-lg:justify-center sm:text-justify xl:mr-16">
          <div className="border-off-w">
            {body.map((line, index) => (
              <TextAnimate
                by="line"
                animation="slideLeft"
                delay={0.15}
                duration={0.1}
                key={index}
                className="text-off-w border-l-2 pb-4 pl-6 last:pb-0 max-sm:text-sm"
              >
                {line}
              </TextAnimate>
            ))}
          </div>

          <div className="bg-off-w flex items-center justify-end gap-8 place-self-start rounded p-4 max-lg:flex-wrap xl:h-24">
            {languages.map((lang, index) => (
              <lang.src key={index} className="aspect-square size-10 xl:size-16" />
            ))}
          </div>
        </div>

        <div className="col-span-1 row-span-3 aspect-square max-w-[500px] overflow-hidden rounded-lg max-xl:max-w-[300px]">
          <Image
            src={
              "https://images.unsplash.com/photo-1508504509543-5ca56440e013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW58ZW58MHx8MHx8fDA%3D"
            }
            alt="Project 1"
            loading="lazy"
            decoding="async"
            width={1000}
            height={1000}
            className="rounded-lg brightness-50 sepia"
          />
        </div>

        <div className="col-span-1 col-start-3 flex flex-col items-center justify-center max-xl:mt-8">
          <ProjectLink title="View the repository on GitHub" url={repoLink} />
        </div>
      </div>
    </div>
  );
};
