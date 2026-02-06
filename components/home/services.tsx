"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Globe, Video, Users } from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function Services() {
  const { t } = useLocale();

  const services = [
    {
      icon: Globe,
      title: t.services.web.title,
      description: t.services.web.description,
      features: t.services.web.features,
    },
    {
      icon: Video,
      title: t.services.video.title,
      description: t.services.video.description,
      features: t.services.video.features,
    },
    {
      icon: Users,
      title: t.services.smma.title,
      description: t.services.smma.description,
      features: t.services.smma.features,
    },
  ];

  return (
    <SectionWrapper id="services" className="py-28 lg:py-36">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-primary"
        >
          {t.services.label}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
        >
          {t.services.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed"
        >
          {t.services.description}
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 lg:p-10 transition-all duration-500 hover:border-primary/40"
          >
            {/* Glow on hover */}
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:bg-primary/10" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative">
              <motion.div
                whileHover={{ rotate: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_25px_hsl(151_97%_50%/0.2)]"
              >
                <service.icon size={26} />
              </motion.div>

              <h3 className="mt-7 text-xl font-bold text-foreground">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-foreground/70"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
