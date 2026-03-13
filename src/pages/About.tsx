import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import decorImg from "@/assets/decor-setup.jpg";
import corbettImg from "@/assets/corbett-venue.jpg";
import { Heart, Award, Users, Star } from "lucide-react";

const stats = [
  { icon: Heart, value: "50+", label: "Weddings Planned" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Users, value: "100+", label: "Happy Families" },
  { icon: Star, value: "4.9", label: "Client Rating" },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About VJ Events"
        description="Learn about VJ Events, a professional destination wedding planner and event production company in Jim Corbett, Uttarakhand. Expert wedding planning with passion."
        keywords="about vj events, jim corbett wedding planner, corbett event company"
      />

      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">About VJ Events</h1>
            <p className="text-primary-foreground/70 text-lg">Turning moments into memories since day one.</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} src={decorImg} alt="VJ Events wedding decoration" className="rounded-lg shadow-xl w-full object-cover aspect-[4/5]" loading="lazy" />
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">VJ Events is a professional event planning and event production company based in Jim Corbett National Park, Ramnagar, Uttarakhand. We specialize in creating luxury destination wedding experiences that blend the natural beauty of Corbett with world-class event management.</p>
              <p className="text-muted-foreground leading-relaxed mb-4">Our team of experienced wedding planners, decorators, and event production specialists work together to deliver flawless celebrations. From intimate forest weddings to grand resort celebrations, we handle every aspect of your special day.</p>
              <p className="text-muted-foreground leading-relaxed">Whether it's a traditional Indian wedding with elaborate mandap designs, a contemporary cocktail party by the river, or a full-scale destination wedding weekend, VJ Events has the expertise and passion to make it extraordinary.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-6 bg-card rounded-lg border border-border">
                <stat.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Vision */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">To be the most trusted and sought-after destination wedding planner in Jim Corbett and Uttarakhand, known for creating magical celebrations that honor traditions while embracing modern luxury.</p>
              <p className="text-muted-foreground leading-relaxed">We believe every love story deserves a perfect celebration. Our commitment to excellence, creativity, and personalized service ensures that every wedding we plan becomes a cherished memory for generations.</p>
            </div>
            <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} src={corbettImg} alt="Corbett wedding venue" className="rounded-lg shadow-xl w-full object-cover aspect-[4/3] order-1 lg:order-2" loading="lazy" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
