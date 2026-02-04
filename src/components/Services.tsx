import { Code, Globe, Lightbulb, Settings, Users, Wrench } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Freelancing Services",
    description: "Professional freelance solutions for diverse digital needs. Expert talent for your projects, on-demand.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive, and high-performance websites built with cutting-edge technologies.",
  },
  {
    icon: Wrench,
    title: "Technical Assistance",
    description: "Expert technical support and troubleshooting for your digital infrastructure.",
  },
  {
    icon: Lightbulb,
    title: "Digital Consulting",
    description: "Strategic guidance to optimize your digital presence and drive business growth.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions designed specifically for your unique business requirements.",
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Seamless integration of tools, APIs, and platforms to streamline your operations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="section-glow -left-64 top-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Digital Solutions for <span className="gradient-text">Modern Challenges</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive digital services to help businesses and individuals 
            thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card glow-border group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-glow inline-flex mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your project.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
