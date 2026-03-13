import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/SEOHead";
import ThingsToDoSection from "@/components/sections/ThingsToDoSection";
import CTASection from "@/components/sections/CTASection";

const ThingsToDo = () => {
  return (
    <Layout>
      <SEOHead
        title="Things to Do in Jim Corbett"
        description="Explore activities for wedding guests in Jim Corbett - jungle safari, Garjiya Devi Temple, Kosi River, nature walks, and luxury resort experiences."
        keywords="things to do in corbett, jim corbett activities, corbett tourist attractions, wedding guest activities"
      />
      <div className="pt-8">
        <ThingsToDoSection />
      </div>
      <CTASection />
    </Layout>
  );
};

export default ThingsToDo;
