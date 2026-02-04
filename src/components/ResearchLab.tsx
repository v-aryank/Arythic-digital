import { BookOpen, FileText, Newspaper, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: FileText, name: "Articles", count: 24 },
  { icon: BookOpen, name: "Journals", count: 8 },
  { icon: Newspaper, name: "Magazines", count: 12 },
  { icon: ScrollText, name: "Research Notes", count: 36 },
];

const publications = [
  {
    type: "Article",
    title: "The Future of Digital Transformation in Emerging Markets",
    excerpt: "An in-depth analysis of how developing economies are leveraging technology...",
    date: "Jan 2025",
    readTime: "8 min read",
  },
  {
    type: "Research Note",
    title: "AI-Driven Solutions for Modern Web Development",
    excerpt: "Exploring the integration of artificial intelligence in development workflows...",
    date: "Dec 2024",
    readTime: "5 min read",
  },
  {
    type: "Journal",
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "A comprehensive guide to protecting digital assets and customer data...",
    date: "Dec 2024",
    readTime: "12 min read",
  },
];

const ResearchLab = () => {
  return (
    <section id="research" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="section-glow left-1/4 bottom-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Research Lab
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Arythic <span className="gradient-text">Research Lab</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A dedicated space for publishing research-driven content, technical writings,
            and innovative insights at the intersection of technology and progress.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-xl border border-border/30 bg-card/30 hover:border-primary/40 hover:bg-card/50 transition-all duration-300 text-center group cursor-pointer"
            >
              <div className="icon-glow inline-flex mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} publications</p>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold font-display mb-6 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary" />
            Latest Publications
          </h3>

          {publications.map((pub, index) => (
            <div
              key={pub.title}
              className="research-card group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {pub.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{pub.date}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{pub.readTime}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {pub.excerpt}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/research-lab"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <BookOpen size={18} />
            Browse All Publications
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchLab;
