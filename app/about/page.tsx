"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { Target, Zap, Heart, Shield } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { AnimatedCounter } from "@/components/animated-counter";

const valuesData = [
  { icon: Target, key: "precision" },
  { icon: Zap, key: "performance" },
  { icon: Heart, key: "partnership" },
  { icon: Shield, key: "integrity" },
];

const valuesContent = {
  bg: [
    { title: "Прецизност", description: "Всеки проект е изработен с прецизно внимание към детайла. Обсебваме се от най-малките елементи, защото те правят най-голямата разлика." },
    { title: "Производителност", description: "Скоростта и ефективността са ненарушими. Нашите решения са проектирани да зареждат бързо и да доставят измерими резултати." },
    { title: "Партньорство", description: "Третираме всяка клиентска връзка като дългосрочно партньорство. Вашият успех е нашият успех." },
    { title: "Почтеност", description: "Прозрачна комуникация, честни срокове и без компромиси. Изграждаме доверие чрез последователно доставяне." },
  ],
  en: [
    { title: "Precision", description: "Every project is crafted with meticulous attention to detail. We obsess over the smallest elements because they make the biggest difference." },
    { title: "Performance", description: "Speed and efficiency are non-negotiable. Our solutions are engineered to load fast and deliver measurable results." },
    { title: "Partnership", description: "We treat every client relationship as a long-term partnership. Your success is our success." },
    { title: "Integrity", description: "Transparent communication, honest timelines, and no shortcuts. We build trust through consistent delivery." },
  ],
};

const teamData = {
  bg: [
    { name: "Михаил Петров", role: "Основател & Креативен директор", bio: "10+ години в дигиталния дизайн и бранд стратегия. Преди MP Vision е водил креативния отдел на две наградени агенции." },
    { name: "Виктория Лазарова", role: "Ръководител разработка", bio: "Full-stack инженер с passion за производителност. Изгражда сайтове, които са толкова бързи, колкото и красиви." },
    { name: "Даниел Тодоров", role: "Ръководител видео продукция", bio: "Награждаван режисьор и монтажист. Специализира в бранд storytelling и кинематографична продукция." },
    { name: "Амара Йорданова", role: "Стратег социални мрежи", bio: "Бивш growth lead в топ SMMA агенция. Превръща стагниращи профили в магнити за висококонвертиращи аудитории." },
  ],
  en: [
    { name: "Michael Park", role: "Founder & Creative Director", bio: "10+ years in digital design and brand strategy. Previously led creative at two award-winning agencies." },
    { name: "Victoria Lee", role: "Head of Development", bio: "Full-stack engineer with a passion for performance optimization. Builds sites that are as fast as they are beautiful." },
    { name: "Daniel Torres", role: "Video Production Lead", bio: "Award-winning filmmaker and editor. Specializes in brand storytelling and cinematic production." },
    { name: "Amara Johnson", role: "Social Media Strategist", bio: "Former growth lead at a top SMMA agency. Turns stagnant profiles into high-converting audience magnets." },
  ],
};

export default function AboutPage() {
  const { locale, t } = useLocale();
  const values = valuesContent[locale];
  const team = teamData[locale];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-background px-6 pt-24 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {t.about.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance"
            >
              {t.about.title1}
              <br />
              <span className="text-primary">{t.about.titleAccent}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.about.description}
            </motion.p>
          </div>
        </section>

        {/* Story */}
        <SectionWrapper className="relative py-28 lg:py-36 border-t border-border/50 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0], opacity: [0.03, 0.08, 0.03] }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary blur-[100px]"
            />
            <motion.div
              animate={{ scale: [1.3, 1, 1.3], rotate: [90, 0, 90], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
              className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-primary blur-[100px]"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="relative"
            >
              {/* Decorative corner accent */}
              <div className="absolute -left-4 -top-4 h-20 w-20 border-l-4 border-t-4 border-primary/20 rounded-tl-3xl" />
              
              <div className="relative rounded-3xl border-2 border-border/50 bg-gradient-to-br from-card to-card/50 p-8 lg:p-10 backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="mb-6 h-1 rounded-full bg-gradient-to-r from-primary to-primary/30"
                />
                
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {t.about.storyLabel}
                </p>
                
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  {t.about.storyTitle}
                </h2>
                
                <div className="mt-8 flex flex-col gap-6">
                  {[t.about.storyP1, t.about.storyP2, t.about.storyP3].map((paragraph, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                      className="relative pl-6"
                    >
                      <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primary/50" />
                      <p className="text-base leading-relaxed text-muted-foreground">{paragraph}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Bottom decorative accent */}
              <div className="absolute -right-4 -bottom-4 h-20 w-20 border-r-4 border-b-4 border-primary/20 rounded-br-3xl" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="grid grid-cols-2 gap-4 lg:gap-6"
            >
              {[
                { target: 50, suffix: "+", label: t.about.stats.projects },
                { target: 2020, suffix: "", label: t.about.stats.founded, noAnimate: true },
                { target: 98, suffix: "%", label: t.about.stats.retention },
                { target: 4, suffix: "", label: t.about.stats.specialists },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="group relative overflow-hidden rounded-3xl border-2 border-border/50 bg-gradient-to-br from-card to-card/50 p-8 text-center transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(151_97%_50%/0.2)]"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  
                  {/* Top glow */}
                  <div className="absolute top-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 group-hover:w-full" />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="mb-3 text-4xl font-black text-primary sm:text-5xl"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {stat.noAnimate ? (
                        stat.target
                      ) : (
                        <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={1.5} />
                      )}
                    </motion.div>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-primary/0 rounded-tl-lg transition-all duration-500 group-hover:border-primary/60" />
                  <div className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-primary/0 rounded-br-lg transition-all duration-500 group-hover:border-primary/60" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Values */}
        <SectionWrapper className="py-28 lg:py-36 border-t border-border/50">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {t.about.valuesLabel}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            >
              {t.about.valuesTitle}
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value, i) => {
              const Icon = valuesData[i].icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="group rounded-2xl border border-border/50 bg-card p-8 text-center transition-all duration-500 hover:border-primary/30"
                >
                  <motion.div
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_hsl(151_97%_50%/0.2)]"
                  >
                    <Icon size={26} />
                  </motion.div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </SectionWrapper>

        {/* Team */}
        <SectionWrapper className="py-28 lg:py-36 border-t border-border/50">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {t.about.teamLabel}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
            >
              {t.about.teamTitle}
            </motion.h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30"
              >
                <motion.div
                  whileHover={{ rotate: -3, scale: 1.05 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-xl font-bold text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(151_97%_50%/0.2)]"
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </motion.div>
                <h3 className="mt-5 text-base font-bold text-foreground">{member.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
