import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const FAQ = () => {
  return (
    <Layout>
      <SEOHead
        title="FAQ - Destination Wedding Questions"
        description="Common questions about destination weddings in Jim Corbett — cost, best time, resorts, food, and more. Answered by VJ Events."
        keywords="destination wedding questions corbett, how much wedding cost corbett, best time for wedding jim corbett, wedding faq corbett"
      />
      <div className="pt-8">
        <FAQSection />
      </div>
      <CTASection />
    </Layout>
  );
};

export default FAQ;
