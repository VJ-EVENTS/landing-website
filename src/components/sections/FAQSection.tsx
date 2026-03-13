import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the cost of a destination wedding in Jim Corbett?",
    a: "The cost varies depending on the guest count, venue, decor complexity, and services required. VJ Events offers customized packages starting from budget-friendly to ultra-luxury. Contact us for a personalized quote based on your vision.",
  },
  {
    q: "Which resorts allow destination weddings in Jim Corbett?",
    a: "Several premium resorts in Corbett welcome destination weddings, including properties in Dhikuli, Jhirna, and Bijrani zones. We have partnerships with top resorts to ensure the best venues and rates for your celebration.",
  },
  {
    q: "What is the best time for weddings in Corbett?",
    a: "October to March is ideal for destination weddings in Jim Corbett, offering pleasant weather and lush green surroundings. November to February provides the best climate for outdoor ceremonies.",
  },
  {
    q: "Do you provide wedding decor and event setup?",
    a: "Absolutely! We specialize in complete wedding decor including mandap design, stage setup, entrance decorations, floral arrangements, lighting design, and themed setups for all functions.",
  },
  {
    q: "Do you arrange cocktail bars and entertainment?",
    a: "Yes, we provide professional molecular bar setups, signature cocktail services, DJ and sound systems, live entertainment, and themed party concepts for sangeet and cocktail nights.",
  },
  {
    q: "Do you provide event staff and logistics support?",
    a: "We provide complete event workforce including setup crews, hospitality staff, coordination teams, transportation, and logistics management to ensure seamless execution of your event.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about planning your destination wedding in Jim Corbett.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-gold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
