import { motion } from "framer-motion";
import { Binoculars, Church, Waves, TreeDeciduous, Hotel } from "lucide-react";
import safariImg from "@/assets/jungle-safari.jpg";

const activities = [
  { icon: Binoculars, title: "Jungle Safari", desc: "Take your guests on a jungle safari — spot tigers, elephants, and deer." },
  { icon: Church, title: "Garjiya Devi Temple", desc: "A famous temple on a hill by the Kosi River — great for a family visit." },
  { icon: Waves, title: "Kosi River", desc: "Riverside walks, fishing, and rafting — your guests will love it." },
  { icon: TreeDeciduous, title: "Nature Walks & Bird Watching", desc: "Beautiful walking trails and 600+ bird species all around Corbett." },
  { icon: Hotel, title: "Resort Activities", desc: "Swimming pool, spa, bonfire nights, and good food at the resort." },
];

const ThingsToDoSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Guest Experiences
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Things to Do in Corbett
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Your guests won't just attend the wedding — they'll have a mini
              vacation. Here's what they can do in Jim Corbett.
            </p>

            <div className="space-y-5">
              {activities.map((activity) => (
                <div key={activity.title} className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <activity.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <img
              src={safariImg}
              alt="Jungle safari in Jim Corbett National Park"
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/5]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThingsToDoSection;
