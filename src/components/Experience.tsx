import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI Research Intern",
    company: "DeepMind Labs",
    location: "Remote",
    year: "2024",
    description: "Worked on developing deep learning models for time-series prediction and reinforcement learning optimization.",
  },
  {
    title: "Web Developer Intern",
    company: "NexaTech Solutions",
    location: "2023",
    year: "2023",
    description: "Built dynamic interfaces using React and Next.js; optimized API performance by 30%.",
  },
  {
    title: "Freelance Developer",
    company: "Various Clients",
    location: "2022–2023",
    year: "2022–2023",
    description: "Delivered responsive websites and integrated small-scale AI features for startups.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-primary/50"
                  whileHover={{ scale: 1.5 }}
                />

                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                  <GlassCard className="p-6 hover:shadow-xl transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <span className="text-sm font-semibold text-accent">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
