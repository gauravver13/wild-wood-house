interface GridSectionProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export default function GridSection({ children, className = "" }: GridSectionProps) {
    return (
      <div className={`relative max-w-none w-full grid px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-700 ${className}`}>
        {children}
      </div>
    );
  }
  