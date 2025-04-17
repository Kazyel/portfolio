import { useCallback, useEffect, useLayoutEffect, useState, useRef } from "react";
import debounce from "lodash/debounce";

export default function useNavbarLogic() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverlapping, setIsOverlapping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [activeSection, setActiveSection] = useState<string>("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const [underlineProps, setUnderlineProps] = useState({ x: 0, width: 0 });

  const navbarRef = useRef<HTMLElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll and resize handling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollYPosition = window.scrollY;

          setIsScrolled((prev) => {
            const newPosition = scrollYPosition > 0;
            return prev !== newPosition ? newPosition : prev;
          });

          const section = document.querySelector("#about-section");
          const navbarEl = navbarRef.current;

          if (!section || !navbarEl) return;

          const sectionRect = section.getBoundingClientRect();
          const navbarRect = navbarEl.getBoundingClientRect();
          const navbarCenterY = navbarRect.top + navbarRect.height / 2;

          const checkOverlap =
            navbarCenterY >= sectionRect.top && navbarCenterY <= sectionRect.bottom;

          setIsOverlapping((prev) => (prev !== checkOverlap ? checkOverlap : prev));

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Update underline position
  const updateUnderline = () => {
    requestAnimationFrame(() => {
      if (activeSection === "hero-section") {
        setUnderlineProps({ x: 0, width: 0 });
        return;
      }

      const activeEl = linkRefs.current[activeSection];
      if (!activeEl) return;

      const { offsetLeft, offsetWidth } = activeEl;
      setUnderlineProps({ x: offsetLeft, width: offsetWidth });
    });
  };

  // Intersection observer handler
  const handleIntersection = useCallback(
    debounce((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting || isAnimating) return;
      setActiveSection(entry.target.id);
    }, 100),
    [isAnimating],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        handleIntersection(entry);
      },
      {
        threshold: 0.75,
      },
    );

    const sections = document.querySelectorAll("section[id$='-section']");
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      handleIntersection.cancel();
    };
  }, [handleIntersection]);

  // Animation handling
  useLayoutEffect(() => {
    if (!hoveredLink && activeSection) {
      updateUnderline();
    }

    const handleAnimationStart = () => {
      setIsAnimating(true);
    };

    const handleAnimationEnd = () => {
      setIsAnimating(false);
    };

    if (underlineRef.current) {
      underlineRef.current.addEventListener("animationstart", handleAnimationStart);
      underlineRef.current.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (underlineRef.current) {
        underlineRef.current.removeEventListener("animationstart", handleAnimationStart);
        underlineRef.current.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [activeSection, hoveredLink]);

  return {
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
    updateUnderline,
  };
}
