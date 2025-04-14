import Go from "@/assets/svgs/go.svg";
import Bash from "@/assets/svgs/bash.svg";
import React from "@/assets/svgs/react.svg";
import Astro from "@/assets/svgs/astro.svg";
import Tailwind from "@/assets/svgs/tailwind.svg";
import TS from "@/assets/svgs/ts.svg";
import JS from "@/assets/svgs/js.svg";
import Fastify from "@/assets/svgs/fastify.svg";
import Prisma from "@/assets/svgs/prisma.svg";
import PostgreSQL from "@/assets/svgs/postgresql.svg";
import Node from "@/assets/svgs/node.svg";
import Python from "@/assets/svgs/python.svg";
import NextJS from "@/assets/svgs/next-js.svg";
import Git from "@/assets/svgs/git.svg";

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
