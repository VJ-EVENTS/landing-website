import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Wedding Planning & Packages",
    faqs: [
      {
        q: "How much does a destination wedding in Jim Corbett cost?",
        a: "A destination wedding in Jim Corbett, Ramnagar depends on your guest count, which resort you pick, and what kind of decor and food you want. Our Jim Corbett wedding packages start from ₹12 Lakh for a small intimate wedding and go up to ₹90 Lakh for a big 3-day luxury celebration. Every Jim Corbett wedding is custom-priced — call us with your budget and guest count and we'll tell you exactly what's possible.",
      },
      {
        q: "Which resorts in Jim Corbett are best for weddings?",
        a: "Jim Corbett has excellent wedding resort options across all budgets. For budget weddings in Jim Corbett: Maulik Mansion and The Roar Resort near Ramnagar. Mid-range Jim Corbett resorts: Wild Crest, Brys Caves, and Solluna Resort. Premium options: Tarangi, Namah, and Wood Castle in Dhikuli. Luxury Jim Corbett resorts: Taj Corbett, Marriott, and Club Mahindra Patkote. We work closely with all Jim Corbett resorts and help you choose based on your guest count, budget, and the vibe you want.",
      },
      {
        q: "What is the best time of year to have a wedding in Jim Corbett?",
        a: "October to March is the ideal window for a Jim Corbett destination wedding. The weather in Ramnagar and Jim Corbett is cool and pleasant during this time — perfect for outdoor functions like haldi, mehendi, sangeet, and the wedding ceremony. November to February is especially beautiful in Jim Corbett with crisp evenings, clear skies, and the best light for photography. Avoid July to September as Jim Corbett and Ramnagar receive heavy monsoon rain.",
      },
      {
        q: "How far in advance should we book our Jim Corbett wedding with VJ Events?",
        a: "We recommend booking your Jim Corbett wedding at least 4–6 months in advance, especially for peak season (November to February). Popular resorts in Jim Corbett and Ramnagar get booked quickly during wedding season. If you have a specific date or Jim Corbett resort in mind, the earlier you confirm, the better rates and availability you get.",
      },
      {
        q: "Can you handle all wedding functions — haldi, mehendi, sangeet, pheras and reception?",
        a: "Yes, absolutely. We plan and execute all wedding functions at your Jim Corbett resort with separate, dedicated setups for each event — so every function has its own look, decor, music, and feel. Whether it's a Haldi on the Jim Corbett lawn or a Sangeet by the Kosi riverside, you don't have to worry about anything looking repetitive.",
      },
      {
        q: "What if it rains during our outdoor wedding function in Jim Corbett?",
        a: "Jim Corbett and Ramnagar have great weather from October to March, but we always have a backup plan for outdoor events. This includes pre-arranging shamiyanas (tented setups), identifying indoor banquet spaces at your Jim Corbett resort, and building a contingency timeline. We monitor Jim Corbett weather closely in the days before your wedding and brief the team in advance so there's no last-minute chaos.",
      },
      {
        q: "Do you provide a dedicated wedding coordinator on the day?",
        a: "Yes. Every Jim Corbett wedding we plan has a dedicated on-site event coordinator who manages the entire day-of execution at the resort — vendor coordination, guest flow, timing, and everything in between. Our Jim Corbett-based team knows the local vendors, resorts and grounds well, so you and your family are free to enjoy the wedding without managing anything.",
      },
    ],
  },
  {
    category: "Decor, Food & Services",
    faqs: [
      {
        q: "Do you handle wedding decor, mandap and stage setup in Jim Corbett?",
        a: "Yes, we handle all wedding decor in Jim Corbett in-house — mandap design, stage decoration, fresh flower arrangements, drapes, entrance gates, lighting, and themed setups for haldi, mehendi, sangeet and reception. Whether it's a floral mandap by the Kosi riverside or an LED-lit stage at a Ramnagar resort, every setup is custom-designed to your colour palette and preferences.",
      },
      {
        q: "What food options are available at a Jim Corbett destination wedding?",
        a: "We offer a full multi-cuisine menu at Jim Corbett weddings — North Indian, South Indian, Chinese, Continental and live counter options. Both vegetarian and non-vegetarian menus are available, and we can accommodate special dietary needs like Jain food, vegan options and allergen-specific requests. The Jim Corbett wedding menu is customised for each function and agreed in advance with you.",
      },
      {
        q: "Can you arrange DJ, bar and entertainment for the sangeet and cocktail night at Jim Corbett?",
        a: "Yes. For Jim Corbett destination weddings we arrange a professional DJ with full sound system, bar setup with trained bartenders and custom cocktail menu, live music acts, bhangra performers, anchor/emcee and a full dance floor. Many Jim Corbett resorts have open lawns perfect for Sangeet nights — we set up the entire production so the energy stays high throughout.",
      },
      {
        q: "Do you arrange photography and videography for Jim Corbett destination weddings?",
        a: "Yes. We coordinate professional photography and videography teams who specialise in Jim Corbett destination weddings. Coverage includes candid photography, portrait sessions, drone shots over the Jim Corbett resort and forest canopy, and a cinematic highlight film. We also arrange pre-wedding shoots at Jim Corbett's sal forests, Ramganga riverbank and Ramnagar locations for stunning natural backdrops you simply can't get anywhere else.",
      },
      {
        q: "Can you arrange bridal makeup, jewellery and band for the baraat?",
        a: "Yes — all of these are part of our Jim Corbett wedding services. We coordinate experienced bridal makeup artists who travel to your Jim Corbett resort with their equipment, jewellery styling and accessory coordination, and a full baraat setup with brass band, dhol players, decorated ghori or baggi, and our popular Baraat on Wheels option with a DJ truck and LED effects through the Ramnagar resort grounds.",
      },
    ],
  },
  {
    category: "Guests & Logistics",
    faqs: [
      {
        q: "How do wedding guests reach Jim Corbett from Delhi?",
        a: "Jim Corbett is about 260 km from Delhi — roughly 5–6 hours by road. The nearest railway station to Jim Corbett is Ramnagar, just 3 km from Dhikuli where most wedding resorts are located. Guests can also take a train to Kathgodam and drive 80 km to Ramnagar. The nearest airport to Jim Corbett is Pantnagar, about 85 km from Ramnagar. We arrange pickups from all these points for your Jim Corbett wedding guests.",
      },
      {
        q: "Do you manage guest travel and hotel accommodation for Jim Corbett weddings?",
        a: "Yes, guest management is one of our core Jim Corbett wedding services. We arrange guest pickups from Ramnagar station, Kathgodam or Delhi, coordinate room allocations and check-ins at the Jim Corbett resort, distribute personalised welcome kits, manage meal schedules, book jungle safaris and Jim Corbett activities, and run a 24×7 helpdesk throughout the wedding.",
      },
      {
        q: "How many guests can a wedding in Jim Corbett accommodate?",
        a: "Jim Corbett can accommodate weddings of all sizes. Smaller Jim Corbett resorts in Kyari and Marchula are ideal for 50–150 guests. Mid-range resorts in Dhikuli, Ramnagar like Brys Caves and Solluna handle 150–250 guests. Grand Jim Corbett properties like Tarangi, Wood Castle and Corbett The Grand can accommodate 500–2,000+ guests comfortably. We match the right Jim Corbett venue to your guest count and budget.",
      },
    ],
  },
  {
    category: "Jim Corbett Safari & Activities",
    faqs: [
      {
        q: "Can our wedding guests do a jungle safari in Jim Corbett?",
        a: "Absolutely — this is one of the most exciting things about a Jim Corbett wedding. We arrange jeep safaris in Jim Corbett National Park for your guests in zones like Bijrani, Dhikala, and Jhirna near Ramnagar. Safaris are booked in advance on the official Jim Corbett government portal (corbettonline.uk.gov.in). A morning Jim Corbett safari followed by an evening sangeet is a favourite combination among our wedding clients.",
      },
      {
        q: "What are the different safari zones in Jim Corbett National Park?",
        a: "Jim Corbett National Park has 7 safari zones near Ramnagar: Dhikala (the largest Jim Corbett zone, best for tiger and elephant sightings, open Nov 15–June 15), Bijrani (dense sal forest, high tiger probability, open Oct 15–June 30), Jhirna (year-round Jim Corbett safari, known for sloth bears), Dhela (year-round eco-tourism zone), Durga Devi (birdwatching and Mahseer fishing in Jim Corbett), and Garjia and Phato zones. Each Jim Corbett zone has a different character and wildlife experience.",
      },
      {
        q: "What is the best time to see tigers in Jim Corbett National Park?",
        a: "March to June is the best time for tiger sightings in Jim Corbett National Park near Ramnagar. As summer heat dries up Jim Corbett's forest waterholes, tigers come out more frequently and visibility through thinner vegetation improves greatly. April and May are especially productive months in Jim Corbett for big cat sightings. October to February has pleasant Jim Corbett weather but denser vegetation means slightly fewer tiger sightings.",
      },
      {
        q: "Is hot air balloon available near Jim Corbett?",
        a: "Yes! Hot air balloon rides are available right in Dhikuli, Ramnagar — the heart of the Jim Corbett wedding destination zone. There are three Jim Corbett balloon ride options: a short tethered ride (₹400/person, 1–2 minutes), a standard ride (₹1,200/person, 5–7 minutes), and an extended ride (₹2,000/person, 13–15 minutes). All Jim Corbett balloon flights are conducted by DGCA-certified pilots and operate in the early morning and evening. A beautiful activity for wedding guests or a sunrise pre-wedding couple shoot over Jim Corbett's forest.",
      },
      {
        q: "Are elephant safaris available in Jim Corbett National Park?",
        a: "Yes — elephant safaris in Jim Corbett resumed in late 2025 after a six-year break and are now available again near Ramnagar. They operate in Jim Corbett's Dhikala and Bijrani zones in the morning and evening. Each elephant in Jim Corbett carries up to 5 people for a 2-hour ride through the grasslands, sal forests and Ramganga River area. Cost is ₹1,000 per person for Indian tourists. A truly unforgettable Jim Corbett experience for your wedding guests.",
      },
      {
        q: "Can guests do a camel safari near Jim Corbett, Ramnagar?",
        a: "Yes, camel safaris are available near Jim Corbett and Ramnagar, operating from 6:00 AM and 2:30–5:30 PM. The cost is ₹750 per camel for 2 people and the ride lasts about 3 hours. It's a fun, unique Jim Corbett activity that works well as a daytime experience for guests between wedding functions in Ramnagar.",
      },
      {
        q: "What other activities are available for wedding guests in Jim Corbett?",
        a: "Jim Corbett near Ramnagar offers plenty to keep guests entertained: jeep and canter safaris through Jim Corbett National Park's different forest zones, nature walks and bird watching tours (Jim Corbett has 300+ bird species), river rafting on the Kosi and Ramganga rivers near Ramnagar, fishing for Mahseer in Jim Corbett's forest streams, bonfires under the stars at your resort, swimming pools and spa treatments, and local Kumaoni cultural performances. Jim Corbett is a complete activity destination — not just a wedding backdrop.",
      },
      {
        q: "Is Jim Corbett National Park open throughout the year?",
        a: "Most Jim Corbett safari zones near Ramnagar are open from October to June. Jim Corbett's Dhikala zone (the most popular) is open November 15 to June 15. The Jhirna and Dhela zones of Jim Corbett are open year-round. Jim Corbett National Park receives heavy monsoon rain from July to mid-October and most major zones remain closed. For Jim Corbett destination weddings, October to March is the sweet spot — great weather in Ramnagar and all the best Jim Corbett safari zones are fully open.",
      },
    ],
  },
];

// Flat list for homepage preview (picks the most common questions)
const previewFaqs = faqCategories.flatMap((c) => c.faqs).slice(0, 6);

interface FAQSectionProps {
  showAll?: boolean;
}

const FAQSection = ({ showAll = false }: FAQSectionProps) => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            {showAll
              ? "Everything you need to know about destination weddings in Jim Corbett — from planning and pricing to safaris and activities."
              : "Common questions about planning a wedding in Jim Corbett — answered simply."}
          </p>
        </motion.div>

        {showAll ? (
          /* Full FAQ — categorised */
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-lg font-display font-bold text-gold uppercase tracking-widest mb-5 pb-2 border-b border-border">
                  {cat.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {cat.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${cat.category}-${i}`}
                      className="bg-card border border-border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-gold">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        ) : (
          /* Homepage preview — flat list, 6 questions */
          <>
            <Accordion type="single" collapsible className="space-y-3">
              {previewFaqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-gold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-10">
              <Link
                to="/faq"
                className="text-gold font-semibold text-lg hover:text-gold-light transition-colors underline underline-offset-4"
              >
                See All Questions →
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
