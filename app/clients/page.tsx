"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLocale } from "@/lib/i18n";
import { AnimatedCounter } from "@/components/animated-counter";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const clients = [
  {
    name: "Elevate Fitness",
    industry: { bg: "Фитнес & Уелнес", en: "Fitness & Wellness" },
    description: {
      bg: "Пълна дигитална трансформация - уебсайт, видео и SMMA оптимизация за водеща фитнес верига.",
      en: "Full digital transformation - website, video, and SMMA optimization for a leading fitness chain.",
    },
    projects: 3,
    logo: "EF",
    services: { bg: ["Уебсайт", "Видео", "SMMA"], en: ["Website", "Video", "SMMA"] },
  },
  {
    name: "NovaTech",
    industry: { bg: "Технологии & SaaS", en: "Technology & SaaS" },
    description: {
      bg: "Дизайн и разработка на лендинг страница с висока конверсия за SaaS стартъп.",
      en: "High-conversion landing page design and development for a SaaS startup.",
    },
    projects: 2,
    logo: "NT",
    services: { bg: ["Уебсайт", "Видео"], en: ["Website", "Video"] },
  },
  {
    name: "Artisan Estates",
    industry: { bg: "Недвижими имоти", en: "Real Estate" },
    description: {
      bg: "Луксозен уебсайт с виртуални турове и видео продукция за премиум имоти.",
      en: "Luxury website with virtual tours and video production for premium properties.",
    },
    projects: 4,
    logo: "AE",
    services: { bg: ["Уебсайт", "Видео", "Снимки"], en: ["Website", "Video", "Photography"] },
  },
  {
    name: "Meridian Wellness",
    industry: { bg: "Здраве & Уелнес", en: "Health & Wellness" },
    description: {
      bg: "Кинематографичен бранд филм и пълна социална медийна стратегия за уелнес бранд.",
      en: "Cinematic brand film and full social media strategy for a wellness brand.",
    },
    projects: 2,
    logo: "MW",
    services: { bg: ["Видео", "SMMA"], en: ["Video", "SMMA"] },
  },
  {
    name: "Luxe Interiors",
    industry: { bg: "Интериорен дизайн", en: "Interior Design" },
    description: {
      bg: "SMMA трансформация, превръщайки стагниращ профил в магнит за висококачествени клиенти.",
      en: "SMMA transformation, turning a stagnant profile into a magnet for high-quality clients.",
    },
    projects: 1,
    logo: "LI",
    services: { bg: ["SMMA"], en: ["SMMA"] },
  },
  {
    name: "GreenLeaf Cafe",
    industry: { bg: "Храни & Напитки", en: "Food & Beverage" },
    description: {
      bg: "Социален ребранд за верига органични кафенета, удвоявайки посещаемостта чрез локална ангажираност.",
      en: "Social rebrand for an organic cafe chain, doubling foot traffic through local engagement.",
    },
    projects: 2,
    logo: "GL",
    services: { bg: ["SMMA", "Снимки"], en: ["SMMA", "Photography"] },
  },
  {
    name: "TechPulse",
    industry: { bg: "Технологии", en: "Technology" },
    description: {
      bg: "Динамично видео за лансиране на продукт, комбиниращо live action с motion graphics.",
      en: "Dynamic product launch video combining live action with motion graphics.",
    },
    projects: 1,
    logo: "TP",
    services: { bg: ["Видео"], en: ["Video"] },
  },
  {
    name: "Urban Eats",
    industry: { bg: "Ресторантьорство", en: "Restaurant" },
    description: {
      bg: "12-епизодна YouTube серия и пълна социална стратегия за ресторантска верига.",
      en: "12-episode YouTube series and full social strategy for a restaurant chain.",
    },
    projects: 3,
    logo: "UE",
    services: { bg: ["Видео", "SMMA", "Уебсайт"], en: ["Video", "SMMA", "Website"] },
  },
];

export default function ClientsPage() {
  const { locale, t } = useLocale();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden bg-background px-6 pt-24 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute left-2/3 top-1/3 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {t.clients.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance"
            >
              {t.clients.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.clients.description}
            </motion.p>
          </div>
        </section>

        {/* Stats bar */}
        <SectionWrapper className="py-16 border-t border-border/50">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { target: 8, suffix: "+", label: locale === "bg" ? "Клиенти" : "Clients" },
              { target: 50, suffix: "+", label: locale === "bg" ? "Проекта" : "Projects" },
              { target: 98, suffix: "%", label: locale === "bg" ? "Задържане" : "Retention" },
              { target: 5, suffix: "", label: locale === "bg" ? "Индустрии" : "Industries" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={1.2} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* Clients grid */}
        <SectionWrapper className="py-20 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {clients.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/40"
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    whileHover={{ rotate: -5, scale: 1.05 }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(151_97%_50%/0.2)]"
                  >
                    {client.logo}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-foreground">{client.name}</h3>
                      <span className="text-xs text-muted-foreground">
                        {client.projects} {t.clients.projectsDone}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-primary">
                      {client.industry[locale]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {client.description[locale]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {client.services[locale].map((service) => (
                        <span
                          key={service}
                          className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 rounded-2xl border border-border/50 bg-card p-8 text-center lg:p-12"
          >
            <h3 className="text-2xl font-bold text-foreground">
              {locale === "bg" ? "Искате да станете наш следващ клиент?" : "Want to be our next client?"}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
              {locale === "bg"
                ? "Свържете се с нас и нека обсъдим как можем да трансформираме вашето дигитално присъствие."
                : "Get in touch and let's discuss how we can transform your digital presence."}
            </p>
            <div className="mt-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(151_97%_50%/0.5)]"
                >
                  {t.nav.bookCall}
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
