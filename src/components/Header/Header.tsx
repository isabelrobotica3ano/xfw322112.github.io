import { Container } from '../ui/Container';
import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="bg-navy-900/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-blue-500/10">
      <Container>
        <nav className="flex items-center justify-between p-4">
          <Logo />
          <Navigation />
        </nav>
      </Container>
    </header>
  );
}