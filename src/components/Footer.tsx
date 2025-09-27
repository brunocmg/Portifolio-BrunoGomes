import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  language: 'pt' | 'en';
}

export function Footer({ language }: FooterProps) {
  const translations = {
    pt: {
      name: 'Bruno Gomes',
      year: '2025',
      allRights: 'Todos os direitos reservados.',
      email: 'brunocmgomes.dev@gmail.com'
    },
    en: {
      name: 'Bruno Gomes',
      year: '2025',
      allRights: 'All rights reserved.',
      email: 'brunocmgomes.dev@gmail.com'
    }
  };

  const t = translations[language];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/brunocmgomes/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/brunocmg',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:brunocmgomes.dev@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            
            {/* Left side - Copyright */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-sm text-muted-foreground">
                © {t.year} {t.name}. {t.allRights}
              </p>
            </div>

            {/* Center - Logo/Name */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BG</span>
              </div>
            </div>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom section - Email */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="text-center">
              <a 
                href={`mailto:${t.email}`}
                className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
              >
                {t.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}