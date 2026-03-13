import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import haldiImg from "@/assets/haldi-ceremony.jpg";
import mehendiImg from "@/assets/mehendi-setup.jpg";
import sangeetImg from "@/assets/sangeet-night.jpg";

const images = [
  { src: decorImg, alt: "Luxury mandap decoration by VJ Events" },
  { src: lightingImg, alt: "Fairy light and chandelier setup for wedding" },
  { src: cocktailImg, alt: "Professional cocktail bar setup" },
  { src: haldiImg, alt: "Haldi ceremony decoration" },
  { src: mehendiImg, alt: "Mehendi ceremony lounge setup" },
  { src: sangeetImg, alt: "Sangeet night stage and lighting" },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Our Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Event Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse of our wedding setups, decor designs, and event productions across Jim Corbett.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="text-gold font-semibold hover:text-gold-light transition-colors underline underline-offset-4">
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
