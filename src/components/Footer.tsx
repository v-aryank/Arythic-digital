import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Research Lab", href: "#research" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "Digital Consulting",
  "Technical Assistance",
  "Custom Projects",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-display gradient-text mb-4">
              ARYTHIC
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              A Platform for Digital Solutions, Ideas, and Research. 
              We combine innovation with research to deliver impactful digital experiences.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium"
            >
              Start a Project <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Arythic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
