"use client";

import type { CustomMotion } from "@/lib/types";

import { useAtomValue } from "jotai";
import { isProjectOpenAtom } from "@/lib/store/projects";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { motion } from "framer-motion";

const URL_FLOWERS = "/images/higan-flowers.webp";

const KOI_MOTION: CustomMotion<"div"> = {
  initial: { x: 15, opacity: 0 },
  animate: { x: 0, opacity: 0.75 },
  exit: { x: 15, opacity: 0 },
  transition: { duration: 0.4 },
};

const flowerBaseClasses = cn("absolute mix-blend-color-burn transition-all duration-500");

/* Left side flowers */
const leftFlower1Classes = cn(
  flowerBaseClasses,
  "bottom-0 left-28 aspect-square h-[1000px] w-[700px] opacity-40",
  "group-hover:opacity-15",
);

const leftFlower2Classes = cn(
  flowerBaseClasses,
  "-bottom-12 -left-40 h-[700px] w-[400px] -rotate-45 opacity-20",
);

const leftFlower3Classes = cn(
  flowerBaseClasses,
  "-bottom-20 left-[24rem] h-[600px] w-[500px] opacity-25",
);

/* Right side flowers */
const rightFlower1Classes = cn(
  flowerBaseClasses,
  "right-28 bottom-0 h-[1100px] w-[700px] scale-x-[-1] opacity-40",
  "max-xl:hidden",
);

const rightFlower2Classes = cn(
  flowerBaseClasses,
  "-right-40 -bottom-12 h-[700px] w-[400px] rotate-45 opacity-20",
  "max-xl:hidden",
);

const rightFlower3Classes = cn(
  flowerBaseClasses,
  "right-[24rem] -bottom-20 h-[600px] w-[500px] scale-x-[-1] opacity-25",
  "max-2xl:hidden",
);

const koiContainerClasses = cn(
  "pointer-events-none absolute right-0 bottom-0 mix-blend-multiply grayscale",
  "max-xl:hidden",
);

export const ProjectsBackground = () => {
  const isOpen = useAtomValue(isProjectOpenAtom);

  return (
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
        className={cn(rightFlower1Classes, isOpen && "opacity-0")}
        quality={50}
        height={1100}
        width={700}
        loading="lazy"
        decoding="async"
      />
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(rightFlower2Classes, isOpen && "opacity-0")}
        quality={50}
        height={700}
        width={400}
        loading="lazy"
        decoding="async"
      />
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(rightFlower3Classes, isOpen && "opacity-0")}
        quality={50}
        height={600}
        width={500}
        loading="lazy"
        decoding="async"
      />

      {/* Koi Fish */}
      {isOpen && (
        <motion.div {...KOI_MOTION} className={koiContainerClasses}>
          <Image
            src="/images/fish.webp"
            alt="Fish"
            quality={50}
            width={679}
            height={912}
          />
        </motion.div>
      )}
    </div>
  );
};
