import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Code2, Database, Layers, GitBranch, Cpu, Globe } from "lucide-react";

const skills = [
  { name: "Python", icon: Code2, level: 90 },
  { name: "TensorFlow", icon: Cpu, level: 85 },
  { name: "React", icon: Layers, level: 88 },
  { name: "Flask", icon: Database, level: 82 },
  { name: "Next.js", icon: Globe, level: 80 },
  { name: "Git", icon: GitBranch, level: 90 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 text-center hover:shadow-2xl transition-all duration-300 group">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative inline-block mb-4">
                    <motion.div
                      className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <div className="relative p-4 bg-gradient-primary rounded-xl shadow-lg group-hover:shadow-primary/50 transition-shadow">
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {skill.name}
                  </h3>

                  {/* Progress bar */}
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {skill.level}% proficiency
                  </p>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
