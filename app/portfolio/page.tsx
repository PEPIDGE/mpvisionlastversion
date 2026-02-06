"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLocale } from "@/lib/i18n";
import {
  ExternalLink,
  Play,
  X,
  ArrowUpRight,
  Globe,
  Camera,
  Youtube,
} from "lucide-react";

// Website projects with real links
const websiteProjects = [
  {
    title: "Stripe",
    url: "https://stripe.com",
    description: {
      bg: "Водеща платформа за онлайн плащания с безупречен UI/UX дизайн и изключителна производителност.",
      en: "Leading online payments platform with flawless UI/UX design and exceptional performance.",
    },
    tags: ["Next.js", "React", "Fintech"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    builtWith: ["Next.js", "React", "TypeScript"],
    category: "Fintech",
  },
  {
    title: "Vercel",
    url: "https://vercel.com",
    description: {
      bg: "Платформа за деплойване и хостинг на уеб приложения с фокус върху скоростта и простотата.",
      en: "Web deployment and hosting platform focused on speed and simplicity.",
    },
    tags: ["Next.js", "Edge", "Cloud"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    builtWith: ["Next.js", "React", "Turborepo"],
    category: "SaaS",
  },
  {
    title: "Linear",
    url: "https://linear.app",
    description: {
      bg: "Модерен инструмент за управление на проекти, проектиран за скорост и ефективност на софтуерни екипи.",
      en: "Modern project management tool designed for speed and efficiency of software teams.",
    },
    tags: ["React", "SaaS", "Productivity"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    builtWith: ["React", "TypeScript", "GraphQL"],
    category: "SaaS",
  },
  {
    title: "Notion",
    url: "https://notion.so",
    description: {
      bg: "Всичко-в-едно работно пространство за бележки, документи, проекти и бази данни.",
      en: "All-in-one workspace for notes, documents, projects, and databases.",
    },
    tags: ["React", "Productivity", "SaaS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    builtWith: ["React", "Node.js", "PostgreSQL"],
    category: "Productivity",
  },
  {
    title: "Airbnb",
    url: "https://airbnb.com",
    description: {
      bg: "Глобална платформа за краткосрочно настаняване и уникални преживявания по целия свят.",
      en: "Global platform for short-term rentals and unique experiences around the world.",
    },
    tags: ["React", "E-commerce", "Travel"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
    builtWith: ["React", "Next.js", "GraphQL"],
    category: "Travel",
  },
  {
    title: "Shopify",
    url: "https://shopify.com",
    description: {
      bg: "Водещата e-commerce платформа, позволяваща на бизнеси да създават онлайн магазини бързо и лесно.",
      en: "Leading e-commerce platform enabling businesses to create online stores quickly and easily.",
    },
    tags: ["WordPress", "WooCommerce", "E-commerce"],
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop",
    builtWith: ["React", "Ruby on Rails", "GraphQL"],
    category: "E-commerce",
  },
];

// SMMA / Video / Media projects
const mediaProjects = [
  {
    kind: "video" as const,
    title: {
      bg: "Луксозен апартамент - видео тур",
      en: "Luxury Apartment - Video Tour",
    },
    description: {
      bg: "Кинематографичен видео тур на луксозен имот в центъра на София. Заснет с дрон и професионална камера.",
      en: "Cinematic video tour of a luxury property in downtown Sofia. Shot with drone and professional camera.",
    },
    tags: {
      bg: ["Недвижими имоти", "Дрон", "4K"],
      en: ["Real Estate", "Drone", "4K"],
    },
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=500&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    kind: "video" as const,
    title: {
      bg: "Бранд филм - Fitness Studio",
      en: "Brand Film - Fitness Studio",
    },
    description: {
      bg: "90-секунден кинематографичен бранд филм за премиум фитнес студио. Разказва историята на трансформацията.",
      en: "90-second cinematic brand film for a premium fitness studio. Tells the story of transformation.",
    },
    tags: {
      bg: ["Бранд филм", "Фитнес", "Кинематографичен"],
      en: ["Brand Film", "Fitness", "Cinematic"],
    },
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    kind: "photo" as const,
    title: {
      bg: "Фотография на недвижими имоти",
      en: "Real Estate Photography",
    },
    description: {
      bg: "Професионална фотография на 15+ имота за водеща агенция за недвижими имоти. HDR заснемане и пост-продукция.",
      en: "Professional photography of 15+ properties for a leading real estate agency. HDR capture and post-production.",
    },
    tags: {
      bg: ["Снимки", "Недвижими имоти", "HDR"],
      en: ["Photography", "Real Estate", "HDR"],
    },
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop",
  },
  {
    kind: "video" as const,
    title: {
      bg: "YouTube канал - ресторант серия",
      en: "YouTube Channel - Restaurant Series",
    },
    description: {
      bg: "12-епизодна поредица за YouTube канал на ресторантска верига. Средно 50K гледания на епизод.",
      en: "12-episode series for a restaurant chain YouTube channel. Averaging 50K views per episode.",
    },
    tags: {
      bg: ["YouTube", "Храна", "Серия"],
      en: ["YouTube", "Food", "Series"],
    },
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    kind: "smma" as const,
    title: {
      bg: "Instagram - FitLife Coaching",
      en: "Instagram - FitLife Coaching",
    },
    description: {
      bg: "Пълен Instagram рестарт за бранд за персонални тренировки. От 1.2K до 18.4K последователи за 3 месеца.",
      en: "Complete Instagram overhaul for personal training brand. From 1.2K to 18.4K followers in 3 months.",
    },
    tags: {
      bg: ["SMMA", "Instagram", "Фитнес"],
      en: ["SMMA", "Instagram", "Fitness"],
    },
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    before: { followers: "1.2K", engagement: "0.8%" },
    after: { followers: "18.4K", engagement: "5.2%" },
    changes: {
      bg: [
        "Пренаписахме биото с ясна стойностна оферта",
        "Създадохме брандирани highlight корици",
        "Разработихме стратегия за съдържание",
        "Оптимизирахме графика за публикуване",
      ],
      en: [
        "Rewrote bio with clear value proposition",
        "Created branded highlight covers",
        "Developed content pillar strategy",
        "Optimized posting schedule",
      ],
    },
  },
  {
    kind: "smma" as const,
    title: {
      bg: "Multi-platform - Luxe Interiors",
      en: "Multi-platform - Luxe Interiors",
    },
    description: {
      bg: "Трансформация на социалното присъствие на фирма за интериорен дизайн. От 800 до 12.6K последователи.",
      en: "Social presence transformation for interior design firm. From 800 to 12.6K followers.",
    },
    tags: {
      bg: ["SMMA", "Интериорен дизайн", "Луксозен"],
      en: ["SMMA", "Interior Design", "Luxury"],
    },
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=500&fit=crop",
    before: { followers: "800", engagement: "1.1%" },
    after: { followers: "12.6K", engagement: "6.8%" },
    changes: {
      bg: [
        "Редизайн на грида с кохезивна цветова палитра",
        "Before/after карусел стратегия",
        "Story шаблони за разкриване на проекти",
        "Хаштаг и колаборационна стратегия",
      ],
      en: [
        "Redesigned grid with cohesive color palette",
        "Before/after carousel strategy",
        "Story templates for project reveals",
        "Hashtag and collaboration strategy",
      ],
    },
  },
];

type Tab = "websites" | "media";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<Tab>("websites");
  const [videoLightbox, setVideoLightbox] = useState<string | null>(null);
  const [selectedSmma, setSelectedSmma] = useState<(typeof mediaProjects)[number] | null>(null);
  const { locale, t } = useLocale();

  const tabs: { key: Tab; label: string }[] = [
    { key: "websites", label: t.portfolio.tabWebsites },
    { key: "media", label: t.portfolio.tabMedia },
  ];

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
              className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {t.portfolio.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance"
            >
              {t.portfolio.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.portfolio.description}
            </motion.p>
          </div>
        </section>

        <SectionWrapper className="py-20 lg:py-28">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-1 rounded-2xl border border-border/50 bg-card p-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-200 ${
                    activeTab === tab.key
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="portfolio-page-tab"
                      className="absolute inset-0 rounded-xl bg-primary shadow-[0_0_20px_hsl(151_97%_50%/0.3)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === "websites" && (
              <motion.div
                key="websites"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer}
                className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {websiteProjects.map((project) => (
                  <motion.a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
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
                      {/* Visit overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                          <Globe size={16} />
                          {t.portfolio.visitSite}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-foreground">
                          {project.title}
                        </h3>
                        <ExternalLink
                          size={16}
                          className="text-muted-foreground transition-colors group-hover:text-primary"
                        />
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {project.description[locale]}
                      </p>
                      <div className="mt-4">
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                          {t.portfolio.builtWith}
                        </span>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {project.builtWith.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20 transition-all hover:bg-primary/20 hover:ring-primary/40"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}

            {activeTab === "media" && (
              <motion.div
                key="media"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={staggerContainer}
                className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {mediaProjects.map((project) => (
                  <motion.div
                    key={project.title[locale]}
                    variants={fadeInUp}
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                    className="group cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/40"
                    onClick={() => {
                      if (project.kind === "video" && project.videoUrl) {
                        setVideoLightbox(project.videoUrl);
                      } else if (project.kind === "smma") {
                        setSelectedSmma(project);
                      }
                    }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title[locale]}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      {project.kind === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground backdrop-blur-sm shadow-[0_0_30px_hsl(151_97%_50%/0.3)]"
                          >
                            <Play size={24} fill="currentColor" />
                          </motion.div>
                        </div>
                      )}
                      {project.kind === "photo" && (
                        <div className="absolute top-4 right-4">
                          <div className="rounded-lg bg-background/80 backdrop-blur-sm p-2">
                            <Camera size={16} className="text-primary" />
                          </div>
                        </div>
                      )}
                      {project.kind === "smma" && (
                        <div className="absolute top-4 right-4">
                          <div className="rounded-lg bg-background/80 backdrop-blur-sm p-2">
                            <ArrowUpRight size={16} className="text-primary" />
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags[locale].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-foreground">
                        {project.title[locale]}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {project.description[locale]}
                      </p>
                      {project.kind === "smma" && project.before && project.after && (
                        <div className="mt-4 flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Before</p>
                            <p className="text-sm font-bold text-foreground">{project.before.followers}</p>
                          </div>
                          <div className="text-primary font-bold">{">"}</div>
                          <div className="text-center">
                            <p className="text-xs text-primary">After</p>
                            <p className="text-sm font-bold text-primary">{project.after.followers}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </SectionWrapper>
      </main>
      <Footer />

      {/* Video Lightbox */}
      <AnimatePresence>
        {videoLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-2xl p-4 md:p-8"
            onClick={() => setVideoLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <button
                type="button"
                onClick={() => setVideoLightbox(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border/50 text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <X size={18} />
              </button>
              <div className="aspect-video overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_0_60px_hsl(151_97%_50%/0.1)]">
                <iframe
                  src={videoLightbox}
                  title="Video"
                  allow="autoplay; fullscreen"
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SMMA Detail Modal */}
      <AnimatePresence>
        {selectedSmma && selectedSmma.kind === "smma" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 backdrop-blur-2xl p-4 md:p-8"
            onClick={() => setSelectedSmma(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border/50 bg-card"
            >
              <button
                type="button"
                onClick={() => setSelectedSmma(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-[21/9] overflow-hidden rounded-t-2xl">
                <img src={selectedSmma.image || "/placeholder.svg"} alt={selectedSmma.title[locale]} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground">{selectedSmma.title[locale]}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selectedSmma.description[locale]}</p>

                {selectedSmma.before && selectedSmma.after && (
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="rounded-xl border border-border/50 bg-secondary/30 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Before</h3>
                      <div className="mt-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Followers</span>
                          <span className="text-sm font-semibold text-foreground">{selectedSmma.before.followers}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Engagement</span>
                          <span className="text-sm font-semibold text-foreground">{selectedSmma.before.engagement}</span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">After</h3>
                      <div className="mt-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Followers</span>
                          <span className="text-sm font-semibold text-primary">{selectedSmma.after.followers}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Engagement</span>
                          <span className="text-sm font-semibold text-primary">{selectedSmma.after.engagement}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedSmma.changes && (
                  <div className="mt-8">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {locale === "bg" ? "Какво променихме" : "What We Changed"}
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {selectedSmma.changes[locale].map((change) => (
                        <li key={change} className="flex items-start gap-3 text-sm text-foreground/80">
                          <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
