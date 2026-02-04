import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import { BookOpen, FileText, Newspaper, ScrollText, Search, Filter, Download } from "lucide-react";

// Extended data for the full page
const categories = [
    { icon: FileText, name: "Articles", count: 24, description: "In-depth technical articles and case studies" },
    { icon: BookOpen, name: "Journals", count: 8, description: "Peer-reviewed academic publications" },
    { icon: Newspaper, name: "Magazines", count: 12, description: "Industry insights and features" },
    { icon: ScrollText, name: "Research Notes", count: 36, description: "Quick findings and technical briefs" },
];

const publications = [
    {
        category: "Article",
        title: "The Future of Digital Transformation in Emerging Markets",
        excerpt: "An in-depth analysis of how developing economies are leveraging technology to leapfrog traditional infrastructure challenges.",
        author: "Dr. Sarah Chen",
        date: "Jan 15, 2025",
        readTime: "8 min read",
        tags: ["Digital Transformation", "Economics", "Tech"],
        downloadUrl: "#"
    },
    {
        category: "Research Note",
        title: "AI-Driven Solutions for Modern Web Development",
        excerpt: "Exploring the integration of artificial intelligence in development workflows, reducing boilerplate and increasing efficiency.",
        author: "Alex Rivera",
        date: "Dec 28, 2024",
        readTime: "5 min read",
        tags: ["AI", "Web Dev", "Productivity"],
        downloadUrl: "#"
    },
    {
        category: "Journal",
        title: "Cybersecurity Best Practices for Small Businesses",
        excerpt: "A comprehensive guide to protecting digital assets and customer data in an increasingly hostile cyber landscape.",
        author: "Marcus Johnson",
        date: "Dec 10, 2024",
        readTime: "12 min read",
        tags: ["Security", "Business", "Guide"],
        downloadUrl: "#"
    },
    {
        category: "Article",
        title: "Sustainable Computing: Green Tech Initiatives",
        excerpt: "How cloud computing providers are shifting towards renewable energy and what it means for your carbon footprint.",
        author: "Dr. Emily Wong",
        date: "Nov 22, 2024",
        readTime: "10 min read",
        tags: ["Sustainability", "Cloud", "Green Tech"],
        downloadUrl: "#"
    },
    {
        category: "Magazine",
        title: "The Rise of Edge Computing",
        excerpt: "Moving processing power closer to the data source: implications for IoT and real-time applications.",
        author: "David Miller",
        date: "Nov 05, 2024",
        readTime: "6 min read",
        tags: ["Edge Computing", "IoT", "Infrastructure"],
        downloadUrl: "#"
    },
    {
        category: "Research Note",
        title: "UX Patterns for VR/AR Interfaces",
        excerpt: "Standardizing user interaction models in spatial computing environments.",
        author: "Sarah Chen",
        date: "Oct 18, 2024",
        readTime: "7 min read",
        tags: ["VR/AR", "UX", "Design"],
        downloadUrl: "#"
    }
];

const ResearchLabPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredPublications = publications.filter(pub => {
        const matchesCategory = activeCategory === "All" || pub.category.includes(activeCategory); // loosely match for plurals/singulars if needed, or exact
        // Fixing plural/singular mismatch for demo:
        const normalizedCategory = activeCategory === "Articles" ? "Article" :
            activeCategory === "Journals" ? "Journal" :
                activeCategory === "Magazines" ? "Magazine" :
                    activeCategory === "Research Notes" ? "Research Note" : activeCategory;

        const matchesCategoryFixed = activeCategory === "All" || pub.category === normalizedCategory;
        const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategoryFixed && matchesSearch;
    });

    return (
        <PageTransition>
            <SmoothScroll>
                <div className="min-h-screen bg-background">
                    <Navbar />

                    {/* Header Section */}
                    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
                        <div className="section-glow top-0 left-1/2 -translate-x-1/2 opacity-50" />
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="text-center max-w-4xl mx-auto">
                                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block animate-fade-in">
                                    Arythic Research Lab
                                </span>
                                <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 animate-fade-up">
                                    Exploring the Frontiers of <span className="gradient-text">Innovation</span>
                                </h1>
                                <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-100">
                                    Access our library of white papers, research journals, and technical articles driving the next generation of digital solutions.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Rest of the sections... I'll include them to be sure about the structure */}
                    {/* Search and Filter */}
                    <section className="pb-12">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                                {/* Search */}
                                <div className="relative w-full md:w-96 group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search publications..."
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                {/* Filter Tabs */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    <button
                                        onClick={() => setActiveCategory("All")}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === "All" ? "bg-primary text-primary-foreground" : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30"}`}
                                    >
                                        All
                                    </button>
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.name}
                                            onClick={() => setActiveCategory(cat.name)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.name ? "bg-primary text-primary-foreground" : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30"}`}
                                        >
                                            {cat.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Stats/Categories Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                                {categories.map((category) => (
                                    <div
                                        key={category.name}
                                        onClick={() => setActiveCategory(category.name)}
                                        className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${activeCategory === category.name ? "bg-primary/5 border-primary" : "bg-card/30 border-border/30 hover:border-primary/40 hover:bg-card/50"}`}
                                    >
                                        <div className="icon-glow inline-flex mb-4">
                                            <category.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-2">{category.count} publications</p>
                                        <p className="text-xs text-muted-foreground/70">{category.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Results Grid */}
                            <h2 className="text-2xl font-bold font-display mb-8 flex items-center gap-2">
                                <span className="w-1 h-8 bg-primary rounded-full" />
                                {activeCategory === "All" ? "All Publications" : `${activeCategory}`}
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredPublications.map((pub, index) => (
                                    <div key={index} className="flex flex-col h-full service-card group">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                                {pub.category}
                                            </span>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Clock size={12} /> {pub.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {pub.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                            {pub.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 mb-6">
                                            {pub.tags.map(tag => (
                                                <span key={tag} className="text-xs text-muted-foreground/60 bg-secondary/50 px-2 py-1 rounded">#{tag}</span>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-semibold text-foreground">{pub.author}</span>
                                                <span className="text-xs text-muted-foreground">{pub.date}</span>
                                            </div>
                                            <button className="p-2 rounded-full hover:bg-primary/10 text-primary transition-colors">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {filteredPublications.length === 0 && (
                                <div className="text-center py-20">
                                    <div className="bg-card/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                        <Search className="text-muted-foreground" size={24} />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">No publications found</h3>
                                    <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                                    <button
                                        onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                        className="mt-4 text-primary hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}

                        </div>
                    </section>

                    <Footer />
                </div>
            </SmoothScroll>
        </PageTransition>
    );
};

// Icon component needed for the grid above (was missing in imports)
import { Clock } from "lucide-react";

export default ResearchLabPage;
