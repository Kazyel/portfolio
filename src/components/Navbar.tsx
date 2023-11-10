import { useState } from "react";

type NavbarProps = {
  aboutActive?: boolean | undefined;
  skillsActive?: boolean | undefined;
  projectsActive?: boolean | undefined;
  contactActive?: boolean | undefined;
};

const Navbar = ({
  aboutActive,
  skillsActive,
  projectsActive,
  contactActive,
}: NavbarProps) => {
  const links = [
    {
      title: "About",
      href: "/about",
      isActive: aboutActive,
    },
    {
      title: "Skills",
      href: "/skills",
      isActive: skillsActive,
    },
    {
      title: "Projects",
      href: "/projects",
      isActive: projectsActive,
    },
    {
      title: "Contact",
      href: "/contact",
      isActive: contactActive,
    },
  ];

  const navStyleOff =
    "after:ease after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:border-white after:transition-all after:duration-[250ms] hover:after:w-full hover:after:border-b";
  const navStyleOn = "text-stone-500 font-medium";

  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      id="navbar"
      className="fixed z-10 mt-8 flex h-fit items-center justify-between px-9 py-4 text-off-w  max-sm:w-full sm:min-w-[676px] sm:px-0"
    >
      <a href="/" className="border-l-2 px-2 text-2xl font-bold">
        Kazyel
      </a>

      <ul className="flex items-center gap-4 max-sm:hidden">
        {links.map((link) => (
          <li key={link.title} className="relative">
            <a
              className={link.isActive ? navStyleOn : navStyleOff}
              href={link.href}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
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
          <div
            onClick={() => {
              setIsActive((prev) => !prev);
            }}
          >
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
            <div className="absolute top-12 h-[72px] w-[72px] bg-black">
              teste
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
