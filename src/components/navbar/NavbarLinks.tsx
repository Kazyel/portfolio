import { forwardRef, type Ref } from "react";
import type { NavbarProps } from "../../utils/types";

const NavbarLinks = forwardRef(function NavbarLinks(
  {
    aboutActive,
    skillsActive,
    projectsActive,
    contactActive,
    mobile,
  }: NavbarProps,
  ref: Ref<HTMLUListElement>,
) {
  const links = [
    {
      title: "About",
      href: "/portfolio/about",
      isActive: aboutActive,
    },
    {
      title: "Skills",
      href: "/portfolio/skills",
      isActive: skillsActive,
    },
    {
      title: "Projects",
      href: "/portfolio/projects",
      isActive: projectsActive,
    },
    {
      title: "Contact",
      href: "/portfolio/contact",
      isActive: contactActive,
    },
  ];

  const navStyleOff =
    "after:ease after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:border-white after:transition-all hover:after:w-1/2 hover:after:border-b";

  const navStyleOn = "text-stone-500 font-medium cursor-default";

  const mobileDropdown = mobile
    ? "max-sm:hidden flex-col max-sm:flex p-6 gap-8 "
    : "max-sm:hidden gap-4";

  return (
    <>
      <ul className={`flex gap-6 max-sm:flex-col ${mobileDropdown}`} ref={ref}>
        {links.map(({ title, href, isActive }) => (
          <li key={title} className="relative">
            {!isActive ? (
              <a className={navStyleOff} href={href}>
                {title}
              </a>
            ) : (
              <p className={navStyleOn}>{title}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
});

export default NavbarLinks;
