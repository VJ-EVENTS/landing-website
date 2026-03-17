import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import vjLogo from "@/assets/vj-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={vjLogo}
                alt="VJ Events"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-display font-bold">VJ Events</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Destination wedding planner in Jim Corbett. We handle decor, food,
              DJ, guest management, and everything for your wedding.
            </p>
            <a
              href="https://www.instagram.com/vj_events__"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @vj_events__
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold text-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "How We Plan", href: "/about" },
                { label: "Our Services", href: "/services" },
                {
                  label: "Destination Weddings",
                  href: "/destination-weddings",
                },
                { label: "Gallery", href: "/gallery" },
                { label: "Packages & Pricing", href: "/packages" },
                { label: "Wedding Venues", href: "/venues" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-semibold text-gold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Venue Selection & Booking", id: "venue-selection" },
                { label: "Decor & Design", id: "decor-design" },
                { label: "Catering & Menu Planning", id: "catering-menu" },
                { label: "Photography & Videography", id: "photography-video" },
                {
                  label: "Entertainment & Cultural Program",
                  id: "entertainment",
                },
                { label: "Bridal Makeup", id: "bridal-makeup" },
                {
                  label: "Jewellery & Accessories",
                  id: "jewellery-accessories",
                },
                { label: "Band, Ghoriwala, Baggi", id: "band-ghoriwala-baggi" },
                { label: "Bar Setup & Management", id: "bar-setup" },
                { label: "Hospitality Team", id: "hospitality-team" },
              ].map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-semibold text-gold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Jim Corbett National Park, Ramnagar, Nainital, Uttarakhand,
                  India
                </span>
              </li>
              <li>
                <a
                  href="tel:+916398877687"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  +91 6398877687
                </a>
              </li>
              <li>
                <a
                  href="mailto:vjevents@gmail.com"
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  vjevents@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-light/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} VJ Events. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Destination Weddings in Jim Corbett, Uttarakhand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
