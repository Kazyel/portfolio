"use client";

import Image from "next/image";
import Dragon from "@/assets/imgs/dragon.webp";

import { TextAnimate } from "@/components/ui/text-animate";

export const MyInfo = () => {
  return (
    <div className="flex items-center justify-center gap-x-20 p-10 max-xl:max-w-[768px] max-xl:flex-row max-lg:max-w-[650px] max-lg:gap-x-10 max-sm:max-w-[360px] max-sm:flex-col max-xs:max-w-[320px] xl:w-full">
      <div>
        <div className="grid grid-cols-2 grid-rows-2 place-items-center">
          <Image
            src={Dragon.src}
            width={550}
            height={550}
            alt="Dragon"
            className="pointer-events-none top-0 col-span-full row-span-full opacity-100"
          />

          <Image
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            className="z-10 col-span-full row-span-full aspect-square rounded-[50%] border-[6px] border-black object-cover max-xl:w-[258px] max-lg:w-[228px] xl:w-[368px]"
            width={300}
            height={300}
            alt="Placeholder"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <TextAnimate
          className="-ml-3 text-4xl font-extrabold tracking-tight text-darkest"
          as="h2"
          by="line"
          animation="slideDown"
          delay={0.15}
          duration={0.1}
        >
          A little about myself...
        </TextAnimate>

        <div className="relative flex flex-col gap-y-4 border-l-4 border-acc-yellow pl-6 max-xl:max-w-[300px] max-lg:max-w-[275px] max-sm:max-w-full xl:max-w-[568px]">
          <TextAnimate
            className="text-lg font-medium leading-8 text-stone-700 max-xl:text-lg max-lg:text-base"
            by="line"
            animation="slideLeft"
            delay={0.25}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam ad quam nisi,
            itaque corrupti vitae totam placeat, amet voluptatum consequatur repudiandae modi nihil
            asperiores sapiente, ab odio eos. Cum?
          </TextAnimate>

          <TextAnimate
            className="text-lg font-medium leading-8 text-stone-700 max-xl:text-lg max-lg:text-base"
            by="line"
            animation="slideLeft"
            delay={0.25}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam ad quam nisi,
            itaque corrupti vitae totam placeat, amet voluptatum consequatur repudiandae modi nihil
            asperiores sapiente, ab odio eos. Cum?
          </TextAnimate>

          <TextAnimate
            className="text-lg font-medium leading-8 text-stone-700 max-xl:text-lg max-lg:text-base"
            by="line"
            animation="slideLeft"
            delay={0.35}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ullam ad quam nisi,
            itaque corrupti vitae totam placeat, amet voluptatum consequatur repudiandae modi nihil
            asperiores sapiente, ab odio eos. Cum?
          </TextAnimate>
        </div>
      </div>
    </div>
  );
};
