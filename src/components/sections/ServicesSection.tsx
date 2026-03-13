import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flower2, Lamp, Users, GlassWater, Sparkles, HeartHandshake, Crown } from "lucide-react";

const services = [
  { icon: Crown, title: "Destination Wedding Planning", desc: "Complete end-to-end planning for your dream destination wedding in Jim Corbett." },
  { icon: Flower2, title: "Wedding Decor & Design", desc: "Stunning floral arrangements, themed setups, and custom wedding décor designs." },
  { icon: Sparkles, title: "Mandap & Stage Setup", desc: "Grand mandap designs, elegant stage setups, and entrance decorations." },
  { icon: GlassWater, title: "Cocktail Bar & Entertainment", desc: "Professional molecular bar setups, signature cocktails, and entertainment." },
  { icon: Lamp, title: "Lighting & Event Production", desc: "Dramatic lighting designs, sound systems, and complete event production." },
  { icon: Users, title: "Wedding Workforce & Staff", desc: "Professional event crews, logistics teams, and setup personnel." },
  { icon: HeartHandshake, title: "Guest Hospitality", desc: "Complete guest management including accommodation and activity coordination." },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Our Wedding Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to celebration, we deliver comprehensive wedding and event services
            tailored to create your perfect destination wedding experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:border-gold/30 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <service.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button className="text-gold font-semibold hover:text-gold-light transition-colors underline underline-offset-4">
              View All Services →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
