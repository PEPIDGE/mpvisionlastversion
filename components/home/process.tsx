"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLocale } from "@/lib/i18n";
import { Lightbulb, Sparkles, Rocket, TrendingUp } from "lucide-react";

const iconMap = [Lightbulb, Sparkles, Rocket, TrendingUp];

export function Process() {
  const { t } = useLocale();

  const steps = t.process.steps.map((step, i) => ({
    number: String(i + 1).padStart(2, "0"),
    icon: iconMap[i],
    ...step,
  }));

  return (
    <SectionWrapper className="relative py-28 lg:py-36 border-t border-border/50 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-primary blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-primary"
        >
          {t.process.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
        >
          {t.process.title}
        </motion.h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative z-10 mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              whileHover={{
                y: -12,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative"
            >
              {/* Connecting line - animated */}
              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-20 hidden h-px w-8 lg:block overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "200%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: index * 0.3, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border/50 to-transparent" />
                </div>
              )}

              {/* Card */}
              <div className="relative h-full rounded-3xl border-2 border-border/50 bg-gradient-to-br from-card to-card/50 p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_50px_hsl(151_97%_50%/0.15)]">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 group-hover:w-3/4" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container with animated background */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-500 group-hover:from-primary/30 group-hover:to-primary/10 group-hover:shadow-[0_0_30px_hsl(151_97%_50%/0.3)]"
                  >
                    <Icon size={32} className="text-primary" strokeWidth={2.5} />
                    <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.div>

                  {/* Step number */}
                  <div className="mb-4 flex items-center justify-center gap-2">
                    <motion.span
                      className="text-6xl font-black text-primary/10 transition-all duration-500 group-hover:text-primary/20"
                      whileHover={{ scale: 1.2 }}
                    >
                      {step.number}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-center text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden rounded-b-3xl">
                  <motion.div
                    className="h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </div>

                {/* Corner accents */}
                <div className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-primary/0 rounded-tl-xl transition-all duration-500 group-hover:border-primary/40" />
                <div className="absolute right-2 bottom-2 h-3 w-3 border-r-2 border-b-2 border-primary/0 rounded-br-xl transition-all duration-500 group-hover:border-primary/40" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
