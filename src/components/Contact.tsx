import { Calendar, Mail, Clock, CheckCircle, MessageCircle } from "lucide-react";


const benefits = [
  "Quick response within 24 hours",
  "Free initial consultation",
  "Transparent pricing",
  "Dedicated support",
];



const Contact = () => {
  const calLink = "https://cal.com/v.-aryan-kabir-ebhxxk/30min";
  const emailAddress = "v.aryankabir@gmail.com";

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="section-glow left-0 bottom-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ready to bring your ideas to life? Whether you need a custom website,
              technical consultation, or a complete digital solution, reach out to discuss.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-4 relative">
              <a
                href={`https://wa.me/8801407947744?text=${encodeURIComponent("Hi! I'm interested in your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
              <a
                href={`mailto:${emailAddress}?subject=Project Inquiry&body=Hi, I'm interested in discussing a project with Arythic.`}
                className="btn-secondary flex items-center justify-center gap-3"
              >
                <Mail size={20} />
                Send Email
              </a>
            </div>
          </div>

          {/* Card */}
          <div className="glass-card p-8 md:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-2">
                Schedule a Consultation
              </h3>
              <p className="text-muted-foreground">
                Book a Meeting to discuss your project requirements
              </p>
            </div>

            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn-primary text-center mb-6"
            >
              Book Your Meeting
            </a>


            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">5★</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
