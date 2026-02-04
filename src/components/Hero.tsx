import { ArrowRight } from "lucide-react";
import Hero3DModel from "./Hero3DModel";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="hero-glow" />
      <div className="section-glow top-1/4 left-1/4 animate-pulse-glow" />
      <div className="section-glow bottom-1/4 right-1/4 animate-pulse-glow delay-500" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Digital Innovation Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 animate-fade-up delay-100">
              <span className="gradient-text">ARYTHIC.</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-6 animate-fade-up delay-200">
              A Platform for Digital Solutions, Ideas, and Research.
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed animate-fade-up delay-300">
              We combine cutting-edge technology with research-driven insights to deliver
              premium digital services. From web development to technical consulting,
              we transform ideas into impactful digital experiences.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up delay-400    flex justify-start">
              <a
                href="#services"
                className="btn-primary flex items-center gap-2 group px-6 py-3 text-sm"
              >
                Explore
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border/30 animate-fade-up delay-500">
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right 3D Model */}
          <div className="hidden lg:block animate-fade-up delay-300">
            <div className="relative">
              {/* Glow effect behind 3D model */}
              <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full" />
              <Hero3DModel />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
