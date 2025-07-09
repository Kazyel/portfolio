"use client";

import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import useNavbar from "@/hooks/use-navbar";
import LanguageSwitcher from "./language-switcher";

import {
  LINK_DARK,
  LINK_LIGHT,
  ICON_DARK,
  ICON_LIGHT,
  CV_DARK,
  CV_LIGHT,
  NAV_LINKS,
  MOBILE_NAVBAR_DARK,
  MOBILE_NAVBAR_LIGHT,
} from "@/lib/constants/navbar";

const UNDERLINE_TIMING = {
  initial: { width: 0, opacity: 0, x: 250 },
  transition: {
    type: "spring" as const,
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  },
  exit: { opacity: 0, x: 250, width: 0 },
};

const MOBILE_NAV_ANIMATION: Omit<HTMLMotionProps<"div">, "ref" | "className"> = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  },
};

export default function Navbar() {
  const {
    isScrolled,
    isOverlapping,
    activeSection,
    underlineProps,
    hoveredLink,
    navbarRef,
    underlineRef,
    navbarLinksRef,
    linkRefs,
    setHoveredLink,
    setActiveSection,
  } = useNavbar();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const currentStyles = useMemo(
    () => ({
      link: isOverlapping ? LINK_DARK : LINK_LIGHT,
      cv: isOverlapping ? CV_DARK : CV_LIGHT,
      icon: isOverlapping ? ICON_DARK : ICON_LIGHT,
      mobileNavbar: isOverlapping ? MOBILE_NAVBAR_DARK : MOBILE_NAVBAR_LIGHT,
      mobileLink: isOverlapping ? LINK_LIGHT : LINK_DARK,
    }),
    [isOverlapping],
  );

  const underlineAnimation: Omit<HTMLMotionProps<"span">, "ref" | "className"> = {
    ...UNDERLINE_TIMING,
    animate: {
      x: underlineProps.x,
      width: underlineProps.width,
      opacity: activeSection ? 1 : 0,
    },
  };

  const getUnderlineColor = () => {
    const isHovered = hoveredLink === activeSection;
    return isOverlapping
      ? isHovered
        ? "bg-black/50"
        : "bg-black"
      : isHovered
        ? "bg-off-w/60"
        : "bg-off-w";
  };

  const handleLinkClick = (linkId: string) => {
    const currentSection = document.querySelector(`#${linkId}`);
    setActiveSection(linkId);
    currentSection?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      ref={navbarRef}
      className={cn(
        "fixed top-0 z-50 flex h-13 w-full items-center",
        "max-md:justify-between max-md:px-4 max-md:pl-10",
        "ease border-b border-transparent backdrop-blur-none transition-all duration-100",
        isScrolled && "border-stone-700/70 backdrop-blur-xl",
      )}
    >
      {/* Logo */}
      <div className="flex flex-1 justify-end max-md:flex-none">
        <button
          className={cn(
            "relative cursor-pointer border-l-2 px-2 text-lg font-extrabold tracking-tighter transition-colors duration-150",
            "before:font-jp before:absolute before:-left-7 before:text-lg before:transition-all before:duration-150 before:content-['新']",
            currentStyles.link,
          )}
          onClick={() => handleLinkClick("hero-section")}
        >
          Kazyel
        </button>
      </div>

      {/* Desktop Navigation */}
      <div
        ref={navbarLinksRef}
        className="relative flex flex-1 items-center justify-center gap-x-8 max-md:hidden"
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            ref={(el) => {
              if (el) linkRefs.current[link.id] = el;
            }}
            className={cn(
              "cursor-pointer px-2 text-xs font-medium transition-colors duration-150",
              currentStyles.link,
            )}
            onClick={() => handleLinkClick(link.id)}
            onMouseEnter={() => setHoveredLink(link.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.name}
          </button>
        ))}

        {/* Animated Underline */}
        <AnimatePresence mode="sync">
          {activeSection && activeSection !== "hero-section" && (
            <motion.span
              ref={underlineRef}
              className={cn(
                "absolute -bottom-1 left-0 h-px transition-colors duration-150",
                getUnderlineColor(),
              )}
              {...underlineAnimation}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Right Side Controls */}
      <div className="flex flex-1 items-center justify-start gap-x-3 max-md:flex-none">
        <LanguageSwitcher currentStyles={currentStyles} />

        <div className="flex items-center gap-3 md:gap-6">
          {/* Mobile Menu */}
          <div ref={dropdownRef} className="relative md:hidden">
            <Menu
              className={cn(
                "size-7 cursor-pointer transition-all duration-150",
                currentStyles.icon,
              )}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  {...MOBILE_NAV_ANIMATION}
                  className={cn(
                    "absolute top-12 left-0 flex flex-col gap-y-4 rounded-md border border-black/65 p-3 shadow-md",
                    currentStyles.mobileNavbar,
                  )}
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.id}
                      href={`#${link.id}`}
                      className={cn(
                        "text-sm font-medium transition-colors duration-150 md:text-sm",
                        currentStyles.mobileLink,
                      )}
                      onClick={() => handleLinkClick(link.id)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CV Link */}
          <Link
            href="/pdf/cv-ptbr.pdf"
            target="_blank"
            className={cn(
              "cursor-pointer rounded-md p-2 text-[10px] font-bold transition-all duration-150",
              currentStyles.cv,
            )}
          >
            View CV
          </Link>
        </div>
      </div>
    </nav>
  );
}
