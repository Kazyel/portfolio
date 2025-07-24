import { useCallback, useEffect, useLayoutEffect, useState, useRef } from "react";
import { debounce } from "lodash";

const SCROLL_THRESHOLD = 0;
const INTERSECTION_THRESHOLD = 0.75;
const DEBOUNCE_DELAY = 100;

export default function useNavbarState() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlapping, setIsOverlapping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [underlineProps, setUnderlineProps] = useState({ x: 0, width: 0 });

  const navbarRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const navbarLinksRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    aboutSectionRef.current = document.querySelector("#about-section");
  }, []);

  const handleScroll = useCallback(() => {
    const scrollYPosition = window.scrollY;
    const newIsScrolled = scrollYPosition > SCROLL_THRESHOLD;

    setIsScrolled((prev) => (prev !== newIsScrolled ? newIsScrolled : prev));
    const section = aboutSectionRef.current;
    const navbarEl = navbarRef.current;

    if (section && navbarEl) {
      const sectionRect = section.getBoundingClientRect();
      const navbarRect = navbarEl.getBoundingClientRect();
      const navbarCenterY = navbarRect.top + navbarRect.height / 2;

      const checkOverlap =
        navbarCenterY >= sectionRect.top && navbarCenterY <= sectionRect.bottom;
      setIsOverlapping((prev) => (prev !== checkOverlap ? checkOverlap : prev));
    }
  }, []);

  const updateUnderline = useCallback(() => {
    requestAnimationFrame(() => {
      if (activeSection === "hero-section") {
        setUnderlineProps({ x: 0, width: 0 });
        return;
      }

      const activeEl = linkRefs.current[activeSection];
      const container = navbarLinksRef.current;
      if (!activeEl || !container) return;

      const containerRect = container.getBoundingClientRect();
      const activeElRect = activeEl.getBoundingClientRect();

      const x = activeElRect.left - containerRect.left + 2;
      const width = activeElRect.width - 4;

      setUnderlineProps({ x, width });
    });
  }, [activeSection]);

  const handleResize = useCallback(() => {
    handleScroll();
    updateUnderline();
  }, [handleScroll, updateUnderline]);

  useEffect(() => {
    let scrollTicking = false;
    let resizeTicking = false;

    const throttledScroll = () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          handleScroll();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    const throttledResize = () => {
      if (!resizeTicking) {
        requestAnimationFrame(() => {
          handleResize();
          resizeTicking = false;
        });
        resizeTicking = true;
      }
    };

    handleScroll();
    handleResize();
    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", throttledResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", throttledResize);
    };
  }, [handleScroll, handleResize]);

  const handleIntersection = useCallback(
    debounce((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && !isAnimating) {
        setActiveSection(entry.target.id);
      }
    }, DEBOUNCE_DELAY),
    [isAnimating],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => handleIntersection(entry), {
      threshold: INTERSECTION_THRESHOLD,
    });

    const sections = document.querySelectorAll("section[id$='-section']");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      handleIntersection.cancel();
    };
  }, [handleIntersection]);

  useLayoutEffect(() => {
    if (activeSection && activeSection !== "hero-section") {
      updateUnderline();
    }
  }, [activeSection, updateUnderline]);

  useEffect(() => {
    const underlineEl = underlineRef.current;
    if (!underlineEl) return;

    const handleAnimationStart = () => setIsAnimating(true);
    const handleAnimationEnd = () => setIsAnimating(false);

    underlineEl.addEventListener("transitionstart", handleAnimationStart);
    underlineEl.addEventListener("transitionend", handleAnimationEnd);

    return () => {
      underlineEl.removeEventListener("transitionstart", handleAnimationStart);
      underlineEl.removeEventListener("transitionend", handleAnimationEnd);
    };
  }, []);

  return {
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
    updateUnderline,
  };
}
