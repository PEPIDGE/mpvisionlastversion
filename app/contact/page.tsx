"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/animations";
import { useLocale } from "@/lib/i18n";
import { Send, Calendar, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const { t } = useLocale();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", service: "", budget: "", message: "" });
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
              className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px]"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              {t.contact.label}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl text-balance"
            >
              {t.contact.title1}
              <br />
              <span className="text-primary">{t.contact.titleAccent}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.contact.description}
            </motion.p>
          </div>
        </section>

        <SectionWrapper className="py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Contact info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <motion.div variants={fadeInUp} className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {t.contact.infoTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.contact.infoDescription}
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="#"
                    className="group relative inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_hsl(151_97%_50%/0.5)]"
                  >
                    <Calendar size={16} />
                    {t.contact.bookCall}
                    <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </a>
                </motion.div>

                <div className="flex flex-col gap-5 border-t border-border/50 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{t.contact.email}</p>
                      <p className="text-sm font-medium text-foreground">hello@mpvision.agency</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{t.contact.location}</p>
                      <p className="text-sm font-medium text-foreground">{t.contact.locationValue}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t.contact.responseTime}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-primary">{"< 24h"}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border/50 bg-card p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t.contact.formName}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:shadow-[0_0_15px_hsl(151_97%_50%/0.1)]"
                      placeholder={t.contact.formPlaceholderName}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t.contact.formEmail}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:shadow-[0_0_15px_hsl(151_97%_50%/0.1)]"
                      placeholder={t.contact.formPlaceholderEmail}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t.contact.formService}
                    </label>
                    <select
                      id="service"
                      required
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                    >
                      <option value="" className="bg-card text-muted-foreground">{t.contact.selectService}</option>
                      <option value="web" className="bg-card text-foreground">{t.contact.serviceWeb}</option>
                      <option value="video" className="bg-card text-foreground">{t.contact.serviceVideo}</option>
                      <option value="smma" className="bg-card text-foreground">{t.contact.serviceSmma}</option>
                      <option value="all" className="bg-card text-foreground">{t.contact.serviceAll}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {t.contact.formBudget}
                    </label>
                    <select
                      id="budget"
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                    >
                      <option value="" className="bg-card text-muted-foreground">{t.contact.selectBudget}</option>
                      <option value="1-3k" className="bg-card text-foreground">1,000 - 3,000 BGN</option>
                      <option value="3-5k" className="bg-card text-foreground">3,000 - 5,000 BGN</option>
                      <option value="5-10k" className="bg-card text-foreground">5,000 - 10,000 BGN</option>
                      <option value="10k+" className="bg-card text-foreground">10,000+ BGN</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="mt-2 w-full resize-none rounded-xl border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:shadow-[0_0_15px_hsl(151_97%_50%/0.1)]"
                    placeholder={t.contact.formPlaceholderMessage}
                  />
                </div>
                <div className="mt-8">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_hsl(151_97%_50%/0.5)] sm:w-auto"
                  >
                    {submitted ? (
                      t.contact.submitted
                    ) : (
                      <>
                        {t.contact.submit}
                        <Send size={14} />
                      </>
                    )}
                    <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
