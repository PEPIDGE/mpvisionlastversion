"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function Hero() {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  const glowX = useTransform(smoothX, [0, 1], [20, 80]);
  const glowY = useTransform(smoothY, [0, 1], [20, 80]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 lg:px-8"
      onMouseMove={handleMouseMove}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Sparkles size={16} className="text-primary" />
          </motion.div>
          <span className="text-sm font-semibold tracking-wide text-foreground">
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-balance text-6xl font-black tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
            {t.hero.title1}{" "}
            <span className="relative inline-block">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 right-0 h-3 origin-left bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 blur-md"
                style={{ zIndex: 0 }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-1.5 origin-left bg-gradient-to-r from-primary via-primary to-primary/70"
                style={{ zIndex: 0 }}
              />
              <span className="relative" style={{ zIndex: 1 }}>{t.hero.title2}</span>
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent"
            >
              {t.hero.titleAccent}
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 max-w-3xl text-balance text-xl font-medium leading-relaxed text-foreground/80 sm:text-2xl lg:text-3xl"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-primary px-10 py-5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/40"
            >
              <span className="relative z-10">{t.hero.cta1}</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.div>
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ translateX: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear", repeatDelay: 1 }}
              />
            </motion.button>
          </Link>
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-2xl border-2 border-border/70 bg-background/50 px-10 py-5 text-base font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg"
            >
              {t.hero.cta2}
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/30 p-1.5"
        >
          <motion.div
            animate={{ height: ["30%", "50%", "30%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
