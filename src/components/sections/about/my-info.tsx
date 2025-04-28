"use client";

import Image from "next/image";

import { TextAnimate } from "@/components/ui/text-animate";

export const MyInfo = () => {
  return (
    <div className="max-xs:max-w-[320px] flex items-center justify-center gap-x-8 p-12 max-xl:max-w-[768px] max-xl:flex-row max-lg:max-w-[650px] max-lg:gap-x-10 max-sm:max-w-[360px] max-sm:flex-col xl:w-full">
      <div>
        <div className="grid grid-cols-2 grid-rows-2 place-items-center">
          <Image
            src={"/images/dragon-2.webp"}
            width={550}
            height={550}
            alt="Dragon"
            className="pointer-events-none top-0 col-span-full row-span-full opacity-100"
          />

          <Image
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            className="z-10 col-span-full row-span-full aspect-square rounded-[50%] border-[8px] border-black object-cover max-xl:w-[258px] max-lg:w-[228px] xl:w-[368px]"
            width={300}
            height={300}
            alt="Placeholder"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-3">
        <TextAnimate
          className="text-darkest text-4xl font-extrabold tracking-tighter"
          as="h2"
          by="line"
          animation="slideDown"
          delay={0.15}
          duration={0.1}
          once
        >
          A little about myself...
        </TextAnimate>

        <div className="relative ml-4 flex flex-col gap-y-3 border-l-2 border-black pl-4 max-xl:max-w-[300px] max-lg:max-w-[275px] max-sm:max-w-full xl:max-w-[500px]">
          <TextAnimate
            className="text-lg leading-8 font-light text-black max-xl:text-lg max-lg:text-base"
            by="line"
            animation="slideLeft"
            delay={0.25}
            once
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam ad
            quam nisi, itaque corrupti vitae totam placeat, amet voluptatum consequatur
            repudiandae modi nihil asperiores sapiente, ab odio eos. Cum?
          </TextAnimate>

          <TextAnimate
            className="text-lg leading-8 font-light text-black max-xl:text-lg max-lg:text-base"
            by="line"
            animation="slideLeft"
            delay={0.25}
            once
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam ad
            quam nisi, itaque corrupti vitae totam placeat, amet voluptatum consequatur
            repudiandae modi nihil asperiores sapiente, ab odio eos. Cum?
          </TextAnimate>

          <TextAnimate
            className="text-lg leading-8 font-light text-black max-xl:text-lg max-lg:text-base"
            by="line"
            animation="slideLeft"
            delay={0.35}
            once
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam ad
            quam nisi, itaque corrupti vitae totam placeat, amet voluptatum consequatur
            repudiandae modi nihil asperiores sapiente, ab odio eos. Cum?
          </TextAnimate>
        </div>
      </div>
    </div>
  );
};
