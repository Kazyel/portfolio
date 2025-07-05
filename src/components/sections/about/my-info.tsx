"use client";

import Image from "next/image";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";

const profileGridClasses = "grid grid-cols-2 grid-rows-2 place-items-center";
const dragonImageClasses =
  "pointer-events-none top-0 col-span-full row-span-full opacity-100";
const profileImageClasses = cn(
  "z-10 col-span-full row-span-full aspect-square rounded-full border-8 border-black object-cover",
  "max-xl:w-[300px] max-lg:w-[275px] max-md:w-[225px] xl:w-[368px]",
);
const imageSizeClasses = {
  dragon: "max-xl:w-[425px] max-md:w-[350px]",
};

const textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam ad quam nisi, itaque corrupti vitae totam placeat, amet voluptatum consequatur repudiandae modi nihil asperiores sapiente, ab odio eos. Cum?";

const textBaseClasses = cn(
  "text-lg font-light leading-7 text-black",
  "max-lg:text-sm max-xl:text-base",
);

const aboutContainerClasses = cn(
  "relative z-10 flex flex-col gap-y-3 border-l-2 border-black/35",
  "max-xl:bg-off-w max-xl:rounded-md max-xl:border-2 max-xl:p-4 max-xl:shadow-lg",
  "max-lg:w-full xl:ml-4 xl:max-w-[600px] xl:px-4",
);

const myInfoContainerClasses = cn(
  "flex items-center justify-center gap-x-8 pb-12",
  "max-xs:max-w-[320px] max-xl:max-w-[768px] max-xl:flex-col",
  "max-lg:max-w-[650px] max-lg:gap-x-10 max-md:max-w-[468px] max-sm:px-6",
  "xl:w-full xl:flex-row",
);

const titleClasses = cn(
  "text-darkest text-4xl font-extrabold tracking-tighter",
  "max-xl:my-4 max-xl:text-center lg:text-5xl xl:text-4xl",
);

const ProfileImage = () => {
  return (
    <div className={profileGridClasses}>
      <Image
        src="/images/dragon-2.webp"
        width={550}
        height={550}
        alt="Dragon"
        className={cn(dragonImageClasses, imageSizeClasses.dragon)}
      />
      <Image
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        className={profileImageClasses}
        width={300}
        height={300}
        alt="Profile"
      />
    </div>
  );
};

const AboutText = () => {
  return (
    <div className={aboutContainerClasses}>
      <TextAnimate
        className={textBaseClasses}
        by="line"
        animation="slideLeft"
        delay={0.25}
        once
      >
        {textContent}
      </TextAnimate>
      <TextAnimate
        className={textBaseClasses}
        by="line"
        animation="slideLeft"
        delay={0.25}
        once
      >
        {textContent}
      </TextAnimate>
      <TextAnimate
        className={textBaseClasses}
        by="line"
        animation="slideLeft"
        delay={0.35}
        once
      >
        {textContent}
      </TextAnimate>
    </div>
  );
};

export const MyInfo = () => {
  return (
    <div className={myInfoContainerClasses}>
      <div>
        <ProfileImage />
      </div>

      <div className="flex flex-col gap-y-3">
        <TextAnimate
          className={titleClasses}
          as="h2"
          by="line"
          animation="slideDown"
          delay={0.15}
          duration={0.1}
          once
        >
          A little about myself...
        </TextAnimate>

        <AboutText />
      </div>
    </div>
  );
};
