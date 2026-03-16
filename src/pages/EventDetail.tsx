import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Check,
  MapPin,
  IndianRupee,
  Clock,
  Palette,
  Music,
  Utensils,
  Camera,
  Sparkles,
  Phone,
} from "lucide-react";

import haldiImg from "@/assets/haldi-ceremony.jpg";
import mehendiImg from "@/assets/mehendi-setup.jpg";
import sangeetImg from "@/assets/sangeet-night.jpg";
import cocktailImg from "@/assets/cocktail-bar.jpg";
import decorImg from "@/assets/decor-setup.jpg";
import lightingImg from "@/assets/lighting-design.jpg";
import heroImg from "@/assets/hero-wedding.jpg";

interface EventData {
  title: string;
  tagline: string;
  image: string;
  seoDescription: string;
  seoKeywords: string;
  intro: string;
  whyCorbett: string[];
  decorThemes: { name: string; desc: string }[];
  includes: string[];
  entertainment: string[];
  food: string[];
  bestVenues: string[];
  priceRange: string;
  duration: string;
  idealGuests: string;
}

const eventData: Record<string, EventData> = {
  "pre-wedding-photoshoot": {
    title: "Pre Wedding Photoshoot",
    tagline: "Beautiful couple photos in the forests & rivers of Jim Corbett",
    image: lightingImg,
    seoDescription:
      "Pre-wedding photoshoot in Jim Corbett — river, forest, and resort locations. Best photographers and packages by VJ Events.",
    seoKeywords:
      "pre wedding shoot jim corbett, couple photoshoot corbett, pre wedding photography ramnagar, pre wedding location corbett",
    intro:
      "Jim Corbett is one of the best places in India for a pre-wedding photoshoot. You get rivers, forests, bridges, and resort gardens — all in one area. Whether you want sunset photos by the river or candid shots in the forest, Corbett has it all. Our team finds the best spots and handles everything so you just enjoy the shoot.",
    whyCorbett: [
      "Kosi River — smooth stones, flowing water, and mountain views",
      "Forest trails with beautiful sunlight filtering through trees",
      "Garjia Temple bridge — a popular photo spot",
      "Old bridges, village roads, and Gypsy jeeps make great props",
      "Resort gardens at Namah, Tarangi, and Solluna",
      "Open grasslands at Bijrani and Dhikala — amazing sunset shots",
    ],
    decorThemes: [
      {
        name: "Riverside Romance",
        desc: "Photos by the Kosi River with flower petals, fabrics, and beautiful sunset light.",
      },
      {
        name: "Forest Fairytale",
        desc: "Deep inside the forest with fairy lights, vintage props, and trees all around.",
      },
      {
        name: "Rustic Village",
        desc: "Old bridges, bicycles, mud pots, and village lanes for a natural, real feel.",
      },
      {
        name: "Resort Elegance",
        desc: "Clean lawns, poolside, and beautiful resort settings for classy photos.",
      },
    ],
    includes: [
      "Professional photographer & videographer",
      "Location scouting & permits",
      "Styling & wardrobe consultation",
      "Props & setup at chosen locations",
      "50–200 edited high-res photos",
      "Cinematic highlight reel (2–5 min)",
      "Drone aerial shots (where permitted)",
    ],
    entertainment: [],
    food: [
      "Picnic-style lunch or snack setup at riverside",
      "Warm beverages for early morning shoots",
      "Champagne or mocktail celebration shot",
    ],
    bestVenues: [
      "Kosi River bank (Ramnagar side)",
      "Garjia Temple & Bridge",
      "Bijrani Forest Zone",
      "Solluna Resort, Marchula",
      "Namah Resort gardens",
    ],
    priceRange: "₹10,000 – ₹50,000",
    duration: "Half day or full day",
    idealGuests: "Couple + close family (2–10 people)",
  },
  "haldi-ceremony": {
    title: "Haldi Ceremony",
    tagline: "Fun, colourful haldi function in the open air at Corbett resorts",
    image: haldiImg,
    seoDescription:
      "Haldi ceremony setup in Jim Corbett — outdoor decor, yellow themes, poolside & garden setups. Planned by VJ Events.",
    seoKeywords:
      "haldi ceremony jim corbett, haldi function destination wedding, haldi setup corbett, haldi decoration ideas corbett",
    intro:
      "The haldi is the most fun and colourful function before the wedding. In Jim Corbett, you can do it on an open lawn or by the pool — with marigold flowers, yellow decor, music, and lots of laughter. We set up everything so it looks great in photos and your family has an amazing time.",
    whyCorbett: [
      "Open lawns and pool areas — perfect for messy haldi fun",
      "Green surroundings make yellow decor look even better",
      "Riverside and garden venues with space for dancing",
      "Cool mountain weather — comfortable for everyone",
      "Nature itself is the backdrop — less decor needed",
    ],
    decorThemes: [
      {
        name: "Sunflower Theme",
        desc: "Sunflowers, yellow marigolds, mud pots, fairy lights, and floor cushions — cheerful and Instagram-ready.",
      },
      {
        name: "Boho Theme",
        desc: "Earthy colours, hanging decorations, warm lights, wooden pallets, and natural textures.",
      },
      {
        name: "Marigold Theme",
        desc: "Lots of marigold garlands, hay bales, wooden crates, and brass items for a traditional look.",
      },
      {
        name: "Green Garden Theme",
        desc: "Green leaves, soft yellow flowers, jute and cane items — a nature-inspired setup.",
      },
      {
        name: "Pastel Theme",
        desc: "Soft pinks, mint, and lavender colours with white furniture and gentle lighting — modern and clean.",
      },
    ],
    includes: [
      "Custom theme decor & floral setup",
      "Seating with colourful cushions & drapes",
      "Haldi station with brass urlis & turmeric bowls",
      "Water guns & splash zone setup",
      "Background music & portable speakers",
      "Photo booth with props",
      "Cleanup crew post-ceremony",
    ],
    entertainment: [
      "Dhol players for energetic start",
      "Bollywood music playlist or live singer",
      "Haldi application rituals with family",
      "Fun games — turmeric relay, splash contests",
      "Dance-off between bride & groom sides",
    ],
    food: [
      "Live chaat & pani puri counter",
      "Fresh juice & nimbu pani bar",
      "Light snacks — samosa, kachori, pakoras",
      "Sweet station — jalebi, gulab jamun, bal mithai (Kumaoni speciality)",
    ],
    bestVenues: [
      "Tarangi Resort poolside lawn",
      "Namah Resort riverside garden",
      "Wood Castle open lawns",
      "The Wild Crest pool area",
      "Corbett The Baagh garden",
    ],
    priceRange: "₹25,000 – ₹1,50,000",
    duration: "3 – 5 hours (typically morning / afternoon)",
    idealGuests: "50 – 200 guests",
  },
  "mehendi-ceremony": {
    title: "Mehendi Ceremony",
    tagline: "A relaxed mehendi function with great decor and live artists",
    image: mehendiImg,
    seoDescription:
      "Mehendi ceremony setup in Jim Corbett — Rajasthani theme, boho lounge, live artists. Complete mehendi planning by VJ Events.",
    seoKeywords:
      "mehendi ceremony jim corbett, mehendi function destination wedding, mehendi setup corbett, mehendi decoration corbett",
    intro:
      "The mehendi function is all about fun, colour, and relaxation. In Jim Corbett, we set up beautiful mehendi seating areas in resort gardens, shaded verandas, and riverside spots. Your guests sit comfortably, get mehendi done, enjoy snacks and music — all in a beautiful setting with nature all around.",
    whyCorbett: [
      "Shaded verandas and garden areas — perfect for long mehendi sessions",
      "Cool breeze keeps guests comfortable in the daytime",
      "Natural earthy colours match the warm mehendi theme",
      "Garden settings feel relaxed and cozy",
      "Nature is the decor — you don't need to spend extra",
    ],
    decorThemes: [
      {
        name: "Rajasthani Theme",
        desc: "Mirror work, colourful fabrics, brass items, umbrellas, and cushions — a traditional Rajasthani look.",
      },
      {
        name: "Boho Garden",
        desc: "Floor seating with rugs, fairy lights, dreamcatchers, and lots of greenery — a relaxed vibe.",
      },
      {
        name: "Moroccan Theme",
        desc: "Colourful lanterns, brass trays, and rich colours like green, red, and blue.",
      },
      {
        name: "Pastel & Clean",
        desc: "Soft colours, white drapes, small flowers, and a clean modern look.",
      },
    ],
    includes: [
      "Professional mehendi artists (4–8 artists for 100+ guests)",
      "Lounge-style seating with cushions & rugs",
      "Custom theme decor & drapes",
      "Mehendi drying stations with hand fans",
      "Photo booth with Mehendi props",
      "Background music & speakers",
      "Dedicated coordinator",
    ],
    entertainment: [
      "Live folk musicians — sitar, tabla, or Kumaoni artists",
      "Mehendi design competition among guests",
      "Bollywood playlist or acoustic singer",
      "Dance performances by family members",
      "Henna art display wall for photos",
    ],
    food: [
      "Finger food & appetisers (easy to eat with wet hands)",
      "Live chaat & golgappa counter",
      "Fresh fruit juices, lassi, and thandai",
      "Mini dessert station — cupcakes, macarons, ladoos",
      "Chai station with kulhad chai & biscuits",
    ],
    bestVenues: [
      "Namah Resort garden verandas",
      "Tarangi Resort riverside lounge",
      "Wood Castle lawn & sit-out area",
      "Corbett The Baagh poolside",
      "Paatlidun Safari Lodge for intimate setups",
    ],
    priceRange: "₹20,000 – ₹1,20,000",
    duration: "4 – 6 hours (typically afternoon)",
    idealGuests: "50 – 200 guests",
  },
  "sangeet-night": {
    title: "Sangeet Night",
    tagline: "A night of music, dance, and Bollywood fun under the open sky",
    image: sangeetImg,
    seoDescription:
      "Sangeet night in Jim Corbett — DJ, dance, live music, stage setup. Plan your wedding sangeet with VJ Events.",
    seoKeywords:
      "sangeet night jim corbett, sangeet function destination wedding, sangeet DJ corbett, sangeet setup jim corbett",
    intro:
      "The sangeet is the most fun night of any wedding — and doing it in Jim Corbett makes it even better. Imagine dancing under the stars, fairy lights on trees, a lit-up stage, and Bollywood music playing all night. We set up everything — stage, lights, sound, dance floor — so your family can just dance and enjoy.",
    whyCorbett: [
      "Open lawns under the stars — perfect sangeet setting",
      "Trees all around for hanging fairy lights and lanterns",
      "Cool evening weather — comfortable for dancing all night",
      "Sound of the river in the background adds to the vibe",
      "Resort stages with forest and mountain backdrop",
      "No city noise — your DJ and music take over the night",
    ],
    decorThemes: [
      {
        name: "Forest Night",
        desc: "Fairy lights on trees, hanging lanterns, earthy colours, and gold touches — a magical forest feel.",
      },
      {
        name: "Bollywood Night",
        desc: "LED stage, mirror balls, spotlights, red carpet, and a big dance floor — full Bollywood vibe.",
      },
      {
        name: "Bonfire Night",
        desc: "A bonfire in the centre, hay bale seats, string lights, and warm lighting — cozy and fun.",
      },
      {
        name: "Royal Night",
        desc: "Grand arches, chandeliers, maroon and gold drapes, and a beautifully decorated stage.",
      },
    ],
    includes: [
      "Professional stage & dance floor setup",
      "Concert-grade sound system & DJ console",
      "Lighting rig — LED, spotlights, moving heads",
      "Choreographer coordination for performances",
      "Anchor / emcee for the evening",
      "Sparkler entry & fog machine effects",
      "Custom theme decor & backdrop",
    ],
    entertainment: [
      "Professional DJ with Bollywood, Punjabi, and EDM mixes",
      "Choreographed family performances",
      "Live band or Sufi singer",
      "Kumaoni / Garhwali folk dance troupe",
      "Couple's first dance with spotlight",
      "Dance-off competitions with prizes",
      "Grand bride & groom entries with sparklers",
    ],
    food: [
      "Live chaat & tikki counters",
      "Tandoori & kebab stations",
      "Signature cocktails with local citrus flavours",
      "Warm dessert station — jalebi, gulab jamun, bal mithai",
      "Midnight chai & maggi counter",
      "Fire pit beverages for cooler evenings",
    ],
    bestVenues: [
      "Taj Corbett Resort lawns",
      "Jim Corbett Marriott ballroom & terrace",
      "Tarangi Resort riverside stage",
      "Namah Resort open-air lawn",
      "Aahana Corbett grand lawn",
    ],
    priceRange: "₹50,000 – ₹3,00,000",
    duration: "5 – 8 hours (evening to late night)",
    idealGuests: "100 – 300 guests",
  },
  "cocktail-party": {
    title: "Cocktail Party",
    tagline: "A classy evening with drinks, music, and beautiful views",
    image: cocktailImg,
    seoDescription:
      "Cocktail party setup for destination wedding in Jim Corbett. Bar, music, snacks, and beautiful outdoor setup by VJ Events.",
    seoKeywords:
      "cocktail party jim corbett, cocktail evening wedding corbett, cocktail setup destination wedding, wedding cocktail night corbett",
    intro:
      "The cocktail evening is where everyone relaxes, has drinks, and mingles before the big day. In Jim Corbett, we set up bars on resort terraces, by the pool, or in garden areas — with music, lights, and good food. It's a perfect evening for your guests to meet and have a great time.",
    whyCorbett: [
      "Poolside and terrace areas with forest views at sunset",
      "Cool evening weather — perfect for outdoor parties",
      "Natural setting looks beautiful even without heavy decor",
      "Resort bars can be set up with your theme",
      "Feels private and special — right next to the forest",
    ],
    decorThemes: [
      {
        name: "Garden Lounge",
        desc: "Low seating, string lights, potted plants, candles on tables, and soft background music.",
      },
      {
        name: "Tropical Theme",
        desc: "Palm leaves, bamboo bar counter, torches, tropical flowers, and signature cocktails.",
      },
      {
        name: "Black & Gold",
        desc: "Classy black and gold setup with tall tables, nice glasses, and live music.",
      },
      {
        name: "Vintage Bar",
        desc: "Warm dim lights, leather sofas, wooden bar, classic cocktails, and a relaxed feel.",
      },
    ],
    includes: [
      "Professional bar setup & mixologists",
      "Signature cocktail menu (8–12 drinks)",
      "Cocktail tables, lounge furniture & decor",
      "Background music — DJ or live band",
      "Ambient lighting — fairy lights, candles, lanterns",
      "Dedicated service staff",
      "Custom menu cards & cocktail napkins",
    ],
    entertainment: [
      "Live jazz or acoustic band",
      "Flair bartending show",
      "Wine or whisky tasting station",
      "Cigar lounge corner",
      "Soft Bollywood or lounge music DJ set",
      "Interactive cocktail-making station for guests",
    ],
    food: [
      "8–12 rotating hors d'oeuvres",
      "Cheese & charcuterie display",
      "Live pasta or sushi counter",
      "Tandoori & kebab platters",
      "Mini dessert bites — truffles, éclairs, tarts",
      "Warm soup shots for cooler evenings",
    ],
    bestVenues: [
      "Jim Corbett Marriott terrace & bar",
      "Lebua Corbett infinity pool deck",
      "Namah Resort riverside lounge",
      "Taj Corbett garden terrace",
      "Wood Castle poolside area",
    ],
    priceRange: "₹40,000 – ₹2,00,000",
    duration: "3 – 5 hours (evening)",
    idealGuests: "80 – 200 guests",
  },
  "wedding-ceremony": {
    title: "Wedding Ceremony",
    tagline:
      "Your wedding day — beautiful mandap, pheras, and celebrations in Corbett",
    image: decorImg,
    seoDescription:
      "Plan your wedding ceremony in Jim Corbett — mandap, pheras, baraat, decor, and full setup. Planned by VJ Events.",
    seoKeywords:
      "wedding in jim corbett, wedding ceremony corbett, mandap setup corbett, wedding planner jim corbett, destination wedding corbett",
    intro:
      "The wedding day is the most important day — and in Jim Corbett, it becomes extra special. Whether you want pheras by the river, a mandap in the garden under the trees, or a grand setup in a resort ballroom — we design and set up everything. From baraat to vidaai, our team handles it all.",
    whyCorbett: [
      "Riverside mandap — pheras with the sound of flowing water",
      "Trees above you like a natural roof for outdoor weddings",
      "Resort ballrooms and big lawns for grand setups",
      "Mountain views and golden sunset light for evening weddings",
      "One resort can have different areas for each function",
      "Just 5–6 hours from Delhi — easy for guests to come",
    ],
    decorThemes: [
      {
        name: "Classic Flower Mandap",
        desc: "Four-pillar mandap decorated with roses, marigolds, and orchids. Red and gold fabrics with brass touches.",
      },
      {
        name: "Riverside Mandap",
        desc: "Simple mandap by the river with white drapes, green plants, and the Kosi River behind you during pheras.",
      },
      {
        name: "Grand Stage Mandap",
        desc: "Big mandap with chandeliers, LED panels, mirror work, and rich maroon and gold decoration.",
      },
      {
        name: "Green & Natural Mandap",
        desc: "Mandap made with real plants, ferns, and wood — a natural, eco-friendly look for nature-loving couples.",
      },
    ],
    includes: [
      "Grand mandap design & construction",
      "Bridal & groom entry pathway decor",
      "Seating arrangement for all guests",
      "Pandit ji coordination & rituals setup",
      "Havan kund, kalash, and ceremonial items",
      "Sound system for mantras & announcements",
      "Stage lighting & spotlights",
      "Varmala & jaimala stage",
      "Vidaai setup & coordination",
    ],
    entertainment: [
      "Dhol & shehnai for baraat procession",
      "Ghodi / vintage car for groom entry",
      "Fireworks or cold pyro at key moments",
      "Band baaja for baraat",
      "Flower shower at varmala",
      "Confetti & sparkler vidaai",
    ],
    food: [
      "Grand multi-cuisine buffet (300+ items possible)",
      "Live cooking stations — tandoor, chaat, dosa, pasta",
      "Traditional Kumaoni cuisine section",
      "Dessert counter — Indian & continental sweets",
      "Welcome drinks & sherbet for arriving guests",
      "Pandit & family special thali",
    ],
    bestVenues: [
      "Taj Corbett Resort grand lawn",
      "Jim Corbett Marriott ballroom",
      "Tarangi Resort riverside mandap",
      "Namah Resort garden ceremony area",
      "Aahana Corbett Wilderness lawns",
    ],
    priceRange: "₹1,00,000 – ₹5,00,000",
    duration: "4 – 8 hours (morning or evening)",
    idealGuests: "100 – 300 guests",
  },
  "reception-party": {
    title: "Reception Party",
    tagline:
      "A grand reception with great food, music, and beautiful stage setup",
    image: heroImg,
    seoDescription:
      "Wedding reception in Jim Corbett — stage setup, buffet, DJ, and entertainment. Complete reception planning by VJ Events.",
    seoKeywords:
      "wedding reception jim corbett, reception party corbett, reception decoration destination wedding, reception planner corbett",
    intro:
      "The reception is where you celebrate as a married couple with all your guests. In Jim Corbett, we set up a beautiful stage, arrange a big buffet, DJ and music, and everything your guests need. From the couple's entry to the cake cutting to the after-party — we handle it all.",
    whyCorbett: [
      "Big ballrooms and lawns that fit 200–500+ guests",
      "Veg & non-veg buffet with live food counters",
      "Good stage and lighting setup at top resorts",
      "Cool evening weather — perfect for outdoor reception",
      "Amazing photo spots with lit-up forest and stage",
      "You can add a morning brunch or safari next day",
    ],
    decorThemes: [
      {
        name: "Red & Gold",
        desc: "Classic Indian reception — red drapes, gold decorations, chandeliers, and a big couple stage.",
      },
      {
        name: "White & Elegant",
        desc: "All-white setup with roses, soft lights, and a modern clean stage — looks very classy.",
      },
      {
        name: "Garden Reception",
        desc: "Outdoor reception with fairy lights overhead, candles, and green plants on pillars.",
      },
      {
        name: "Bollywood Style",
        desc: "LED screens, mirror stage, fog effects, spotlights, and a red carpet entry for the couple.",
      },
    ],
    includes: [
      "Grand couple stage design & construction",
      "Guest seating arrangement (round table or theatre)",
      "Complete venue decor — entrance, pathway, ceiling",
      "Concert-grade sound & lighting",
      "LED wall or projection screen",
      "Guest welcome & ushering team",
      "Valet parking coordination",
      "Cake cutting setup",
      "Return gift / favour distribution",
    ],
    entertainment: [
      "Live band or orchestral performance",
      "Professional DJ & dance floor",
      "Grand couple entry with pyro & fog",
      "Photo & video booth for guests",
      "Celebrity host / emcee",
      "After-party DJ set",
    ],
    food: [
      "Multi-cuisine grand buffet (veg & non-veg)",
      "Live cooking stations — tandoor, pasta, wok, sushi",
      "Dessert bar with 20+ varieties",
      "Cocktail & mocktail counters",
      "Paan & mukhwas station at exit",
      "Midnight snack counter — chai, maggi, sandwiches",
    ],
    bestVenues: [
      "Jim Corbett Marriott grand ballroom",
      "Taj Corbett Resort banquet hall",
      "Namah Resort banquet & lawn",
      "Wood Castle Spa Resort banquet",
      "Lebua Corbett event spaces",
    ],
    priceRange: "₹1,00,000 – ₹5,00,000",
    duration: "4 – 7 hours (evening to late night)",
    idealGuests: "100 – 300 guests",
  },
};

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? eventData[slug] : undefined;

  if (!event) return <Navigate to="/" replace />;

  return (
    <Layout>
      <SEOHead
        title={event.title}
        description={event.seoDescription}
        keywords={event.seoKeywords}
      />

      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center"
        style={{
          backgroundImage: `url(${event.image})`,
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
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Wedding Event
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
              {event.title}
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-6">
              {event.tagline}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold" /> {event.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <IndianRupee className="h-4 w-4 text-gold" /> {event.priceRange}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold" /> {event.idealGuests}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {event.intro}
          </motion.p>
        </div>
      </section>

      {/* Why Jim Corbett */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Why Jim Corbett for Your {event.title}?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {event.whyCorbett.map((reason) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decor Themes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-2">
            <Palette className="h-6 w-6 text-gold" /> Decor & Theme Ideas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {event.decorThemes.map((theme, i) => (
              <motion.div
                key={theme.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-lg border border-border bg-card"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {theme.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {theme.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-gold" /> What's Included
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {event.includes.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment */}
      {event.entertainment.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-2">
              <Music className="h-6 w-6 text-gold" /> Entertainment &
              Performances
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {event.entertainment.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Food */}
      {event.food.length > 0 && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-2">
              <Utensils className="h-6 w-6 text-gold" /> Food & Drinks
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {event.food.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best Venues */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-2">
            <Camera className="h-6 w-6 text-gold" /> Best Venues for This Event
          </h2>
          <div className="flex flex-wrap gap-3">
            {event.bestVenues.map((v) => (
              <span
                key={v}
                className="px-4 py-2 bg-card rounded-full border border-border text-sm text-foreground"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Ready to Plan Your {event.title}?
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            Tell us your budget and guest count — we'll plan the perfect{" "}
            {event.title.toLowerCase()} for your wedding in Jim Corbett.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-primary font-semibold"
              >
                <Phone className="h-4 w-4 mr-2" /> Get Free Quote
              </Button>
            </Link>
            <Link to="/packages">
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10"
              >
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventDetail;
