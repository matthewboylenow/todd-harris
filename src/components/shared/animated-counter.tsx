'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function AnimatedCounter({ target, suffix = '', prefix = '', label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.span
        className="block font-mono text-4xl md:text-5xl font-bold text-copper"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {prefix}{count}{suffix}
      </motion.span>
      <span className="mt-2 block text-sm uppercase tracking-wider text-gray-medium">
        {label}
      </span>
    </div>
  );
}
