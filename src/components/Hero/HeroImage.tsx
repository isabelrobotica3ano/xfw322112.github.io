interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="md:w-1/2">
      <div className="relative">
        <img 
          src={src}
          alt={alt}
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/50 to-transparent" />
      </div>
    </div>
  );
}