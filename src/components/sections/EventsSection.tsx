import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import haldiImg from "@/assets/haldi-ceremony.jpg";
import mehendiImg from "@/assets/mehendi-setup.jpg";
import sangeetImg from "@/assets/sangeet-night.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import heroImg from "@/assets/hero-wedding.jpg";

const events = [
  {
    title: "Pre Wedding Photoshoot",
    image: lightingImg,
    slug: "pre-wedding-photoshoot",
  },
  { title: "Haldi Ceremony", image: haldiImg, slug: "haldi-ceremony" },
  { title: "Mehendi Ceremony", image: mehendiImg, slug: "mehendi-ceremony" },
  { title: "Sangeet Night", image: sangeetImg, slug: "sangeet-night" },
  { title: "Cocktail Party", image: cocktailImg, slug: "cocktail-party" },
  { title: "Wedding Ceremony", image: decorImg, slug: "wedding-ceremony" },
  { title: "Reception Party", image: heroImg, slug: "reception-party" },
];

const EventsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Celebrations We Manage
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
            Wedding Events We Plan
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            We plan and set up every wedding function — from haldi to reception.
            Click on any event to see details and pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {events.map((event, i) => (
            <Link key={event.title} to={`/events/${event.slug}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-lg overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={`${event.title} decoration by VJ Events in Jim Corbett`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    {event.title}
                  </h3>
                  <p className="text-gold text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details &rarr;
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
