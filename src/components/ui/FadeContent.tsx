"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";

type FadeContentProps = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  stagger?: number;
  staggerChildren?: boolean;
};

const FadeContent = ({
  children,
  className,
  direction = "up",
  distance = 40,
  duration = 0.8,
  delay = 0,
  threshold = 0.2,
  stagger = 0.1,
  staggerChildren = false,
}: FadeContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated.current) return;

    const getInitialProps = () => {
      switch (direction) {
        case "up":
          return { y: distance, opacity: 0 };
        case "down":
          return { y: -distance, opacity: 0 };
        case "left":
          return { x: distance, opacity: 0 };
        case "right":
          return { x: -distance, opacity: 0 };
        case "none":
        default:
          return { opacity: 0 };
      }
    };

    const targets = staggerChildren
      ? container.querySelectorAll(":scope > *")
      : [container];

    gsap.set(targets, getInitialProps());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            gsap.to(targets, {
              x: 0,
              y: 0,
              opacity: 1,
              duration,
              delay,
              stagger: staggerChildren ? stagger : 0,
              ease: "power3.out",
            });

            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [direction, distance, duration, delay, threshold, stagger, staggerChildren]);

  return (
    <div ref={containerRef} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
};

export default FadeContent;
