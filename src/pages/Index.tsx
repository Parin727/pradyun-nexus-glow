import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default Index;
