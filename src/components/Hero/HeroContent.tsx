import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroContent() {
  return (
    <div className="md:w-1/2 space-y-8">
      <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
        O Futuro da Robótica <span className="text-blue-400">Começa Aqui</span>
      </h1>
      <div className="space-y-6">
        <p className="text-gray-300 text-lg leading-relaxed">
          Nossa missão é democratizar o acesso à robótica avançada, desenvolvendo soluções que
          aumentam a produtividade e segurança nos ambientes de trabalho.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Com mais de 10 anos de experiência, nossa equipe multidisciplinar está na vanguarda da
          revolução tecnológica.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button>
          Saiba mais
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button variant="outline">
          Fale Conosco
        </Button>
      </div>
    </div>
  );
}