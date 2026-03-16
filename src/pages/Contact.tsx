import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SERVICES_OPTIONS = [
  "Venue Selection & Booking",
  "Decor & Design",
  "Catering & Menu Planning",
  "Photography & Videography",
  "Entertainment & Cultural Program",
  "Bridal Makeup",
  "Jewellery & Accessories",
  "Band, Ghoriwala, Baggi",
];

const GUEST_OPTIONS = [
  "Below 50",
  "50 – 100",
  "100 – 200",
  "200 – 350",
  "350 – 500",
  "500+",
];

const BUDGET_OPTIONS = [
  "Under ₹5 Lakh",
  "₹5 – ₹10 Lakh",
  "₹10 – ₹15 Lakh",
  "₹15 – ₹25 Lakh",
  "₹25 – ₹50 Lakh",
  "₹50 Lakh+",
];

const EVENT_OPTIONS = [
  "Full Wedding Package",
  "Wedding Ceremony Only",
  "Reception Only",
  "Sangeet + Mehendi + Haldi",
  "Engagement / Ring Ceremony",
  "Anniversary Celebration",
  "Corporate Event",
  "Not sure yet",
];

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-gold/50 transition-colors";
const labelCls = "block text-sm font-semibold text-foreground mb-1.5";

/** Single-select tile row */
const TileSelect = ({
  options,
  value,
  onChange,
  cols = 3,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  cols?: number;
}) => (
  <div
    className={`grid gap-2`}
    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
  >
    {options.map((opt) => {
      const active = value === opt;
      return (
        <button
          type="button"
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-sm px-3 py-2.5 rounded-lg border text-left transition-all duration-200 ${
            active
              ? "border-gold bg-gold/10 text-foreground font-semibold"
              : "border-border bg-background text-muted-foreground hover:border-gold/40"
          }`}
        >
          <span
            className={`mr-1.5 ${active ? "text-gold" : "text-muted-foreground/30"}`}
          >
            {active ? "●" : "○"}
          </span>
          {opt}
        </button>
      );
    })}
  </div>
);

/** Multi-select tile row */
const TileMulti = ({
  options,
  values,
  onToggle,
  cols = 2,
}: {
  options: string[];
  values: string[];
  onToggle: (v: string) => void;
  cols?: number;
}) => (
  <div
    className="grid gap-2"
    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
  >
    {options.map((opt) => {
      const active = values.includes(opt);
      return (
        <button
          type="button"
          key={opt}
          onClick={() => onToggle(opt)}
          className={`text-sm px-3 py-2.5 rounded-lg border text-left transition-all duration-200 ${
            active
              ? "border-gold bg-gold/10 text-foreground font-semibold"
              : "border-border bg-background text-muted-foreground hover:border-gold/40"
          }`}
        >
          <span
            className={`mr-1.5 ${active ? "text-gold" : "text-muted-foreground/30"}`}
          >
            {active ? "✓" : "○"}
          </span>
          {opt}
        </button>
      );
    })}
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guestRange: "",
    budget: "",
    weddingType: "",
    services: [] as string[],
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const setSingle = (field: string) => (value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const toggleService = (service: string) =>
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));

  const setField =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        guestRange: "",
        budget: "",
        weddingType: "",
        services: [],
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Us — Book Free Consultation | VJ Events Jim Corbett"
        description="Contact VJ Events for your destination wedding in Jim Corbett. Tell us your budget, guest count and requirements — we'll put together a custom plan for you."
        keywords="contact wedding planner corbett, book wedding jim corbett, wedding enquiry corbett, vj events phone number"
      />

      {/* ══════ HERO ══════ */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gold-light blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-base tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Contact VJ Events
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-2xl mx-auto">
              Planning a wedding in Jim Corbett? Tell us a bit about yourself
              and we'll get back to you with a custom plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════ CONTACT SECTION ══════ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* ── Left: Contact info ── */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Let's Plan Your Wedding
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Whether you know exactly what you want or need help figuring it
                out — just call or fill the form. We'll guide you through
                everything step by step.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+916398877687"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Call / WhatsApp
                    </p>
                    <p className="font-bold text-lg text-foreground group-hover:text-gold transition-colors">
                      +91 6398877687
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:vjevents@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-bold text-lg text-foreground group-hover:text-gold transition-colors">
                      vjevents@gmail.com
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-bold text-base text-foreground">
                      Jim Corbett, Ramnagar, Uttarakhand
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/vj_events__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Instagram className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-bold text-lg text-foreground group-hover:text-gold transition-colors">
                      @vj_events__
                    </p>
                  </div>
                </a>
              </div>

              {/* Quick facts */}
              <div className="mt-10 p-6 rounded-xl bg-muted/50 border border-border space-y-3">
                <p className="font-semibold text-foreground mb-4">
                  Why fill the form?
                </p>
                {[
                  "We respond within a few hours",
                  "Free consultation — no commitment needed",
                  "We'll tailor a package to your exact budget",
                  "10+ years planning weddings in Jim Corbett",
                ].map((pt) => (
                  <div
                    key={pt}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Form ── */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {status === "success" ? (
                <div className="bg-card rounded-2xl border border-border p-12 text-center">
                  <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Enquiry Received!
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Thank you! We'll review your details and get back to you
                    within a few hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-gold font-semibold underline underline-offset-4 hover:text-gold-light transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-8 space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                      Book a Free Consultation
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Fill in what you know — we'll figure out the rest
                      together.
                    </p>
                  </div>

                  {/* Row 1: Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className={inputCls}
                        value={formData.name}
                        onChange={setField("name")}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXXXXXXX"
                        className={inputCls}
                        value={formData.phone}
                        onChange={setField("phone")}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Email + Wedding Date */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelCls}>Email Address *</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className={inputCls}
                        value={formData.email}
                        onChange={setField("email")}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelCls}>Tentative Wedding Date</label>
                      <input
                        type="date"
                        className={inputCls}
                        value={formData.date}
                        onChange={setField("date")}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                  </div>

                  {/* Guest Count */}
                  <div>
                    <label className={labelCls}>Expected Guest Count *</label>
                    <TileSelect
                      options={GUEST_OPTIONS}
                      value={formData.guestRange}
                      onChange={setSingle("guestRange")}
                      cols={3}
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label className={labelCls}>Approximate Budget *</label>
                    <TileSelect
                      options={BUDGET_OPTIONS}
                      value={formData.budget}
                      onChange={setSingle("budget")}
                      cols={3}
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className={labelCls}>Type of Event *</label>
                    <TileSelect
                      options={EVENT_OPTIONS}
                      value={formData.weddingType}
                      onChange={setSingle("weddingType")}
                      cols={2}
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <label className={labelCls}>Services You Need</label>
                    <p className="text-xs text-muted-foreground mb-3">
                      Select all that apply
                    </p>
                    <TileMulti
                      options={SERVICES_OPTIONS}
                      values={formData.services}
                      onToggle={toggleService}
                      cols={2}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelCls}>
                      Anything Else You'd Like Us to Know
                    </label>
                    <textarea
                      placeholder="Theme ideas, special requirements, or any questions..."
                      rows={4}
                      className={`${inputCls} resize-none`}
                      value={formData.message}
                      onChange={setField("message")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-gold hover:bg-gold-light text-primary font-bold text-lg py-7 disabled:opacity-70"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {status === "submitting"
                      ? "Sending..."
                      : "Send Enquiry — It's Free"}
                  </Button>

                  {status === "error" && (
                    <p className="text-sm text-red-500 text-center">
                      Something went wrong. Please try again or call us
                      directly.
                    </p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
