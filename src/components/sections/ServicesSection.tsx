import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Flower2,
  Utensils,
  Camera,
  Music2,
  Sparkles,
  Gem,
  Drum,
  GlassWater,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Venue Selection & Booking",
    desc: "We shortlist the best resorts in Jim Corbett for your budget, arrange site visits and handle all booking and contract negotiations.",
    slug: "venue-selection",
  },
  {
    icon: Flower2,
    title: "Decor & Design",
    desc: "Fresh flowers, floral mandap, entrance gate, reception stage, photo-op walls and full venue transformation to match your theme.",
    slug: "decor-design",
  },
  {
    icon: Utensils,
    title: "Catering & Menu Planning",
    desc: "Multi-cuisine buffet, live cooking counters, welcome drinks, sweet stations and professional catering teams for your full guest count.",
    slug: "catering-menu",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    desc: "Candid and portrait photography, drone shots, pre-wedding shoot at Corbett forest and cinematic wedding films.",
    slug: "photography-video",
  },
  {
    icon: Music2,
    title: "Entertainment & Cultural Program",
    desc: "Professional DJ, live singers, Sangeet night anchor, folk performers, bonfires, jungle safari and fireworks for your guests.",
    slug: "entertainment",
  },
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    desc: "HD and airbrush bridal makeup, hairstyling, touch-up service throughout the day and coverage for all wedding functions.",
    slug: "bridal-makeup",
  },
  {
    icon: Gem,
    title: "Jewellery & Accessories",
    desc: "Bridal jewellery styling, accessory coordination, floral jewellery, groom's accessories and pre-wedding look trial.",
    slug: "jewellery-accessories",
  },
  {
    icon: Drum,
    title: "Band, Ghoriwala, Baggi",
    desc: "Ghori, royal baggi, Baraat on Wheels DJ truck with CO2 guns, live brass band, dhol players and bhangra performers.",
    slug: "band-ghoriwala-baggi",
  },
  {
    icon: GlassWater,
    title: "Bar Setup & Management",
    desc: "Themed bar counter, trained bartenders, custom cocktail menu, welcome drinks, champagne tower and Bar-on-Wheels option.",
    slug: "bar-setup",
  },
  {
    icon: HeartHandshake,
    title: "Hospitality Team",
    desc: "Dedicated guest management — welcome desk, pickups, room coordination, 24×7 helpdesk and shadow team for both families.",
    slug: "hospitality-team",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
            Our Wedding Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One experienced team handles everything for your destination wedding
            in Jim Corbett — so you can actually enjoy your own wedding.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/services#${service.slug}`}
                className="group block h-full bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="text-gold font-semibold text-lg hover:text-gold-light transition-colors underline underline-offset-4"
          >
            See Full Service Details →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
