"use client";

import Image from "next/image";
import { useAtomValue } from "jotai";

import { isProjectOpenAtom } from "@/lib/store";
import { cn } from "@/lib/utils";

const URL_FLOWERS = "/images/higan-flowers.webp";

export const BackgroundFlowers = () => {
  const isOpen = useAtomValue(isProjectOpenAtom);

  return (
    <div>
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className={cn(
          "absolute bottom-0 left-28 aspect-square h-[1000px] w-[700px] opacity-40 mix-blend-color-burn transition-all duration-300 max-xl:hidden",
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
        className="absolute -bottom-12 -left-40 h-[700px] w-[400px] -rotate-45 opacity-20 mix-blend-color-burn max-xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
        height={700}
        width={400}
      />
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className="absolute -bottom-20 left-[24rem] h-[600px] w-[500px] opacity-25 mix-blend-color-burn max-2xl:hidden"
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
          "absolute right-28 bottom-0 h-[1100px] w-[700px] scale-x-[-1] opacity-40 mix-blend-color-burn transition-all duration-300 max-xl:hidden",
          isOpen && "opacity-5",
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
        className="absolute -right-40 -bottom-12 h-[700px] w-[400px] rotate-45 opacity-20 mix-blend-color-burn max-xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
        height={700}
        width={400}
      />
      <Image
        src={URL_FLOWERS}
        alt="Decorative floral background"
        className="absolute right-[24rem] -bottom-20 h-[600px] w-[500px] scale-x-[-1] opacity-25 mix-blend-color-burn max-2xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
        height={600}
        width={500}
      />
    </div>
  );
};
