import { Container } from '../ui/Container';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-blue-900 to-navy-900 py-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <HeroContent />
          <HeroImage 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
            alt="Robótica Avançada"
          />
        </div>
      </Container>
    </section>
  );
}