import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Palette,
  UtensilsCrossed,
  Camera,
  Music,
  Sparkles,
  Gem,
  Drum,
  Phone,
  Heart,
  Award,
  Users,
  Star,
  ChevronDown,
  MessageCircle,
  Check,
} from "lucide-react";

const stats = [
  { icon: Heart, value: "50+", label: "Weddings" },
  { icon: Award, value: "5+", label: "Years" },
  { icon: Users, value: "100+", label: "Families" },
  { icon: Star, value: "4.9", label: "Rating" },
];

const timeline = [
  {
    num: "01",
    title: "Pre-Wedding Photoshoot",
    when: "Before the Wedding",
    desc: "Couple photos at the river, forest trails, bridges, and resort gardens of Jim Corbett.",
  },
  {
    num: "02",
    title: "Ring Ceremony",
    when: "Before the Wedding",
    desc: "A small, close-family function to celebrate the engagement at the resort.",
  },
  {
    num: "03",
    title: "Haldi Ceremony",
    when: "Day 1 — Morning",
    desc: "Fun outdoor haldi on the lawn with marigold decor, dhol, music, and water play.",
  },
  {
    num: "04",
    title: "Mehendi Ceremony",
    when: "Day 1 — Afternoon",
    desc: "Relaxed mehendi session in the garden with live artists, chai, snacks, and music.",
  },
  {
    num: "05",
    title: "Sangeet Night",
    when: "Day 2 — Evening",
    desc: "Dance, DJ, Bollywood music, choreographed performances, and a lit-up stage under the stars.",
  },
  {
    num: "06",
    title: "Bonfire & Cocktail",
    when: "Day 2 — Night",
    desc: "Drinks, bonfire by the forest, bar counter, and a relaxed evening for all guests.",
  },
  {
    num: "07",
    title: "Wedding Day",
    when: "Day 3 — The Main Event",
    desc: "Baraat, mandap pheras, varmala, and all wedding rituals — beautifully set up.",
  },
  {
    num: "08",
    title: "Reception Night",
    when: "Day 3 — Grand Finale",
    desc: "Couple stage, grand entry, buffet dinner, DJ, cake cutting, and celebrations.",
  },
];

const services = [
  {
    icon: MapPin,
    title: "Venue Selection & Booking",
    desc: "We find the right resort, negotiate group rates, and book it for your dates.",
  },
  {
    icon: Palette,
    title: "Decor & Design",
    desc: "Flowers, drapes, mandap, stage, entrance gate — designed and set up by our team.",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering & Menu",
    desc: "Veg, non-veg, buffet, live counters — full menu planned with the caterer.",
  },
  {
    icon: Camera,
    title: "Photo & Video",
    desc: "Professional photographers and videographers for every function — candid, drone, cinematic.",
  },
  {
    icon: Music,
    title: "DJ & Entertainment",
    desc: "DJ, live music, folk dancers, games, and choreography for sangeet and cocktail.",
  },
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    desc: "Professional makeup artists for the bride and family for every function.",
  },
  {
    icon: Gem,
    title: "Jewellery & Accessories",
    desc: "We connect you with trusted jewellery vendors for bridal and family sets.",
  },
  {
    icon: Drum,
    title: "Band, Ghoriwala & Baggi",
    desc: "Dhol, band baaja, decorated horse, and vintage baggi for the baraat.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="How We Plan Your Wedding — VJ Events Roadmap"
        description="See how VJ Events plans a destination wedding in Jim Corbett step by step — from pre-wedding shoot to reception. Visual roadmap of our complete wedding planning process."
        keywords="how to plan destination wedding corbett, wedding planning steps, wedding roadmap jim corbett, vj events wedding process"
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
              Your Wedding Roadmap
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              How We Plan Your Wedding
            </h1>
            <p className="text-primary-foreground/70 text-xl mb-8 max-w-2xl mx-auto">
              Every wedding is different. We sit with you, understand your
              family, budget, and vision — then create a plan that's made just
              for you.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-forest-light/30 border border-forest-light/20 rounded-xl py-4 px-3 text-center"
                >
                  <s.icon className="h-6 w-6 text-gold mx-auto mb-1.5" />
                  <p className="font-display font-bold text-2xl text-primary-foreground leading-none">
                    {s.value}
                  </p>
                  <p className="text-sm text-primary-foreground/50 mt-1">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ChevronDown className="h-9 w-9 text-gold mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════ CUSTOMIZATION BANNER ══════ */}
      <div className="bg-gold">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-primary font-semibold text-base flex items-center justify-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Every plan is 100% customized — we build it around YOUR budget,
            guest count, and preferences.
          </p>
        </div>
      </div>

      {/* ══════ WEDDING TIMELINE ══════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-3">
              Wedding Journey
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Your Wedding — Step by Step
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A typical destination wedding in Jim Corbett follows this flow. We
              customize the schedule based on your family's needs.
            </p>
          </motion.div>

          {/* Timeline — alternating left-right on desktop */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 md:-translate-x-px" />

            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06 }}
                  className={`relative flex items-start gap-5 md:gap-0 mb-6 last:mb-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="h-12 w-12 rounded-full bg-gold flex items-center justify-center shadow-lg ring-4 ring-background">
                      <span className="font-display font-bold text-sm text-primary">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  {/* Mobile spacer */}
                  <div className="w-12 shrink-0 md:hidden" />

                  {/* Card */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300">
                      <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded mb-3">
                        {item.when}
                      </span>
                      <h3 className="font-display font-bold text-xl text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Desktop spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ SERVICES WE HANDLE ══════ */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-3">
              What We Handle
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Everything Under One Roof
            </h2>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
              You don't need 10 different vendors. Just tell us what you want
              and we'll manage all of it — from venue to vidaai.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-forest-light/15 border border-forest-light/25 rounded-2xl p-6 hover:border-gold/40 hover:bg-forest-light/25 transition-all duration-300 group"
              >
                <div className="h-14 w-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  <svc.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
                  {svc.title}
                </h3>
                <p className="text-base text-primary-foreground/50 leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ HOW TO GET STARTED ══════ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              4 Steps to Your Dream Wedding
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  title: "You Call Us",
                  desc: "Share your budget, preferred dates, and how many guests you're expecting.",
                  icon: Phone,
                },
                {
                  num: "02",
                  title: "We Create a Plan",
                  desc: "We pick the best resort, plan every function, and share a detailed proposal.",
                  icon: Check,
                },
                {
                  num: "03",
                  title: "You Approve",
                  desc: "Review the plan, suggest changes, finalize everything together.",
                  icon: MessageCircle,
                },
                {
                  num: "04",
                  title: "We Execute",
                  desc: "Our team sets up everything on the ground. You and your family just enjoy.",
                  icon: Star,
                },
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-gold/30 transition-all duration-300"
                >
                  {/* Connector arrow on desktop */}
                  {i < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-6 w-6 bg-background rounded-full border border-border items-center justify-center">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        className="text-gold"
                      >
                        <path
                          d="M3 1l4 4-4 4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="h-16 w-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 shadow-md">
                    <span className="font-display font-bold text-primary text-xl">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ AT A GLANCE ══════ */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-3">
              At a Glance
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
              Your Complete Wedding — One View
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 bg-forest-light/10 rounded-3xl border border-forest-light/20 overflow-hidden">
              {/* Left: Events */}
              <div className="p-8 md:p-10">
                <h3 className="font-display font-bold text-2xl text-gold mb-8 text-center">
                  Wedding Events
                </h3>
                <div className="space-y-3">
                  {[
                    { title: "Pre-Wedding Shoot", day: "Before" },
                    { title: "Ring Ceremony", day: "Before" },
                    { title: "Haldi Ceremony", day: "Day 1" },
                    { title: "Mehendi Ceremony", day: "Day 1" },
                    { title: "Sangeet Night", day: "Day 2" },
                    { title: "Cocktail & Bonfire", day: "Day 2" },
                    { title: "Wedding Day", day: "Day 3" },
                    { title: "Reception Night", day: "Day 3" },
                  ].map((ev, i) => (
                    <motion.div
                      key={ev.title}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-4 bg-primary/50 backdrop-blur rounded-xl px-5 py-4 border border-forest-light/15 hover:border-gold/30 transition-colors"
                    >
                      <div className="h-9 w-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-base font-semibold text-primary-foreground flex-1">
                        {ev.title}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-gold/80 bg-gold/10 px-3 py-1 rounded-md">
                        {ev.day}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Center Hub */}
              <div className="flex items-center justify-center py-6 md:py-0 md:px-2">
                <div className="flex md:flex-col items-center gap-3">
                  <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent to-gold/30" />
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring" }}
                    className="h-22 w-22 md:h-28 md:w-28 rounded-full bg-gradient-to-br from-gold to-gold-light shadow-2xl flex flex-col items-center justify-center shrink-0 ring-4 ring-gold/20"
                  >
                    <span className="font-display font-bold text-primary text-xl leading-none">
                      VJ
                    </span>
                    <span className="font-display font-bold text-primary text-xl leading-none">
                      Events
                    </span>
                    <span className="text-[10px] text-primary/60 font-medium mt-0.5 uppercase tracking-wider">
                      Plans All
                    </span>
                  </motion.div>
                  <div className="hidden md:block w-px h-12 bg-gradient-to-b from-gold/30 to-transparent" />
                </div>
              </div>

              {/* Right: Services */}
              <div className="p-8 md:p-10">
                <h3 className="font-display font-bold text-2xl text-gold mb-8 text-center">
                  We Handle
                </h3>
                <div className="space-y-3">
                  {services.map((svc, i) => (
                    <motion.div
                      key={svc.title}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center gap-4 bg-primary/50 backdrop-blur rounded-xl px-5 py-4 border border-forest-light/15 hover:border-gold/30 transition-colors"
                    >
                      <div className="h-9 w-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center shrink-0">
                        <svc.icon className="h-5 w-5 text-gold" />
                      </div>
                      <span className="text-base font-semibold text-primary-foreground">
                        {svc.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customization note */}
            <div className="mt-6 bg-gold/10 border border-gold/20 rounded-2xl px-8 py-6 text-center">
              <p className="text-primary-foreground text-base">
                <MessageCircle className="h-5 w-5 text-gold inline mr-2 -mt-0.5" />
                <strong className="text-gold">This is a sample plan.</strong>{" "}
                Your actual wedding will be fully customized after a discussion
                with our team about your requirements, budget, and preferences.
              </p>
            </div>
          </motion.div>
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
              Let's Build Your Custom Plan
            </h2>
            <p className="text-muted-foreground mb-8 text-xl">
              Tell us your budget and guest count. We'll discuss your
              preferences and create a wedding plan made just for your family —
              no fixed templates, no surprises.
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

export default About;
