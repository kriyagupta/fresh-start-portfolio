import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const SERVICE_ID = "service_tqsl4gq";
const TEMPLATE_ID = "template_tcpx0z8";
const PUBLIC_KEY = "H1XXZ9S6E3BbSOKGu";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

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
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
          <div className="w-16 h-1 gradient-bg mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Let's Connect
            </h3>
            <p className="text-primary-foreground/70 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-primary-foreground/60 text-sm">Location</span>
                  <p className="text-primary-foreground font-medium">India</p>
                </div>
              </div>

              <a
                href="mailto:kriyagupta605@gmail.com"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-primary-foreground/60 text-sm">Email</span>
                  <p className="text-primary-foreground font-medium">kriyagupta605@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <span className="text-primary-foreground/60 text-sm">Connect with me</span>
              <div className="flex items-center gap-3 mt-3">
                <a
                  href="https://www.linkedin.com/in/kriya-gupta-1a1364293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/kriyagupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-primary-foreground/30 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-primary-foreground font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-primary-foreground font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-primary-foreground font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full gradient-bg text-primary-foreground py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-hover transition-all duration-300 disabled:opacity-60"
              >
                {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {sending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
