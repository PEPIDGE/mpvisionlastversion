"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function PageBackground() {
  const reduce = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 🔥 по-бързо следване (по-висок stiffness, умерен damping)
  const blob1X = useSpring(mouseX, { damping: 24, stiffness: 95, mass: 0.9 });
  const blob1Y = useSpring(mouseY, { damping: 24, stiffness: 95, mass: 0.9 });

  const blob2X = useSpring(mouseX, { damping: 26, stiffness: 70, mass: 1.1 });
  const blob2Y = useSpring(mouseY, { damping: 26, stiffness: 70, mass: 1.1 });

  useEffect(() => {
    if (reduce) return;

    let raf = 0;
    let latestX = 0;
    let latestY = 0;

    const onMove = (e: MouseEvent) => {
      latestX = e.clientX;
      latestY = e.clientY;

      if (raf) return;
      raf = requestAnimationFrame(() => {
        mouseX.set(latestX);
        mouseY.set(latestY);
        raf = 0;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [mouseX, mouseY, reduce]);

  if (reduce) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px] will-change-transform"
        style={{
          left: blob1X,
          top: blob1Y,
          background: "radial-gradient(circle, rgba(3,250,110,0.28), transparent 68%)",
        }}
      />
      <motion.div
        className="absolute h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] will-change-transform"
        style={{
          left: blob2X,
          top: blob2Y,
          background: "radial-gradient(circle, rgba(3,250,110,0.18), transparent 70%)",
        }}
      />
    </div>
  );
}
