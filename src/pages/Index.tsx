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
  name: "VJ Events",
  description:
    "Destination wedding planner in Jim Corbett, Ramnagar. We plan affordable weddings with decor, DJ, catering, and full guest management.",
  url: "https://vjevents.in",
  telephone: "+916398877687",
  email: "vjevents@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ramnagar",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.3950",
    longitude: "79.1200",
  },
  image: "https://vjevents.in/og-image.jpg",
  priceRange: "₹₹₹",
  openingHours: "Mo-Su 09:00-21:00",
  sameAs: ["https://www.instagram.com/vj_events__"],
  serviceType: [
    "Destination Wedding Planning",
    "Wedding Decor",
    "Event Production",
  ],
};

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>
          VJ Events | Destination Wedding Planner in Jim Corbett, Uttarakhand
        </title>
        <meta
          name="description"
          content="VJ Events — destination wedding planner in Jim Corbett. We handle decor, mandap, DJ, food, guest management & everything for your wedding. Packages from ₹2 Lakh."
        />
        <meta
          name="keywords"
          content="destination wedding jim corbett, wedding planner corbett, wedding decorator ramnagar, affordable wedding corbett, resort wedding uttarakhand, corbett wedding booking, jim corbett wedding cost, wedding in corbett"
        />
        <meta
          property="og:title"
          content="VJ Events | Destination Wedding Planner in Jim Corbett"
        />
        <meta
          property="og:description"
          content="Plan your destination wedding in Jim Corbett with VJ Events. Beautiful resorts, great decor, and affordable packages starting from ₹2 Lakh."
        />
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
