"use client";

import type { CustomMotion } from "@/lib/types";

import useNavbarState from "@/hooks/use-navbar-state";
import useOnClickOutside from "@/hooks/use-on-click-outside";
import useNavbarStyles, { type NavbarStyles } from "@/hooks/use-navbar-styles";
import { useCallback, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/constants/navbar";
import { cn } from "@/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import LanguageSwitcher from "@/components/language-switcher";
import { MobileNavbar } from "./mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar";
import { Code2 } from "lucide-react";
import Link from "next/link";

export const MOBILE_NAV_MOTION: CustomMotion<"div"> = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 5 },
  exit: { opacity: 0, y: 0 },
  transition: { type: "spring", stiffness: 400, damping: 30, mass: 0.3 },
} as const;

export const NAV_BUTTON_ANIMATION: CustomMotion<"button"> = {
  whileHover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  whileTap: { scale: 0.98 },
} as const;

export const NAV_UNDERLINE_MOTION = {
  type: "spring" as const,
  stiffness: 500,
  damping: 35,
  mass: 0.5,
} as const;

export default function Navbar() {
  const {
    isScrolled,
    isOverlapping,
    activeSection,
    hoveredLink,
    navbarRef,
    underlineRef,
    navbarLinksRef,
    linkRefs,
    underlineMotionProps,
    setHoveredLink,
    setActiveSection,
    startSmoothScroll,
    endSmoothScroll,
  } = useNavbarState();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentStyles: NavbarStyles = useNavbarStyles(
    hoveredLink!,
    activeSection,
    isOverlapping,
  );

  useOnClickOutside(dropdownRef, [setIsMobileOpen], isMobileOpen);

  const handleSectionTravel = useCallback(
    (linkId: string) => {
      const section = document.querySelector(`#${linkId}`);
      if (!section) return console.warn(`Section with ID "${linkId}" not found`);

      setActiveSection(linkId);
      startSmoothScroll();
      section.scrollIntoView({ behavior: "smooth" });

      const onScrollEnd = () => {
        endSmoothScroll();
        window.removeEventListener("scrollend", onScrollEnd);
      };

      if ("onscrollend" in window) {
        window.addEventListener("scrollend", onScrollEnd, { once: true });
      } else {
        setTimeout(onScrollEnd, 1100);
      }

      setIsMobileOpen(false);
    },
    [setActiveSection, startSmoothScroll, endSmoothScroll],
  );

  return (
    <nav
      ref={navbarRef}
      id="navbar"
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 z-50 flex w-full items-center justify-between py-3.5 pr-10 pl-16 transition-all duration-150",
        "border-b max-lg:pr-2 max-lg:pl-9",
        isScrolled ? "border-off-w/20 backdrop-blur-xl" : "border-none max-lg:bg-none",
        isOverlapping ? "border-black/20" : "border-off-w/20",
      )}
    >
      {/* Logo */}
      <div className="flex flex-1 max-md:flex-none">
        <button
          onClick={() => handleSectionTravel("hero-section")}
          aria-label="Go to home section"
          className={cn(
            "before:font-jp relative cursor-pointer border-l-2 pl-2 font-extrabold tracking-tighter transition-colors duration-150",
            "before:font-jp before:absolute before:top-0 before:-left-6 before:text-base before:transition-all before:duration-150 before:content-['新']",
            currentStyles.link,
          )}
        >
          Kazyel
        </button>
      </div>

      {/* Desktop Nav */}
      <DesktopNavbar
        links={NAV_LINKS}
        navbarLinksRef={navbarLinksRef}
        linkRefs={linkRefs}
        underlineRef={underlineRef}
        underlineMotionProps={underlineMotionProps}
        currentStyles={currentStyles}
        activeSection={activeSection}
        hoveredLink={hoveredLink}
        setHoveredLink={setHoveredLink}
        handleSectionTravel={handleSectionTravel}
      />

      {/* Right Side Controls */}
      <div className="flex flex-1 items-center justify-start gap-x-4.5 max-md:flex-none md:justify-end">
        <LanguageSwitcher currentStyles={currentStyles} />

        <Tooltip delayDuration={150}>
          <TooltipTrigger asChild>
            <Link
              href={"https://github.com/Kazyel/portfolio"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block"
            >
              <Code2 className={currentStyles.icon + " cursor-pointer"} />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="text-off-w text-xs font-medium tracking-tight">
            Source
          </TooltipContent>
        </Tooltip>

        <div className="flex items-center gap-4 md:gap-6">
          <MobileNavbar
            isOpen={isMobileOpen}
            toggle={() => setIsMobileOpen((prev) => !prev)}
            links={NAV_LINKS}
            handleSectionTravel={handleSectionTravel}
            currentStyles={currentStyles}
            dropdownRef={dropdownRef}
          />
        </div>
      </div>
    </nav>
  );
}
