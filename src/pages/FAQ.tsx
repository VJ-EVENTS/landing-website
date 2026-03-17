import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const FAQ = () => {
  return (
    <Layout>
      <SEOHead
        title="FAQ — Destination Wedding & Jim Corbett Questions | VJ Events"
        description="All your questions about destination weddings in Jim Corbett answered — cost, resorts, safari zones, hot air balloon, elephant safari, activities, food, and more."
        keywords="destination wedding faq corbett, jim corbett safari faq, hot air balloon corbett, elephant safari corbett, jim corbett activities, wedding cost corbett, best time wedding jim corbett, jungle safari wedding guests corbett"
      />
      <div className="pt-8">
        <FAQSection showAll={true} />
      </div>
      <CTASection />
    </Layout>
  );
};

export default FAQ;
