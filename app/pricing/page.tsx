"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLocale } from "@/lib/i18n";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: { bg: "Уебсайт", en: "Website" },
    price: "1,500",
    currency: { bg: "лв", en: "$" },
    period: "perProject" as const,
    popular: false,
    features: {
      bg: [
        "До 5 страници",
        "Мобилен отзивчив дизайн",
        "SEO оптимизация",
        "Контактна форма",
        "1 месец безплатна поддръжка",
        "SSL сертификат",
      ],
      en: [
        "Up to 5 pages",
        "Mobile responsive design",
        "SEO optimization",
        "Contact form",
        "1 month free support",
        "SSL certificate",
      ],
    },
  },
  {
    name: { bg: "Бизнес уебсайт", en: "Business Website" },
    price: "3,500",
    currency: { bg: "лв", en: "$" },
    period: "perProject" as const,
    popular: true,
    features: {
      bg: [
        "До 15 страници",
        "Персонализиран дизайн",
        "Next.js / React / WordPress",
        "CMS интеграция",
        "E-commerce функционалност",
        "Аналитика & SEO",
        "3 месеца безплатна поддръжка",
        "Анимации & интерактивност",
      ],
      en: [
        "Up to 15 pages",
        "Custom design",
        "Next.js / React / WordPress",
        "CMS integration",
        "E-commerce functionality",
        "Analytics & SEO",
        "3 months free support",
        "Animations & interactivity",
      ],
    },
  },
  {
    name: { bg: "Видео продукция", en: "Video Production" },
    price: "2,000",
    currency: { bg: "лв", en: "$" },
    period: "perProject" as const,
    popular: false,
    features: {
      bg: [
        "Бранд филм до 90 секунди",
        "Професионално заснемане",
        "Дрон снимки",
        "Цветокорекция",
        "Монтаж & пост-продукция",
        "2 ревизии",
      ],
      en: [
        "Brand film up to 90 seconds",
        "Professional filming",
        "Drone footage",
        "Color grading",
        "Editing & post-production",
        "2 revisions",
      ],
    },
  },
  {
    name: { bg: "SMMA пакет", en: "SMMA Package" },
    price: "800",
    currency: { bg: "лв", en: "$" },
    period: "perMonth" as const,
    popular: false,
    features: {
      bg: [
        "Одит на профила",
        "Стратегия за съдържание",
        "Оптимизация на био",
        "Визуална идентичност",
        "12 поста на месец",
        "Story шаблони",
        "Месечен отчет",
      ],
      en: [
        "Profile audit",
        "Content strategy",
        "Bio optimization",
        "Visual identity",
        "12 posts per month",
        "Story templates",
        "Monthly report",
      ],
    },
  },
];

export default function PricingPage() {
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
              className="absolute right-1/3 top-1/3 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {t.pricing.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance"
            >
              {t.pricing.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.pricing.description}
            </motion.p>
          </div>
        </section>

        <SectionWrapper className="py-20 lg:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name[locale]}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className={`group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-500 ${
                  plan.popular
                    ? "border-primary/50 shadow-[0_0_40px_hsl(151_97%_50%/0.1)]"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="flex justify-center -translate-y-px">
                      <span className="inline-flex items-center gap-1.5 rounded-b-lg bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                        <Sparkles size={12} />
                        {t.pricing.popular}
                      </span>
                    </div>
                  </div>
                )}

                <div className={plan.popular ? "mt-4" : ""}>
                  <h3 className="text-lg font-bold text-foreground">{plan.name[locale]}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground">{t.pricing.startFrom}</span>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {plan.currency[locale]} {t.pricing[plan.period]}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.pricing.includes}
                  </p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {plan.features[locale].map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(151_97%_50%/0.5)]"
                          : "border border-border/50 text-foreground hover:border-primary/30 hover:bg-primary/5"
                      }`}
                    >
                      {plan.popular ? t.pricing.ctaPopular : t.pricing.cta}
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                      {plan.popular && (
                        <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100" />
                      )}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom pricing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 rounded-2xl border border-border/50 bg-card p-8 text-center lg:p-12"
          >
            <h3 className="text-2xl font-bold text-foreground">
              {t.pricing.customTitle}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground leading-relaxed">
              {t.pricing.customDescription}
            </p>
            <div className="mt-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(151_97%_50%/0.5)]"
                >
                  {t.pricing.customCta}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
