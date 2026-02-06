"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function PageBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // MUCH slower spring follow - center blob
 // Medium-smooth follow (between normal and super slow)
const blob1X = useSpring(mouseX, { damping: 45, stiffness: 55, mass: 1.2 });
const blob1Y = useSpring(mouseY, { damping: 45, stiffness: 55, mass: 1.2 });

const blob2X = useSpring(mouseX, { damping: 55, stiffness: 40, mass: 1.8 });
const blob2Y = useSpring(mouseY, { damping: 55, stiffness: 40, mass: 1.8 });

const blob3X = useSpring(mouseX, { damping: 50, stiffness: 32, mass: 2.0 });
const blob3Y = useSpring(mouseY, { damping: 50, stiffness: 32, mass: 2.0 });


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid - almost invisible */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main center blob */}
      <motion.div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          left: blob1X,
          top: blob1Y,
          background:
            "radial-gradient(circle, rgba(3, 250, 110, 0.35), transparent 70%)",
        }}
      />

      {/* Secondary blob */}
      <motion.div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          left: blob2X,
          top: blob2Y,
          background:
            "radial-gradient(circle, rgba(3, 250, 110, 0.25), transparent 70%)",
        }}
      />

      {/* Tertiary blob */}
      <motion.div
        className="absolute h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          left: blob3X,
          top: blob3Y,
          background:
            "radial-gradient(circle, rgba(3, 250, 110, 0.28), transparent 70%)",
        }}
      />
    </div>
  );
}
