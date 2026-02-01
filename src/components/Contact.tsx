import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
            Let's Work Together
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <a
              href="mailto:kriyagupta605@gmail.com"
              className="flex flex-col items-center text-center p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/60 text-sm mb-1">Email</span>
              <span className="text-primary-foreground font-medium text-sm">kriyagupta605@gmail.com</span>
            </a>

            <a
              href="tel:+919125013315"
              className="flex flex-col items-center text-center p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/60 text-sm mb-1">Phone</span>
              <span className="text-primary-foreground font-medium text-sm">+91 9125013315</span>
            </a>

            <div className="flex flex-col items-center text-center p-6 bg-primary-foreground/10 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-primary-foreground/60 text-sm mb-1">Location</span>
              <span className="text-primary-foreground font-medium text-sm">India</span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-3 gradient-bg px-10 py-4 rounded-full font-semibold text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              Say Hello
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;