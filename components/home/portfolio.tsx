"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const previewProjects = [
  {
    title: "Elevate Fitness",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
  },
  {
    title: "Meridian Brand Film",
    category: "Video Production",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop",
  },
  {
    title: "FitLife Coaching",
    category: "SMMA Profile",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
  },
];

export function PortfolioPreview() {
  const { t } = useLocale();

  return (
    <SectionWrapper id="portfolio" className="py-28 lg:py-36 border-t border-border/50">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            {t.portfolioPreview.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
          >
            {t.portfolioPreview.title}
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
          >
            {t.portfolioPreview.cta}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {previewProjects.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeInUp}
            whileHover={{
              y: -10,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
          >
            <Link
              href="/portfolio"
              className="group block cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-primary/70">
                  {project.category}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
