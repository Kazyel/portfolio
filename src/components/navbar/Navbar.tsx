import { useRef } from "react";

const Navbar = () => {
  const navbarLogo = useRef<HTMLAnchorElement>(null);
  const languageIcon = useRef<SVGSVGElement>(null);

  const options = {
    rootMargin: "0px 0px -100% 0px",
  };

  const callback = (entries: IntersectionObserverEntry[]) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbarLogo.current?.classList.remove("text-off-w");
        navbarLogo.current?.classList.remove("border-off-w");
        navbarLogo.current?.classList.add("text-black");
        navbarLogo.current?.classList.add("border-black");

        languageIcon.current?.classList.remove("stroke-off-w");
        languageIcon.current?.classList.add("stroke-black");
      } else {
        navbarLogo.current?.classList.remove("text-black");
        navbarLogo.current?.classList.remove("border-black");
        navbarLogo.current?.classList.add("text-off-w")
        navbarLogo.current?.classList.add("border-off-w")

        languageIcon.current?.classList.remove("stroke-black");
        languageIcon.current?.classList.add("stroke-off-w");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector("#about-section")!) 

  return (
    <nav
      id="navbar"
      className="mt-8 mb-[-64px] h-[32px] flex items-center justify-around  text-off-w max-xl:my-0 max-xl:h-auto max-xl:px-5 max-xl:justify-between  max-xl:w-full max-xl:border-b max-xl:border-stone-700 max-xl:py-4 sm:min-w-[676px] z-10"
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
