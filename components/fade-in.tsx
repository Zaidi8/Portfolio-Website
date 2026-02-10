'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
  as?: keyof typeof motion;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 30,
  duration = 0.5,
  once = true,
  as = 'div',
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' });
  const reducedMotion = useReducedMotion();

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, ...directionMap[direction] }
      }
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : reducedMotion
            ? { opacity: 1 }
            : { opacity: 0, ...directionMap[direction] }
      }
      transition={{
        duration: reducedMotion ? 0 : duration,
        delay: reducedMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
