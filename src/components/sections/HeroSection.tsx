import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Jim Corbett National Park, Uttarakhand
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Luxury Destination Weddings in{" "}
            <span className="text-gold-gradient">Jim Corbett</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body font-light leading-relaxed mb-8 max-w-xl">
            Create unforgettable wedding experiences surrounded by nature and
            luxury resorts in Corbett with VJ Events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-primary font-semibold text-base px-8 py-6">
                Plan Your Wedding
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 font-semibold text-base px-8 py-6"
              >
                Book Consultation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
    </section>
  );
};

export default HeroSection;
