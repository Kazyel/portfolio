import Image from "next/image";
import Link from "next/link";

import SiLinkedin from "@/components/svgs/SiLinkedIn";
import { LoveIcon } from "@/components/svgs/LoveIcon";
import { SiGithub, SiNextdotjs } from "@icons-pack/react-simple-icons";

export const Footer = () => {
  return (
    <footer className="relative flex h-[64px] w-full items-center justify-between overflow-hidden border-t border-stone-700/75 bg-black/60 px-16">
      <Image
        src={"/images/dragon.webp"}
        alt="Dragon"
        width={360}
        height={160}
        quality={75}
        loading="lazy"
        decoding="async"
        className="absolute -top-12 right-0 -rotate-12 opacity-45 grayscale"
      />

      <Image
        src={"/images/dragon.webp"}
        alt="Dragon"
        width={360}
        height={160}
        quality={75}
        loading="lazy"
        decoding="async"
        className="absolute -top-12 left-0 -scale-x-[1] rotate-[10deg] opacity-45 grayscale"
      />

      <div className="text-off-w/85 z-10 flex items-center">
        <p className="text-xs">Built with</p>

        <LoveIcon className="mr-1 ml-1.5 size-5 text-white" />

        <p className="text-xs">and</p>

        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="transition-all duration-200 hover:opacity-65"
        >
          <SiNextdotjs className="ml-1.5 size-5 text-white" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-0.5">
        <p className="text-off-w text-xs font-bold tracking-tighter">
          © {new Date().getFullYear()} • Kazyel
        </p>
        <p className="text-off-w/50 text-[0.65rem]">All rights reserved.</p>
      </div>

      <div className="text-off-w/50 z-10 flex items-center gap-x-3 text-xs">
        <a
          href="https://github.com/Kazyel"
          target="_blank"
          rel="noreferrer"
          className="text-off-w hover:text-off-w transition-all duration-150"
        >
          <SiGithub className="size-6" />
        </a>
        <p>●</p>
        <a
          href="https://www.linkedin.com/in/kazyel/"
          target="_blank"
          rel="noreferrer"
          className="text-off-w hover:text-off-w transition-all duration-150"
        >
          <SiLinkedin className="size-6" />
        </a>
      </div>
    </footer>
  );
};
