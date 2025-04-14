"use client";

import Image from "next/image";

import InkPaint from "@/assets/imgs/ink-paint.png";
import InkPaint2 from "@/assets/imgs/ink-paint-2.png";

export const BackgroundInkPaint = () => {
  return (
    <div>
      <Image
        src={InkPaint.src}
        alt="Ink Paint"
        width={800}
        height={800}
        className="pointer-events-none absolute -bottom-24 -left-[26rem] w-[800px] opacity-20 mix-blend-multiply grayscale max-2xl:w-[800px] max-md:hidden"
      />

      <Image
        src={InkPaint2.src}
        alt="Ink Paint 2"
        width={1100}
        height={1100}
        className="pointer-events-none absolute -right-[26rem] bottom-0 w-[1100px] opacity-50 mix-blend-multiply grayscale max-2xl:-right-96 max-xl:-bottom-8 max-md:hidden"
      />
    </div>
  );
};
