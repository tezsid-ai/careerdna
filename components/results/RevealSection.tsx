"use client";

import { useInView } from "@/hooks/useInView";

interface Props { children: React.ReactNode; className?: string; delay?: number }

export default function RevealSection({ children, className = "", delay = 0 }: Props) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
