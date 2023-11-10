export type SkillProps = {
  img: ImageMetadata;
  skill: string;
  text: string;
  alt: string;
  className?: string;
};

export type NavbarProps = {
  aboutActive?: boolean | undefined;
  skillsActive?: boolean | undefined;
  projectsActive?: boolean | undefined;
  contactActive?: boolean | undefined;
  mobile?: boolean;
};
