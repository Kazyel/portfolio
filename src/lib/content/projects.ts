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
        "Kazanto is a game based on the famous Pokémon series, designed to be played in the terminal using simple and intuitive commands. The code is entirely written in Golang, and the data is collected from the PokéAPI. The code is fully open source, and any contributions are welcome!",

        "Several crucial features are still missing, but you can already choose from various maps to find Pokémon, catch them, and build your dream team. The project is currently on pause, but I still plan to return to it and add several features I have in mind, such as a currency and store system, a Pokéball system, leveling up Pokémon, and battling the computer.",

        "Kazanto is one of my favorite projects, where I was able to combine fun and programming, making me enjoy the field even more. I learned a lot about state management, caching, consuming APIs in Go, and a bit about software architecture. It's definitely a project that I've benefited greatly from.",
      ],
      pt: [
        "O Kazanto é um jogo  baseado na famosa série Pokémon, feito para ser jogado no terminal através de comandos simples e intuitivos. O código é feito inteiramente em Golang, e os dados são coletados da PokéAPI. O código é totalmente open source, quaisquer contribuições são bem-vindas!",

        "Ainda faltam bastante funcionalidades cruciais, mas já é possível escolher diversos mapas para encontrar pokémons, capturá-los e ir montando o seu time dos sonhos. O andamento do projeto, já faz um tempo, está pausado, mas pretendo ainda voltar nele e adicionar várias funcionalidades que já tenho em mente, como sistema de moedas e lojas, sistema de pokébolas, upar os níveis dos pokémons e batalha contra o computador.",

        "Kazanto é um dos meus projetos favoritos, onde eu consegui conciliar diversão e programação, me fazendo pegar ainda mais gosto pela área. Aprendi bastante sobre state management, caching, consumo de APIs na linguagem Go e um pouco sobre arquitetura de software, é com certeza um projeto que tirei bastente proveito.",
      ],
    },
    repoLink: "https://github.com/Kazyel/Kazanto",
    repoImage: "/images/projects/kazanto.svg",
    languages: [TECH_LANGUAGES.go, TECH_LANGUAGES.bash],
  },
  {
    title: "APSystem API",
    description: {
      en: "API for fetching and displaying data collected from solar panels in a cool way.",
      pt: "API para buscar e exibir dados coletados de painéis solares de uma forma divertida.",
    },
    body: {
      en: [
        "APSystem API is a system that collects data from multiple solar panels and displays it visually for analysis. This project was one of my first real tasks during my scientific initiation project, so I really care about it. I learned a lot about developing in a team and managing tasks, all under tight deadlines.",

        "The system was initially built with Fastify (later rewritten in Python using the FastAPI framework), and the UI was created with plain JavaScript, manually generating SVGs and CSS to graphically represent the original energy plant interactively.",

        "The code available on GitHub is unfortunately from the early stages of development, so it's poorly structured and missing some features. I wish I could share the version that was actually delivered, but it's private in the company's repository.",
      ],
      pt: [
        "APSystem API é um sistema que coleta dados de vários painéis solares e exibe de forma visual para análise. Esse projeto foi uma das minha primeiras demandas reais enquanto estava no projeto de iniciação científica, então tenho bastante carinho por ele, consegui aprender muito como desenvolver em time e gerenciar tasks, tudo com pressão de prazo de entrega.",

        "O sistema inicialmente foi construído com Fastify (depois foi reescrito em Python no framework FastAPI) e a UI foi feita com JavaScript puro, utilizando de criação manual de SVGs e CSS para representar graficamente a planta de energia original de forma interativa.",

        "O código que está no link do GitHub, infelizmente, é do ínicio do desenvolvimento, então está bem mal construido e falta algumas features. Gostaria de ter a versão que foi entregue, mas está privada no repositório privado da empresa.",
      ],
    },
    repoLink: "https://github.com/Kazyel/API_APSystem",
    repoImage: "/images/projects/api_apsystem.png",
    languages: [
      TECH_LANGUAGES.node,
      TECH_LANGUAGES.js,
      TECH_LANGUAGES.ts,
      TECH_LANGUAGES.fastify,
      TECH_LANGUAGES.prisma,
    ],
  },
  {
    title: "Kazyani",
    description: {
      en: "Silly minigames based on anime series. To have fun and pass sometime alone or with friends.",
      pt: "Joguinhos bobos baseados em séries de anime. Para se divertir e passar o tempo sozinho ou com amigos.",
    },
    body: {
      en: [
        "Kazyani is one of the projects I had the most fun working on because it combines anime and programming, and because of the new challenges I encountered during development. The code is completely open source, feel free to take a look or contribute if you want.",

        "It's a small project built with NextJS and TailwindCSS, pretty standard. It consumed data from two different APIs and manipulated it to fit the needs of each minigame. As I realized I needed very specific things, I understood that using two APIs wasn't quite the best solution. So I had to create my own database and then build my own API. That's when I temporarily put the project on hold.",

        "The minigames before were already ready and playable, yet needed more polished data that the both APIs couldn't provide me. But handling a database properly and filling it with data wasn't something I was highly proficient at, so I got tired. Still, it has to be done because the benefits will be huge.",
      ],
      pt: [
        "Kazyani é um dos projetos que eu mais me diverti fazendo porque combina animes e programação, e também pelas dificuldades novas que eu encontrei durante o desenvolvimento. Código completamente open source, sinta-se livre pra dar uma olhada ou contribuir, se quiser.",

        "É um projetinho feito com NextJS e TailwindCSS, bem padrão. Fazia consumo de 2 APIs distintas e manipulava os dados pra deixar do jeito que precisava pra cada minigame. Como eu percebi que precisava de coisas muito específicas, percebi que utilizar de 2 APIs não foi a melhor solução. Então, eu tive que fazer a minha própria database para então fazer minha própria API. E foi aí que abandonei o projeto (temporariamente).",

        "Os minigames já estavam prontos e jogáveis, mas precisavam de dados mais refinados que as duas APIs não conseguiam me fornecer. No entanto, lidar corretamente com um banco de dados e preenchê-lo com dados não era algo em que eu tinha muita proficiência, então perdi o interesse. Ainda assim, precisa ser feito, porque os benefícios serão enormes.”",
      ],
    },
    repoLink: "https://github.com/Kazyel/kazyani",
    repoImage: "/images/projects/kazyani.png",
    languages: [
      TECH_LANGUAGES.react,
      TECH_LANGUAGES.nextjs,
      TECH_LANGUAGES.tailwind,
      TECH_LANGUAGES.ts,
    ],
  },
];
