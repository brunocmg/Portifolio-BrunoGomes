import { useState } from 'react';
import { Button } from './ui/button';
import { Moon, Sun, Globe } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  language: 'pt' | 'en';
  onLanguageChange: (language: 'pt' | 'en') => void;
}

export function Header({ theme, onThemeChange, language, onLanguageChange }: HeaderProps) {
  const translations = {
    pt: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      journey: 'Experiência',
      contact: 'Contato'
    },
    en: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      journey: 'Experience',
      contact: 'Contact'
    }
  };

  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Initials */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BG</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              {t.projects}
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              {t.journey}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              {t.contact}
            </button>
          </nav>

          {/* Theme Toggle & Language Switcher */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
              className="hover:bg-accent/10"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onLanguageChange(language === 'pt' ? 'en' : 'pt')}
              className="hover:bg-accent/10 flex items-center space-x-1"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}