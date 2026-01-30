import { motion } from "framer-motion";
import { Code, Briefcase, GraduationCap, Languages } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Python, Django, HTML, CSS, JavaScript, Bootstrap",
    },
    {
      icon: Briefcase,
      title: "Training Experience",
      description: "IT Developer at Techpile Technology Pvt. Ltd.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Diploma in Computer Science (2023-2026)",
    },
    {
      icon: Languages,
      title: "Languages",
      description: "Hindi (Fluent), English (Intermediate)",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated Computer Science Engineering fresher passionate about building 
              modern web applications. With hands-on knowledge of Python, Django, and frontend 
              technologies, I'm eager to contribute to real-world projects and grow in the IT industry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              During my training at Techpile Technology, I worked on development projects and 
              maintained real-time web applications. I designed responsive user interfaces and 
              implemented secure authentication systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card-gradient p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;