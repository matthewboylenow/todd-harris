import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = '', id }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}
