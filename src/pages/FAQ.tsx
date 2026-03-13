import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const FAQ = () => {
  return (
    <Layout>
      <SEOHead
        title="FAQ - Destination Wedding Questions"
        description="Frequently asked questions about destination weddings in Jim Corbett. Cost, best time, resorts, decor services, and more answered by VJ Events."
        keywords="destination wedding faq corbett, wedding cost jim corbett, best time wedding corbett"
      />
      <div className="pt-8">
        <FAQSection />
      </div>
      <CTASection />
    </Layout>
  );
};

export default FAQ;
