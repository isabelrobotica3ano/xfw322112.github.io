interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function TechnologyCard({ icon, title, description }: TechnologyCardProps) {
  return (
    <div className="bg-navy-800/50 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300 border border-blue-500/20 hover:border-blue-400/40 group">
      <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}