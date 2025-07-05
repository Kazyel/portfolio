import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiNextdotjs } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "@/components/svgs/SiLinkedIn";
import { LoveIcon } from "@/components/svgs/LoveIcon";
import { cn } from "@/lib/utils";

const footerClasses = cn(
  "relative flex h-16 w-full items-center overflow-hidden border-t border-stone-700/75 bg-black/60",
  "px-8 xl:px-16",
);

const dragonImageClasses = cn(
  "absolute -top-12 opacity-45 grayscale",
  "w-[360px] h-[160px]",
);

const builtWithContainerClasses = cn(
  "text-off-w/85 z-10 flex flex-1 items-center",
  "max-md:hidden",
);

const copyrightContainerClasses = cn(
  "z-10 flex flex-1 flex-col items-center gap-y-0.5",
  "max-md:items-start",
);

const socialLinksContainerClasses = cn(
  "text-off-w/75 z-10 flex flex-1 items-center justify-end gap-x-3 text-xs",
);

const socialLinkClasses = cn("transition-colors duration-150 hover:text-off-w");

export const Footer = () => {
  return (
    <footer className={footerClasses}>
      {/* Right Dragon */}
      <Image
        src="/images/dragon.webp"
        alt="Dragon"
        width={360}
        height={160}
        quality={75}
        className={cn(
          dragonImageClasses,
          "right-0 -rotate-12",
          "max-lg:-right-24 max-sm:-right-48",
        )}
      />

      {/* Left Dragon */}
      <Image
        src="/images/dragon.webp"
        alt="Dragon"
        width={360}
        height={160}
        quality={75}
        className={cn(
          dragonImageClasses,
          "left-0 -scale-x-100 rotate-[10deg]",
          "max-lg:-left-24 max-sm:hidden",
        )}
      />

      {/* Built With Section */}
      <div className={builtWithContainerClasses}>
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

      {/* Copyright Section */}
      <div className={copyrightContainerClasses}>
        <p className="text-off-w text-xs font-bold tracking-tighter">
          © {new Date().getFullYear()} • Kazyel
        </p>
        <p className="text-off-w/50 text-[0.65rem]">All rights reserved.</p>
      </div>

      {/* Social Links Section */}
      <div className={socialLinksContainerClasses}>
        <Link
          href="https://github.com/Kazyel"
          target="_blank"
          rel="noreferrer"
          className={socialLinkClasses}
        >
          <SiGithub className="size-6" />
        </Link>
        <p>●</p>
        <Link
          href="https://www.linkedin.com/in/kazyel/"
          target="_blank"
          rel="noreferrer"
          className={socialLinkClasses}
        >
          <SiLinkedin className="size-6" />
        </Link>
      </div>
    </footer>
  );
};
