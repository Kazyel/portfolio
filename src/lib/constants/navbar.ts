export const LINK_DARK =
  "text-black before:text-black border-black hover:border-black/50 hover:text-black/50 hover:before:text-black/50 transition-all duration-200 ease-in-out";

export const LINK_LIGHT =
  "text-off-w before:text-off-w border-off-w hover:border-off-w/60 hover:text-off-w/60 hover:before:text-off-w/60 transition-all duration-200 ease-in-out";

export const ICON_DARK =
  "stroke-black hover:stroke-black/50 transition-all duration-200 ease-in-out";
export const ICON_LIGHT =
  "stroke-off-w hover:stroke-off-w/60 transition-all duration-200 ease-in-out";

export const CV_DARK =
  "bg-black hover:bg-black/50 text-off-w transition-all duration-200 ease-in-out";
export const CV_LIGHT =
  "bg-off-w hover:bg-off-w/35 hover:text-off-w text-black transition-all duration-200 ease-in-out";

export const MOBILE_NAVBAR_DARK = "bg-black";
export const MOBILE_NAVBAR_LIGHT = "bg-off-w";

export const NAV_LINKS = [
  { name: "about", id: "about-section" },
  { name: "projects", id: "projects-section" },
  { name: "contact", id: "contact-section" },
] as const;
