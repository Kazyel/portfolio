import { useRef, type RefObject } from "react";

const Navbar = () => {
  const navbarLogo = useRef<HTMLAnchorElement>(null);
  const languageIcon = useRef<SVGSVGElement>(null);

  const addAndRemoveClassName = (ref: RefObject<any>, addString: string[], removeString: string[]) => {
    for (const className of addString) {
      ref.current.classList.add(className);
    }

    for (const className of removeString) {
      ref.current.classList.remove(className);
    }
  };

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        addAndRemoveClassName(navbarLogo, ["text-black", "border-black"], ["text-off-w", "border-off-w"]);
        addAndRemoveClassName(languageIcon, ["stroke-black"], ["stroke-off-w"]);
        return;
      }

      addAndRemoveClassName(navbarLogo, ["text-off-w", "border-off-w"], ["text-black", "border-black"]);
      addAndRemoveClassName(languageIcon, ["stroke-off-w"], ["stroke-black"]);
    });
  };

  const observer = new IntersectionObserver(intersectionCallback, { rootMargin: "0px 0px -100% 0px" });
  observer.observe(document.querySelector("#about-section")!) 

  return (
    <nav
      id="navbar"
      className="mt-8 mb-[-64px] h-[32px] flex items-center justify-around  text-off-w max-xl:my-0 max-xl:h-auto max-xl:px-5 max-xl:justify-between max-xl:w-full max-xl:border-b max-xl:border-stone-700 max-xl:py-4 sm:min-w-[676px] z-10"
    >
        <a ref={navbarLogo} href="/portfolio" className="border-l-2 px-2 text-2xl font-bold text-off-w border-off-w">
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
            className="h-7 w-7 cursor-pointer"
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
};

export default Navbar;
