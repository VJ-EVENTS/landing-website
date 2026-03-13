import { motion } from "framer-motion";
import { TreePine, Mountain, Camera, Calendar } from "lucide-react";
import corbettVenue from "@/assets/corbett-venue.jpg";

const features = [
  { icon: TreePine, title: "Luxury Forest Resorts", desc: "Premium resorts nestled in the heart of Jim Corbett's wilderness." },
  { icon: Mountain, title: "Riverside Wedding Venues", desc: "Scenic venues along the Kosi River with mountain backdrops." },
  { icon: Camera, title: "Nature Wedding Photography", desc: "Stunning natural settings for unforgettable wedding photographs." },
  { icon: Calendar, title: "Weekend Wedding Experiences", desc: "Multi-day celebrations with jungle safaris and adventure activities." },
];

const DestinationSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Why Jim Corbett
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              The Perfect Destination for Your Wedding
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Jim Corbett National Park is one of India's most sought-after destination wedding
              locations. With luxury forest resorts, riverside venues, and breathtaking natural
              beauty, it offers the perfect backdrop for an unforgettable wedding celebration.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <f.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={corbettVenue}
              alt="Luxury wedding venue in Jim Corbett National Park with riverside setting"
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
