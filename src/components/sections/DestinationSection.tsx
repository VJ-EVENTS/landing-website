import { motion } from "framer-motion";
import { TreePine, Mountain, Camera, Calendar } from "lucide-react";
import corbettVenue from "@/assets/corbett-venue.jpg";

const features = [
  { icon: TreePine, title: "Forest Resorts", desc: "Beautiful resorts surrounded by forests — perfect for a wedding." },
  { icon: Mountain, title: "Riverside Venues", desc: "Wedding venues along the Kosi River with mountains in the background." },
  { icon: Camera, title: "Amazing Photo Spots", desc: "Natural settings that make your wedding photos look incredible." },
  { icon: Calendar, title: "2–3 Day Celebrations", desc: "Haldi, mehendi, sangeet, wedding, reception — all at one resort." },
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
              Jim Corbett has everything for a destination wedding — green forests, rivers,
              mountains, and some of the best resorts in Uttarakhand. Just 5–6 hours from
              Delhi, it's easy for your guests to reach.
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
