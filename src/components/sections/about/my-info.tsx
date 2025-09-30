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
        "bg-off-w/80 relative z-10 max-w-[clamp(450px,50vw,650px)] rounded-sm p-6 shadow-sm",
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
        "flex flex-col items-center justify-center gap-12",
        "xl:mt-12 xl:flex-row",
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
