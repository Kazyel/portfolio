import type { ProjectType } from "@/lib/types";

import { cn } from "@/lib/utils";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { ProjectLink } from "@/components/sections/projects/project-link";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

type LanguageCode = "en" | "pt";

export const ProjectTemplate = ({ ...props }: ProjectType) => {
  const currentLocale = useLocale() as LanguageCode;
  const t = useTranslations("Projects");

  return (
    <div className="z-20 flex w-full flex-col items-center">
      <div className="mt-4 flex flex-col gap-4 self-start">
        <TextAnimate
          as="h1"
          by="line"
          className="text-5xl font-extrabold tracking-tighter text-red-800"
          once
        >
          {props.title}
        </TextAnimate>
        <TextAnimate
          animation="slideUp"
          as="h2"
          className="text-acc-yellow-2 text-sm font-semibold"
          by="line"
          once
        >
          {props.description[currentLocale]}
        </TextAnimate>

        <ProjectLink
          className={cn(
            "self-start not-italic",
            "mb-4 max-md:font-semibold max-sm:text-xs",
          )}
          title={t("view")}
          url={props.repoLink}
        />
      </div>

      <div
        className={cn(
          "grid w-full grid-cols-3 grid-rows-3 xl:max-h-[700px]",
          "max-xl:flex max-xl:flex-col max-md:items-center max-md:justify-center",
        )}
      >
        <div
          className={cn(
            "text-prett col-span-2 row-span-3 flex flex-col items-center justify-between gap-y-8 pt-4",
            "max-xl:mb-10 max-lg:justify-center xl:mr-16",
          )}
        >
          <div>
            {props.body[currentLocale].map((line, index) => (
              <TextAnimate
                by="line"
                animation="slideLeft"
                delay={0.15}
                duration={0.1}
                key={index}
                once
                className={cn(
                  "border-off-w/75 pb-4 text-lg leading-7 font-light text-neutral-200/85",
                  "last:pb-0 max-md:text-base",
                )}
              >
                {line}
              </TextAnimate>
            ))}
          </div>

          <div
            className={cn(
              "bg-off-w flex items-center gap-8 place-self-start rounded p-3",
              "max-lg:flex-wrap max-lg:self-center xl:h-24",
            )}
          >
            {props.languages.map((lang, index) => (
              <lang.src
                key={index}
                className="aspect-square size-12 flex-1 xl:size-16"
              />
            ))}
          </div>
        </div>

        <Link
          href={props.repoLink}
          target="_blank"
          className={cn(
            "relative col-span-1 row-span-3 aspect-square h-full w-full max-w-[500px] cursor-pointer overflow-hidden rounded-lg border-2 border-red-700/50",
            "group max-xl:max-w-[400px] max-lg:self-center",
          )}
        >
          <Image
            src={props.repoImage}
            alt="Project 1"
            fill
            loading="lazy"
            decoding="async"
            quality={65}
            className="rounded-lg object-cover object-left"
          />

          <div
            className={cn(
              "absolute bottom-0 left-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-all duration-300",
              "group-hover:opacity-50",
            )}
          ></div>
        </Link>
      </div>
    </div>
  );
};
