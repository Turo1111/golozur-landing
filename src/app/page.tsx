import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ServicesBlueSection from "@/components/landing/ServicesBlueSection";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import EmergencyBlock from "@/components/landing/EmergencyBlock";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQAccordion from "@/components/landing/FAQAccordion";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import FloatingQuoteButton from "@/components/landing/FloatingQuoteButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <ServicesBlueSection />
        {/* <SolutionSection /> */}
        <TestimonialsCarousel />
        <WhyChooseUs />
        <EmergencyBlock />
        <HowItWorks />
        <FAQAccordion />
        <FinalCTA />
        <Footer />
      </main>
      <FloatingQuoteButton />
    </>
  );
}
