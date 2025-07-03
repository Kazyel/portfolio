"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useAtomValue } from "jotai";
import { isProjectOpenAtom } from "@/lib/store/projects";
import { cn } from "@/lib/utils";

const URL_FLOWERS = "/images/higan-flowers.webp";

export const ProjectsBackground = () => {
  const isOpen = useAtomValue(isProjectOpenAtom);

  return (
    <div>
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(
          "absolute bottom-0 left-28 aspect-square h-[1000px] w-[700px] opacity-40 mix-blend-color-burn transition-all duration-500 group-hover:opacity-15",
          isOpen && "opacity-15",
        )}
        loading="lazy"
        decoding="async"
        quality={50}
        height={1000}
        width={700}
      />
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(
          "absolute -bottom-12 -left-40 h-[700px] w-[400px] -rotate-45 opacity-20 mix-blend-color-burn transition-all duration-500",
          isOpen && "opacity-30",
        )}
        loading="lazy"
        decoding="async"
        quality={50}
        height={700}
        width={400}
      />
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(
          "absolute -bottom-20 left-[24rem] h-[600px] w-[500px] opacity-25 mix-blend-color-burn transition-all duration-500",
          isOpen && "opacity-35",
        )}
        loading="lazy"
        decoding="async"
        quality={50}
        height={600}
        width={500}
      />

      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(
          "absolute right-28 bottom-0 h-[1100px] w-[700px] scale-x-[-1] opacity-40 mix-blend-color-burn transition-all duration-500 max-xl:hidden",
          isOpen && "opacity-0",
        )}
        loading="lazy"
        decoding="async"
        quality={50}
        height={1100}
        width={700}
      />
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(
          "absolute -right-40 -bottom-12 h-[700px] w-[400px] rotate-45 opacity-20 mix-blend-color-burn transition-all duration-500 max-xl:hidden",
          isOpen && "opacity-0",
        )}
        loading="lazy"
        decoding="async"
        quality={50}
        height={700}
        width={400}
      />
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(
          "absolute right-[24rem] -bottom-20 h-[600px] w-[500px] scale-x-[-1] opacity-25 mix-blend-color-burn transition-all duration-500 max-2xl:hidden",
          isOpen && "opacity-0",
        )}
        loading="lazy"
        decoding="async"
        quality={50}
        height={600}
        width={500}
      />

      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            x: 15,
            filter: "grayscale(100%)",
            mixBlendMode: "multiply",
          }}
          animate={{ opacity: 0.75, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={"/images/fish.webp"}
            alt="Fish"
            className="pointer-events-none absolute right-0 bottom-0 mix-blend-multiply grayscale max-xl:hidden"
            loading="lazy"
            decoding="async"
            quality={50}
            width={679}
            height={912}
          />
        </motion.div>
      )}
    </div>
  );
};
