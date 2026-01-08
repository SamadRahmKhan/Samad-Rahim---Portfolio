import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

// List of navigation links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
  { href: "/reviews", label: "Reviews" },
];

export const Navigation = () => {
  // Is the mobile menu open?
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Has the user scrolled down the page?
  const [hasScrolled, setHasScrolled] = useState(false);
  
  // Get the current URL path
  const location = useLocation();
  const currentPath = location.pathname;

  // Listen for scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled more than 20 pixels
      const scrolledDown = window.scrollY > 20;
      setHasScrolled(scrolledDown);
    };

    // Add the scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up: remove listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine header classes based on scroll state
  const headerClasses = hasScrolled
    ? "fixed top-0 left-0 right-0 z-50 glass-strong py-3 transition-all duration-300"
    : "fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300";

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold gradient-text">
          PORTFOLIO
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            // Check if this link is the current page
            const isActive = currentPath === link.href;
            
            // Determine link classes
            const linkClasses = isActive
              ? "px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg"
              : "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";

            return (
              <li key={link.href}>
                <Link to={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-border/50">
          <ul className="container mx-auto px-6 py-4 space-y-2">
            {navLinks.map((link) => {
              // Check if this link is the current page
              const isActive = currentPath === link.href;
              
              // Determine link classes
              const linkClasses = isActive
                ? "block px-4 py-3 rounded-lg text-sm font-medium bg-primary/10 text-primary"
                : "block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all";

              return (
                <li key={link.href}>
                  <Link to={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};
