import type { Socials } from "@/lib/types";

import { cn } from "@/lib/utils";

import { SiGithub, SiNextdotjs } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "@/components/svgs/SiLinkedIn";
import { LoveIcon } from "@/components/svgs/LoveIcon";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const dragonImageClasses = cn(
  "absolute -top-12 opacity-45 grayscale",
  "w-[360px] h-[160px]",
);

const socialLinkClasses = cn("transition-colors duration-150 hover:text-off-w");

const socialLinks: Socials<"linkedIn" | "github"> = {
  github: {
    href: "https://www.github.com/Kazyel",
    icon: SiGithub,
    text: "GitHub",
  },
  linkedIn: {
    href: "https://www.linkedin.com/in/mateusmascarelo/",
    icon: SiLinkedin,
    text: "LinkedIn",
  },
};

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer
      className={cn(
        "relative flex h-16 w-full items-center overflow-hidden border-t border-stone-700/75 bg-black/60",
        "px-8 xl:px-16",
      )}
    >
      {/* Right Dragon */}
      <Image
        src="/images/dragon.avif"
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
        src="/images/dragon.avif"
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
      <div
        className={cn(
          "text-off-w/85 z-10 flex flex-1 items-center",
          "max-md:hidden",
        )}
      >
        <p className="text-xs">{t("made-with")}</p>
        <LoveIcon className="text-off-w mx-1 size-5" />
        <p className="text-xs">{t("and")}</p>
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
      <div
        className={cn(
          "z-10 flex flex-1 flex-col items-center gap-y-0.5",
          "max-md:items-start",
        )}
      >
        <p className="text-off-w text-xs font-bold tracking-tighter">
          © {new Date().getFullYear()} • Kazyel
        </p>
        <p className="text-off-w/50 text-[0.65rem]">{t("copyright")}</p>
      </div>

      {/* Social Links Section */}
      <div className="text-off-w/75 z-10 flex flex-1 items-center justify-end gap-x-3 text-xs">
        {Object.entries(socialLinks)
          .flatMap(([key, social], index) => [
            <Link
              key={key}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={socialLinkClasses}
            >
              <social.icon className="size-6" />
            </Link>,

            index < Object.entries(socialLinks).length - 1 && (
              <p key={`separator-${index}`}>●</p>
            ),
          ])
          .filter(Boolean)}
      </div>
    </footer>
  );
};
