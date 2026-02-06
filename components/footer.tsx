"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { useState, useEffect } from "react";

export function Footer() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const footerLinks = {
    [t.footer.servicesTitle]: [
      { label: t.services.web.title, href: "/#services" },
      { label: t.services.video.title, href: "/#services" },
      { label: t.services.smma.title, href: "/#services" },
    ],
    [t.footer.companyTitle]: [
      { label: t.nav.about, href: "/about" },
      { label: t.nav.portfolio, href: "/portfolio" },
      { label: t.nav.pricing, href: "/pricing" },
      { label: t.nav.clients, href: "/clients" },
      { label: t.nav.contact, href: "/contact" },
      { label: t.nav.faq, href: "/faq" },
    ],
    [t.footer.socialTitle]: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border/50 bg-background">
      {/* CTA Banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="border-b border-border/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-sm font-medium uppercase tracking-widest text-primary"
              >
                {t.footer.readyLabel}
              </motion.p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                {t.footer.readyTitle1}
                <br />
                {t.footer.readyTitle2}
              </h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(151_97%_50%/0.5)]"
              >
                {t.footer.startProject}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="group inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative"
              >
                {mounted && (
                  <Image
                    src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                    alt="MP Vision"
                    width={160}
                    height={46}
                    className="h-12 w-auto"
                  />
                )}
              </motion.div>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.description}
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={fadeInUp}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {category}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors duration-200 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row"
        >
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} MP Vision. All rights reserved.`}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
