"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLocale } from "@/lib/i18n";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqData = {
  bg: [
    {
      category: "Общи",
      questions: [
        { q: "Какви услуги предлага MP Vision?", a: "Специализираме се в три основни услуги: разработка на високопроизводителни уебсайтове, професионална видео продукция и създаване и оптимизация на SMMA профили. Всяка услуга е съобразена с постигането на измерими бизнес резултати." },
        { q: "Колко време отнема типичен проект?", a: "Сроковете варират според обхвата. Уебсайт проектите обикновено отнемат 4-8 седмици, видео продукцията 2-4 седмици, а SMMA оптимизациите 1-2 седмици. Предоставяме детайлен график в началното ни предложение." },
        { q: "Работите ли с бизнеси от всякакъв размер?", a: "Да. Работили сме със стартъпи, растящи МСП и утвърдени брандове. Подходът ни се мащабира спрямо вашите нужди и бюджет." },
      ],
    },
    {
      category: "Уеб разработка",
      questions: [
        { q: "Какви технологии използвате?", a: "Основно изграждаме с Next.js, React, TypeScript и WordPress за различни нужди. Деплойваме на Vercel за мълниеносна глобална доставка." },
        { q: "Предоставяте ли текуща поддръжка?", a: "Абсолютно. Предлагаме месечни пакети за поддръжка, включващи обновления за сигурност, мониторинг на производителността и приоритетна поддръжка." },
        { q: "Можете ли да оптимизирате съществуващия ми сайт?", a: "В някои случаи, да. Предлагаме одити на производителността и услуги за оптимизация. Ако текущият ви технологичен стек ограничава растежа ви, може да препоръчаме стратегическо преизграждане." },
      ],
    },
    {
      category: "Видео продукция",
      questions: [
        { q: "Какви типове видео съдържание произвеждате?", a: "Произвеждаме бранд филми, продуктови демонстрации, съдържание за социални мрежи, снимки на недвижими имоти, YouTube серии и motion graphics." },
        { q: "Пътувате ли за видео заснемания?", a: "Да. Пътуваме до вашата локация и сме работили в множество градове. Разходите за пътуване са включени прозрачно в нашите оферти." },
      ],
    },
    {
      category: "SMMA профили",
      questions: [
        { q: "Какво включва оптимизацията на профил?", a: "SMMA услугата ни включва одит на текущите профили, стратегия за съдържание, оптимизация на био, визуална идентичност, story шаблони и план за растеж." },
        { q: "За кои платформи оптимизирате?", a: "Основно фокусираме върху Instagram, TikTok, LinkedIn и Twitter/X. Стратегията е съобразена с платформите, най-релевантни за вашата целева аудитория." },
        { q: "Колко бързо ще видя резултати?", a: "Повечето клиенти забелязват увеличение в ангажираността в рамките на 2-4 седмици. Значителен ръст на последователи обикновено следва в рамките на 2-3 месеца." },
      ],
    },
  ],
  en: [
    {
      category: "General",
      questions: [
        { q: "What services does MP Vision offer?", a: "We specialize in three core services: high-performance website development, professional video production, and SMMA profile creation and optimization." },
        { q: "How long does a typical project take?", a: "Timelines vary by scope. Website projects typically take 4-8 weeks, video production 2-4 weeks, and SMMA profile overhauls 1-2 weeks." },
        { q: "Do you work with businesses of all sizes?", a: "Yes. We have worked with startups, growing SMBs, and established brands. Our approach scales to fit your needs and budget." },
      ],
    },
    {
      category: "Web Development",
      questions: [
        { q: "What technologies do you use?", a: "We primarily build with Next.js, React, TypeScript, and WordPress. We deploy on Vercel for lightning-fast global delivery." },
        { q: "Do you provide ongoing support?", a: "Absolutely. We offer monthly maintenance packages including security updates, performance monitoring, and priority support." },
        { q: "Can you optimize my existing website?", a: "In some cases, yes. We offer performance audits and optimization services. If your tech stack is limiting growth, we may recommend a strategic rebuild." },
      ],
    },
    {
      category: "Video Production",
      questions: [
        { q: "What types of video content do you produce?", a: "We produce brand films, product showcases, social media content, real estate photography, YouTube series, and motion graphics." },
        { q: "Do you travel for video shoots?", a: "Yes. We travel to your location and have worked across multiple cities. Travel costs are included transparently in our quotes." },
      ],
    },
    {
      category: "SMMA Profiles",
      questions: [
        { q: "What does a profile optimization include?", a: "Our SMMA service includes profile audit, content strategy, bio optimization, visual identity, story templates, and a growth playbook." },
        { q: "Which platforms do you optimize for?", a: "We primarily focus on Instagram, TikTok, LinkedIn, and Twitter/X. Strategy is tailored to your target audience's platforms." },
        { q: "How quickly will I see results?", a: "Most clients see increased engagement within 2-4 weeks. Significant follower growth typically follows within 2-3 months." },
      ],
    },
  ],
};

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const { locale, t } = useLocale();

  const categories = faqData[locale];

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-background px-6 pt-24 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute right-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {t.faq.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance"
            >
              {t.faq.title1}
              <br />
              <span className="text-primary">{t.faq.titleAccent}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.faq.description}
            </motion.p>
          </div>
        </section>

        <SectionWrapper className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-12"
            >
              {categories.map((category) => (
                <motion.div key={category.category} variants={fadeInUp}>
                  <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                    {category.category}
                  </h2>
                  <div className="flex flex-col gap-0 rounded-2xl border border-border/50 bg-card overflow-hidden">
                    {category.questions.map((item, index) => {
                      const id = `${category.category}-${index}`;
                      const isOpen = openItems.has(id);
                      return (
                        <div
                          key={id}
                          className={`${index > 0 ? "border-t border-border/50" : ""}`}
                        >
                          <button
                            type="button"
                            onClick={() => toggle(id)}
                            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-secondary/30"
                          >
                            <span className="pr-4 text-sm font-medium text-foreground">{item.q}</span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                                isOpen
                                  ? "bg-primary/10 text-primary"
                                  : "bg-secondary text-muted-foreground"
                              }`}
                            >
                              {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Still have questions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-16 rounded-2xl border border-border/50 bg-card p-8 text-center lg:p-12"
            >
              <h3 className="text-xl font-bold text-foreground">{t.faq.stillQuestions}</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                {t.faq.stillQuestionsDesc}
              </p>
              <div className="mt-6">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_hsl(151_97%_50%/0.5)]"
                  >
                    {t.faq.contactUs}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
