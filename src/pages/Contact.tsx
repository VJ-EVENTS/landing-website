import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { resolve } from "path";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Us"
        description="Get in touch with VJ Events for destination wedding planning in Jim Corbett. Call +91 6398877687 or email vjevents@gmail.com for a free consultation."
        keywords="contact vj events, wedding planner contact corbett, book wedding consultation"
      />

      <section className="relative py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Contact VJ Events
            </h1>
            <p className="text-primary-foreground/70 text-lg">
              Ready to plan your dream wedding? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                Let's Plan Your Wedding
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a clear vision or need inspiration, our team is
                here to guide you through every step of planning your
                destination wedding in Jim Corbett.
              </p>

              <div className="space-y-6 mb-10">
                <a
                  href="tel:+916398877687"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground group-hover:text-gold transition-colors">
                      +91 6398877687
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:vjevents@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground group-hover:text-gold transition-colors">
                      vjevents@gmail.com
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">
                      Jim Corbett National Park, Ramnagar, Nainital, Uttarakhand
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/vj_events__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Instagram className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-semibold text-foreground group-hover:text-gold transition-colors">
                      @vj_events__
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-lg border border-border p-8 space-y-5"
              >
                <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                  Book a Free Consultation
                </h3>
                {[
                  {
                    name: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Enter your name",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                  {
                    name: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "+91 XXXXXXXXXX",
                  },
                  {
                    name: "date",
                    label: "Tentative Wedding Date",
                    type: "date",
                    placeholder: "",
                  },
                  {
                    name: "guests",
                    label: "Expected Guests",
                    type: "number",
                    placeholder: "e.g., 200",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                      value={(formData as any)[field.name]}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.name]: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">
                    Tell Us About Your Wedding Vision
                  </label>
                  <textarea
                    placeholder="Describe your dream wedding..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-gold hover:bg-gold-light text-primary font-semibold py-6 disabled:opacity-70"
                >
                  <Send className="h-4 w-4 mr-2" />
                  {status === "submitting" ? "Sending..." : "Send Enquiry"}
                </Button>
                {status === "success" && (
                  <p className="text-sm text-green-600">
                    Thank you! Your enquiry has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
