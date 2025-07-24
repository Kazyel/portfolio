import { useCallback, useEffect, useLayoutEffect, useState, useRef } from "react";
import { debounce } from "lodash";

const SCROLL_THRESHOLD = 0;
const INTERSECTION_THRESHOLD = 0.75;
const DEBOUNCE_DELAY = 150;
const RESIZE_DEBOUNCE_DELAY = 250;

const isMobile =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);

export default function useNavbarState() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlapping, setIsOverlapping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [underlineProps, setUnderlineProps] = useState({ x: 0, width: 0 });

  const navbarRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLElement | null>>({});
  const navbarLinksRef = useRef<HTMLDivElement>(null);

  const sectionsRef = useRef<NodeListOf<Element> | null>(null);
  const cachedRects = useRef<Map<string, DOMRect>>(new Map());
  const lastScrollY = useRef(0);
  const isScrollingRef = useRef(false);

  const batchedDOMReads = useCallback(() => {
    return requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const section = document.querySelector("#about-section");
      const navbarEl = navbarRef.current;

      return { scrollY, section, navbarEl };
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (Math.abs(scrollY - lastScrollY.current) < 2) return;
    lastScrollY.current = scrollY;

    const newIsScrolled = scrollY > SCROLL_THRESHOLD;
    setIsScrolled((prev) => (prev !== newIsScrolled ? newIsScrolled : prev));

    const section = document.querySelector("#about-section");
    const navbarEl = navbarRef.current;

    if (section && navbarEl) {
      const cacheKey = "overlap-check";
      let sectionRect = cachedRects.current.get(cacheKey);

      if (!sectionRect || isScrollingRef.current) {
        sectionRect = section.getBoundingClientRect();
        cachedRects.current.set(cacheKey, sectionRect);
      }

      const navbarRect = navbarEl.getBoundingClientRect();
      const navbarCenterY = navbarRect.top + navbarRect.height / 2;

      const checkOverlap =
        navbarCenterY >= sectionRect.top && navbarCenterY <= sectionRect.bottom;
      setIsOverlapping((prev) => (prev !== checkOverlap ? checkOverlap : prev));
    }
  }, []);

  const updateUnderline = useCallback(() => {
    const scheduleUpdate =
      isMobile && isScrollingRef.current
        ? (fn: () => void) => setTimeout(fn, 0)
        : requestAnimationFrame;

    scheduleUpdate(() => {
      if (activeSection === "hero-section") {
        setUnderlineProps({ x: 0, width: 0 });
        return;
      }

      const activeEl = linkRefs.current[activeSection];
      const container = navbarLinksRef.current;

      if (!activeEl || !container) return;

      const cacheKey = `underline-${activeSection}`;
      let cachedMeasurement = cachedRects.current.get(cacheKey);

      if (!cachedMeasurement) {
        const containerRect = container.getBoundingClientRect();
        const activeElRect = activeEl.getBoundingClientRect();

        const x = activeElRect.left - containerRect.left + 2;
        const width = activeElRect.width - 4;

        cachedMeasurement = { x, width } as any;
        cachedRects.current.set(cacheKey, cachedMeasurement!);
      }

      setUnderlineProps({
        x: (cachedMeasurement as any).x,
        width: (cachedMeasurement as any).width,
      });
    });
  }, [activeSection]);

  const handleResize = useCallback(
    debounce(() => {
      cachedRects.current.clear();
      handleScroll();
      updateUnderline();
    }, RESIZE_DEBOUNCE_DELAY),
    [handleScroll, updateUnderline],
  );

  useEffect(() => {
    let rafId: number | null = null;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const throttledScroll = () => {
      if (rafId) return;

      isScrollingRef.current = true;

      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;

        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      });
    };

    const scrollOptions: AddEventListenerOptions = {
      passive: true,
      capture: false,
    };

    handleScroll();
    window.addEventListener("scroll", throttledScroll, scrollOptions);
    window.addEventListener("resize", handleResize, scrollOptions);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleResize);
      handleResize.cancel();
    };
  }, [handleScroll, handleResize]);

  const handleIntersection = useCallback(
    debounce(
      (entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && !isAnimating) {
          setActiveSection(entry.target.id);
          cachedRects.current.delete(`underline-${entry.target.id}`);
        }
      },
      isMobile ? DEBOUNCE_DELAY + 50 : DEBOUNCE_DELAY,
    ),
    [isAnimating],
  );

  useEffect(() => {
    const threshold = isMobile ? INTERSECTION_THRESHOLD - 0.1 : INTERSECTION_THRESHOLD;

    const observer = new IntersectionObserver(([entry]) => handleIntersection(entry), {
      threshold,
      rootMargin: isMobile ? "20px" : "0px",
    });

    if (!sectionsRef.current) {
      sectionsRef.current = document.querySelectorAll("section[id$='-section']");
    }

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      handleIntersection.cancel();
    };
  }, [handleIntersection]);

  useEffect(() => {
    if (activeSection && activeSection !== "hero-section") {
      if (isMobile && isScrollingRef.current) {
        const timeoutId = setTimeout(() => updateUnderline(), 100);
        return () => clearTimeout(timeoutId);
      } else {
        updateUnderline();
      }
    }
  }, [activeSection, updateUnderline]);

  useLayoutEffect(() => {
    if (!hoveredLink && activeSection) {
      updateUnderline();
    }
  }, [activeSection, hoveredLink, updateUnderline]);

  useEffect(() => {
    const underlineEl = underlineRef.current;
    if (!underlineEl) return;

    const handleAnimationStart = () => setIsAnimating(true);
    const handleAnimationEnd = () => setIsAnimating(false);

    const options: AddEventListenerOptions = { passive: true };

    underlineEl.addEventListener("animationstart", handleAnimationStart, options);
    underlineEl.addEventListener("animationend", handleAnimationEnd, options);

    return () => {
      underlineEl.removeEventListener("animationstart", handleAnimationStart);
      underlineEl.removeEventListener("animationend", handleAnimationEnd);
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
    updateUnderline: useCallback(() => {
      cachedRects.current.clear();
      updateUnderline();
    }, [updateUnderline]),
  };
}
