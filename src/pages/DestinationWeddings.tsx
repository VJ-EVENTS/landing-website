import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import corbettImg from "@/assets/corbett-venue.jpg";
import heroImg from "@/assets/hero-wedding.jpg";
import { TreePine, Mountain, Camera, Calendar, MapPin, Sun, Sparkles } from "lucide-react";

const DestinationWeddings = () => {
  return (
    <Layout>
      <SEOHead
        title="Destination Weddings in Jim Corbett"
        description="Plan your luxury destination wedding in Jim Corbett National Park. Forest resorts, riverside venues, nature photography, and complete wedding planning by VJ Events."
        keywords="destination wedding corbett, luxury wedding jim corbett, forest wedding uttarakhand, resort wedding corbett, destination wedding ramnagar"
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Destination Weddings</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">Destination Weddings in Jim Corbett</h1>
            <p className="text-primary-foreground/80 text-lg mb-8">Experience the magic of saying "I do" amidst the lush forests, flowing rivers, and luxury resorts of Jim Corbett National Park.</p>
            <Link to="/contact"><Button size="lg" className="bg-gold hover:bg-gold-light text-primary font-semibold">Start Planning</Button></Link>
          </motion.div>
        </div>
      </section>

      {/* Why Corbett */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose Jim Corbett for Your Wedding?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Jim Corbett National Park offers a unique blend of wildlife, nature, and luxury that makes it one of India's most coveted destination wedding locations.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: TreePine, title: "Lush Forest Settings", desc: "Say your vows surrounded by ancient sal forests and wildlife sanctuaries." },
              { icon: Mountain, title: "Riverside Venues", desc: "Scenic venues along the Kosi River with panoramic mountain views." },
              { icon: Camera, title: "Stunning Photography", desc: "Natural backdrops that create breathtaking wedding photographs." },
              { icon: Calendar, title: "Weekend Celebrations", desc: "Multi-day festivities with safaris, adventures, and cultural events." },
              { icon: MapPin, title: "Accessible Location", desc: "Just 260 km from Delhi, easily accessible for all your guests." },
              { icon: Sun, title: "Perfect Weather", desc: "October to March offers ideal weather for outdoor celebrations." },
            ].map((item) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 bg-card rounded-lg border border-border">
                <item.icon className="h-8 w-8 text-gold mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img src={corbettImg} alt="Luxury resort wedding venue in Jim Corbett" className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">The Complete Corbett Wedding Experience</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">A destination wedding in Jim Corbett is more than just a ceremony—it's a multi-day experience. Your guests arrive to the sounds of nature, enjoy jungle safaris, riverside dinners, and cultural performances before the grand celebration.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">VJ Events handles everything from resort bookings and guest transfers to decor, catering coordination, and entertainment. Our local expertise means we know the best venues, the ideal timings, and the hidden gems that make Corbett weddings truly special.</p>
              <Link to="/contact"><Button className="bg-primary hover:bg-forest-light text-primary-foreground">Plan Your Corbett Wedding</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationWeddings;
