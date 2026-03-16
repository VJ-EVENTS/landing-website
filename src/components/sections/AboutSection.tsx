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
              Your Wedding, Our Responsibility
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VJ Events is a wedding planning team based in Jim Corbett. We help
              families plan beautiful destination weddings at the best resorts
              in Corbett — at prices that fit your budget.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mandap setup, stage decoration, food, DJ, guest rooms, pickup from
              station — we take care of everything. You and your family just
              enjoy the wedding.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Wedding Planning",
                "Beautiful Decor",
                "Full Setup Team",
                "Guest Management",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button className="bg-primary hover:bg-forest-light text-primary-foreground">
                See How We Plan Your Wedding
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
