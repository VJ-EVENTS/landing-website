import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import haldiImg from "@/assets/haldi-ceremony.jpg";
import mehendiImg from "@/assets/mehendi-setup.jpg";
import sangeetImg from "@/assets/sangeet-night.jpg";
import heroImg from "@/assets/hero-wedding.jpg";
import corbettImg from "@/assets/corbett-venue.jpg";
import safariImg from "@/assets/jungle-safari.jpg";

const images = [
  { src: heroImg, alt: "Luxury outdoor wedding ceremony setup in Jim Corbett" },
  { src: decorImg, alt: "Grand mandap decoration with golden theme" },
  { src: lightingImg, alt: "Fairy light canopy and chandelier installation" },
  {
    src: cocktailImg,
    alt: "Professional cocktail bar setup for wedding party",
  },
  { src: haldiImg, alt: "Haldi ceremony yellow decoration setup" },
  { src: mehendiImg, alt: "Mehendi function lounge area design" },
  { src: sangeetImg, alt: "Sangeet night stage and dance floor lighting" },
  { src: corbettImg, alt: "Riverside wedding venue in Jim Corbett" },
  { src: safariImg, alt: "Jim Corbett National Park wildlife" },
];

const Gallery = () => {
  console.log(images);
  return (
    <Layout>
      <SEOHead
        title="Wedding Gallery"
        description="Browse our gallery of luxury destination weddings, decor setups, mandap designs, cocktail bars, and event productions in Jim Corbett by VJ Events."
        keywords="wedding gallery corbett, wedding decoration photos, mandap designs jim corbett, destination wedding photos"
      />

      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Our Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Event Gallery
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              A showcase of our finest wedding setups, decor designs, and event
              productions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-end p-4">
                  <p className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
