import Image from "next/image";

export const BackgroundInkPaint = () => {
  return (
    <div>
      <Image
        src={"/images/ink-paint.webp"}
        alt="Ink Paint"
        width={800}
        height={800}
        className="pointer-events-none absolute -bottom-32 -left-[26rem] w-[800px] opacity-20 mix-blend-multiply grayscale max-2xl:w-[800px] max-md:hidden"
      />

      <Image
        src={"/images/ink-paint-2.webp"}
        alt="Ink Paint 2"
        width={1100}
        height={1100}
        className="pointer-events-none absolute -right-[32rem] bottom-0 w-[1100px] opacity-65 mix-blend-multiply grayscale max-2xl:-right-96 max-xl:-bottom-8 max-md:hidden"
      />
    </div>
  );
};
