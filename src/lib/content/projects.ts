import { type IconType } from "@icons-pack/react-simple-icons";

import languages from "@/lib/constants/languages";

export interface ProjectType {
  title: string;
  description: string;
  body: string[];
  repoLink: string;
  languages: {
    src: IconType;
    alt: string;
  }[];
}

export const projects: ProjectType[] = [
  {
    title: "Kazanto",
    description:
      "Directly from your terminal, a new Pokémon journey awaits. Explore, catch, inspect and more.",
    body: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
    ],
    repoLink: "https://github.com/Kazyel/Kazanto",
    languages: [languages.go, languages.bash],
  },
  {
    title: "APSystem API",
    description:
      "API for fetching and displaying data collected from solar panels in a cool and visual way.",
    body: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
    ],
    repoLink: "https://github.com/Kazyel/API_APSystem",
    languages: [
      languages.node,
      languages.js,
      languages.ts,
      languages.fastify,
      languages.prisma,
    ],
  },
  {
    title: "This Portfolio",
    description: "Hey, this is my portfolio! Working on it right now.",
    body: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
    ],
    repoLink: "https://github.com/Kazyel/",
    languages: [languages.react, languages.nextjs, languages.tailwind, languages.ts],
  },
];
