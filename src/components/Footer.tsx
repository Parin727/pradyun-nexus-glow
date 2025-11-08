import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 backdrop-blur-xl bg-glass border-t border-glass-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h3>

        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 backdrop-blur-sm bg-glass border border-glass-border rounded-full hover:bg-primary/10 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 backdrop-blur-sm bg-glass border border-glass-border rounded-full hover:bg-primary/10 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </motion.a>

          <motion.a
            href="mailto:pradyun@example.com"
            className="p-4 backdrop-blur-sm bg-glass border border-glass-border rounded-full hover:bg-primary/10 transition-all group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        </motion.div>

        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © 2024 Pradyun Kumar Sinha. Built with passion and code.
        </motion.p>
      </div>
    </footer>
  );
};
