import { motion } from "framer-motion";
import { ExternalLink, Code2, Layers, ShoppingCart, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      subtitle: "Full-Stack Application",
      description:
        "A complete job listing platform with separate modules for Admin, Employer, and User. Features secure login/authentication and job posting functionalities.",
      tech: ["Python", "Django", "MySQL", "Bootstrap"],
      icon: Layers,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "AI Virtual Assistant",
      subtitle: "Interactive Web App",
      description:
        "Web-based AI assistant interface with smooth user experience and interactive UI. Built with modern frontend technologies.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      icon: Bot,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Expense Tracker",
      subtitle: "Frontend Application",
      description:
        "Application to help users manage and track daily spending with data visualization and clean interface design.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: Code2,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Vegetable E-commerce",
      subtitle: "Responsive Website",
      description:
        "Responsive frontend for a vegetable selling platform with modern design and smooth user experience.",
      tech: ["HTML", "CSS", "Bootstrap"],
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-border"
            >
              {/* Project Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <project.icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;