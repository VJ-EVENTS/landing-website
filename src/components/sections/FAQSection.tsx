import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a destination wedding in Jim Corbett cost?",
    a: "It depends on your guest count, which resort you pick, and what kind of decor and food you want. Our packages start from ₹2 Lakh for a small wedding and go up to ₹35 Lakh for a big 3-day celebration. Call us with your budget and we'll tell you what's possible.",
  },
  {
    q: "Which resorts in Jim Corbett are good for weddings?",
    a: "There are many — Maulik Mansion, The Roar Resort, Wild Crest, Brys Caves, Tarangi, Namah, Taj Corbett, and Marriott are popular ones. We work with all of them and can help you pick the right one based on your budget and guest count.",
  },
  {
    q: "What is the best time to have a wedding in Corbett?",
    a: "October to March is the best time. The weather is pleasant and perfect for outdoor functions like haldi, mehendi, and sangeet. November to February is especially nice with cool evenings.",
  },
  {
    q: "Do you handle decor and mandap setup?",
    a: "Yes, we do everything — mandap design, stage decoration, flower arrangements, drapes, entrance gates, lighting, and themed setups for all functions like haldi, mehendi, sangeet, and reception.",
  },
  {
    q: "Can you arrange DJ, bar, and entertainment?",
    a: "Yes. We arrange DJ and sound system, bar setup with bartenders, live music, dance floor, and everything you need for sangeet and cocktail nights.",
  },
  {
    q: "Do you manage guest stay and travel?",
    a: "Yes. We help book rooms at the resort, arrange pickup from Ramnagar station or Delhi, manage room allotment, meal timing, and activities for your guests during the wedding.",
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
            Common questions about planning a wedding in Jim Corbett — answered simply.
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
