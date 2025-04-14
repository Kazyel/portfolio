"use client";

import { useEffect, useRef, type RefObject } from "react";

type ClassNameList = string[];

const LOGO_DARK_MODE = [
  "text-black",
  "border-black",
  "hover:border-black/50",
  "hover:text-black/50",
];
const LOGO_LIGHT_MODE = [
  "text-off-w",
  "border-off-w",
  "hover:border-off-w/60",
  "hover:text-off-w/60",
];

const ICON_DARK_MODE = ["stroke-black", "hover:stroke-black/50"];
const ICON_LIGHT_MODE = ["stroke-off-w", "hover:stroke-off-w/60"];

export default function Navbar() {
  const navbarLogo = useRef<HTMLAnchorElement>(null);
  const languageIcon = useRef<SVGSVGElement>(null);

  const modifyClassNames = (ref: RefObject<any>, add: ClassNameList, remove: ClassNameList) => {
    if (!ref.current) return;

    ref.current.classList.add(...add);
    ref.current.classList.remove(...remove);
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;

        const logoStyleMode = isIntersecting ? LOGO_DARK_MODE : LOGO_LIGHT_MODE;
        const iconStyleMode = isIntersecting ? ICON_DARK_MODE : ICON_LIGHT_MODE;

        modifyClassNames(
          navbarLogo,
          logoStyleMode,
          isIntersecting ? LOGO_LIGHT_MODE : LOGO_DARK_MODE
        );
        modifyClassNames(
          languageIcon,
          iconStyleMode,
          isIntersecting ? ICON_LIGHT_MODE : ICON_DARK_MODE
        );
      });
    };

    const observerMobile = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px 0px -100% 0px",
    });

    const observerDesktop = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.85,
    });

    const mql = window.matchMedia("(max-width: 1024px)");
    const targetSection = document.querySelector("#about-section");

    if (targetSection) {
      mql.matches ? observerMobile.observe(targetSection) : observerDesktop.observe(targetSection);
    }

    return () => {
      observerMobile.disconnect();
      observerDesktop.disconnect();
    };
  }, [navbarLogo, languageIcon]);

  return (
    <nav
      id="navbar"
      className="fixed top-0 z-20 flex w-full items-center justify-around bg-transparent py-8 text-off-w max-lg:sticky max-lg:z-50 max-lg:mb-[-65px] max-lg:justify-between max-lg:border-b max-lg:border-stone-700 max-lg:px-5 max-lg:py-4 max-lg:backdrop-blur-md"
    >
      <a
        ref={navbarLogo}
        href="#landing-section"
        className="border-l-2 border-off-w px-2 text-2xl font-bold text-off-w transition duration-200"
      >
        Kazyel
      </a>

      <div className="flex gap-4">
        <svg
          ref={languageIcon}
          xmlns="http://www.w3.org/2c000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7 cursor-pointer transition-all duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          ></path>
        </svg>
      </div>
    </nav>
  );
}
