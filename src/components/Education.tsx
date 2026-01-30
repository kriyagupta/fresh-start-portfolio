import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Academic Background</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border hover:shadow-hover transition-all duration-300 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 gradient-bg opacity-10 blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center shadow-soft">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Diploma in Computer Science
                  </h3>
                  <p className="text-primary font-medium">Government Polytechnic, Unnao</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  September 2023 – June 2026
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Unnao, India
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;