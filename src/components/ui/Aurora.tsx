"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type AuroraProps = {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  className?: string;
};

const Aurora = ({
  colorStops = ["#1e6fe8", "#5fa8ff", "#b8d9ff", "#1a5fcc"],
  amplitude = 1.0,
  blend = 0.5,
  speed = 1.0,
  className,
}: AuroraProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let time = 0;

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const numBlobs = colorStops.length;

      for (let i = 0; i < numBlobs; i++) {
        const baseX = rect.width * (0.2 + (i * 0.6) / numBlobs);
        const baseY = rect.height * 0.5;

        const offsetX =
          Math.sin(time * 0.0008 * speed + i * 1.5) * rect.width * 0.15 * amplitude;
        const offsetY =
          Math.cos(time * 0.0006 * speed + i * 2) * rect.height * 0.2 * amplitude;

        const x = baseX + offsetX;
        const y = baseY + offsetY;

        const radius = Math.min(rect.width, rect.height) * (0.4 + Math.sin(time * 0.001 + i) * 0.1);

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, colorStops[i] + "cc");
        gradient.addColorStop(0.5, colorStops[i] + "66");
        gradient.addColorStop(1, colorStops[i] + "00");

        ctx.globalAlpha = blend;
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 16;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colorStops, amplitude, blend, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 h-full w-full [filter:blur(80px)]",
        className
      )}
      aria-hidden="true"
    />
  );
};

export default Aurora;

