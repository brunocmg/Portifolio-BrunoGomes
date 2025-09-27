import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutSectionProps {
  language: 'pt' | 'en';
}

export function AboutSection({ language }: AboutSectionProps) {
  // Cálculo automático dos anos de experiência baseado em 2024
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = Math.max(1, currentYear - 2023); // Iniciou estudando programação em 2024, então 2024-2023=1 ano em 2024

  const translations = {
    pt: {
      title: 'Sobre Mim',
      subtitle: 'Conheça um pouco mais sobre minha jornada',
      description: `Sou um desenvolvedor apaixonado por tecnologia com ${yearsOfExperience} ${yearsOfExperience === 1 ? 'ano' : 'anos'} de experiência estudando e criando soluções digitais. Minha jornada começou com curiosidade sobre programação e evoluiu para uma carreira sólida em desenvolvimento.

      Atualmente estou cursando Engenharia de Software e explorando o mundo da automação. Tenho experiência tanto em desenvolvimento fullstack quanto backend, e estou sempre em busca de novos desafios que me permitam crescer profissionalmente.

      Meu objetivo é continuar evoluindo como desenvolvedor e contribuir para projetos inovadores que façam a diferença na vida das pessoas.`
    },
    en: {
      title: 'About Me',
      subtitle: 'Learn more about my journey',
      description: `I'm a passionate developer with ${yearsOfExperience} ${yearsOfExperience === 1 ? 'year' : 'years'} of experience studying and creating digital solutions. My journey started with curiosity about programming and evolved into a solid career in development.

      I'm currently studying Software Engineering and exploring the world of automation. I have experience in both fullstack and backend development, and I'm always looking for new challenges that allow me to grow professionally.

      My goal is to continue evolving as a developer and contribute to innovative projects that make a difference in people's lives.`
    }
  };

  const t = translations[language];

  return (
    <section id="about" className="py-20 bg-card">
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

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                {t.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-body text-lg leading-relaxed text-center">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}