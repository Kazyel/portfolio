"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";

const ProfileImage = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 place-items-center">
      <Image
        src="/images/dragon-2.avif"
        width={550}
        height={550}
        alt="Dragon"
        className={cn(
          "pointer-events-none top-0 col-span-full row-span-full opacity-100",
          "max-xl:w-[425px] max-md:w-[350px]",
        )}
        quality={75}
      />
      <Image
        src="/images/me.jpg"
        className={cn(
          "z-10 col-span-full row-span-full aspect-square rounded-full border-8 border-black object-cover",
          "max-xl:w-[300px] max-lg:w-[275px] max-md:w-[225px] xl:w-[368px]",
        )}
        width={400}
        height={400}
        alt="Profile"
        quality={75}
      />
    </div>
  );
};

const AboutText = () => {
  const t = useTranslations("About");

  return (
    <div
      className={cn(
        "relative z-10 flex flex-col gap-y-3 border-l-2 border-black/35 text-pretty",
        "max-xl:bg-off-w border-black max-xl:rounded-sm max-xl:border-none max-xl:p-4 max-xl:[filter:drop-shadow(0px_0px_3px_#00000022)]",
        "max-xl:p-6 max-lg:w-full xl:ml-4 xl:max-w-[600px] xl:px-4",
      )}
    >
      {["description-1", "description-2", "description-3"].map((key) => {
        return (
          <TextAnimate
            key={key}
            className={cn(
              "font-base leading-7 text-pretty text-black",
              "max-xl:text-base max-lg:text-sm",
            )}
            by="line"
            animation="slideLeft"
            delay={0.25}
            once
          >
            {t(key)}
          </TextAnimate>
        );
      })}
    </div>
  );
};

export const MyInfo = () => {
  const t = useTranslations("About");

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-x-8 pb-12",
        "max-xs:w-full max-xl:max-w-[768px] max-xl:flex-col",
        "max-lg:max-w-[650px] max-lg:gap-x-10 max-md:max-w-[568px] max-sm:px-6",
        "xl:w-full xl:flex-row",
      )}
    >
      <div>
        <ProfileImage />
      </div>

      <div className="flex flex-col gap-y-3">
        <TextAnimate
          className={cn(
            "text-darkest text-4xl font-extrabold tracking-tighter",
            "max-xl:my-4 max-xl:text-center lg:text-5xl xl:text-4xl",
          )}
          as="h2"
          by="line"
          animation="slideDown"
          delay={0.15}
          duration={0.1}
          once
        >
          {t("title")}
        </TextAnimate>

        <AboutText />
      </div>
    </div>
  );
};
