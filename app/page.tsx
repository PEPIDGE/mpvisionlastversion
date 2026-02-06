import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { TechStack } from "@/components/home/tech-stack";
import { PortfolioPreview } from "@/components/home/portfolio";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { PageBackground } from "@/components/home/page-background";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <PageBackground />
        <div className="relative z-10">
          <Hero />
          <Services />
          <TechStack />
          <PortfolioPreview />
          <Process />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </>
  );
}
