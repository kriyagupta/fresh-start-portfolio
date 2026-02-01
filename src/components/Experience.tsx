import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Career</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card p-8 rounded-2xl shadow-card border border-border hover:shadow-hover transition-all duration-300">
            <div className="flex items-center gap-2 text-primary mb-3">
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">IT Developer Training</span>
            </div>

            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Techpile Technology Pvt. Ltd.
            </h3>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                June 2025 – Aug 2025
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Lucknow
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Worked on development projects and maintained real-time web applications 
              using Python and Django. Designed responsive user interfaces using HTML, 
              CSS, Bootstrap, and JavaScript.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Python", "Django", "HTML", "CSS", "Bootstrap", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
