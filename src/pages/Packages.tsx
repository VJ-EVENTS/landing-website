import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Sparkles,
  Crown,
  Gem,
  Check,
  Phone,
  ArrowRight,
  Users,
  CalendarDays,
  MapPin,
  Utensils,
  Music,
  Flower2,
  Camera,
  Car,
} from "lucide-react";

const packages = [
  {
    icon: Heart,
    name: "Budget Wedding",
    guests: "50 – 100 Guests",
    duration: "1 Day",
    price: "2 – 5",
    popular: false,
    description:
      "A simple and beautiful wedding in Jim Corbett that fits your budget. Great for small families who want a nice celebration without spending too much.",
    includes: [
      "Garden or lawn venue booking",
      "Basic floral & drape decor",
      "Sound system & ambient lighting",
      "Welcome drinks & 1 meal",
      "Guest room coordination",
      "On-site event coordinator",
    ],
  },
  {
    icon: Sparkles,
    name: "Classic Destination Wedding",
    guests: "100 – 200 Guests",
    duration: "2 Days / 1 Night",
    price: "5 – 10",
    popular: true,
    description:
      "Our best-selling package — everything you need for a destination wedding in Corbett. Good decor, tasty food, DJ, and a planner to handle it all.",
    includes: [
      "Resort venue & lawn booking",
      "Theme decor & mandap setup",
      "DJ & sound system",
      "Welcome drinks for guests",
      "Veg & non-veg buffet",
      "Haldi & Mehendi setup",
      "Photography & video team coordination",
      "Wedding planner & on-ground crew",
    ],
  },
  {
    icon: Crown,
    name: "Premium Wedding",
    guests: "150 – 300 Guests",
    duration: "2 Days / 1 Night",
    price: "10 – 18",
    popular: false,
    description:
      "For families who want a bigger, better wedding — with a grand stage, live music, cocktail evening, and full guest management.",
    includes: [
      "Top resort venue booking",
      "Big mandap & stage setup",
      "LED lights & good sound system",
      "Live band or dance performances",
      "Buffet with live food counters",
      "Guest pickup from Ramnagar station",
      "Cocktail evening setup",
      "Bridal room decoration",
      "Full team for setup & management",
      "Jungle safari for guests (optional)",
    ],
  },
  {
    icon: Gem,
    name: "Luxury Experience",
    guests: "200+ Guests",
    duration: "3 Days / 2 Nights",
    price: "18 – 35",
    popular: false,
    description:
      "A 3-day wedding at a top resort in Corbett. We take care of everything — decor, food, entertainment, travel, and stay for all your guests.",
    includes: [
      "Best resort in Corbett — full booking",
      "Beautiful decor with flowers & themes",
      "DJ + live music & entertainment",
      "Multi-cuisine food with live counters",
      "Cocktail bar setup",
      "Guest travel & hotel management",
      "Drone shots & cinematic wedding video",
      "Welcome kits for all guests",
      "Personal coordinator for bride & groom",
      "Full setup & production team",
    ],
  },
];

const costBreakdown = [
  {
    icon: MapPin,
    title: "Venue & Resort",
    range: "₹50,000 – 3 Lakh",
    note: "Depends on resort tier and guest count",
  },
  {
    icon: Utensils,
    title: "Food & Beverage",
    range: "₹600 – 1,800 / plate",
    note: "Veg & non-veg buffet options",
  },
  {
    icon: Flower2,
    title: "Decor & Mandap",
    range: "₹50,000 – 3 Lakh",
    note: "Basic floral to themed setups",
  },
  {
    icon: Music,
    title: "DJ & Entertainment",
    range: "₹15,000 – 60,000",
    note: "DJ nights, live music, performances",
  },
  {
    icon: Camera,
    title: "Photography",
    range: "₹25,000 – 1.5 Lakh",
    note: "Pre-wedding, ceremony & cinematic film",
  },
  {
    icon: Car,
    title: "Transport & Logistics",
    range: "₹15,000 – 80,000",
    note: "Guest transfers from Ramnagar / Delhi",
  },
];

const Packages = () => {
  return (
    <Layout>
      <SEOHead
        title="Wedding Packages & Pricing"
        description="Destination wedding packages in Jim Corbett starting from ₹2 Lakh. Budget, mid-range & premium options. Check prices and book your wedding today."
        keywords="jim corbett wedding package price, destination wedding cost corbett, cheap wedding planner corbett, wedding in corbett budget, corbett wedding booking"
      />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Packages & Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Wedding Packages for Jim Corbett
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Clear pricing for every budget. Whether you want a simple wedding
              or a big celebration — we have a package for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 rounded-lg border flex flex-col ${
                  pkg.popular
                    ? "border-gold bg-card shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-8 bg-gold text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-11 w-11 rounded-full flex items-center justify-center ${
                      pkg.popular ? "bg-gold/20" : "bg-gold/10"
                    }`}
                  >
                    <pkg.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> {pkg.guests}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" /> {pkg.duration}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-2xl font-display font-bold text-gold">
                    ₹{pkg.price} Lakh
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="mt-auto">
                  <Button
                    className={`w-full font-semibold ${
                      pkg.popular
                        ? "bg-gold hover:bg-gold-light text-primary"
                        : "bg-primary hover:bg-forest-light text-primary-foreground"
                    }`}
                  >
                    Get Quote <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Cost Breakdown
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what each part of a destination wedding in Jim Corbett
              costs, so you know exactly where your money goes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {costBreakdown.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-background rounded-lg border border-border"
              >
                <item.icon className="h-7 w-7 text-gold mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-gold font-semibold text-sm mb-1">
                  {item.range}
                </p>
                <p className="text-xs text-muted-foreground">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VJ Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Why Plan With VJ Events?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We are based in Jim Corbett and know every resort, vendor, and
            caterer here. That means we get you better deals, handle everything
            on the ground, and make sure your wedding goes smoothly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-primary font-semibold"
              >
                <Phone className="h-4 w-4 mr-2" />
                Book Free Consultation
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
