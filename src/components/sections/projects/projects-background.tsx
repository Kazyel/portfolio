"use client";

import type { CustomMotion } from "@/lib/types";

import { useAtomValue } from "jotai";
import { isProjectOpenAtom } from "@/lib/store/projects";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { MotionWrapper, m } from "@/components/motion-wrapper";

const URL_FLOWERS = "/images/higan-flowers.avif";

const KOI_MOTION: CustomMotion<"div"> = {
  initial: { x: 15, opacity: 0 },
  animate: { x: 0, opacity: 0.75 },
  exit: { x: 15, opacity: 0 },
  transition: { duration: 0.4 },
};

const flowerBaseClasses = cn("absolute transition-all duration-500");

/* Left side flowers */
const leftFlower1Classes = cn(
  flowerBaseClasses,
  "bottom-0 left-28 aspect-square h-[1000px] w-[700px] opacity-40 pointer-events-none",
  "group-hover:opacity-15",
);

const leftFlower2Classes = cn(
  flowerBaseClasses,
  "-bottom-12 -left-40 h-[700px] w-[400px] -rotate-45 opacity-20 pointer-events-none",
);

const leftFlower3Classes = cn(
  flowerBaseClasses,
  "-bottom-20 left-[24rem] h-[600px] w-[500px] opacity-25 pointer-events-none",
);

/* Right side flowers */
const rightFlower1Classes = cn(
  flowerBaseClasses,
  "right-28 bottom-0 h-[1100px] w-[700px] scale-x-[-1] opacity-40 pointer-events-none",
  "max-xl:hidden",
);

const rightFlower2Classes = cn(
  flowerBaseClasses,
  "-right-40 -bottom-12 h-[700px] w-[400px] rotate-45 opacity-20 pointer-events-none",
  "max-xl:hidden",
);

const rightFlower3Classes = cn(
  flowerBaseClasses,
  "right-[24rem] -bottom-20 h-[600px] w-[500px] scale-x-[-1] opacity-25 pointer-events-none",
  "max-2xl:hidden",
);

const koiContainerClasses = cn(
  "pointer-events-none absolute right-0 bottom-0 pointer-events-none",
  "max-xl:hidden",
);

export const ProjectsBackground = () => {
  const isOpen = useAtomValue(isProjectOpenAtom);

  return (
    <MotionWrapper>
      <div>
        {/* Left side flowers */}
        <Image
          src={URL_FLOWERS}
          alt="Decorative floral background"
          className={cn(leftFlower1Classes, isOpen && "opacity-15")}
          quality={50}
          height={1000}
          width={700}
          loading="lazy"
          decoding="async"
        />
        <Image
          src={URL_FLOWERS}
          alt="Decorative floral background"
          className={cn(leftFlower2Classes, isOpen && "opacity-30")}
          quality={50}
          height={700}
          width={400}
          loading="lazy"
          decoding="async"
        />
        <Image
          src={URL_FLOWERS}
          alt="Decorative floral background"
          className={cn(leftFlower3Classes, isOpen && "opacity-35")}
          quality={50}
          height={600}
          width={500}
          loading="lazy"
          decoding="async"
        />

        {/* Right side flowers */}
        <Image
          src={URL_FLOWERS}
          alt="Decorative floral background"
          className={cn(rightFlower1Classes, isOpen && "opacity-20")}
          quality={50}
          height={1100}
          width={700}
          loading="lazy"
          decoding="async"
        />
        <Image
          src={URL_FLOWERS}
          alt="Decorative floral background"
          className={cn(rightFlower2Classes, isOpen && "opacity-40")}
          quality={50}
          height={700}
          width={400}
          loading="lazy"
          decoding="async"
        />
        <Image
          src={URL_FLOWERS}
          alt="Decorative floral background"
          className={cn(rightFlower3Classes, isOpen && "opacity-40")}
          quality={50}
          height={600}
          width={500}
          loading="lazy"
          decoding="async"
        />
      </div>
    </MotionWrapper>
  );
};
