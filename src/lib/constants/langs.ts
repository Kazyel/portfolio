import {
  type IconType,
  SiGo,
  SiGnubash,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFastify,
  SiPrisma,
  SiPostgresql,
  SiNodedotjs,
  SiPython,
  SiNextdotjs,
  SiGit,
} from "@icons-pack/react-simple-icons";

const LANGUAGES = {
  go: { src: SiGo, alt: "Go logo" },
  bash: { src: SiGnubash, alt: "Bash logo" },
  react: { src: SiReact, alt: "React logo" },
  tailwind: { src: SiTailwindcss, alt: "Tailwind logo" },
  ts: { src: SiTypescript, alt: "TypeScript logo" },
  js: { src: SiJavascript, alt: "JavaScript logo" },
  fastify: { src: SiFastify, alt: "Fastify logo" },
  prisma: { src: SiPrisma, alt: "Prisma logo" },
  postgresql: { src: SiPostgresql, alt: "PostgreSQL logo" },
  node: { src: SiNodedotjs, alt: "Node logo" },
  python: { src: SiPython, alt: "Python logo" },
  nextjs: { src: SiNextdotjs, alt: "NextJS logo" },
  git: { src: SiGit, alt: "Git logo" },
} satisfies Record<
  string,
  {
    src: IconType;
    alt: string;
  }
>;

export type ImagesData = typeof LANGUAGES;

export default LANGUAGES;
