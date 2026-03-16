import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-wedding.jpg";
import {
  TreePine,
  Mountain,
  Camera,
  Calendar,
  MapPin,
  Sun,
  Phone,
  Users,
  Hotel,
  Waves,
  Tent,
  Trees,
  Leaf,
} from "lucide-react";

const locations = [
  {
    name: "Dhikuli",
    distance: "3 km from Ramnagar",
    tagline: "The Wedding Hub of Jim Corbett",
    desc: "Dhikuli is the most popular destination wedding zone in Jim Corbett. It sits right on the Kosi River with forest on both sides. Most big resorts like Tarangi, Namah, Taj Corbett, Riverview Retreat, and Wood Castle are here. You get luxury rooms, large wedding lawns, riverside mandaps, and easy access from Ramnagar station. If you want a grand wedding with 200–500+ guests, Dhikuli is the go-to choice.",
    highlights: [
      "Largest number of 4-star & 5-star wedding resorts",
      "Big lawns that fit 500–2000+ guests",
      "Kosi River views from most venues",
      "Just 3 km from Ramnagar Railway Station",
      "Best for large family weddings",
    ],
    bestFor: "Big weddings, luxury resorts, riverside ceremonies",
    icon: Hotel,
    resorts: "Tarangi, Namah, Taj Corbett, Riverview Retreat, Wood Castle",
  },
  {
    name: "Marchula",
    distance: "30 km from Ramnagar",
    tagline: "Riverside & Mountain Beauty",
    desc: "Marchula is on the banks of the Ramganga River, surrounded by dense forest and mountains on all sides. It's quieter and more scenic than Dhikuli — perfect for couples who want an intimate, nature-surrounded wedding. Resorts like Solluna and TerraTrek offer riverside lawns with 360° mountain views. The drive from Ramnagar takes about 45 minutes through beautiful forest roads.",
    highlights: [
      "Ramganga River flowing right next to the resorts",
      "360° mountain and forest views",
      "Peaceful, less crowded location",
      "Perfect for pre-wedding photoshoots",
      "Best for intimate weddings (100–300 guests)",
    ],
    bestFor: "Intimate weddings, riverside ceremonies, nature lovers",
    icon: Waves,
    resorts: "Solluna Resort, TerraTrek Resorts",
  },
  {
    name: "Dhela",
    distance: "12 km from Ramnagar",
    tagline: "Deep Forest Wedding Experience",
    desc: "Dhela is one of the closest entry points to the actual Jim Corbett Tiger Reserve. It's known for its sal forests, grasslands, and wildlife safaris. Resorts here are nestled inside thick forest — giving your wedding a true jungle feel. If your guests want to do a morning jungle safari and then attend a sangeet at night, Dhela is the perfect base. Great for couples who love nature and wildlife.",
    highlights: [
      "Closest to Jim Corbett Tiger Reserve entry",
      "Surrounded by thick sal forest and grasslands",
      "Jungle safari available right from your resort",
      "Natural, eco-friendly wedding setting",
      "Best for nature-loving couples",
    ],
    bestFor: "Wildlife lovers, jungle-themed weddings, safari + wedding combo",
    icon: Trees,
    resorts: "Hriday Bhoomi, The Roar Resort, luxury forest cottages",
  },
  {
    name: "Sawaldey",
    distance: "7 km from Ramnagar",
    tagline: "Budget-Friendly Forest Getaway",
    desc: "Sawaldey (Sawaldeh) village is on the Dhela Road, close to both Ramnagar and the forest. It has a growing number of mid-range resorts like Acorn Hideaway, De Coracao, Aura Resort, Maya Forest, and Signature Resort. This area gives you forest surroundings at more affordable prices compared to Dhikuli. A great pick if you want a forest wedding without the premium resort price tag.",
    highlights: [
      "Good selection of budget and mid-range resorts",
      "Forest setting at lower prices than Dhikuli",
      "7 km from Ramnagar — easy to reach",
      "Quiet and green village surroundings",
      "Best for budget-conscious families",
    ],
    bestFor: "Budget weddings, mid-range resorts, forest setting",
    icon: Tent,
    resorts:
      "Acorn Hideaway, De Coracao, Aura Resort, Maya Forest, Signature Resort",
  },
  {
    name: "Kyari",
    distance: "10 km from Ramnagar",
    tagline: "Village Charm Meets Nature",
    desc: "Kyari is a small, untouched village in the Shivalik foothills near Jim Corbett. The Kyari Corbett Resort here offers 32 ethnic cottages surrounded by green fields, streams, and forest. It's a peaceful, offbeat location — perfect for smaller, intimate weddings where you want your guests to feel like they're in a completely different world. The rustic village vibe adds a unique charm to your wedding.",
    highlights: [
      "Rustic village setting with ethnic cottages",
      "Green fields, streams, and forest all around",
      "Peaceful, offbeat location away from crowds",
      "Spa, pool, and nature walks available",
      "Best for small intimate weddings (50–150 guests)",
    ],
    bestFor: "Small weddings, offbeat locations, rustic charm",
    icon: Leaf,
    resorts: "Kyari Corbett Resort (32 rooms, outdoor lawn)",
  },
  {
    name: "Choi",
    distance: "5 km from Ramnagar",
    tagline: "The Grand Wedding Destination",
    desc: "Choi (Santoshpur Choi) is home to Corbett The Grand — the biggest resort in the entire Jim Corbett region. Spread across 20+ acres with 100+ rooms, multiple lawns, and a pillar-less banquet hall, this area is built for large, grand weddings. It can handle 2000+ guests easily. It also has a spa, pool, disco, boating, and kids' zone — keeping every guest entertained throughout the wedding.",
    highlights: [
      "Biggest resort in Jim Corbett (20+ acres)",
      "Can handle 2000+ guests with multiple venues",
      "Pillar-less banquet hall + huge lawns",
      "Pool, spa, disco, boating, kids' zone",
      "20 minutes from Ramnagar Railway Station",
    ],
    bestFor: "Grand weddings, large guest lists, all-in-one resort",
    icon: Hotel,
    resorts: "Corbett The Grand (100+ rooms, multiple lawns & halls)",
  },
];

const DestinationWeddings = () => {
  return (
    <Layout>
      <SEOHead
        title="Destination Wedding Locations in Jim Corbett — Dhikuli, Marchula, Dhela & More"
        description="Explore the best destination wedding locations in Jim Corbett — Dhikuli, Marchula, Dhela, Sawaldey, Kyari, and Choi. Find the perfect area for your wedding based on budget, guest count, and vibe."
        keywords="destination wedding jim corbett, wedding locations corbett, dhikuli wedding, marchula wedding, dhela wedding, sawaldey wedding, kyari wedding, choi wedding, forest wedding uttarakhand, corbett wedding planner"
      />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-3">
              Destination Weddings
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Wedding Locations in Jim Corbett
            </h1>
            <p className="text-primary-foreground/80 text-xl mb-8 max-w-2xl">
              Jim Corbett has 6 popular areas where people do destination
              weddings — each with a different vibe, budget, and experience.
              Find the one that's right for you.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-primary font-semibold text-lg px-8 py-6"
              >
                <Phone className="h-5 w-5 mr-2" /> Talk to Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════ LOCATIONS ══════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-3">
              Popular Areas
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              6 Best Wedding Locations in Jim Corbett
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Each location in Corbett has its own personality — from grand
              riverside resorts to quiet forest cottages. Here's what each area
              offers for your wedding.
            </p>
          </motion.div>

          <div className="space-y-10 max-w-5xl mx-auto">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Header bar */}
                <div className="bg-primary px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="h-14 w-14 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                      <loc.icon className="h-7 w-7 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-primary-foreground">
                        {loc.name}
                      </h3>
                      <p className="text-gold text-base font-medium">
                        {loc.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/60">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-base">{loc.distance}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {loc.desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Highlights */}
                    <div>
                      <h4 className="font-display font-semibold text-lg text-foreground mb-3">
                        Why This Location
                      </h4>
                      <ul className="space-y-2">
                        {loc.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 text-base text-muted-foreground"
                          >
                            <span className="text-gold mt-1 shrink-0">✓</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Info cards */}
                    <div className="space-y-4">
                      <div className="bg-gold/5 border border-gold/15 rounded-xl px-5 py-4">
                        <p className="text-sm font-bold uppercase tracking-wider text-gold mb-1">
                          Best For
                        </p>
                        <p className="text-base text-foreground">
                          {loc.bestFor}
                        </p>
                      </div>
                      <div className="bg-muted/50 border border-border rounded-xl px-5 py-4">
                        <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Popular Resorts
                        </p>
                        <p className="text-base text-foreground">
                          {loc.resorts}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHY CORBETT ══════ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Jim Corbett for Your Wedding?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Jim Corbett has forests, rivers, mountains, and great resorts —
              making it one of the best places in India for a destination
              wedding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: TreePine,
                title: "Beautiful Forest Venues",
                desc: "Your wedding surrounded by green forests — looks amazing in photos and feels even better.",
              },
              {
                icon: Mountain,
                title: "Riverside Locations",
                desc: "Many resorts are right next to the Kosi River with mountain views all around.",
              },
              {
                icon: Camera,
                title: "Great Photo Spots",
                desc: "Natural backgrounds that make your wedding photos look like a magazine.",
              },
              {
                icon: Calendar,
                title: "2–3 Day Celebrations",
                desc: "Enough time for haldi, mehendi, sangeet, wedding, and reception — all at one place.",
              },
              {
                icon: MapPin,
                title: "Easy to Reach",
                desc: "Just 5–6 hours from Delhi by road. Easy for all your guests to travel.",
              },
              {
                icon: Sun,
                title: "Nice Weather",
                desc: "October to March has pleasant weather — perfect for outdoor wedding functions.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-lg border border-border"
              >
                <item.icon className="h-8 w-8 text-gold mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-5">
              Not Sure Which Location is Right?
            </h2>
            <p className="text-muted-foreground mb-8 text-xl">
              Just tell us your guest count and budget — we'll suggest the best
              area and resort for your wedding. No charges for consultation.
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
              <Link to="/venues">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 text-lg px-10 py-7"
                >
                  See Resort Prices
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DestinationWeddings;
