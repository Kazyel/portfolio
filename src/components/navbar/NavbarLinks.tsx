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
    "after:ease after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:border-white after:transition-all after:duration-[250ms] hover:after:w-full hover:after:border-b";
  const navStyleOn = "text-stone-500 font-medium";

  const mobileDropdown = mobile
    ? "flex-col max-sm:flex p-10 gap-8"
    : "max-sm:hidden gap-4";

  return (
    <>
      <ul className={`flex items-center ${mobileDropdown}`}>
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
    </>
  );
};

export default NavbarLinks;
