import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { ExternalLink, Brain, Globe, Eye, MessageSquare } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";

const projects = [
  {
    title: "NeuraNote",
    description: "AI-powered note summarizer using NLP.",
    icon: Brain,
    fullDescription: "An intelligent note-taking application that leverages natural language processing to automatically summarize and organize your notes. Built with Python, TensorFlow, and React for a seamless user experience.",
    tech: ["Python", "TensorFlow", "React", "NLP"],
  },
  {
    title: "WebGenie",
    description: "Dynamic website generator built with React and Flask.",
    icon: Globe,
    fullDescription: "A powerful website builder that allows users to create stunning websites through an intuitive interface. Combines React's component-based architecture with Flask's backend capabilities for dynamic content generation.",
    tech: ["React", "Flask", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "VisionScan",
    description: "Image classification app for object detection.",
    icon: Eye,
    fullDescription: "Advanced computer vision application that uses deep learning models to detect and classify objects in images. Implements state-of-the-art CNN architectures for accurate real-time detection.",
    tech: ["Python", "PyTorch", "OpenCV", "FastAPI"],
  },
  {
    title: "ChatForge",
    description: "Chatbot platform leveraging fine-tuned LLMs.",
    icon: MessageSquare,
    fullDescription: "A sophisticated chatbot platform that uses fine-tuned large language models to provide intelligent conversational experiences. Features context-aware responses and multi-turn dialogue management.",
    tech: ["Python", "Transformers", "Next.js", "Redis"],
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                <motion.div
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-primary rounded-xl shadow-lg group-hover:shadow-primary/50 transition-shadow">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>

                  <motion.div
                    className="mt-4 text-sm text-primary font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Click to learn more →
                  </motion.div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="backdrop-blur-xl bg-glass border-glass-border max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-primary flex items-center gap-3">
              {selectedProject && (
                <>
                  <div className="p-2 bg-gradient-primary rounded-lg">
                    <selectedProject.icon className="w-6 h-6 text-white" />
                  </div>
                  {selectedProject.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-lg text-foreground/80 pt-4">
              {selectedProject?.fullDescription}
            </DialogDescription>
          </DialogHeader>
          
          {selectedProject && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button
                className="w-full mt-6 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50"
                size="lg"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
