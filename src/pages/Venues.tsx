import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Star, Phone, Users, Bed, UtensilsCrossed, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-wedding.jpg";
import corbettImg from "@/assets/corbett-venue.jpg";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import haldiImg from "@/assets/haldi-ceremony.jpg";
import mehendiImg from "@/assets/mehendi-setup.jpg";
import sangeetImg from "@/assets/sangeet-night.jpg";
import safariImg from "@/assets/jungle-safari.jpg";

const venues = [
  {
    name: "Maulik Mansion Resort",
    tier: "Budget-Friendly",
    stars: 3,
    rooms: 25,
    capacity: "120+",
    image: haldiImg,
    roomTypes: [
      { type: "Standard Room", price: "₹1,500 – 2,500" },
      { type: "Deluxe Room", price: "₹2,500 – 3,500" },
      { type: "Family Room", price: "₹3,500 – 4,500" },
    ],
    highlights: [
      "Cheapest wedding venue in Corbett",
      "Food starts at ₹550 per plate",
      "Garden area for small functions",
      "Best for families on a tight budget",
    ],
  },
  {
    name: "The Roar Resort",
    tier: "Budget-Friendly",
    stars: 3,
    rooms: 34,
    capacity: "150+",
    image: safariImg,
    roomTypes: [
      { type: "Standard Room", price: "₹2,000 – 3,000" },
      { type: "Deluxe Room", price: "₹3,000 – 4,500" },
      { type: "Suite", price: "₹4,500 – 6,000" },
    ],
    highlights: [
      "Big 5-acre property near Jhirna zone",
      "Veg ₹800 / Non-veg ₹1,100 per plate",
      "Open lawn for wedding functions",
      "Good for big guest lists on a budget",
    ],
  },
  {
    name: "Corbett Wild River Resort",
    tier: "Budget-Friendly",
    stars: 3,
    rooms: 30,
    capacity: "150+",
    image: heroImg,
    roomTypes: [
      { type: "Deluxe Room", price: "₹2,500 – 3,500" },
      { type: "Cottage", price: "₹3,500 – 5,000" },
      { type: "Suite", price: "₹5,000 – 7,000" },
    ],
    highlights: [
      "Resort next to the river with lawns",
      "Wedding packages from ₹3 Lakh",
      "Their own catering & decor team",
      "Bonfire area for evening parties",
    ],
  },
  {
    name: "Corbett River Creek Resort",
    tier: "Mid-Range",
    stars: 3,
    rooms: 35,
    capacity: "150+",
    image: lightingImg,
    roomTypes: [
      { type: "Standard Room", price: "₹2,500 – 3,500" },
      { type: "Deluxe Room", price: "₹3,500 – 5,000" },
      { type: "Premium Room", price: "₹5,000 – 7,000" },
    ],
    highlights: [
      "Mandap setup near the creek",
      "Green surroundings all around",
      "Affordable wedding packages",
      "Decor & catering available",
    ],
  },
  {
    name: "The Wild Crest Resort",
    tier: "Mid-Range",
    stars: 4,
    rooms: 65,
    capacity: "200+",
    image: decorImg,
    roomTypes: [
      { type: "Cottage Room", price: "₹3,000 – 4,500" },
      { type: "Pool Facing Room", price: "₹3,500 – 5,000" },
      { type: "Family Cottage (4-bed)", price: "₹5,500 – 7,000" },
    ],
    highlights: [
      "Close to the national park gate",
      "Swimming pool & spa available",
      "Good rates for big groups",
      "Restaurant & room service",
    ],
  },
  {
    name: "Brys Caves Resort",
    tier: "Mid-Range",
    stars: 4,
    rooms: 40,
    capacity: "180+",
    image: cocktailImg,
    roomTypes: [
      { type: "Cave Room", price: "₹3,500 – 5,000" },
      { type: "Deluxe Cave Suite", price: "₹5,000 – 7,500" },
      { type: "Premium Suite", price: "₹7,500 – 10,000" },
    ],
    highlights: [
      "Unique cave-style rooms — looks amazing",
      "Food ₹1,000 – 1,400 per plate",
      "Swimming pool & bar",
      "Great photo spots everywhere",
    ],
  },
  {
    name: "Solluna Resort",
    tier: "Mid-Range",
    stars: 4,
    rooms: 45,
    capacity: "180+",
    image: safariImg,
    roomTypes: [
      { type: "Superior Room", price: "₹3,500 – 5,000" },
      { type: "Deluxe Room", price: "₹5,000 – 7,000" },
      { type: "Suite", price: "₹7,000 – 9,000" },
    ],
    highlights: [
      "Located near Mohan, by the riverside",
      "Breakfast included in room price",
      "Clean and well-kept lawns",
      "Good for mid-size weddings",
    ],
  },
  {
    name: "Tarangi Resort & Spa",
    tier: "Premium",
    stars: 4,
    rooms: 50,
    capacity: "200+",
    image: sangeetImg,
    roomTypes: [
      { type: "Garden Cottage", price: "₹5,000 – 7,000" },
      { type: "River Cottage", price: "₹7,000 – 9,000" },
      { type: "Suite Cottage", price: "₹9,000 – 12,000" },
    ],
    highlights: [
      "Big 13-acre property by the river",
      "Beautiful riverside mandap for pheras",
      "DJ & event setup available",
      "Spa, pool & fun activities",
    ],
  },
  {
    name: "Namah Resort",
    tier: "Premium",
    stars: 5,
    rooms: 46,
    capacity: "200+",
    image: corbettImg,
    roomTypes: [
      { type: "Premium Room", price: "₹6,000 – 8,000" },
      { type: "Superior Room", price: "₹8,000 – 10,000" },
      { type: "Suite", price: "₹10,000 – 14,000" },
    ],
    highlights: [
      "Right next to Kosi River",
      "Heated pool — great for photos",
      "Spa & wellness centre",
      "Bonfire area for evening parties",
    ],
  },
  {
    name: "Paatlidun Safari Lodge",
    tier: "Premium",
    stars: 4,
    rooms: 10,
    capacity: "80",
    image: mehendiImg,
    roomTypes: [
      { type: "Bush Cottage", price: "₹5,500 – 7,000" },
      { type: "Luxury Cottage", price: "₹7,000 – 9,000" },
      { type: "Premium Cottage", price: "₹9,000 – 12,000" },
    ],
    highlights: [
      "Small cozy resort — very private",
      "Perfect for small family weddings",
      "Meals included in package",
      "Jungle safari included",
    ],
  },
  {
    name: "Wood Castle Spa & Resort",
    tier: "Premium",
    stars: 5,
    rooms: 65,
    capacity: "250+",
    image: haldiImg,
    roomTypes: [
      { type: "Deluxe Room", price: "₹4,500 – 6,500" },
      { type: "Super Deluxe Cottage", price: "₹6,500 – 8,500" },
      { type: "Duplex Room", price: "₹8,500 – 10,000" },
      { type: "Family Cottage", price: "₹10,000 – 12,000" },
    ],
    highlights: [
      "Mountain & river views",
      "Big banquet hall + open lawn",
      "Multi-cuisine restaurant",
      "Pool & kids play area",
    ],
  },
  {
    name: "Corbett The Baagh Spa & Resort",
    tier: "Luxury",
    stars: 4,
    rooms: 52,
    capacity: "200+",
    image: lightingImg,
    roomTypes: [
      { type: "Jungle Cat Room", price: "₹6,500 – 8,500" },
      { type: "Leopard Cat Room", price: "₹8,500 – 11,000" },
      { type: "Spotted Cat Suite", price: "₹11,000 – 14,000" },
    ],
    highlights: [
      "Mountains in the background",
      "Big open lawns for events",
      "Spa & swimming pool",
      "Multiple restaurants",
    ],
  },
  {
    name: "Taj Corbett Resort & Spa",
    tier: "Luxury",
    stars: 5,
    rooms: 75,
    capacity: "300+",
    image: heroImg,
    roomTypes: [
      { type: "Superior Room", price: "₹8,000 – 12,000" },
      { type: "Garden View Room", price: "₹12,000 – 16,000" },
      { type: "Suite", price: "₹16,000 – 22,000" },
    ],
    highlights: [
      "Lawn right by the river + gardens",
      "Spa & infinity pool",
      "Fine dining restaurant",
      "Their own wedding planning team",
    ],
  },
  {
    name: "Jim Corbett Marriott Resort & Spa",
    tier: "Luxury",
    stars: 5,
    rooms: 99,
    capacity: "400+",
    image: decorImg,
    roomTypes: [
      { type: "Deluxe Room", price: "₹8,000 – 12,000" },
      { type: "Executive Suite", price: "₹14,000 – 18,000" },
      { type: "Premium Suite", price: "₹18,000 – 25,000" },
    ],
    highlights: [
      "Huge event space (5,000+ sq m)",
      "Biggest ballroom in the area",
      "24-hour room service & bar",
      "Multiple lawns for different functions",
    ],
  },
];

const tierColors: Record<string, string> = {
  "Ultra-Luxury": "bg-gold text-primary",
  Luxury: "bg-amber-100 text-amber-800",
  Premium: "bg-emerald-100 text-emerald-800",
  "Mid-Range": "bg-blue-100 text-blue-800",
  "Budget-Friendly": "bg-slate-100 text-slate-700",
};

const Venues = () => {
  return (
    <Layout>
      <SEOHead
        title="Top Wedding Venues & Resort Prices in Jim Corbett"
        description="Check room prices of 14+ wedding resorts in Jim Corbett. Rooms start from ₹1,500/night. Compare budget, mid-range & premium resorts for your wedding."
        keywords="jim corbett resort price, wedding resort corbett, resort room rates corbett, best resort for wedding in corbett, cheap resort jim corbett wedding, corbett resort tariff"
      />

      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Venues & Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Wedding Resorts & Room Prices in Jim Corbett
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Room-wise pricing of 14+ resorts in Corbett. Compare rates and
              pick the right resort for your wedding budget.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-12">
            All prices are per room per night (approx). Rates change by season.
            Taxes extra. Call us for group booking discounts.
          </p>

          <div className="space-y-8">
            {venues.map((venue, i) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <div className="grid lg:grid-cols-[320px_1fr]">
                  {/* Image */}
                  <img
                    src={venue.image}
                    alt={`${venue.name} — wedding venue in Jim Corbett`}
                    className="w-full h-56 lg:h-full object-cover"
                    loading="lazy"
                  />

                  {/* Details */}
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                            {venue.name}
                          </h3>
                          <span
                            className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${tierColors[venue.tier]}`}
                          >
                            {venue.tier}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            {Array.from({ length: venue.stars }).map((_, s) => (
                              <Star
                                key={s}
                                className="h-3.5 w-3.5 text-gold fill-current"
                              />
                            ))}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bed className="h-4 w-4" /> {venue.rooms} Rooms
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" /> Up to {venue.capacity}{" "}
                            Guests
                          </span>
                        </div>
                      </div>
                      <Link to="/contact" className="shrink-0">
                        <Button
                          size="sm"
                          className="bg-gold hover:bg-gold-light text-primary font-semibold"
                        >
                          Get Quote
                        </Button>
                      </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Room pricing table */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
                          <UtensilsCrossed className="h-4 w-4 text-gold" /> Room
                          Tariff (per night)
                        </h4>
                        <div className="border border-border rounded-md overflow-hidden">
                          {venue.roomTypes.map((room, ri) => (
                            <div
                              key={room.type}
                              className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                                ri % 2 === 0 ? "bg-background" : "bg-muted/30"
                              }`}
                            >
                              <span className="text-foreground font-medium">
                                {room.type}
                              </span>
                              <span className="text-gold font-semibold whitespace-nowrap ml-3">
                                {room.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
                          <Waves className="h-4 w-4 text-gold" /> Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {venue.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-sm text-muted-foreground flex items-center gap-2"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-card p-10 rounded-lg border border-border mt-14">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Need Help Choosing a Resort?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We work directly with all these resorts and can get you group
              discounts, meal deals, and better wedding rates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+916398877687">
                <Button className="bg-primary hover:bg-forest-light text-primary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  Call +91 6398877687
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10"
                >
                  Request Venue Comparison
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Venues;
