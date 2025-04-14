"use client";

import Image from "next/image";
import RedSakura from "@/assets/imgs/higan.png";

export const BackgroundFlowers = () => {
  return (
    <div>
      <Image
        src={RedSakura}
        alt="Decorative floral background"
        className="absolute bottom-0 left-28 aspect-square h-[1000px] w-[700px] opacity-40 mix-blend-color-burn max-xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
      />
      <Image
        src={RedSakura}
        alt="Decorative floral background"
        className="absolute -bottom-12 -left-40 h-[700px] w-[400px] -rotate-45 opacity-20 mix-blend-color-burn max-xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
      />
      <Image
        src={RedSakura}
        alt="Decorative floral background"
        className="absolute -bottom-20 left-[24rem] h-[600px] w-[500px] opacity-25 mix-blend-color-burn max-2xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
      />

      <Image
        src={RedSakura}
        alt="Decorative floral background"
        className="absolute bottom-0 right-28 h-[1100px] w-[700px] scale-x-[-1] opacity-40 mix-blend-color-burn max-xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
      />
      <Image
        src={RedSakura}
        alt="Decorative floral background"
        className="absolute -bottom-12 -right-40 h-[700px] w-[400px] rotate-45 opacity-20 mix-blend-color-burn max-xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
      />
      <Image
        src={RedSakura}
        alt="Decorative floral background"
        className="absolute -bottom-20 right-[24rem] h-[600px] w-[500px] scale-x-[-1] opacity-25 mix-blend-color-burn max-2xl:hidden"
        loading="lazy"
        decoding="async"
        quality={50}
      />
    </div>
  );
};
