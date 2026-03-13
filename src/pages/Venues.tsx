import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import corbettImg from "@/assets/corbett-venue.jpg";
import { MapPin, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const venues = [
  { name: "Riverview Forest Resort", location: "Dhikuli, Corbett", rating: "4.8", features: ["Riverside lawn", "200+ guest capacity", "Luxury rooms", "Multi-cuisine restaurant"] },
  { name: "Corbett Wilderness Resort", location: "Bijrani Zone", rating: "4.7", features: ["Forest setting", "Outdoor ceremony area", "Swimming pool", "Spa & wellness"] },
  { name: "Tiger Valley Resort", location: "Jhirna Gate", rating: "4.6", features: ["Mountain views", "Banquet hall", "Garden area", "Adventure activities"] },
  { name: "Nature's Retreat", location: "Ramnagar", rating: "4.5", features: ["Budget-friendly", "Beautiful gardens", "Parking", "Catering services"] },
  { name: "The Corbett Heritage", location: "Dhikuli", rating: "4.8", features: ["Heritage architecture", "Premium suites", "Poolside events", "Fine dining"] },
  { name: "Riverside Luxury Camp", location: "Kosi River", rating: "4.7", features: ["Glamping setup", "Bonfire area", "Nature trails", "Unique experience"] },
];

const Venues = () => {
  return (
    <Layout>
      <SEOHead
        title="Top Wedding Venues in Jim Corbett"
        description="Discover the best wedding venues in Jim Corbett for your destination wedding. Luxury forest resorts, riverside properties, and heritage hotels perfect for celebrations."
        keywords="wedding venues corbett, best resorts for wedding jim corbett, destination wedding venues uttarakhand, resort wedding corbett"
      />

      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Venues</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">Top Wedding Venues in Corbett</h1>
            <p className="text-primary-foreground/70 text-lg">Discover the finest resorts and venues for your destination wedding in Jim Corbett.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {venues.map((venue, i) => (
              <motion.div key={venue.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-shadow">
                <img src={corbettImg} alt={`${venue.name} wedding venue`} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{venue.name}</h3>
                    <span className="flex items-center gap-1 text-gold text-sm"><Star className="h-4 w-4 fill-current" />{venue.rating}</span>
                  </div>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground mb-4"><MapPin className="h-4 w-4" />{venue.location}</p>
                  <ul className="space-y-1 mb-4">
                    {venue.features.map((f) => (
                      <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"><Button variant="outline" size="sm" className="w-full border-gold text-gold hover:bg-gold/10">Enquire About This Venue</Button></Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center bg-card p-10 rounded-lg border border-border">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Need Help Choosing a Venue?</h2>
            <p className="text-muted-foreground mb-6">Our team has partnered with the best resorts in Jim Corbett. Contact us for personalized venue recommendations.</p>
            <a href="tel:+916398877687"><Button className="bg-primary hover:bg-forest-light text-primary-foreground"><Phone className="h-4 w-4 mr-2" />Call +91 6398877687</Button></a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Venues;
