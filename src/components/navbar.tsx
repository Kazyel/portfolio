"use client";

import type { CustomMotion } from "@/lib/types";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants/navbar";
import useNavbarState from "@/hooks/use-navbar-state";
import useOnClickOutside from "@/hooks/use-on-click-outside";
import useNavbarStyles from "@/hooks/use-navbar-styles";

import { Menu, X, FileUser, Download } from "lucide-react";

import Link from "next/link";
import LanguageSwitcher from "./language-switcher";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

const MOBILE_NAV_MOTION: CustomMotion<"div"> = {
  initial: {
    opacity: 0,
    y: -5,
    filter: "blur(2px)",
  },
  animate: {
    opacity: 1,
    y: 5,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: 0,
    filter: "blur(2px)",
  },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.3,
  },
} as const;

const BUTTON_ANIMATION: CustomMotion<"button"> = {
  whileHover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  whileTap: { scale: 0.98 },
} as const;

const UNDERLINE_MOTION_CONFIG = {
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
    underlineProps,
    hoveredLink,
    navbarRef,
    underlineRef,
    navbarLinksRef,
    linkRefs,
    setHoveredLink,
    setActiveSection,
  } = useNavbarState();

  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isAnyMenuOpen, setIsAnyMenuOpen] = useState(false);
  const [startingPoint, setStartingPoint] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentStyles = useNavbarStyles(hoveredLink!, activeSection, isOverlapping);
  const t = useTranslations("Navbar");
  const isMobile = useIsMobile();

  useOnClickOutside(
    dropdownRef,
    [setIsMobileDropdownOpen, setIsAnyMenuOpen],
    isMobileDropdownOpen,
  );

  useEffect(() => {
    if (isMobile) return;

    const activeEl = linkRefs.current[activeSection];
    const container = navbarLinksRef.current;
    if (!activeEl || !container) return;

    const containerRect = container.getBoundingClientRect();
    const activeElRect = activeEl.getBoundingClientRect();
    setStartingPoint(activeElRect.left - containerRect.left);
  }, [activeSection]);

  const handleSectionTravel = (linkId: string) => {
    const currentSection = document.querySelector(`#${linkId}`);
    if (!currentSection) {
      console.warn(`Section with ID "${linkId}" not found`);
      return;
    }
    setActiveSection(linkId);
    currentSection?.scrollIntoView({ behavior: "smooth" });

    setIsMobileDropdownOpen(false);
    setIsAnyMenuOpen(false);
  };

  const underlineMotion: CustomMotion<"span"> = {
    initial: {
      width: 0,
      opacity: 0,
      x: startingPoint,
    },
    transition: UNDERLINE_MOTION_CONFIG,
    animate: {
      x: underlineProps.x,
      width: underlineProps.width,
      opacity: activeSection ? 1 : 0,
    },
    exit: { opacity: 0, x: startingPoint, width: 0 },
  };

  const handleMenuToggle = () => {
    setIsMobileDropdownOpen((prev) => !prev);
    setIsAnyMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isAnyMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
            onClick={() => {
              setIsAnyMenuOpen(false);
              setIsMobileDropdownOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <nav
        id="navbar"
        ref={navbarRef}
        className={cn(
          "h-navbar-height fixed top-0 z-50 flex w-full items-center transition-all duration-100",
          "max-lg:px-4 max-lg:pl-10 max-md:justify-between",
          "border-b border-transparent backdrop-blur-none",
          isOverlapping && isScrolled ? "max-lg:bg-off-w" : "max-lg:bg-[#0c0a08]",
          isScrolled
            ? "border-stone-700/40 backdrop-blur-xl max-lg:backdrop-blur-none"
            : "max-lg:bg-transparent",
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div
          className={cn(
            "flex flex-1 justify-end",
            "max-md:flex-none md:max-lg:justify-start",
          )}
        >
          <a
            className={cn(
              "relative cursor-pointer border-l-2 px-2 text-lg font-extrabold tracking-tighter transition-colors duration-150",
              "before:font-jp before:absolute before:-left-7 before:text-lg before:transition-all before:duration-150 before:content-['新']",
              currentStyles.link,
            )}
            onClick={() => handleSectionTravel("hero-section")}
            aria-label="Go to home section"
          >
            Kazyel
          </a>
        </div>

        {/* Desktop Navigation */}
        <div
          ref={navbarLinksRef}
          className="relative flex flex-1 items-center justify-center gap-x-8 max-md:hidden"
          role="desktop-navigation"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              ref={(el) => {
                if (el && linkRefs.current[link.id] !== el) {
                  linkRefs.current[link.id] = el;
                }
              }}
              className={cn(
                "relative cursor-pointer px-2 text-xs font-medium",
                currentStyles.link,
              )}
              onClick={() => handleSectionTravel(link.id)}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              role="navigation-link"
            >
              {t(link.name)}
            </button>
          ))}

          {/* Animated Underline */}
          <AnimatePresence mode="sync">
            {activeSection && activeSection !== "hero-section" && (
              <motion.span
                ref={underlineRef}
                {...underlineMotion}
                className={cn(
                  "absolute -bottom-1 left-0 h-px transition-colors duration-150",
                  currentStyles.underline,
                )}
                aria-hidden="true"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Right Side Controls */}
        <div
          className={cn(
            "flex flex-1 items-center justify-start gap-x-4",
            "max-md:flex-none md:max-lg:justify-end",
          )}
        >
          {/* Mobile CV Link */}
          <Link
            href="/pdf/cv-ptbr.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("cursor-pointer rounded-sm p-1", "md:hidden", currentStyles.cv)}
            aria-label="Download CV (opens in new tab)"
          >
            <FileUser className="size-5" />
          </Link>

          {/* Language Switcher */}
          <LanguageSwitcher
            currentStyles={currentStyles}
            setIsAnyMenuOpen={setIsAnyMenuOpen}
          />

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:gap-6">
            <div ref={dropdownRef} className="relative flex items-center md:hidden">
              <motion.button
                {...BUTTON_ANIMATION}
                className="cursor-pointer"
                onClick={handleMenuToggle}
                type="button"
                aria-controls="mobile-menu"
                aria-haspopup="menu"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileDropdownOpen}
              >
                <motion.div
                  animate={{
                    rotate: isMobileDropdownOpen ? 90 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileDropdownOpen ? (
                    <X className={cn("size-7 cursor-pointer", currentStyles.icon)} />
                  ) : (
                    <Menu className={cn("size-7 cursor-pointer", currentStyles.icon)} />
                  )}
                </motion.div>
              </motion.button>

              {/* Mobile Dropdown */}
              <AnimatePresence>
                {isMobileDropdownOpen && (
                  <motion.div
                    {...MOBILE_NAV_MOTION}
                    className={cn(
                      "absolute top-12 right-0 flex min-w-max flex-col gap-y-5 rounded-md border border-black/25 p-4 shadow-md",
                      currentStyles.mobileNavbar,
                    )}
                    id="mobile-menu"
                    role="menu"
                    aria-label="Mobile navigation menu"
                  >
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.id}
                        className={cn(
                          "cursor-pointer self-start text-base font-medium transition-colors duration-150",
                          currentStyles.mobileLink,
                        )}
                        onClick={() => handleSectionTravel(link.id)}
                        role="menuitem"
                      >
                        {t(link.name)}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop CV Link */}
            <Link
              href="/pdf/cv-ptbr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex cursor-pointer items-center gap-x-1 rounded-md p-2 text-[10px] font-medium transition-all duration-150",
                "max-md:hidden",
                currentStyles.cv,
              )}
              aria-label="Download CV (opens in new tab)"
            >
              <Download className="size-4" />
              {t("cv")}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
