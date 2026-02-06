"use client";

import { createContext, useContext } from "react";

export type Locale = "bg" | "en";

export const defaultLocale: Locale = "bg";

const dict = {
  bg: {
    // Nav
    nav: {
      home: "Начало",
      portfolio: "Портфолио",
      about: "За нас",
      pricing: "Цени",
      clients: "Клиенти",
      contact: "Контакт",
      faq: "ЧЗВ",
      bookCall: "Запази обаждане",
    },
    // Hero
    hero: {
      badge: "Дигитална агенция",
      title1: "Изграждаме",
      title2: "дигиталното",
      titleAccent: "бъдеще",
      description:
        "Уебсайтове. Видео. Социални мрежи. Всичко, което ви трябва за растеж.",
      cta1: "Стартирайте проект",
      cta2: "Портфолио",
      stat1: "Проекта",
      stat2: "Доволни клиенти",
      stat3: "Ръст на ROI",
    },
    // Services
    services: {
      label: "Какво правим",
      title: "Три стълба на дигиталното съвършенство",
      description:
        "Комбинираме техническа прецизност с творческа визия за постигане на резултати, които движат бизнеса ви напред.",
      web: {
        title: "Високопроизводителни уебсайтове",
        description:
          "Мълниеносно бързи, оптимизирани за конверсия уебсайтове, изградени с модерни технологии. Всеки пиксел е целенасочен, всяко взаимодействие е плавно.",
        features: [
          "Next.js & React разработка",
          "WordPress & WooCommerce",
          "SEO & Core Web Vitals",
          "Мобилен отзивчив дизайн",
        ],
      },
      video: {
        title: "Видео продукция",
        description:
          "Кинематографични бранд видеа, продуктови демонстрации и съдържание за социални мрежи, което спира скрола.",
        features: [
          "Бранд филми & реклами",
          "Съдържание за социални мрежи",
          "Снимки на недвижими имоти",
          "Монтаж & цветокорекция",
        ],
      },
      smma: {
        title: "SMMA профили",
        description:
          "Стратегически изградени профили в социалните мрежи за ангажираност и растеж. Одитираме, редизайнваме и оптимизираме цялостното ви присъствие.",
        features: [
          "Одит & стратегия на профили",
          "Оптимизация на био & съдържание",
          "Визуална идентичност",
          "План за растеж",
        ],
      },
    },
    // Technologies
    tech: {
      label: "Технологии",
      title: "Технологичният ни стек",
      description: "Работим с най-съвременните технологии за изграждане на бързи, мащабируеми и красиви решения.",
    },
    // Portfolio preview (home)
    portfolioPreview: {
      label: "Нашата работа",
      title: "Проекти, които говорят сами за себе си",
      cta: "Вижте цялото портфолио",
      viewProject: "Виж проекта",
      watchVideo: "Гледай видео",
      seeTransformation: "Виж трансформацията",
    },
    // Portfolio page
    portfolio: {
      label: "Портфолио",
      title: "Нашата работа",
      description: "Разгледайте избрани проекти от нашето портфолио - от уебсайтове до видео продукция и SMMA оптимизации.",
      tabWebsites: "Уебсайтове",
      tabMedia: "Видео & Медия",
      visitSite: "Посети сайта",
      viewDetails: "Виж детайли",
      challenge: "Предизвикателство",
      solution: "Решение",
      results: "Резултати",
      builtWith: "Изграден с",
      category: "Категория",
    },
    // Process
    process: {
      label: "Нашият процес",
      title: "От визия до реалност",
      steps: [
        {
          title: "Откриване",
          description: "Навлизаме дълбоко във вашия бранд, аудитория и цели. Без предположения, само разбиране.",
        },
        {
          title: "Стратегия",
          description: "Картографираме подхода, дефинираме метрики за успех и изграждаме ясна пътна карта.",
        },
        {
          title: "Създаване",
          description: "Нашият екип реализира визията с прецизност, итерирайки тясно с вашата обратна връзка.",
        },
        {
          title: "Стартиране",
          description: "Внедряваме, оптимизираме и предоставяме постоянна поддръжка за устойчив растеж.",
        },
      ],
    },
    // Testimonials
    testimonials: {
      label: "Клиентски истории",
      title: "Доверени от амбициозни брандове",
    },
    // Pricing
    pricing: {
      label: "Цени",
      title: "Прозрачно ценообразуване",
      description: "Избирете пакета, който отговаря на вашите нужди. Всички цени включват консултация и поддръжка.",
      popular: "Популярен",
      startFrom: "от",
      perProject: "/ проект",
      perMonth: "/ месец",
      cta: "Започнете",
      ctaPopular: "Свържете се",
      includes: "Включва:",
      customTitle: "Нужда от нещо специално?",
      customDescription: "Свържете се с нас за персонализирана оферта, съобразена с вашите конкретни нужди и бюджет.",
      customCta: "Поискайте оферта",
    },
    // Clients
    clients: {
      label: "Клиенти",
      title: "Партньори, на които вярваме",
      description: "Работили сме с брандове от различни индустрии, помагайки им да тран��формират своето дигитално присъствие.",
      projectsDone: "проекта",
      industry: "Индустрия",
    },
    // About
    about: {
      label: "За нас",
      title1: "Малък екип с",
      titleAccent: "големи амбиции",
      description:
        "MP Vision беше основана с простата вяра: брандовете заслужават дигитални преживявания, които съответстват на амбицията им.",
      storyLabel: "Нашата история",
      storyTitle: "Различни от самото начало",
      storyP1:
        "MP Vision стартира през 2020, когато нашият основател забеляза пропуск на пазара: бизнесите плащаха премиум цени за посредствена дигитална работа.",
      storyP2:
        "Поехме предизвикателството, сглобявайки екип от специалисти, споделящи една обсесия: да доставяме работа, която наистина генерира резултати.",
      storyP3:
        "Днес сме реализирали над 50 проекта в областта на уеб, видео и социални мрежи, помагайки на брандове да трансформират дигиталното си присъствие.",
      valuesLabel: "Нашите ценности",
      valuesTitle: "Какво ръководи всяко решение",
      teamLabel: "Екипът",
      teamTitle: "Хората зад пикселите",
      stats: {
        projects: "Проекта завършени",
        founded: "Година на основаване",
        retention: "Задържане на клиенти",
        specialists: "Специалисти в екипа",
      },
    },
    // Contact
    contact: {
      label: "Свържете се",
      title1: "Нека започнем вашия",
      titleAccent: "следващ проект",
      description:
        "Разкажете ни за вашата визия и ние ще ви отговорим в рамките на 24 часа с персонализирано предложение.",
      infoTitle: "Информация за контакт",
      infoDescription: "Предпочитате директен разговор? Запазете безплатна стратегическа консултация.",
      bookCall: "Безплатна стратегическа консултация",
      email: "Имейл",
      location: "Локация",
      locationValue: "Дистанционно, по целия свят",
      responseTime: "Средно време за отговор",
      formName: "Пълно име",
      formEmail: "Имейл адрес",
      formService: "Нужна услуга",
      formBudget: "Бюджет",
      formMessage: "Детайли за проекта",
      formPlaceholderName: "Иван Иванов",
      formPlaceholderEmail: "ivan@company.bg",
      formPlaceholderMessage: "Разкажете ни за вашия проект, цели и срокове...",
      selectService: "Изберете услуга",
      serviceWeb: "Уеб разработка",
      serviceVideo: "Видео продукция",
      serviceSmma: "SMMA профили",
      serviceAll: "Няколко услуги",
      selectBudget: "Изберете бюджет",
      submit: "Изпратете съобщение",
      submitted: "Съобщението е изпратено!",
    },
    // FAQ
    faq: {
      label: "ЧЗВ",
      title1: "Често задавани",
      titleAccent: "въпроси",
      description: "Всичко, което трябва да знаете за работата с MP Vision. Не намирате отговор? Свържете се с нас.",
      stillQuestions: "Все още имате въпроси?",
      stillQuestionsDesc: "С удоволствие ще помогнем. Запазете безплатна консултация или ни изпратете съобщение.",
      contactUs: "Свържете се",
    },
    // Footer
    footer: {
      readyLabel: "Готови за старт?",
      readyTitle1: "Нека изградим нещо",
      readyTitle2: "изключително заедно.",
      startProject: "Стартирайте проект",
      servicesTitle: "Услуги",
      companyTitle: "Компания",
      socialTitle: "Социални мрежи",
      description: "Дигитална агенция, създаваща високопроизводителни уебсайтове, кинематографични видеа и профили в социалните мрежи, които конвертират.",
      privacy: "Поверителност",
      terms: "Условия за ползване",
    },
  },
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      about: "About",
      pricing: "Pricing",
      clients: "Clients",
      contact: "Contact",
      faq: "FAQ",
      bookCall: "Book a Call",
    },
    hero: {
      badge: "Digital Agency",
      title1: "We build",
      title2: "the digital",
      titleAccent: "future",
      description:
        "Websites. Video. Social media. Everything you need to grow.",
      cta1: "Start a Project",
      cta2: "Portfolio",
      stat1: "Projects",
      stat2: "Happy Clients",
      stat3: "ROI Growth",
    },
    services: {
      label: "What We Do",
      title: "Three pillars of digital excellence",
      description:
        "We combine technical precision with creative vision to deliver results that move the needle for your business.",
      web: {
        title: "High-Performance Websites",
        description:
          "Lightning-fast, conversion-optimized websites built with modern frameworks. Every pixel is intentional, every interaction is smooth.",
        features: [
          "Next.js & React development",
          "WordPress & WooCommerce",
          "SEO & Core Web Vitals",
          "Mobile-first responsive design",
        ],
      },
      video: {
        title: "Video Production",
        description:
          "Cinematic brand videos, product showcases, and social content that stop the scroll. Professional storytelling from concept to final cut.",
        features: [
          "Brand films & commercials",
          "Social media content",
          "Real estate photography",
          "Editing & color grading",
        ],
      },
      smma: {
        title: "SMMA Profile Creation",
        description:
          "Strategic social media profiles built for engagement and growth. We audit, redesign, and optimize your entire social presence.",
        features: [
          "Profile audit & strategy",
          "Bio & content optimization",
          "Visual identity alignment",
          "Growth playbook creation",
        ],
      },
    },
    tech: {
      label: "Technologies",
      title: "Our tech stack",
      description: "We work with cutting-edge technologies to build fast, scalable, and beautiful solutions.",
    },
    portfolioPreview: {
      label: "Our Work",
      title: "Projects that speak for themselves",
      cta: "View full portfolio",
      viewProject: "View project",
      watchVideo: "Watch video",
      seeTransformation: "See transformation",
    },
    portfolio: {
      label: "Portfolio",
      title: "Our Work",
      description: "Explore selected projects from our portfolio - from websites to video production and SMMA optimizations.",
      tabWebsites: "Websites",
      tabMedia: "Video & Media",
      visitSite: "Visit site",
      viewDetails: "View details",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      builtWith: "Built with",
      category: "Category",
    },
    process: {
      label: "Our Process",
      title: "From vision to reality",
      steps: [
        {
          title: "Discovery",
          description: "We dive deep into your brand, audience, and goals. No assumptions, just understanding.",
        },
        {
          title: "Strategy",
          description: "We map out the approach, define success metrics, and build a clear roadmap to results.",
        },
        {
          title: "Creation",
          description: "Our team brings the vision to life with precision, iterating closely with your feedback.",
        },
        {
          title: "Launch & Scale",
          description: "We deploy, optimize, and provide ongoing support to ensure sustained growth and performance.",
        },
      ],
    },
    testimonials: {
      label: "Client Stories",
      title: "Trusted by ambitious brands",
    },
    pricing: {
      label: "Pricing",
      title: "Transparent pricing",
      description: "Choose the package that fits your needs. All prices include consultation and support.",
      popular: "Popular",
      startFrom: "from",
      perProject: "/ project",
      perMonth: "/ month",
      cta: "Get Started",
      ctaPopular: "Get in Touch",
      includes: "Includes:",
      customTitle: "Need something custom?",
      customDescription: "Contact us for a personalized quote tailored to your specific needs and budget.",
      customCta: "Request a Quote",
    },
    clients: {
      label: "Clients",
      title: "Partners we believe in",
      description: "We have worked with brands across industries, helping them transform their digital presence.",
      projectsDone: "projects",
      industry: "Industry",
    },
    about: {
      label: "About Us",
      title1: "A small team with",
      titleAccent: "big ambitions",
      description:
        "MP Vision was founded on a simple belief: brands deserve digital experiences that match their ambition.",
      storyLabel: "Our Story",
      storyTitle: "Built different from day one",
      storyP1:
        "MP Vision started in 2020 when our founder noticed a gap in the market: businesses were paying premium prices for mediocre digital work.",
      storyP2:
        "We set out to change that by assembling a team of specialists who shared one obsession: delivering work that actually drives results.",
      storyP3:
        "Today, we have delivered over 50 projects across web, video, and social, helping brands transform their digital presence.",
      valuesLabel: "Our Values",
      valuesTitle: "What drives every decision",
      teamLabel: "The Team",
      teamTitle: "Meet the people behind the pixels",
      stats: {
        projects: "Projects Completed",
        founded: "Year Founded",
        retention: "Client Retention",
        specialists: "Team Specialists",
      },
    },
    contact: {
      label: "Get In Touch",
      title1: "Let's start your",
      titleAccent: "next project",
      description:
        "Tell us about your vision and we will get back to you within 24 hours with a tailored proposal.",
      infoTitle: "Contact Information",
      infoDescription: "Prefer a direct conversation? Book a free strategy call and we will discuss your project in detail.",
      bookCall: "Book a Free Strategy Call",
      email: "Email",
      location: "Location",
      locationValue: "Remote-first, worldwide",
      responseTime: "Average Response Time",
      formName: "Full Name",
      formEmail: "Email Address",
      formService: "Service Needed",
      formBudget: "Budget Range",
      formMessage: "Project Details",
      formPlaceholderName: "John Doe",
      formPlaceholderEmail: "john@company.com",
      formPlaceholderMessage: "Tell us about your project, goals, and timeline...",
      selectService: "Select a service",
      serviceWeb: "Web Development",
      serviceVideo: "Video Production",
      serviceSmma: "SMMA Profile Creation",
      serviceAll: "Multiple Services",
      selectBudget: "Select budget",
      submit: "Send Message",
      submitted: "Message Sent!",
    },
    faq: {
      label: "FAQ",
      title1: "Frequently asked",
      titleAccent: "questions",
      description: "Everything you need to know about working with MP Vision. Can not find what you are looking for? Reach out to our team.",
      stillQuestions: "Still have questions?",
      stillQuestionsDesc: "We are happy to help. Book a free call or send us a message and our team will get back to you within 24 hours.",
      contactUs: "Contact Us",
    },
    footer: {
      readyLabel: "Ready to start?",
      readyTitle1: "Let's build something",
      readyTitle2: "extraordinary together.",
      startProject: "Start a Project",
      servicesTitle: "Services",
      companyTitle: "Company",
      socialTitle: "Social",
      description: "A digital agency crafting high-performance websites, cinematic videos, and social media profiles that convert.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
} as const;

export type Dictionary = (typeof dict)["bg"];

export function getDictionary(locale: Locale): Dictionary {
  return dict[locale];
}

export const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}>({
  locale: "bg",
  setLocale: () => {},
  t: dict.bg,
});

export function useLocale() {
  return useContext(LocaleContext);
}
