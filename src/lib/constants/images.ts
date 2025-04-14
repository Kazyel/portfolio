import Go from "@/assets/langs/go.svg";
import Bash from "@/assets/langs/bash.svg";
import React from "@/assets/langs/react.svg";
import Astro from "@/assets/langs/astro.svg";
import Tailwind from "@/assets/langs/tailwind.svg";
import TS from "@/assets/langs/ts.svg";
import JS from "@/assets/langs/js.svg";
import Fastify from "@/assets/langs/fastify.svg";
import Prisma from "@/assets/langs/prisma.svg";
import PostgreSQL from "@/assets/langs/postgresql.svg";
import Node from "@/assets/langs/node.svg";
import Python from "@/assets/langs/python.svg";
import NextJS from "@/assets/langs/next-js.svg";
import Git from "@/assets/langs/git.svg";

type ImagesData = Record<string, Record<string, string>>;

const images: ImagesData = {
  go: { src: Go.src, alt: "Go logo" },
  bash: { src: Bash.src, alt: "Bash logo" },
  react: { src: React.src, alt: "React logo" },
  astro: { src: Astro.src, alt: "Astro logo" },
  tailwind: { src: Tailwind.src, alt: "Tailwind logo" },
  ts: { src: TS.src, alt: "TypeScript logo" },
  js: { src: JS.src, alt: "JavaScript logo" },
  fastify: { src: Fastify.src, alt: "Fastify logo" },
  prisma: { src: Prisma.src, alt: "Prisma logo" },
  postgresql: { src: PostgreSQL.src, alt: "PostgreSQL logo" },
  node: { src: Node.src, alt: "Node logo" },
  python: { src: Python.src, alt: "Python logo" },
  nextjs: { src: NextJS.src, alt: "NextJS logo" },
  git: { src: Git.src, alt: "Git logo" },
};

export default images;
