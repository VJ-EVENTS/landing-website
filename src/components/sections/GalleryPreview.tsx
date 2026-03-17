import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import haldiImg from "@/assets/haldi-ceremony.jpg";
import mehendiImg from "@/assets/mehendi-setup.jpg";
import sangeetImg from "@/assets/sangeet-night.jpg";

const images = [
  {
    src: decorImg,
    alt: "Wedding mandap decoration in Jim Corbett",
    type: "photo" as const,
  },
  {
    src: lightingImg,
    alt: "Fairy lights and wedding lighting setup",
    type: "photo" as const,
  },
  {
    src: cocktailImg,
    alt: "Cocktail bar setup for wedding",
    type: "video" as const,
  },
  { src: haldiImg, alt: "Haldi function decoration", type: "photo" as const },
  { src: mehendiImg, alt: "Mehendi function setup", type: "photo" as const },
  {
    src: sangeetImg,
    alt: "Sangeet night stage and lights",
    type: "video" as const,
  },
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
          <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Photos & Videos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See photos and videos from weddings we've planned in Jim Corbett —
            decor, ceremonies, and full wedding films.
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
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                {img.type === "video" && (
                  <div className="h-14 w-14 rounded-full bg-gold/90 flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="h-6 w-6 text-primary ml-0.5" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="text-gold font-semibold text-lg hover:text-gold-light transition-colors underline underline-offset-4"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
