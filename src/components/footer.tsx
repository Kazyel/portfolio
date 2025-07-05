import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiNextdotjs } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "@/components/svgs/SiLinkedIn";
import { LoveIcon } from "@/components/svgs/LoveIcon";

export const Footer = () => {
  return (
    <footer className="relative flex h-16 w-full items-center overflow-hidden border-t border-stone-700/75 bg-black/60 px-8 xl:px-16">
      <Image
        src="/images/dragon.webp"
        alt="Dragon"
        width={360}
        height={160}
        quality={75}
        loading="lazy"
        decoding="async"
        className="absolute -top-12 right-0 -rotate-12 opacity-45 grayscale max-lg:-right-24 max-sm:-right-48"
      />
      <Image
        src="/images/dragon.webp"
        alt="Dragon"
        width={360}
        height={160}
        quality={75}
        loading="lazy"
        decoding="async"
        className="absolute -top-12 left-0 -scale-x-100 rotate-[10deg] opacity-45 grayscale max-lg:-left-24 max-sm:hidden"
      />

      <div className="text-off-w/85 z-10 flex flex-1 items-center max-md:hidden">
        <p className="text-xs">Built with</p>
        <LoveIcon className="text-off-w mx-1 size-5" />
        <p className="text-xs">and</p>
        <Link
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className="ml-1.5 transition-opacity duration-200 hover:opacity-65"
        >
          <SiNextdotjs className="text-off-w size-5" />
        </Link>
      </div>

      <div className="z-10 flex flex-1 flex-col items-center gap-y-0.5 max-md:items-start">
        <p className="text-off-w text-xs font-bold tracking-tighter">
          © {new Date().getFullYear()} • Kazyel
        </p>
        <p className="text-off-w/50 text-[0.65rem]">All rights reserved.</p>
      </div>

      <div className="text-off-w/75 z-10 flex flex-1 items-center justify-end gap-x-3 text-xs">
        <Link
          href="https://github.com/Kazyel"
          target="_blank"
          rel="noreferrer"
          className="hover:text-off-w transition-colors duration-150"
        >
          <SiGithub className="size-6" />
        </Link>
        <p>●</p>
        <Link
          href="https://www.linkedin.com/in/kazyel/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-off-w transition-colors duration-150"
        >
          <SiLinkedin className="size-6" />
        </Link>
      </div>
    </footer>
  );
};
