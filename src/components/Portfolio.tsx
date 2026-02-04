import { ExternalLink, Linkedin, Power, Twitter } from "lucide-react";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard for enterprise clients",
  },
  {
    title: "Mobile App Backend",
    category: "API Development",
    description: "Scalable backend infrastructure for mobile applications",
  },
  {
    title: "Research Portal",
    category: "Web Application",
    description: "Academic research management and publication platform",
  },
];

const teamMembers = [
  {
    name: "CEO & Founder",
    role: "Strategic Vision & Leadership",
    description: "Driving innovation and setting the direction for Arythic's growth and impact.",
  },
  {
    name: "Technical Lead",
    role: "Technical Excellence & Quality Delivery",
    description: "Leading technical excellence and ensuring quality delivery.",
  },
  {
    name: "Research Director",
    role: "Research & Innovation",
    description: "Spearheading research initiatives and knowledge creation.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="section-glow right-0 top-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Portfolio Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A showcase of our recent work delivering impactful digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl border border-border/30 bg-card/50 hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-2xl font-semibold font-display mt-2 mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 text-sm font-medium">
                  View Project <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              The Minds Behind <span className="gradient-text">Arythic</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A dedicated team of professionals committed to excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="team-card">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-card border border-border/50 flex items-center justify-center">
                    <span className="text-2xl font-bold gradient-text">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold font-display text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
