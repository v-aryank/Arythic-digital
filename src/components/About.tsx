import { Target, Lightbulb, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses and individuals with innovative digital solutions that drive growth, efficiency, and lasting impact in an ever-evolving technological landscape.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To become a leading hub for digital innovation and research, bridging the gap between cutting-edge technology and practical, impactful solutions.",
  },
  {
    icon: Zap,
    title: "Our Philosophy",
    description: "We believe in the power of research-driven innovation. Every solution we create is backed by thorough analysis, creative thinking, and a commitment to excellence.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-transparent" />
      <div className="section-glow right-0 top-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Innovating for the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Arythic is more than a digital services company — we're a platform where 
            innovation meets research. We combine technical expertise with academic rigor 
            to deliver solutions that truly make a difference.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="relative p-8 rounded-2xl border border-border/30 bg-card/30 group hover:border-primary/40 transition-all duration-500"
            >
              <div className="absolute top-0 left-8 w-20 h-1 bg-gradient-to-r from-primary to-transparent -translate-y-0.5" />
              <div className="icon-glow inline-flex mb-6">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12">
            <h3 className="text-2xl font-bold font-display mb-6 gradient-text">
              The Arythic Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a vision to bridge the gap between academic research and practical 
              digital solutions, Arythic has grown into a comprehensive platform serving clients, 
              startups, researchers, and professionals worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our unique approach combines the precision of research methodology with the agility 
              of modern development practices. We don't just build solutions — we create 
              experiences that are backed by data, refined through iteration, and designed for impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
