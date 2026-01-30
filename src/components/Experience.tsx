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
          className="max-w-3xl mx-auto"
        >
          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {/* Experience Card */}
            <div className="relative md:w-1/2 md:ml-auto md:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 md:-left-6 top-6 w-6 h-6 gradient-bg rounded-full border-4 border-background shadow-soft" />

              <div className="bg-card p-6 rounded-xl shadow-card border border-border hover:shadow-hover transition-all duration-300">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Briefcase className="w-5 h-5" />
                  <span className="font-semibold">IT Developer Training</span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-2">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;