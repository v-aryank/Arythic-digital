import { ExternalLink, Linkedin, Twitter, Globe, ShoppingBag, Smartphone, Search, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const portfolioSegments = [
  {
    title: "Web Projects",
    id: "web-dev",
    description: "Modern, responsive, and high-performance websites built with cutting-edge technologies.",
    icon: <Globe className="w-8 h-8 text-primary" />,
    projects: [
      {
        name: "VIRO-Proto",
        description: "A personal AI Observation & Experimentation tool. A research-oriented web prototype focused on intelligent system behavior, interaction models, and experimental digital interfaces.",
        link: "https://viro-proto.vercel.app/", // Placeholder link
        tech: ["React", "TypeScript", "Vite"],
      },
      // add more projects here

      /*{
        name: "Enterprise Dashboard",
        description: "Comprehensive analytics platform for enterprise data management and real-time visualization.",
        link: "#",
        tech: ["Next.js", "Tailwind", "D3.js"],
      },
      {
        name: "SaaS Marketing Site",
        description: "High-conversion landing page with optimized performance and SEO for a leading SaaS provider.",
        link: "#",
        tech: ["Astro", "React", "Framermotion"],
      }*/

    ]
  },
  {
    title: "E-commerce platform",
    id: "ecommerce",
    description: "Seamless online shopping experiences with robust payment integrations and inventory systems.",
    icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    projects: [
      /*{
        name: "Global-Mart Engine",
        description: "Scalable e-commerce engine with multi-vendor support and automated shipping calculations.",
        link: "#",
        tech: ["Node.js", "PostgreSQL", "Stripe"],
      },
      {
        name: "Artisan Marketplace",
        description: "Bespoke platform for local artisans to showcase and sell their unique creations globally.",
        link: "#",
        tech: ["Shopify", "Liquid", "Custom Apps"],
      }*/
    ]
  },
  {
    title: "Mobile Applications",
    id: "mobile-apps",
    description: "Intuitive mobile applications delivering seamless user experiences across iOS and Android.",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    projects: [
      {
        name: "Arythic Connect",
        description: "Community-driven mobile app for networking, resource sharing, and professional growth.",
        link: "#",
        tech: ["React Native", "Firebase", "Expo"],
      },
      {
        name: "HealthTrack Pro",
        description: "Health and wellness monitoring app with wearable integration and AI-driven insights.",
        link: "#",
        tech: ["Flutter", "Dart", "HealthKit"],
      }
    ]
  },
  {
    title: "Research Portals",
    id: "research-portal",
    description: "Advanced platforms designed for knowledge sharing, academic collaboration, and data-driven insights.",
    icon: <Search className="w-8 h-8 text-primary" />,
    projects: [
      {
        name: "Arythic Research Lab",
        description: "Centralized management system for academic publications, research data, and peer review processes.",
        link: "#",
        tech: ["React", "Elasticsearch"],
      },
      /*{
        name: "Bio-Discovery Lab",
        description: "Data-heavy portal for biological research analysis, genome sequencing, and visual modeling.",
        link: "#",
        tech: ["Python", "Vue.js", "GraphQL"],
      }*/
    ]
  }
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
              Expertise <span className="gradient-text">Segments</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our diverse range of digital solutions across multiple industry segments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioSegments.map((segment) => (
              <Sheet key={segment.id}>
                <SheetTrigger asChild>
                  <button className="group relative p-8 rounded-2xl border border-border/30 bg-card/50 hover:border-primary/40 transition-all duration-500 overflow-hidden text-left w-full cursor-pointer hover:shadow-2xl hover:shadow-primary/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                    <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      {segment.icon}
                    </div>

                    <h3 className="text-xl font-semibold font-display mb-3 text-foreground group-hover:text-primary transition-colors">
                      {segment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                      {segment.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      View Projects <ArrowRight size={14} />
                    </span>
                  </button>
                </SheetTrigger>

                <SheetContent side="right" className="w-full sm:max-w-md bg-background/95 backdrop-blur-xl border-l border-primary/20 p-0">
                  <div className="h-full flex flex-col">
                    <SheetHeader className="p-8 border-b border-border/30 bg-card/30">
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary w-fit">
                        {segment.icon}
                      </div>
                      <SheetTitle className="text-2xl font-bold font-display">{segment.title}</SheetTitle>
                      <SheetDescription className="text-base">
                        {segment.description}
                      </SheetDescription>
                    </SheetHeader>

                    <div className="flex-1 overflow-y-auto p-8 space-y-6">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Developed Projects</h4>
                      {segment.projects.map((project, idx) => (
                        <div key={idx} className="p-6 rounded-xl border border-border/30 bg-card/30 hover:bg-card/50 transition-colors group/item">
                          <h5 className="text-lg font-semibold mb-2 group-hover/item:text-primary transition-colors">{project.name}</h5>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((t) => (
                              <span key={t} className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-tighter rounded bg-secondary/50 text-secondary-foreground">
                                {t}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                          >
                            Explore Live <ExternalLink size={14} />
                          </a>
                        </div>
                      ))}
                    </div>

                    <div className="p-8 border-t border-border/30 bg-card/30">
                      <p className="text-xs text-muted-foreground text-center italic">
                        Want to start a similar project? <a href="#contact" className="text-primary font-medium hover:underline">Get in touch</a>
                      </p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
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
