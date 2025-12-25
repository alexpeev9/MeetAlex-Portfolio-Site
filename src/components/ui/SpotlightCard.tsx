"use client";

import { cn } from "@/lib/utils";
import { MouseEvent, ReactNode, useRef, useState } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
};

const SpotlightCard = ({
  children,
  className,
  spotlightColor = "rgba(30, 111, 232, 0.15)",
  spotlightSize = 350,
}: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl transition-all duration-300",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default SpotlightCard;

