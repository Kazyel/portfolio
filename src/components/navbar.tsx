"use client";

import { useMemo } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

import Link from "next/link";

import {
  LINK_DARK,
  LINK_LIGHT,
  ICON_DARK,
  ICON_LIGHT,
  CV_DARK,
  CV_LIGHT,
  NAV_LINKS,
} from "@/lib/constants/navbar";
import useNavbarLogic from "@/hooks/navbar-logic";

export default function Navbar() {
  const {
    isScrolled,
    isOverlapping,
    activeSection,
    underlineProps,
    hoveredLink,
    navbarRef,
    underlineRef,
    linkRefs,
    setHoveredLink,
    setActiveSection,
  } = useNavbarLogic();

  const underlineAnimation = {
    initial: { x: 0, width: 0 },
    animate: {
      x: underlineProps.x,
      width: underlineProps.width,
      opacity: activeSection ? 1 : 0,
    },
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 35,
      mass: 0.5,
    },
    exit: { opacity: 0, duration: 0.15 },
  };

  const currentStyles = useMemo(() => {
    return {
      link: isOverlapping ? LINK_DARK : LINK_LIGHT,
      cv: isOverlapping ? CV_DARK : CV_LIGHT,
      icon: isOverlapping ? ICON_DARK : ICON_LIGHT,
    };
  }, [isOverlapping]);

  return (
    <nav
      id="navbar"
      ref={navbarRef}
      className={cn(
        "ease fixed top-0 z-50 flex h-14 w-full items-center justify-evenly transition-all duration-100",
        "border-b border-transparent backdrop-blur-none",
        isScrolled && "border-stone-700/70 backdrop-blur-lg",
      )}
    >
      <Link
        href="#hero-section"
        className={cn(
          "relative border-l-2 px-2 text-lg font-extrabold tracking-tighter transition duration-150",
          "before:font-jp before:absolute before:-left-7 before:text-lg before:transition-all before:duration-150 before:content-['新']",
          currentStyles.link,
        )}
      >
        Kazyel
      </Link>

      <div className="relative flex items-center gap-x-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.id}
            href={`#${link.id}`}
            ref={(el) => {
              if (el) linkRefs.current[link.id] = el;
            }}
            className={cn(
              "relative text-xs font-medium transition-colors duration-150",
              currentStyles.link,
            )}
            onClick={() => setActiveSection(link.id)}
            onMouseEnter={() => setHoveredLink(link.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.name}
          </Link>
        ))}

        <AnimatePresence mode="wait">
          {activeSection && activeSection !== "hero-section" && (
            <motion.span
              ref={underlineRef}
              className={cn(
                "absolute -bottom-1 h-[1px] transition-colors duration-150",
                isOverlapping
                  ? hoveredLink === activeSection
                    ? "bg-black/50"
                    : "bg-black"
                  : hoveredLink === activeSection
                    ? "bg-off-w/60"
                    : "bg-off-w",
              )}
              {...underlineAnimation}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className={cn(
            "size-5 cursor-pointer transition-all duration-150",
            currentStyles.icon,
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          ></path>
        </svg>
        <button
          className={cn(
            "cursor-pointer rounded-md p-2 text-[0.625rem] font-bold transition-all duration-150",
            currentStyles.cv,
          )}
        >
          View CV
        </button>
      </div>
    </nav>
  );
}
