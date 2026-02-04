import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Research Lab", href: "/research-lab" },
  { name: "About", href: "/#about" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setIsMobileMenuOpen(false);

    if (href === "/" || href === "/#hero") {
      if (location.pathname === "/") {
        e.preventDefault();
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(0, { duration: 1.5 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        navigate("/");
      }
      return;
    }

    if (href.includes("#")) {
      const [path, hash] = href.startsWith("/") ? href.split("#") : ["/", href.replace("#", "")];

      if (location.pathname === "/" && (path === "/" || path === "")) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          if ((window as any).lenis) {
            (window as any).lenis.scrollTo(element, { duration: 1.5 });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-bold font-display gradient-text">
              ARYTHIC.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link text-sm font-medium cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="btn-primary text-sm py-2 px-6 cursor-pointer"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#contact"
                className="btn-primary text-center py-3 mt-2 cursor-pointer"
                onClick={(e) => handleNavClick(e, "/#contact")}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
