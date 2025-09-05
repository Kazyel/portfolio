"use client";

import type { CustomMotion } from "@/lib/types";
import type { LanguageCode } from "@/lib/constants/langs";

import useNavbarState from "@/hooks/use-navbar-state";
import useOnClickOutside from "@/hooks/use-on-click-outside";
import useNavbarStyles from "@/hooks/use-navbar-styles";
import { useCallback, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { NAV_LINKS } from "@/lib/constants/navbar";
import { cn } from "@/lib/utils";

import { MobileNavbar } from "./mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar";
import { NavbarLogo } from "./navbar-logo";
import { CVLink } from "./cv-link";
import { MotionWrapper } from "@/components/motion-wrapper";
import LanguageSwitcher from "@/components/language-switcher";

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

  const t = useTranslations("Navbar");
  const locale = useLocale() as LanguageCode;

  const currentStyles = useNavbarStyles(
    hoveredLink!,
    activeSection,
    isOverlapping,
  );

  useOnClickOutside(dropdownRef, [setIsMobileOpen], isMobileOpen);

  const handleSectionTravel = useCallback(
    (linkId: string) => {
      const section = document.querySelector(`#${linkId}`);
      if (!section)
        return console.warn(`Section with ID "${linkId}" not found`);

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
    <MotionWrapper>
      <nav
        ref={navbarRef}
        id="navbar"
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          "h-navbar-height fixed top-0 z-50 flex w-full items-center transition-all duration-150",
          "border-b max-lg:px-4 max-lg:pl-10 max-md:justify-between",
          isScrolled
            ? "border-stone-700/40 backdrop-blur-xl"
            : "border-transparent max-lg:bg-none",
        )}
      >
        {/* Logo */}
        <div className="flex flex-1 justify-end max-md:flex-none md:max-lg:justify-start">
          <NavbarLogo
            currentStyles={currentStyles}
            onClick={() => handleSectionTravel("hero-section")}
          />
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
        <div className="flex flex-1 items-center justify-start gap-x-4 max-md:flex-none md:max-lg:justify-end">
          <CVLink locale={locale} currentStyles={currentStyles} isMobile />
          <LanguageSwitcher currentStyles={currentStyles} />

          <div className="flex items-center gap-4 md:gap-6">
            <MobileNavbar
              isOpen={isMobileOpen}
              toggle={() => setIsMobileOpen((prev) => !prev)}
              links={NAV_LINKS}
              handleSectionTravel={handleSectionTravel}
              currentStyles={currentStyles}
              dropdownRef={dropdownRef}
            />

            <CVLink locale={locale} currentStyles={currentStyles} />
          </div>
        </div>
      </nav>
    </MotionWrapper>
  );
}
