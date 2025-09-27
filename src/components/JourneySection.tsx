interface JourneySectionProps {
  language: 'pt' | 'en';
}

export function JourneySection({ language }: JourneySectionProps) {
  const translations = {
    pt: {
      title: 'Experiência',
      subtitle: 'Minha trajetória profissional e acadêmica',
      experience: 'Experiência Profissional',
      education: 'Formação Acadêmica',
      timeline: {
        experience: [
          {
            period: '2025 - Presente',
            role: 'Engenheiro de Software Backend',
            company: 'Quyro Tech',
            description: 'Desenvolvimento de soluções backend robustas utilizando Node.js, TypeScript, Prisma, PostgreSQL, MongoDB e NestJS. Foco em arquiteturas escaláveis e performance.'
          },
          // {
          //   period: '2024 - Presente',
          //   role: 'Desenvolvedor em Automação',
          //   company: 'Projetos Pessoais',
          //   description: 'Explorando o mundo da automação, desenvolvendo soluções em Python e integrações com APIs. Foco em otimização de processos e eficiência operacional.'
          // }
        ],
        education: [
          {
            period: '(2024 - 2027)',
            role: 'Bacharelado em Engenharia de Software',
            company: 'Universidade',
            description: 'Formação sólida em engenharia de software, padrões de arquitetura, metodologias ágeis e desenvolvimento de sistemas escaláveis.'
          },
          {
            period: '(2025 - Presente)',
            role: 'Liga Acadêmica de Engenharia de Software (LAES)',
            company: 'Participação Acadêmica',
            description: 'Participação ativa na liga acadêmica com foco em Java e desenvolvimento de projetos colaborativos entre estudantes.'
          },
          {
            period: '2024 - 2025',
            role: 'Desenvolvedor Fullstack',
            company: 'Praxis Empresa Júnior',
            description: 'Experiência em desenvolvimento fullstack utilizando HTML, CSS, JavaScript, Figma e Node.js. Participação em projetos reais para clientes externos.'
          }
        ]
      }
    },
    en: {
      title: 'Experience',
      subtitle: 'My professional and academic trajectory',
      experience: 'Professional Experience',
      education: 'Academic Background',
      timeline: {
        experience: [
          {
            period: '2025 - Present',
            role: 'Backend Software Engineer',
            company: 'Quyro Tech',
            description: 'Development of robust backend solutions using Node.js, TypeScript, Prisma, PostgreSQL, MongoDB and NestJS. Focus on scalable architectures and performance.'
          },
          // {
          //   period: '2024 - Present',
          //   role: 'Automation Developer',
          //   company: 'Personal Projects',
          //   description: 'Exploring the world of automation, developing Python solutions and API integrations. Focus on process optimization and operational efficiency.'
          // }
        ],
        education: [
          {
            period: '(2024 - 2027)',
            role: 'Bachelor in Software Engineering',
            company: 'University',
            description: 'Solid foundation in software engineering, architecture patterns, agile methodologies and scalable systems development.'
          },
          {
            period: '(2025 - Present)',
            role: 'Software Engineering Academic League (LAES)',
            company: 'Academic Participation',
            description: 'Active participation in academic league with focus on Java and collaborative project development among students.'
          },
          {
            period: '2024 - 2025',
            role: 'Fullstack Developer',
            company: 'Praxis Junior Company',
            description: 'Experience in fullstack development using HTML, CSS, JavaScript, Figma and Node.js. Participation in real projects for external clients.'
          }
        ]
      }
    }
  };

  const t = translations[language];

  const TimelineItem = ({ 
    item, 
    isLast 
  }: { 
    item: { period: string; role: string; company: string; description: string }; 
    isLast: boolean;
  }) => (
    <div className="relative pl-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-8 w-px h-full bg-gradient-to-b from-accent to-transparent"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-2 top-6 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg"></div>
      
      {/* Content */}
      <div className="pb-12">
        <div className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg group">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h3 className="heading-section text-lg group-hover:text-accent transition-colors duration-300">
              {item.role}
            </h3>
            <span className="text-accent text-sm font-medium bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
              {item.period}
            </span>
          </div>
          
          <h4 className="text-body font-medium mb-3 opacity-90">
            {item.company}
          </h4>
          
          <p className="text-body text-sm leading-relaxed opacity-80">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="journey" className="py-20">
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

          {/* Timeline Content */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Professional Experience */}
            <div>
              <h3 className="heading-section text-2xl md:text-3xl mb-8 text-center lg:text-left">
                {t.experience}
              </h3>
              <div className="space-y-0">
                {t.timeline.experience.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    item={item} 
                    isLast={index === t.timeline.experience.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="heading-section text-2xl md:text-3xl mb-8 text-center lg:text-left">
                {t.education}
              </h3>
              <div className="space-y-0">
                {t.timeline.education.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    item={item} 
                    isLast={index === t.timeline.education.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}