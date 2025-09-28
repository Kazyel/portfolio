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
        "relative z-10 flex w-full flex-col gap-y-4 border-l-2 border-black/35",
        "max-xl:bg-off-w border-black max-xl:rounded-sm max-xl:border-none max-xl:p-4 max-xl:[filter:drop-shadow(0px_0px_3px_#00000022)]",
        "max-xl:p-6 lg:max-w-[clamp(350px,50vw,650px)] xl:ml-4 xl:px-4",
      )}
    >
      {["description-1", "description-2", "description-3"].map((key) => {
        return (
          <TextAnimate
            key={key}
            className={cn(
              "font-merriweather tracking- text-lg text-pretty text-black sm:text-xl lg:text-2xl",
            )}
            by="text"
            animation="slideRight"
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
        "flex flex-col items-center justify-center gap-4 px-6",
        "md:px-12 xl:flex-row",
      )}
    >
      <ProfileImage />

      <div>
        <TextAnimate
          className={cn(
            "text-darkest text-4xl font-extrabold tracking-tighter",
            "mb-4 max-xl:text-center",
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
