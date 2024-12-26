import { Brain, Cog, Bot, Rocket } from 'lucide-react';
import { TechnologyCard } from './TechnologyCard';

export function Technologies() {
  const technologies = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Automação Industrial",
      description: "Soluções avançadas para otimizar processos industriais"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Inteligência Artificial",
      description: "Sistemas inteligentes e aprendizado de máquina"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Robótica Avançada",
      description: "Desenvolvimento de robôs de última geração"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Inovação Tecnológica",
      description: "Pesquisa e desenvolvimento de novas tecnologias"
    }
  ];

  return (
    <section id="tecnologias" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Nossas Tecnologias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}