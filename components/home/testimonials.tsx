"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Star } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const testimonials = [
  {
    quote: {
      bg: "MP Vision трансформира онлайн присъствието ни напълно. Сайтът ни се превърна от проблем в най-силния ни инструмент за продажби.",
      en: "MP Vision transformed our online presence completely. Our website went from a liability to our strongest sales tool.",
    },
    author: "Sarah Chen",
    role: "CEO, Elevate Fitness",
    rating: 5,
  },
  {
    quote: {
      bg: "Бранд видеото, което продуцираха, улови визията ни перфектно. Използваме го навсякъде и постоянно надминава останалото ни съдържание.",
      en: "The brand video they produced captured our vision perfectly. We've used it across every channel and it consistently outperforms all our other content.",
    },
    author: "Marcus Rivera",
    role: "CMO, Meridian Wellness",
    rating: 5,
  },
  {
    quote: {
      bg: "Instagram ни се превърна от 800 последователи без ангажираност до над 12K последователи, които реално конвертират. SMMA стратегията им беше пълна промяна на играта.",
      en: "Our Instagram went from 800 followers with no engagement to over 12K followers who actually convert. Their SMMA strategy was a complete game-changer.",
    },
    author: "Emily Nakamura",
    role: "Founder, Luxe Interiors",
    rating: 5,
  },
];

export function Testimonials() {
  const { locale, t } = useLocale();

  return (
    <SectionWrapper className="py-28 lg:py-36">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-primary"
        >
          {t.testimonials.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
        >
          {t.testimonials.title}
        </motion.h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.author}
            variants={fadeInUp}
            whileHover={{
              y: -6,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="group rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30"
          >
            {/* Glow accent */}
            <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={`star-${testimonial.author}-${i}`}
                  size={14}
                  className="fill-primary text-primary"
                />
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/80 italic">
              {`"${testimonial.quote[locale]}"`}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {testimonial.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
