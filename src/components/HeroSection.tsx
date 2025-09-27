import { Button } from './ui/button';
import { Github, Linkedin, Download } from 'lucide-react';

interface HeroSectionProps {
  language: 'pt' | 'en';
}

export function HeroSection({ language }: HeroSectionProps) {
  const translations = {
    pt: {
      greeting: 'Olá, eu sou',
      name: 'Bruno Gomes',
      role: 'Desenvolvedor Back-end',
      description: 'Desenvolvedor apaixonado por tecnologia com experiência criando soluções inovadoras. Focado em desenvolvimento backend e explorando o mundo da automação.',
      downloadCV: 'Baixar Currículo (PDF)',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    en: {
      greeting: 'Hello, I am',
      name: 'Bruno Gomes',
      role: 'Backend Developer',
      description: 'Technology-passionate developer with experience creating innovative solutions. Focused on backend development and exploring the world of automation.',
      downloadCV: 'Download Resume (PDF)',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    }
  };

  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-body text-lg md:text-xl opacity-80">{t.greeting}</p>
            <h1 className="heading-hero text-4xl md:text-6xl lg:text-7xl tracking-tight">
              {t.name}
            </h1>
            <h2 className="heading-section text-xl md:text-2xl lg:text-3xl text-accent">
              {t.role}
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-body text-lg md:text-xl leading-relaxed opacity-90">
              {t.description}
            </p>
          </div>

          {/* CTA & Social Links */}
          <div className="flex flex-col items-center justify-center gap-6 pt-8 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 flex-1"
                asChild
              >
                <a href="https://www.linkedin.com/in/brunocmgomes/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  {t.linkedin}
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 flex-1"
                asChild
              >
                <a href="https://github.com/brunocmg" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  {t.github}
                </a>
              </Button>
            </div>
            
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 w-full"
              asChild
            >
              {/* <a href="/cv-bruno-gomes.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                {t.downloadCV}
              </a> */}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}