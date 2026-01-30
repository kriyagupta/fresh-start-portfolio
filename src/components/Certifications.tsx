import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    "Certified AI Foundations Associate",
    "AI Skills Passport",
    "Oracle Data Platform 2025 Certified Foundations Associate",
    "AI Tools Workshop",
    "O Level (NIELIT)",
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Achievements</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Certifications
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 bg-card p-5 rounded-xl shadow-card border border-border hover:shadow-hover hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground flex-1">{cert}</span>
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;