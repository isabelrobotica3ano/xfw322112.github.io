interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border-2 border-white text-white hover:bg-white hover:text-blue-900"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}