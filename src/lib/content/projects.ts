import type { ProjectType } from "../types";

import { TECH_LANGUAGES } from "@/lib/constants/langs";

export const projects: ProjectType[] = [
  {
    title: "Kazanto",
    description: {
      en: "Directly from your terminal, a new Pokémon journey awaits you. Explore, catch, inspect and more.",
      pt: "Directamente do seu terminal, uma nova jornada Pokémon está à sua espera. Explore, capture, inspecione e mais.",
    },
    body: {
      en: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      ],
      pt: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      ],
    },
    repoLink: "https://github.com/Kazyel/Kazanto",
    languages: [TECH_LANGUAGES.go, TECH_LANGUAGES.bash],
  },
  {
    title: "APSystem API",
    description: {
      en: "API for fetching and displaying data collected from solar panels in a cool and visual way.",
      pt: "API para buscar e exibir dados coletados de painéis solares de uma forma agradável e visual.",
    },
    body: {
      en: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      ],
      pt: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      ],
    },
    repoLink: "https://github.com/Kazyel/API_APSystem",
    languages: [
      TECH_LANGUAGES.node,
      TECH_LANGUAGES.js,
      TECH_LANGUAGES.ts,
      TECH_LANGUAGES.fastify,
      TECH_LANGUAGES.prisma,
    ],
  },
  {
    title: "This Portfolio",
    description: {
      en: "Hey, this is my portfolio! Working on it right now.",
      pt: "Ei, este é meu portfólio! Ainda trabalhando nele.",
    },
    body: {
      en: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      ],
      pt: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius fuga possimus dolores voluptas a officiis, soluta quae distinctio aliquid error nobis enim inventore corporis ducimus molestiae delectus magnam. Necessitatibus nesciunt praesentium voluptates autem. Voluptas eligendi doloribus similique aspernatur, laudantium minus tenetur in, laborum necessitatibus accusantium iste sint explicabo optio quos magni.",
      ],
    },
    repoLink: "https://github.com/Kazyel/",
    languages: [
      TECH_LANGUAGES.react,
      TECH_LANGUAGES.nextjs,
      TECH_LANGUAGES.tailwind,
      TECH_LANGUAGES.ts,
    ],
  },
];
