import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-primary">
            About Me
          </h2>

          <GlassCard className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <User className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <motion.p
                  className="text-lg md:text-xl text-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I'm <span className="font-semibold text-primary">Pradyun</span> — passionate about building intelligent systems and modern web experiences. 
                  Currently studying at <span className="font-semibold text-accent">BPDC</span>, exploring the intersection of AI and full-stack development.
                </motion.p>

                <motion.div
                  className="mt-6 h-1 bg-gradient-primary rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
