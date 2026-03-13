import { motion } from "framer-motion";
import { Binoculars, Church, Waves, TreeDeciduous, Hotel } from "lucide-react";
import safariImg from "@/assets/jungle-safari.jpg";

const activities = [
  { icon: Binoculars, title: "Jungle Safari in Jim Corbett", desc: "Experience thrilling wildlife safaris and spot the Royal Bengal Tiger." },
  { icon: Church, title: "Visit Garjiya Devi Temple", desc: "A sacred hilltop temple on the banks of the Kosi River." },
  { icon: Waves, title: "Explore the Kosi River", desc: "River rafting, fishing, and serene riverside walks." },
  { icon: TreeDeciduous, title: "Nature Walks & Bird Watching", desc: "Over 600 bird species and scenic nature trails to explore." },
  { icon: Hotel, title: "Luxury Resort Experiences", desc: "World-class spas, infinity pools, and fine dining at premium resorts." },
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
              Make your destination wedding a complete experience. Jim Corbett offers
              exciting activities for your wedding guests to enjoy.
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
