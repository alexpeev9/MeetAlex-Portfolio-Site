"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";

type SplitTextProps = {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  splitBy?: "chars" | "words";
  animation?: "fadeUp" | "fadeIn" | "scaleUp" | "slideIn";
};

const SplitText = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  stagger = 0.03,
  as: Component = "div",
  splitBy = "chars",
  animation = "fadeUp",
}: SplitTextProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const elements = containerRef.current.querySelectorAll(".split-item");
    if (elements.length === 0) return;

    hasAnimated.current = true;

    const animationProps = {
      fadeUp: { y: 30, opacity: 0 },
      fadeIn: { opacity: 0 },
      scaleUp: { scale: 0.8, opacity: 0 },
      slideIn: { x: -20, opacity: 0 },
    };

    gsap.set(elements, animationProps[animation]);

    gsap.to(elements, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: "power3.out",
    });
  }, [children, delay, duration, stagger, animation]);

  const splitContent = (): ReactNode[] => {
    if (splitBy === "words") {
      return children.split(" ").map((word, index, arr) => (
        <span
          key={index}
          className="split-item inline-block opacity-0"
          style={{ willChange: "transform, opacity" }}
        >
          {word}
          {index < arr.length - 1 && "\u00A0"}
        </span>
      ));
    }

    return children.split("").map((char, index) => (
      <span
        key={index}
        className="split-item inline-block opacity-0"
        style={{ willChange: "transform, opacity" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLElement & HTMLDivElement>}
      className={cn("overflow-hidden", className)}
    >
      {splitContent()}
    </Component>
  );
};

export default SplitText;
