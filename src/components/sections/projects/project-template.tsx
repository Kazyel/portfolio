import type { ProjectType } from "@/lib/content/projects";

import { ProjectLink } from "@/components/sections/projects/project-link";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export const ProjectTemplate = ({
  title,
  repoLink,
  languages,
  body,
  description,
}: Omit<ProjectType, "id">) => {
  return (
    <div className="z-20 flex w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-2 self-start pb-10 pt-4">
        <TextAnimate as="h1" by="line" className="text-5xl font-bold tracking-tighter text-red-800">
          {title}
        </TextAnimate>

        <TextAnimate
          animation="slideUp"
          as="h2"
          className="text-lg font-semibold tracking-tight text-acc-yellow-2"
        >
          {description}
        </TextAnimate>
      </div>

      <div className="grid grid-cols-3 grid-rows-4 max-xl:flex max-xl:flex-col max-xl:justify-center max-lg:items-center xl:max-h-[700px]">
        <div className="col-span-2 row-span-3 flex flex-col items-center justify-between gap-y-8 text-lg leading-7 text-off-w max-xl:mb-10 max-lg:justify-center sm:text-justify xl:mr-16">
          <div className="border-off-w">
            {body.map((line, index) => (
              <TextAnimate
                by="line"
                animation="slideLeft"
                delay={0.15}
                duration={0.1}
                key={index}
                className="border-l-2 pb-4 pl-6 last:pb-0 max-sm:text-sm"
              >
                {line}
              </TextAnimate>
            ))}
          </div>

          <div className="flex shrink-0 items-center justify-end gap-8 place-self-start rounded bg-off-w p-4 max-lg:flex-wrap xl:h-24">
            {languages.map((lang, index) => (
              <Image
                key={index}
                className="aspect-square size-10 xl:size-16"
                src={lang.src}
                width={40}
                height={40}
                alt={`${lang.alt} +  logo`}
              ></Image>
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
