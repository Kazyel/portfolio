import type { NavbarProps } from "../../utils/types";

const NavbarLinks = ({
  aboutActive,
  skillsActive,
  projectsActive,
  contactActive,
  mobile,
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
    "after:ease after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:border-white after:transition-all hover:after:w-1/2 hover:after:border-b";

  const navStyleOn = "text-stone-500 font-medium";

  const mobileDropdown = mobile
    ? "flex-col max-sm:flex p-10 gap-8"
    : "max-sm:hidden gap-4";

  return (
    <>
      <ul className={`flex items-center gap-6 ${mobileDropdown}`}>
        {links.map(({ title, href, isActive }) => (
          <li key={title} className="relative">
            <a className={isActive ? navStyleOn : navStyleOff} href={href}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarLinks;
