import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-forest-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Start Planning
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Plan Your Wedding?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
            Tell us your budget and guest count — we'll plan the perfect wedding
            for you in Jim Corbett. Call us or fill the form for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-primary font-semibold text-base px-8 py-6">
                Plan Your Wedding
              </Button>
            </Link>
            <a href="tel:+916398877687">
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 font-semibold text-base px-8 py-6"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/60 text-sm">
            <a href="tel:+916398877687" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="h-4 w-4" />
              +91 6398877687
            </a>
            <a href="mailto:vjevents@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="h-4 w-4" />
              vjevents@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
