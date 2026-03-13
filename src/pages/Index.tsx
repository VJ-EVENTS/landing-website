import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DestinationSection from "@/components/sections/DestinationSection";
import EventsSection from "@/components/sections/EventsSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import ThingsToDoSection from "@/components/sections/ThingsToDoSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VJ Events",
  "description": "Luxury destination wedding planner and event production company specializing in weddings and resort events in Jim Corbett National Park, Uttarakhand.",
  "url": "https://vjevents.in",
  "telephone": "+916398877687",
  "email": "vjevents@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ramnagar",
    "addressRegion": "Uttarakhand",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.3950",
    "longitude": "79.1200"
  },
  "image": "https://vjevents.in/og-image.jpg",
  "priceRange": "₹₹₹",
  "openingHours": "Mo-Su 09:00-21:00",
  "sameAs": [
    "https://www.instagram.com/vj_events__"
  ],
  "serviceType": ["Destination Wedding Planning", "Wedding Decor", "Event Production"]
};

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>VJ Events | Luxury Destination Weddings in Jim Corbett, Uttarakhand</title>
        <meta
          name="description"
          content="VJ Events is a luxury destination wedding planner in Jim Corbett. We specialize in wedding decor, mandap design, event production, cocktail bars, and complete wedding planning in Corbett resorts."
        />
        <meta
          name="keywords"
          content="destination wedding corbett, jim corbett wedding planner, wedding decorator corbett, destination wedding ramnagar, luxury wedding corbett, resort wedding planner uttarakhand, jim corbett event planner, wedding production company corbett"
        />
        <meta property="og:title" content="VJ Events | Luxury Destination Weddings in Jim Corbett" />
        <meta property="og:description" content="Create unforgettable wedding experiences surrounded by nature and luxury resorts in Jim Corbett with VJ Events." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://vjevents.in" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DestinationSection />
      <EventsSection />
      <GalleryPreview />
      <ThingsToDoSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
