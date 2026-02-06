"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLocale } from "@/lib/i18n";
import {
  Code2,
  Component,
  Globe,
  FileCode,
  Palette,
  Sparkles,
  Cloud,
  Figma,
  ShoppingCart,
  Film,
  Video,
  Layers,
} from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    category: "Framework",
    description: "React framework for production",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    name: "React",
    category: "Library",
    description: "UI component library",
    icon: Component,
    color: "from-cyan-500/20 to-blue-400/20",
    iconColor: "text-cyan-500",
  },
  {
    name: "WordPress",
    category: "CMS",
    description: "Content management",
    icon: Globe,
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-500",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Type-safe JavaScript",
    icon: FileCode,
    color: "from-blue-600/20 to-blue-400/20",
    iconColor: "text-blue-600",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS",
    icon: Palette,
    color: "from-sky-500/20 to-teal-500/20",
    iconColor: "text-sky-500",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    description: "Production animations",
    icon: Sparkles,
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    name: "Vercel",
    category: "Hosting",
    description: "Edge deployment",
    icon: Cloud,
    color: "from-gray-600/20 to-gray-400/20",
    iconColor: "text-gray-600 dark:text-gray-400",
  },
  {
    name: "Figma",
    category: "Design",
    description: "UI/UX design tool",
    icon: Figma,
    color: "from-red-500/20 to-purple-500/20",
    iconColor: "text-red-500",
  },
  {
    name: "WooCommerce",
    category: "E-commerce",
    description: "Online store",
    icon: ShoppingCart,
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
  {
    name: "Premiere Pro",
    category: "Video",
    description: "Video editing",
    icon: Film,
    color: "from-blue-600/20 to-purple-600/20",
    iconColor: "text-blue-600",
  },
  {
    name: "After Effects",
    category: "Motion",
    description: "Motion graphics",
    icon: Video,
    color: "from-purple-600/20 to-pink-600/20",
    iconColor: "text-purple-600",
  },
  {
    name: "DaVinci Resolve",
    category: "Color",
    description: "Color grading",
    icon: Layers,
    color: "from-red-600/20 to-orange-600/20",
    iconColor: "text-red-600",
  },
];

export function TechStack() {
  const { t } = useLocale();

  return (
    <SectionWrapper className="relative py-28 lg:py-36 border-t border-border/50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-primary"
        >
          {t.tech.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
        >
          {t.tech.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed"
        >
          {t.tech.description}
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative z-10 mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={fadeInUp}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 20 },
            }}
            className="group relative overflow-hidden rounded-2xl border-2 border-border/50 bg-card p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(151_97%_50%/0.15)]"
          >
            {/* Static gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

            {/* Glow effect */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-primary/20 group-hover:via-primary/10 blur-xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Icon with zoom animation */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`mb-4 rounded-xl bg-background/50 p-3 backdrop-blur-sm transition-all duration-500 group-hover:bg-background/70 ${tech.iconColor}`}
              >
                <tech.icon size={28} strokeWidth={2} />
              </motion.div>

              {/* Category badge */}
              <span className="mb-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:ring-primary/40">
                {tech.category}
              </span>

              {/* Tech name */}
              <h3 className="text-base font-bold text-foreground transition-colors group-hover:text-primary">
                {tech.name}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </div>

            {/* Corner accents */}
            <div className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-primary/0 rounded-tl-lg transition-all duration-500 group-hover:border-primary/60" />
            <div className="absolute right-2 bottom-2 h-3 w-3 border-r-2 border-b-2 border-primary/0 rounded-br-lg transition-all duration-500 group-hover:border-primary/60" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
