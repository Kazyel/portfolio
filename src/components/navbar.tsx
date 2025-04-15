"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_DARK = "text-black border-black hover:border-black/50 hover:text-black/50 ";
const LOGO_LIGHT = "text-off-w border-off-w hover:border-off-w/60 hover:text-off-w/60";
const ICON_DARK = "stroke-black hover:stroke-black/50";
const ICON_LIGHT = "stroke-off-w hover:stroke-off-w/60";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlapping, setIsOverlapping] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = document.querySelector("#about-section");
    if (!section || !navbarRef.current) return;

    let ticking = false;

    const checkOverlap = () => {
      const sectionRect = section.getBoundingClientRect();
      const navbarRect = navbarRef.current!.getBoundingClientRect();
      const navbarCenterY = navbarRect.top + navbarRect.height / 2;

      setIsOverlapping((prev) => {
        const newValue =
          navbarCenterY >= sectionRect.top && navbarCenterY <= sectionRect.bottom;
        return prev !== newValue ? newValue : prev;
      });
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 0);
          checkOverlap();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      ref={navbarRef}
      className={cn(
        "ease fixed top-0 z-50 flex h-16 w-full items-center justify-evenly transition-all duration-150",
        "border-b border-transparent backdrop-blur-none",
        isScrolled && "border-stone-700/50 backdrop-blur-md",
      )}
    >
      <Link
        href="#hero-section"
        className={cn(
          "relative border-l-2 px-2 text-xl font-extrabold tracking-tighter transition duration-200",
          "before:text-off-w before:font-jp before:absolute before:-left-7 before:text-lg before:content-['新']",
          isOverlapping ? LOGO_DARK : LOGO_LIGHT,
        )}
      >
        Kazyel
      </Link>

      <div className="flex items-center gap-x-8">
        <Link
          href="#hero-section"
          className={cn(
            "text-sm font-light transition duration-200",
            isOverlapping ? LOGO_DARK : LOGO_LIGHT,
          )}
        >
          About
        </Link>
        <Link
          href="#hero-section"
          className={cn(
            "text-sm font-light transition duration-200",
            isOverlapping ? LOGO_DARK : LOGO_LIGHT,
          )}
        >
          Projects
        </Link>
        <Link
          href="#hero-section"
          className={cn(
            "text-sm font-light transition duration-200",
            isOverlapping ? LOGO_DARK : LOGO_LIGHT,
          )}
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className={cn(
            "size-6 cursor-pointer transition-all duration-200",
            isOverlapping ? ICON_DARK : ICON_LIGHT,
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          ></path>
        </svg>
        <button className="bg-off-w hover:bg-off-w/35 hover:text-off-w cursor-pointer rounded-md px-2 py-2 text-xs font-semibold text-black transition-all duration-200">
          View CV
        </button>
      </div>
    </nav>
  );
}
