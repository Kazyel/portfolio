import { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import type { NavbarProps } from "../../utils/types";

const Navbar = ({
  aboutActive,
  skillsActive,
  projectsActive,
  contactActive,
  mobile,
}: NavbarProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleDropdown = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav
      id="navbar"
      className="fixed z-10 mt-8 flex items-center justify-between px-9 py-4 text-off-w max-sm:w-full max-xl:border-b max-xl:border-stone-700 max-xl:bg-darkest max-xl:pb-6 max-xl:pt-6 sm:min-w-[676px] max-xl:sticky max-xl:top-0 max-xl:mt-0 sm:px-0 max-xl:w-full sm:max-xl:justify-evenly"
    >
      <a href="/portfolio" className="border-l-2 px-2 text-2xl font-bold">
        Kazyel
      </a>

      {/* Navbar Links */}
      <NavbarLinks
        aboutActive={aboutActive}
        contactActive={contactActive}
        projectsActive={projectsActive}
        skillsActive={skillsActive}
      />

      <div className="flex gap-4">
        <svg
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="ease h-7 w-7 cursor-pointer transition duration-300 hover:drop-shadow-[0px_0px_10px_#f3e5d7]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          ></path>
        </svg>

        <div className="relative flex sm:hidden">
          <div onClick={handleDropdown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {isActive ? (
            <div className="top-[72px] absolute right-0 flex rounded-lg border border-stone-700 bg-darkest">
              <NavbarLinks
                aboutActive={aboutActive}
                contactActive={contactActive}
                projectsActive={projectsActive}
                skillsActive={skillsActive}
                mobile={true}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
