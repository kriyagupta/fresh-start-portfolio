const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-xl text-background">
            Kriya<span className="gradient-text"> Gupta</span>
          </div>

          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;