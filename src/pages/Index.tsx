import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ContributionLevels from "@/components/ContributionLevels";
import SocialImpact from "@/components/SocialImpact";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <ContributionLevels />
      <SocialImpact />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
