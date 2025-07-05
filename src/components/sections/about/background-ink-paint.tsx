import { cn } from "@/lib/utils";
import Image from "next/image";

export const BackgroundInkPaint = () => {
  return (
    <>
      <Image
        src="/images/ink-paint.webp"
        alt="Ink Paint"
        width={800}
        height={800}
        className={cn(
          "pointer-events-none absolute w-[800px] opacity-20 mix-blend-multiply grayscale",
          "-bottom-32 -left-[26rem] max-2xl:w-[800px] max-sm:hidden",
        )}
      />
      <Image
        src="/images/ink-paint-2.webp"
        alt="Ink Paint 2"
        width={1100}
        height={1100}
        className={cn(
          "pointer-events-none absolute w-[1100px] opacity-65 mix-blend-multiply grayscale",
          "-right-[32rem] bottom-0 max-2xl:-right-96 max-xl:-bottom-8 max-sm:hidden",
        )}
      />
    </>
  );
};
