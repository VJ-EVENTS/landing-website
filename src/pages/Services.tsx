import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flower2, Lamp, Users, GlassWater, Sparkles, HeartHandshake, Crown, PartyPopper, Camera, Utensils } from "lucide-react";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";

const services = [
  { icon: Crown, title: "Destination Wedding Planning", desc: "End-to-end destination wedding planning in Jim Corbett including venue selection, vendor coordination, guest management, and timeline planning. We handle every detail so you can enjoy your celebration.", image: decorImg },
  { icon: Flower2, title: "Wedding Decor & Theme Setup", desc: "Custom wedding themes with stunning floral arrangements, drape designs, entrance decorations, and venue styling. Our creative team transforms venues into magical wedding spaces.", image: decorImg },
  { icon: Sparkles, title: "Mandap & Stage Design", desc: "Grand mandap designs for traditional ceremonies, elegant stage setups for reception, and custom backdrop designs. From traditional to contemporary, we create show-stopping installations.", image: decorImg },
  { icon: GlassWater, title: "Cocktail Bar Setup", desc: "Professional molecular bar setups, signature cocktail menus, flair bartending shows, and themed bar concepts. Add a touch of sophistication to your cocktail evening.", image: cocktailImg },
  { icon: Lamp, title: "Lighting & Event Production", desc: "Dramatic lighting designs, LED installations, sound systems, DJ setups, and complete technical production. We create the perfect ambiance for every function.", image: lightingImg },
  { icon: Users, title: "Event Workforce & Setup Teams", desc: "Professional event crews, setup teams, logistics coordinators, and on-ground staff. Our trained workforce ensures flawless execution of every event detail.", image: decorImg },
  { icon: HeartHandshake, title: "Guest Hospitality Management", desc: "Complete guest management including airport transfers, hotel bookings, welcome kits, meal planning, and activity coordination. Your guests will feel like royalty.", image: decorImg },
  { icon: PartyPopper, title: "Entertainment Activities", desc: "DJ nights, live bands, dance performances, games, and adventure activities for wedding guests. Keep everyone entertained throughout the celebration.", image: cocktailImg },
  { icon: Camera, title: "Haldi & Mehendi Decoration", desc: "Vibrant Haldi ceremony setups with yellow themes, and elegant Mehendi lounge areas with bohemian styling. Every pre-wedding function gets its own unique design.", image: decorImg },
  { icon: Utensils, title: "Resort Wedding Planning", desc: "Specialized planning for resort weddings in Jim Corbett. We work with premium resorts to create seamless wedding experiences with luxury accommodation.", image: decorImg },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Wedding Services"
        description="VJ Events offers complete wedding services in Jim Corbett - destination wedding planning, decor, mandap design, cocktail bar setup, lighting, event production, and guest hospitality."
        keywords="wedding services corbett, wedding decorator jim corbett, event production corbett, wedding planner services uttarakhand"
      />

      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">Our Wedding Services</h1>
            <p className="text-primary-foreground/70 text-lg">Comprehensive wedding and event services for your perfect destination celebration.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-forest-light text-primary-foreground">Enquire Now</Button>
                  </Link>
                </div>
                <img
                  src={service.image}
                  alt={`${service.title} by VJ Events in Jim Corbett`}
                  className={`rounded-lg shadow-xl w-full object-cover aspect-[4/3] ${i % 2 === 1 ? "lg:order-1" : ""}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
