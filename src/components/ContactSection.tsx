import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

interface ContactSectionProps {
  language: 'pt' | 'en';
}

export function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    pt: {
      title: 'Contato',
      subtitle: 'Vamos conversar!',
      description: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome completo',
        email: 'Email',
        emailPlaceholder: 'seu.email@exemplo.com',
        message: 'Mensagem',
        messagePlaceholder: 'Conte-me sobre seu projeto ou oportunidade...',
        send: 'Enviar Mensagem',
        sending: 'Enviando...'
      },
      contact: {
        email: 'Email',
        location: 'Localização',
        phone: 'Telefone'
      },
      social: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email Direto'
      },
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar mensagem. Tente novamente.'
    },
    en: {
      title: 'Contact',
      subtitle: "Let's talk!",
      description: "I'm always open to new opportunities and interesting projects. Get in touch!",
      form: {
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or opportunity...',
        send: 'Send Message',
        sending: 'Sending...'
      },
      contact: {
        email: 'Email',
        location: 'Location',
        phone: 'Phone'
      },
      social: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Direct Email'
      },
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.'
    }
  };

  const t = translations[language];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success(t.success);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.email,
      value: 'brunocmgomes.dev@gmail.com',
      href: 'mailto:brunocmgomes.dev@gmail.com'
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: 'Salvador, BA',
      href: null
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+55 (71) 98389-5041',
      href: 'tel:+5571983895041'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: t.social.linkedin,
      href: 'https://www.linkedin.com/in/brunocmgomes/',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      label: t.social.github,
      href: 'https://github.com/brunocmg',
      color: 'hover:text-gray-600'
    },
    {
      icon: Mail,
      label: t.social.email,
      href: 'mailto:brunocmgomes.dev@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id='contact' className="w-full py-16 md:py-24 mb-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Coluna 1: Card de Informações de Contato (COM A CORREÇÃO) */}
          {/* 1. Adicionamos 'flex' ao wrapper da coluna */}
          <div className="flex-1 flex">
            {/* 2. Garantimos que o Card seja um flex-container e ocupe toda a largura */}
            <Card className="border-border h-full w-full flex flex-col">
              {/* 3. A MUDANÇA PRINCIPAL: CardContent agora cresce e centra o conteúdo */}
              <CardContent className="flex flex-col flex-1 justify-center p-6">
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <contact.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {contact.label}
                        </p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="font-medium text-body transition-colors duration-300 hover:text-accent"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="font-medium text-body">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna 2: Card de Redes Sociais (sem alterações) */}
          <div className="flex-1">
            <Card className="border-border h-full flex flex-col">
              <CardHeader>
                <CardTitle className="heading-section text-xl">
                  {language === "pt" ? "Redes Sociais" : "Social Networks"}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow gap-4 p-4 md:p-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-1 items-center justify-center space-x-3 rounded-lg border border-border p-4 transition-all duration-300 hover:scale-105 hover:border-accent/50"
                  >
                    <social.icon
                      className={`h-6 w-6 ${social.color} transition-colors duration-300`}
                    />
                    <span className="font-medium text-body transition-colors duration-300 group-hover:text-accent">
                      {social.label}
                    </span>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}