"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 place-items-center">
      <Image
        src="/images/dragon-2.avif"
        className={cn(
          "pointer-events-none top-0 z-10 col-span-full row-span-full opacity-100",
          "max-xl:w-[425px] max-md:w-[350px]",
        )}
        width={550}
        height={550}
        quality={75}
        alt="Dragon"
      />

      <div
        className={cn(
          "z-10 col-span-full row-span-full aspect-square overflow-hidden rounded-full border-9 border-black",
          "max-xl:w-[300px] max-lg:w-[275px] max-md:w-[225px] xl:w-[368px]",
        )}
      >
        <Image
          src="/images/image.png"
          width={400}
          height={400}
          quality={75}
          className="size-full scale-120 object-cover object-top"
          alt="Profile"
        />
      </div>
    </div>
  );
};

const AboutText = () => {
  const t = useTranslations("About");

  return (
    <div
      className={cn(
        "bg-off-w/85 relative z-10 max-w-[clamp(500px,50vw,650px)] p-5 shadow-sm",
        "sm:bg-transparent sm:shadow-none xl:ml-4 xl:rounded-none xl:border-l-2 xl:border-black xl:p-0 xl:px-4 xl:drop-shadow-none",
      )}
    >
      {["description-1", "description-2", "description-3"].map((key) => {
        return (
          <TextAnimate
            key={key}
            className={cn(
              "font-crimson mb-4 text-pretty text-black last:mb-0",
              "text-lg leading-7 sm:text-xl lg:text-2xl",
            )}
            by="text"
            animation="slideRight"
            delay={0.2}
            duration={0.6}
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
        "flex flex-col items-center justify-center gap-4",
        "md:gap-12 xl:mt-12 xl:flex-row",
      )}
    >
      <ProfileImage />

      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4",
          "xl:items-start xl:justify-start",
        )}
      >
        <TextAnimate
          className={cn(
            "text-darkest text-center text-4xl font-extrabold tracking-tighter",
          )}
          as="h2"
          by="line"
          animation="slideDown"
          delay={0}
          once
        >
          {t("title")}
        </TextAnimate>

        <AboutText />
      </div>
    </div>
  );
};
