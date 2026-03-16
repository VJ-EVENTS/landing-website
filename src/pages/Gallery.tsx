import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ImageIcon,
  Film,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Phone,
} from "lucide-react";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import haldiImg from "@/assets/haldi-ceremony.jpg";
import mehendiImg from "@/assets/mehendi-setup.jpg";
import sangeetImg from "@/assets/sangeet-night.jpg";
import heroImg from "@/assets/hero-wedding.jpg";
import corbettImg from "@/assets/corbett-venue.jpg";
import safariImg from "@/assets/jungle-safari.jpg";

// ─── PHOTO DATA ─────────────────────────────────────────────
// Add more photos here — just add an object with src, alt, and category.
// Categories: "All", "Decor", "Ceremony", "Venue", "Candid"
const photos = [
  {
    src: heroImg,
    alt: "Outdoor wedding ceremony with floral mandap in Jim Corbett",
    category: "Ceremony",
  },
  {
    src: decorImg,
    alt: "Grand mandap with golden drapes and marigold flowers",
    category: "Decor",
  },
  {
    src: lightingImg,
    alt: "Fairy light canopy with chandeliers for sangeet night",
    category: "Decor",
  },
  {
    src: cocktailImg,
    alt: "Cocktail bar setup with floral arrangements",
    category: "Decor",
  },
  {
    src: haldiImg,
    alt: "Haldi ceremony decoration with yellow marigolds and drapes",
    category: "Ceremony",
  },
  {
    src: mehendiImg,
    alt: "Mehendi lounge setup with cushions and floral backdrop",
    category: "Ceremony",
  },
  {
    src: sangeetImg,
    alt: "Sangeet night stage with LED lights and dance floor",
    category: "Ceremony",
  },
  {
    src: corbettImg,
    alt: "Riverside resort wedding venue in Jim Corbett",
    category: "Venue",
  },
  {
    src: safariImg,
    alt: "Jim Corbett forest — guests enjoy jungle safari",
    category: "Venue",
  },
  {
    src: haldiImg,
    alt: "Candid moment during haldi — family celebration",
    category: "Candid",
  },
  {
    src: sangeetImg,
    alt: "Couple dancing at sangeet night",
    category: "Candid",
  },
  {
    src: heroImg,
    alt: "Wedding mandap by the riverside with mountain backdrop",
    category: "Venue",
  },
];

const photoCategories = ["All", "Decor", "Ceremony", "Venue", "Candid"];

// ─── VIDEO DATA ─────────────────────────────────────────────
// Add more videos here — set poster (thumbnail image), title, and videoUrl.
// Replace videoUrl with your actual video file or YouTube/Vimeo embed URL.
const videos = [
  {
    poster: heroImg,
    title: "Full Wedding Highlight — Jim Corbett Resort",
    duration: "4:30",
    videoUrl:
      "https://res.cloudinary.com/djuc4v25g/video/upload/v1773670790/Screencast_from_2026-03-16_19-48-53_kmysud.webm",
  },
  {
    poster: decorImg,
    title: "Mandap & Stage Decoration Setup",
    duration: "2:15",
    videoUrl:
      "https://res.cloudinary.com/djuc4v25g/video/upload/v1773670790/Screencast_from_2026-03-16_19-48-53_kmysud.webm",
  },
  {
    poster: sangeetImg,
    title: "Sangeet Night — Dance & Performances",
    duration: "3:45",
    videoUrl:
      "https://res.cloudinary.com/djuc4v25g/video/upload/v1773670790/Screencast_from_2026-03-16_19-48-53_kmysud.webm",
  },
  {
    poster: haldiImg,
    title: "Haldi Ceremony — Outdoor Lawn Setup",
    duration: "2:00",
    videoUrl:
      "https://res.cloudinary.com/djuc4v25g/video/upload/v1773670790/Screencast_from_2026-03-16_19-48-53_kmysud.webm",
  },
  {
    poster: cocktailImg,
    title: "Cocktail Evening — Bar & Bonfire",
    duration: "3:10",
    videoUrl:
      "https://res.cloudinary.com/djuc4v25g/video/upload/v1773670790/Screencast_from_2026-03-16_19-48-53_kmysud.webm",
  },
  {
    poster: corbettImg,
    title: "Venue Tour — Riverside Resort in Corbett",
    duration: "1:50",
    videoUrl:
      "https://res.cloudinary.com/djuc4v25g/video/upload/v1773670790/Screencast_from_2026-03-16_19-48-53_kmysud.webm",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [photoFilter, setPhotoFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filteredPhotos =
    photoFilter === "All"
      ? photos
      : photos.filter((p) => p.category === photoFilter);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length
        : null,
    );
  const nextPhoto = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : null,
    );

  return (
    <Layout>
      <SEOHead
        title="Wedding Gallery — Photos & Videos | VJ Events Jim Corbett"
        description="See photos and videos from real destination weddings planned by VJ Events in Jim Corbett. Decor setups, ceremony highlights, candid moments, and full wedding films."
        keywords="wedding gallery jim corbett, wedding photos corbett, wedding videos corbett, destination wedding portfolio, vj events gallery"
      />

      {/* ══════ HERO ══════ */}
      <section className="relative py-28 lg:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Photos & Videos
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-2xl mx-auto">
              Real weddings we've planned in Jim Corbett — from decor setups and
              ceremony moments to full wedding highlight films.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ TABS ══════ */}
      <div className="bg-background border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2 py-4">
            <button
              onClick={() => setActiveTab("photos")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === "photos"
                  ? "bg-gold text-primary shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <ImageIcon className="h-5 w-5" />
              Photos ({photos.length})
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-gold text-primary shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Film className="h-5 w-5" />
              Videos ({videos.length})
            </button>
          </div>
        </div>
      </div>

      {/* ══════ PHOTOS TAB ══════ */}
      {activeTab === "photos" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {photoCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPhotoFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    photoFilter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photo grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((img, i) => (
                  <motion.div
                    key={img.alt + i}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    <div className="relative w-full aspect-[4/3]">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <div>
                          <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold bg-gold/15 px-2.5 py-1 rounded mb-2">
                            {img.category}
                          </span>
                          <p className="text-primary-foreground text-base font-medium">
                            {img.alt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════ VIDEOS TAB ══════ */}
      {activeTab === "videos" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Watch highlights from weddings we've planned — full films, decor
              tours, and ceremony clips.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {videos.map((vid, i) => (
                <motion.div
                  key={vid.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-gold/30 hover:shadow-xl transition-all duration-300"
                >
                  {playingVideo === i ? (
                    <div className="relative aspect-video bg-black">
                      <video
                        src={vid.videoUrl}
                        poster={vid.poster}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-3 right-3 h-8 w-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className="relative aspect-video cursor-pointer overflow-hidden"
                      onClick={() => setPlayingVideo(i)}
                    >
                      <img
                        src={vid.poster}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-gold/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-7 w-7 text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded">
                        {vid.duration}
                      </div>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {vid.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════ CTA ══════ */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Want Your Wedding to Look Like This?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-8">
              Call us and we'll plan a beautiful destination wedding in Jim
              Corbett — exactly the way you want it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-primary font-semibold text-lg px-10 py-7"
                >
                  <Phone className="h-5 w-5 mr-2" /> Get Free Consultation
                </Button>
              </Link>
              <Link to="/packages">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 text-lg px-10 py-7"
                >
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════ PHOTO LIGHTBOX ══════ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 h-12 w-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 md:left-8 h-12 w-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 md:right-8 h-12 w-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white text-base">
                  {filteredPhotos[lightboxIndex].alt}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
