import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python"],
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      category: "Framework",
      skills: ["Django"],
    },
    {
      category: "Database",
      skills: ["SQL", "MySQL"],
    },
    {
      category: "Concepts",
      skills: ["CRUD Operations", "OOP Basics"],
    },
    {
      category: "Tools",
      skills: ["VS Code"],
    },
  ];

  const softSkills = ["Problem Solving", "Team Work", "Time Management", "Communication"];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">My Expertise</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-6 rounded-xl shadow-card border border-border"
            >
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="px-6 py-3 gradient-bg text-primary-foreground rounded-full font-medium shadow-soft"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;