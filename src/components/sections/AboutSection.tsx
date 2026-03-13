import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import decorSetup from "@/assets/decor-setup.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src={decorSetup}
                alt="VJ Events luxury wedding mandap setup in Jim Corbett"
                className="rounded-lg shadow-2xl w-full object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-display text-3xl font-bold text-gold">50+</p>
                <p className="text-sm font-body">Events Delivered</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              About VJ Events
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Turning Moments Into Memories
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VJ Events is a professional event planning and event production company
              specializing in luxury destination weddings in Jim Corbett National Park.
              We bring your dream wedding to life amidst the breathtaking beauty of
              Uttarakhand's forests and luxury resorts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From grand mandap designs and elegant stage setups to curated cocktail
              experiences and complete guest hospitality, we handle every detail so you
              can focus on creating memories that last a lifetime.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {["Expert Planning", "Luxury Decor", "Full Production", "Guest Services"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button className="bg-primary hover:bg-forest-light text-primary-foreground">
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
