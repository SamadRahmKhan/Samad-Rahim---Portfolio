import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// Social media links data
const socialLinks = [
  { icon: Github, href: "https://github.com/SamadRahmKhan", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "samadrahimkhan321@gmail.com", label: "Email" },
];

// Quick links for footer navigation
const quickLinks = ["Projects", "About", "Skills", "Contact"];

export const Footer = () => {
  // Get the current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 mt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold gradient-text">
              PORTFOLIO
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs">
              Creative technologist crafting digital experiences that push boundaries.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((linkText) => {
                const linkUrl = "/" + linkText.toLowerCase();
                return (
                  <li key={linkText}>
                    <Link
                      to={linkUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {linkText}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © 2025 Built with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> using React
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed by{" "}
            <span className="text-primary">Samad Rahim</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
