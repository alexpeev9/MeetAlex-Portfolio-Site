"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type BeamsProps = {
  className?: string;
  beamCount?: number;
  beamWidth?: number;
  beamOpacity?: number;
  speed?: number;
};

const Beams = ({
  className,
  beamCount = 8,
  beamWidth = 2,
  beamOpacity = 0.15,
  speed = 20,
}: BeamsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create beams dynamically
    const beams: HTMLDivElement[] = [];

    for (let i = 0; i < beamCount; i++) {
      const beam = document.createElement("div");
      beam.className = "beam absolute";

      // Random positioning and angle
      const startX = Math.random() * 100;
      const angle = -15 + Math.random() * 30; // -15 to 15 degrees
      const delay = Math.random() * speed;
      const duration = speed + Math.random() * 10;
      const width = beamWidth + Math.random() * 2;

      beam.style.cssText = `
        left: ${startX}%;
        width: ${width}px;
        height: 200%;
        background: linear-gradient(
          180deg,
          transparent 0%,
          var(--beam-color, rgba(30, 111, 232, ${beamOpacity})) 10%,
          var(--beam-color, rgba(30, 111, 232, ${beamOpacity * 1.5})) 50%,
          var(--beam-color, rgba(30, 111, 232, ${beamOpacity})) 90%,
          transparent 100%
        );
        transform: rotate(${angle}deg);
        animation: beam-move ${duration}s linear ${delay}s infinite;
        opacity: 0;
      `;

      container.appendChild(beam);
      beams.push(beam);
    }

    return () => {
      beams.forEach((beam) => beam.remove());
    };
  }, [beamCount, beamWidth, beamOpacity, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 h-full min-h-screen overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Static gradient beams for initial render */}
      <div
        className="absolute top-0 left-[10%] h-[150%] w-[3px] -rotate-12 opacity-0 dark:opacity-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, var(--color-blue-primary) 20%, var(--color-blue-light) 50%, var(--color-blue-primary) 80%, transparent 100%)`,
          opacity: beamOpacity * 0.8,
          animation: `beam-move ${speed}s linear infinite`,
        }}
      />
      <div
        className="absolute top-0 left-[30%] h-[150%] w-[2px] rotate-6 opacity-0 dark:opacity-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, var(--color-blue-light) 20%, var(--color-blue-primary) 50%, var(--color-blue-light) 80%, transparent 100%)`,
          opacity: beamOpacity * 0.6,
          animation: `beam-move ${speed + 5}s linear 3s infinite`,
        }}
      />
      <div
        className="absolute top-0 left-[55%] h-[150%] w-[4px] -rotate-3 opacity-0 dark:opacity-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, var(--color-blue-lighter) 20%, var(--color-blue-primary) 50%, var(--color-blue-lighter) 80%, transparent 100%)`,
          opacity: beamOpacity,
          animation: `beam-move ${speed + 8}s linear 6s infinite`,
        }}
      />
      <div
        className="absolute top-0 left-[75%] h-[150%] w-[2px] rotate-12 opacity-0 dark:opacity-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, var(--color-blue-primary) 20%, var(--color-blue-lightest) 50%, var(--color-blue-primary) 80%, transparent 100%)`,
          opacity: beamOpacity * 0.7,
          animation: `beam-move ${speed + 3}s linear 9s infinite`,
        }}
      />
      <div
        className="absolute top-0 left-[90%] h-[150%] w-[3px] -rotate-6 opacity-0 dark:opacity-100"
        style={{
          background: `linear-gradient(180deg, transparent 0%, var(--color-blue-light) 20%, var(--color-blue-primary) 50%, var(--color-blue-light) 80%, transparent 100%)`,
          opacity: beamOpacity * 0.5,
          animation: `beam-move ${speed + 12}s linear 2s infinite`,
        }}
      />

      {/* Light mode beams - more subtle */}
      <div
        className="absolute top-0 left-[15%] h-[150%] w-[2px] -rotate-12 dark:opacity-0"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(30, 111, 232, 0.2) 20%, rgba(95, 168, 255, 0.3) 50%, rgba(30, 111, 232, 0.2) 80%, transparent 100%)`,
          animation: `beam-move ${speed}s linear infinite`,
        }}
      />
      <div
        className="absolute top-0 left-[35%] h-[150%] w-[3px] rotate-6 dark:opacity-0"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(95, 168, 255, 0.15) 20%, rgba(30, 111, 232, 0.25) 50%, rgba(95, 168, 255, 0.15) 80%, transparent 100%)`,
          animation: `beam-move ${speed + 5}s linear 4s infinite`,
        }}
      />
      <div
        className="absolute top-0 left-[60%] h-[150%] w-[2px] -rotate-3 dark:opacity-0"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(30, 111, 232, 0.18) 20%, rgba(143, 194, 255, 0.28) 50%, rgba(30, 111, 232, 0.18) 80%, transparent 100%)`,
          animation: `beam-move ${speed + 8}s linear 7s infinite`,
        }}
      />
      <div
        className="absolute top-0 left-[80%] h-[150%] w-[3px] rotate-10 dark:opacity-0"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(95, 168, 255, 0.2) 20%, rgba(30, 111, 232, 0.3) 50%, rgba(95, 168, 255, 0.2) 80%, transparent 100%)`,
          animation: `beam-move ${speed + 3}s linear 10s infinite`,
        }}
      />
    </div>
  );
};

export default Beams;

