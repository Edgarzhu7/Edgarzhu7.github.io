'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const ref = useRef(null);
  // Trigger when the element is well within the viewport (e.g., 20% from bottom)
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }} // Increased distance for more dramatic effect
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      // Slower, smoother transition
      transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

