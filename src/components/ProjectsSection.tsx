import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pokedexImage from "../assets/images/pokedex.png";
import inProgress from '../assets/images/in-progress.png'

interface ProjectsSectionProps {
  language: "pt" | "en";
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const translations = {
    pt: {
      title: "Projetos",
      subtitle: "Alguns dos projetos que desenvolvi",
      viewProject: "Ver Projeto",
      sourceCode: "Código Fonte",
      projects: [
        {
          title: "Pokédex Interativa",
          description:
            "Aplicação React moderna que consome a PokéAPI para exibir informações detalhadas dos Pokémon com interface responsiva.",
          image: pokedexImage,
          tags: ["React", "JavaScript", "MUI", "API"],
          liveUrl: "https://pokedex-react-mui-beta.vercel.app/",
          githubUrl: "https://github.com/thiagosampaiog/pokedex-react-mui",
        },
        {
          title: "Sistema de Gerenciamento Acadêmico",
          description:
            "Sistema completo para gestão acadêmica desenvolvido em Java, permitindo controle de alunos, disciplinas, notas e horários.",
          image: inProgress,
          tags: ["Java"],
          liveUrl: "#",
          githubUrl: "https://github.com/brunocmg",
        },
        {
          title: "API de Cadastro de Usuários",
          description:
            "API RESTful robusta desenvolvida em Node.js para gerenciamento completo de usuários com autenticação JWT.",
          image: inProgress,
          tags: ["Node.js", "Express", "MongoDB", "JWT"],
          liveUrl: "#",
          githubUrl: "https://github.com/brunocmg/API-Cadastro-NodeJS",
        },
      ],
    },
    en: {
      title: "Projects",
      subtitle: "Some of the projects I have developed",
      viewProject: "View Project",
      sourceCode: "Source Code",
      projects: [
        {
          title: "Interactive Pokédex",
          description:
            "Modern React application that consumes the PokéAPI to display detailed Pokémon information with responsive interface.",
          image: pokedexImage,
          tags: ["React", "JavaScript", "MUI", "API"],
          liveUrl: "https://pokedex-react-mui-beta.vercel.app/",
          githubUrl: "https://github.com/thiagosampaiog/pokedex-react-mui",
        },
        {
          title: "Academic Management System",
          description:
            "Complete academic management system developed in Java, enabling control of students, subjects, grades and schedules.",
          image: inProgress,
          tags: ["Java"],
          liveUrl: "#",
          githubUrl: "https://github.com/brunocmg",
        },
        {
          title: "User Registration API",
          description:
            "Robust RESTful API developed in Node.js for complete user management with JWT authentication.",
          image: inProgress,
          tags: ["Node.js", "Express", "MongoDB", "JWT"],
          liveUrl: "#",
          githubUrl: "https://github.com/brunocmg/API-Cadastro-NodeJS",
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="projects" className="py-20 bg-card">
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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="heading-section text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed mb-4 opacity-90">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-accent/90 text-white"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.viewProject}
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-white"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t.sourceCode}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
