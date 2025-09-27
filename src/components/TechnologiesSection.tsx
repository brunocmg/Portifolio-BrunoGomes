import awsLogo from "../assets/logos/amazonwebservices-original-wordmark.svg";
import cssLogo from "../assets/logos/css3-original.svg"
import dockerLogo from "../assets/logos/docker-original.svg";
import expressLogo from "../assets/logos/express-original.svg";
import figmaLogo from "../assets/logos/figma-original.svg";
import gitLogo from "../assets/logos/git-original.svg";
import githubactionsLogo from "../assets/logos/githubactions-original.svg";
import htmlLogo from "../assets/logos/html5-original.svg"
import javaLogo from "../assets/logos/java-original.svg";
import javascriptLogo from "../assets/logos/javascript-original.svg";
import jestLogo from "../assets/logos/jest-plain.svg"
import kubernetsLogo from "../assets/logos/kubernetes-original.svg";
import mongodbLogo from "../assets/logos/mongodb-original.svg";
import mysqlLogo from "../assets/logos/mysql-original.svg";
import nestjsLogo from "../assets/logos/nestjs-original.svg";
import nextjsLogo from "../assets/logos/nextjs-original.svg";
import nodejsLogo from "../assets/logos/nodejs.svg";
import postgresqlLogo from "../assets/logos/postgresql-original.svg";
import postmanLogo from "../assets/logos/postman-original.svg";
import prismaLogo from "../assets/logos/prisma-original.svg";
import pythonLogo from "../assets/logos/python-original.svg";
import reactLogo from "../assets/logos/react-original.svg";
import redisLogo from "../assets/logos/redis-original.svg";
import restapiLogo from "../assets/logos/rest-api-icon.svg"
import supabaseLogo from "../assets/logos/supabase-original.svg";
import tailwindLogo from "../assets/logos/tailwindcss-original.svg";
import typescriptLogo from "../assets/logos/typescript-original.svg";
import vercelLogo from "../assets/logos/vercel-original.svg";
import vitejsLogo from "../assets/logos/vitejs-original.svg";

interface TechnologiesSectionProps {
  language: "pt" | "en";
}

export function TechnologiesSection({ language }: TechnologiesSectionProps) {
  const translations = {
    pt: {
      title: "Tecnologias",
      subtitle: "Ferramentas e tecnologias que domino",
      frontend: "Frontend",
      backend: "Backend",
      database: "Banco de Dados",
      tools: "Ferramentas",
    },
    en: {
      title: "Technologies",
      subtitle: "Tools and technologies I master",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
    },
  };

  const t = translations[language];

  const technologies = {
    backend: [
      {
        name: "Node.js",
        icon: nodejsLogo,
      },
      {
        name: "NestJS",
        icon: nestjsLogo,
      },
      { name: "Express", icon: expressLogo },
      {
        name: "Python",
        icon: pythonLogo,
      },
      // {
      //   name: "Java",
      //   icon: javaLogo,
      // },
      {
        name: "REST APIs",
        icon: restapiLogo,
      },
    ],
    database: [
      {
        name: "PostgreSQL",
        icon: postgresqlLogo,
      },
      {
        name: "MongoDB",
        icon: mongodbLogo,
      },
      // {
      //   name: "Redis",
      //   icon: redisLogo,
      // },
      {
        name: "Prisma",
        icon: prismaLogo,
      },
      // {
      //   name: "MySQL",
      //   icon: mysqlLogo,
      // },
      {
        name: "Supabase",
        icon: supabaseLogo,
      },
    ],
    frontend: [
      {
        name: "React",
        icon: reactLogo,
      },
      {
        name: "TypeScript",
        icon: typescriptLogo,
      },
      // {
      //   name: "Next.js",
      //   icon: nextjsLogo,
      // },
      {
        name: "JavaScript",
        icon: javascriptLogo,
      },
      // {
      //   name: "Vite",
      //   icon: vitejsLogo,
      // },
      // {
      //   name: "Figma",
      //   icon: figmaLogo,
      // },
      {
        name: "HTML",
        icon: htmlLogo,
      },
      {
        name: "CSS",
        icon: cssLogo,
      },
      {
        name: "Tailwind CSS",
        icon: tailwindLogo,
      },
    ],
    tools: [
      {
        name: "Git",
        icon: gitLogo,
      },
      // {
      //   name: "AWS",
      //   icon: awsLogo,
      // },
      {
        name: "Docker",
        icon: dockerLogo,
      },
      // {
      //   name: "Kubernetes",
      //   icon: kubernetsLogo,
      // },
      // {
      //   name: "GitHub Actions",
      //   icon: githubactionsLogo,
      // },
      {
        name: "Vercel",
        icon: vercelLogo,
      },
    ],
  };

  const TechCard = ({ name, icon }: { name: string; icon: string }) => (
    <div className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300">
        <img src={icon} alt={name} className="w-full h-full object-contain" />
      </div>
      <span className="text-sm font-medium text-center group-hover:text-accent transition-colors duration-300">
        {name}
      </span>
    </div>
  );

  const TechCategory = ({
    title,
    techs,
  }: {
    title: string;
    techs: Array<{ name: string; icon: string }>;
  }) => (
    <div className="space-y-6">
      <h3 className="heading-section text-xl md:text-2xl text-center mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techs.map((tech) => (
          <TechCard key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-section text-3xl md:text-4xl lg:text-5xl mb-4">
              {t.title}
            </h2>
            <p className="text-body text-lg md:text-xl opacity-80">
              {t.subtitle}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            <TechCategory title={t.backend} techs={technologies.backend} />
            <TechCategory title={t.database} techs={technologies.database} />
            <TechCategory title={t.frontend} techs={technologies.frontend} />
            <TechCategory title={t.tools} techs={technologies.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
