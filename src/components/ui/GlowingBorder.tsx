"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GlowingBorderProps = {
  children: ReactNode;
  className?: string;
  borderColor?: string;
  glowColor?: string;
  borderRadius?: string;
  borderWidth?: number;
  animationDuration?: number;
};

const GlowingBorder = ({
  children,
  className,
  borderColor = "#1e6fe8",
  glowColor = "rgba(30, 111, 232, 0.4)",
  borderRadius = "1.75rem",
  borderWidth = 1,
  animationDuration = 3,
}: GlowingBorderProps) => {
  return (
    <div
      className={cn("group relative", className)}
      style={{ borderRadius }}
    >
      <div
        className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          borderRadius,
          background: `linear-gradient(90deg, ${borderColor}, ${glowColor}, ${borderColor})`,
          backgroundSize: "200% 100%",
          animation: `shimmer ${animationDuration}s linear infinite`,
          filter: `blur(${borderWidth * 2}px)`,
        }}
        aria-hidden="true"
      />
      <div
        className="relative"
        style={{
          borderRadius,
          border: `${borderWidth}px solid transparent`,
          backgroundClip: "padding-box",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowingBorder;

