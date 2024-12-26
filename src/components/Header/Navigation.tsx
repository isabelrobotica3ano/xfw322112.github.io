import { Link } from '../Navigation/Link';

export function Navigation() {
  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#tecnologias', label: 'Tecnologias' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#equipe', label: 'Equipe' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <div className="flex space-x-8">
      {links.map(link => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}