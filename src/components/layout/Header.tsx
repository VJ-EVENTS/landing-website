import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import vjLogo from "@/assets/vj-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How We Plan", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Destination Weddings", href: "/destination-weddings" },
  { label: "Gallery", href: "/gallery" },
  { label: "Packages", href: "/packages" },
  { label: "Venues", href: "/venues" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-forest-light/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={vjLogo}
              alt="VJ Events Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <span className="text-2xl font-display font-bold text-primary-foreground">
                VJ Events
              </span>
              <p className="text-xs text-gold-light tracking-[0.2em] uppercase">
                Jim Corbett
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-body font-medium transition-colors rounded-md ${
                  location.pathname === link.href
                    ? "text-gold bg-forest-light/30"
                    : "text-primary-foreground/80 hover:text-gold hover:bg-forest-light/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+916398877687"
              className="flex items-center gap-2 text-gold text-sm font-medium"
            >
              <Phone className="h-4 w-4" />
              +91 6398877687
            </a>
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-light text-primary font-semibold">
                Book Consultation
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-body rounded-md transition-colors ${
                    location.pathname === link.href
                      ? "text-gold bg-forest-light/30"
                      : "text-primary-foreground/80 hover:text-gold hover:bg-forest-light/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <a
                  href="tel:+916398877687"
                  className="flex items-center gap-2 text-gold text-sm font-medium mb-3"
                >
                  <Phone className="h-4 w-4" />
                  +91 6398877687
                </a>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gold hover:bg-gold-light text-primary font-semibold">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
