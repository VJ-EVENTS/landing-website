import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Flower2,
  Utensils,
  Camera,
  Music2,
  Sparkles,
  Gem,
  Drum,
  CheckCircle2,
  Phone,
} from "lucide-react";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import haldiImg from "@/assets/haldi-ceremony.jpg";
import mehendiImg from "@/assets/mehendi-setup.jpg";
import sangeetImg from "@/assets/sangeet-night.jpg";
import heroImg from "@/assets/hero-wedding.jpg";
import corbettImg from "@/assets/corbett-venue.jpg";

const services = [
  {
    id: "venue-selection",
    icon: MapPin,
    title: "Venue Selection & Booking",
    tagline: "Find the perfect resort in Jim Corbett for your wedding",
    summary:
      "Choosing the right venue is the most important decision in your wedding. We know all the resorts, hotels and farmhouses in Jim Corbett and Ramnagar — their capacities, pricing, pros and cons. We shortlist the best options for your budget and guest count, take you for site visits, and handle all the booking and contract work so nothing goes wrong later.",
    details: [
      "Shortlisting of resorts and hotels in Jim Corbett, Dhikuli and Ramnagar based on your budget and guest count",
      "Personalised site visits to your shortlisted venues with expert guidance",
      "Negotiation with resort management to get the best rates and inclusions",
      "Venue contract review and booking confirmation on your behalf",
      "Blocking of rooms for wedding guests and coordination with the hotel's event team",
      "Assessment of outdoor lawns, banquet halls, poolside areas and forest-view spaces",
      "Checking park regulations, noise limits and event permissions in the Corbett zone",
      "Backup venue planning in case of weather or availability issues",
    ],
    image: corbettImg,
  },
  {
    id: "decor-design",
    icon: Flower2,
    title: "Decor & Design",
    tagline: "Your venue transformed into a wedding dream",
    summary:
      "We create stunning wedding decor that brings your vision to life — whether you want a traditional marigold mandap, a lush floral canopy, or an elegant white-and-gold theme. Every function gets its own unique decor setup so it looks fresh, beautiful and photo-ready from every angle.",
    details: [
      "Theme mood board and colour palette planning before execution",
      "Fresh floral arrangements — marigolds, roses, orchids, lotuses and tropical flowers",
      "Decorated entrance gate, welcome arch and floral pathway for the baraat",
      "Mandap setup — traditional 4-pillar, modern arch or floral canopy style",
      "Reception stage with custom backdrop, LED wall and floral accents",
      "Table centrepieces, chair covers, linen draping and place setting styling",
      "Backdrop walls, selfie corners and photo-op props",
      "Phoolon ki chadar (flower canopy) and petal carpet for the bride's entry",
      "Haldi and Mehendi function decor — separate themed setups for each",
      "Poolside, riverside and outdoor garden venue transformation",
    ],
    image: decorImg,
  },
  {
    id: "catering-menu",
    icon: Utensils,
    title: "Catering & Menu Planning",
    tagline: "Food your guests will talk about long after the wedding",
    summary:
      "Good food is what guests remember most about a wedding. We work with experienced catering teams who specialise in large outdoor wedding setups in Jim Corbett. From a traditional North Indian thali to a multi-cuisine live counter spread — the food is fresh, well-presented and prepared to handle your full guest count without a single hiccup.",
    details: [
      "Custom menu planning session with options for vegetarian and non-vegetarian guests",
      "Multi-cuisine buffet — North Indian, South Indian, Continental, Chinese and more",
      "Live cooking counters — tandoor, chaat, dosa, pasta, sushi and street food stations",
      "Welcome drinks station with fresh juices, mocktails and refreshers",
      "Cocktail and alcohol bar coordination with trained bartenders",
      "Themed sweet stations — traditional mithai, gulab jamun counter, dessert spread",
      "Custom wedding cake design and pastry team",
      "70/30 menu rule — 70% comfort food your guests love, 30% exciting new options",
      "Special dietary accommodation — Jain, vegan, gluten-free, allergen-specific",
      "Trained waitstaff, kitchen team and catering manager for every function",
    ],
    image: cocktailImg,
  },
  {
    id: "photography-video",
    icon: Camera,
    title: "Photography & Videography",
    tagline: "Every moment captured beautifully, forever",
    summary:
      "Jim Corbett's forests, rivers and natural light create a stunning backdrop that most wedding venues simply cannot match. We work with professional photographers and cinematographers who know how to use this landscape — giving your wedding photos and films a cinematic, timeless quality you won't find at a regular banquet wedding.",
    details: [
      "Full DSLR and cinema camera teams covering all ceremonies and functions",
      "Dedicated candid photography team for natural, unposed moments",
      "Traditional portrait sessions for the couple and family",
      "Pre-wedding shoot at Jim Corbett forest, riverside and nature trails",
      "Aerial drone shots of the resort, mandap, baraat and venue landscapes",
      "Cinematic wedding film with professional colour grading and music scoring",
      "Short highlight reel (3–5 minutes) for social sharing",
      "Individual function coverage — Haldi, Mehendi, Sangeet, Pheras and Reception",
      "Edited photo album delivery within 30–45 days of the wedding",
      "Private online gallery for easy download and sharing with family",
    ],
    image: sangeetImg,
  },
  {
    id: "entertainment",
    icon: Music2,
    title: "Entertainment & Cultural Program",
    tagline: "Keep the energy high at every function",
    summary:
      "A great wedding isn't just about the ceremony — it's about creating memories across every function. We organise entertainment that suits the mood of each event, from a high-energy Sangeet night to a relaxed post-wedding bonfire. We handle all bookings, coordination and performance management so the show runs smoothly.",
    details: [
      "Professional DJ with full understanding of Bollywood, Bhangra, Garba and modern tracks",
      "DJ setup with high-quality speaker systems, subwoofers and LED light rigs",
      "Sangeet night choreography coordination — family dance group rehearsals",
      "Live music acts — singers, folk artists, classical performers and fusion bands",
      "Anchor/emcee for Sangeet, Reception and other functions",
      "Folk cultural performances — Kumaoni dance, Garhwali folk music from local artists",
      "Fun guest games and interactive activities for Haldi and Mehendi functions",
      "Bonfires and stargazing evenings for a unique Corbett wedding experience",
      "Jungle safari and nature walk coordination for guests during the day",
      "Fireworks and sparkler send-off coordination",
    ],
    image: lightingImg,
  },
  {
    id: "bridal-makeup",
    icon: Sparkles,
    title: "Bridal Makeup",
    tagline: "Look and feel your absolute best on your wedding day",
    summary:
      "Your bridal look is one of the most personal parts of your wedding. We connect you with skilled makeup artists who specialise in destination weddings — they travel to Jim Corbett with all their professional equipment and stay with you throughout the day to keep you looking flawless, even in outdoor conditions.",
    details: [
      "HD and airbrush bridal makeup with premium, sweat-proof and long-lasting products",
      "Bridal hairstyling — traditional bun, braided updo, soft curls or modern blowout",
      "Coverage for all functions — Mehendi, Haldi, Sangeet and main wedding ceremony",
      "Makeup for bridesmaids, mothers, sisters and close family members",
      "On-site touch-up service throughout the wedding day",
      "Saree draping and outfit assistance by the makeup team",
      "Climate-adapted techniques suited for outdoor Corbett weather",
      "Pre-bridal skin prep consultation and facial sessions before the event",
      "Groom's grooming and pre-wedding skincare guidance",
      "All professional makeup equipment and products carried to the destination",
    ],
    image: mehendiImg,
  },
  {
    id: "jewellery-accessories",
    icon: Gem,
    title: "Jewellery & Accessories",
    tagline: "Complete your bridal look from head to toe",
    summary:
      "We help the bride and groom coordinate and source their jewellery, accessories and finishing touches — ensuring every element of the look is cohesive and well-planned. From traditional gold sets to contemporary jewellery, we connect you with trusted jewellers and stylists who understand bridal looks.",
    details: [
      "Bridal jewellery styling consultation — traditional, contemporary or fusion looks",
      "Coordination with trusted jewellers in Ramnagar and Delhi NCR for sourcing",
      "Full bridal accessories — maang tikka, nath, haath phool, jhumkas, bangles, anklets",
      "Groom's accessories — sehra, turban pin, sherwani brooch, pocket square styling",
      "Rental options for premium jewellery sets to fit any budget",
      "Footwear coordination — embroidered juttis, sandals and heels to match the outfit",
      "Dupatta and veil styling assistance on the wedding day",
      "Floral jewellery design for Haldi and Mehendi functions",
      "Matching accessories for bridesmaid and family coordination",
      "Pre-wedding look trial to ensure everything fits and works together",
    ],
    image: heroImg,
  },
  {
    id: "band-ghoriwala-baggi",
    icon: Drum,
    title: "Band, Ghoriwala, Baggi",
    tagline: "A grand baraat the groom will never forget",
    summary:
      "The baraat is one of the most energetic and memorable parts of any Indian wedding. We arrange a full procession setup — the decorated ghori (horse) or baggi (horse carriage), a live brass band, dhol players and dancing performers — to give the groom a grand entrance that his guests will talk about for years.",
    details: [
      "Decorated white ghori (horse) with flower garlands, velvet saddle and tassels",
      "Baggi (horse-drawn carriage) option for a royal, vintage baraat procession",
      "Live brass band with 11–15 uniformed musicians playing traditional and modern songs",
      "Dhol players — professional dhol waalas who lead the baraat with high energy",
      "Shehnai artists for a traditional melodic welcome during the ceremony",
      "Decorative chattar (ornamental umbrella) and mashaals (torches) for the procession",
      "Bhangra and folk dance performers who dance alongside the baraat",
      "Baraat LED lighting with barat light carriers for evening processions",
      "Decorated palki (palanquin) for the bride's entry if desired",
      "Full timing and route coordination to sync with the wedding schedule",
    ],
    image: haldiImg,
  },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Wedding Services in Jim Corbett | VJ Events Ramnagar"
        description="Complete wedding services in Jim Corbett by VJ Events — venue selection, decor, catering, photography, entertainment, bridal makeup, jewellery and band baraat. One team, everything handled."
        keywords="wedding planner jim corbett, wedding decor ramnagar, catering wedding corbett, bridal makeup corbett, band ghoriwala baggi corbett, wedding photography corbett, destination wedding services uttarakhand"
      />

      {/* ══════ HERO ══════ */}
      <section className="relative py-28 lg:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Our Wedding Services
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Everything you need for your destination wedding in Jim Corbett —
              handled by one experienced team so nothing falls through the
              cracks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ SERVICES OVERVIEW GRID ══════ */}
      <section className="py-16 bg-muted/40 border-b border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-lg mb-10">
            Click any service to see full details
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 group-hover:bg-gold/20 flex items-center justify-center transition-colors duration-300">
                  <s.icon className="h-7 w-7 text-gold" />
                </div>
                <p className="font-display font-semibold text-base text-foreground leading-tight">
                  {s.title}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ DETAILED SERVICE SECTIONS ══════ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-28">
            {services.map((service, i) => (
              <motion.div
                id={service.id}
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-14 items-center"
              >
                {/* Text block — alternates sides */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <service.icon className="h-7 w-7 text-gold" />
                    </div>
                    <span className="text-gold font-body text-sm tracking-[0.25em] uppercase">
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-gold font-semibold text-xl mb-6">
                    {service.tagline}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.summary}
                  </p>

                  {/* What's included */}
                  <div className="mb-8">
                    <p className="text-foreground font-bold text-base uppercase tracking-wider mb-5 pb-2 border-b border-border">
                      What's Included
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-base text-muted-foreground"
                        >
                          <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-forest-light text-primary-foreground text-base px-8 py-6"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Enquire About This Service
                    </Button>
                  </Link>
                </div>

                {/* Image */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={`${service.title} — VJ Events Jim Corbett`}
                      className="w-full aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-primary-foreground font-display font-bold text-xl">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-8">
              Call us or send a message and we'll put together a custom package
              for your wedding in Jim Corbett.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-primary font-semibold text-lg px-10 py-7"
                >
                  <Phone className="h-5 w-5 mr-2" /> Get Free Consultation
                </Button>
              </Link>
              <Link to="/packages">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 text-lg px-10 py-7"
                >
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
