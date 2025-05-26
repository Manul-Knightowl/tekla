import LandingPage from "@/components/organisms/furniture/landingPage"
import CraftsmanshipSection from "@/components/organisms/furniture/craftsmanshipStory"
import CustomizeSection from "@/components/organisms/furniture/customize-section"
import CustomDesignProcess from "@/components/organisms/furniture/customDesignProcess"
import ClientCreations from "@/components/organisms/furniture/clientCreations"
import MaterialsAndFinishes from "@/components/organisms/furniture/materialsAndFinishes"
import PricingSection from "@/components/organisms/furniture/pricing-section"
import TestimonialCarousel from "@/components/organisms/furniture/furniture-testimonial"
import ParallaxProvider from "@/components/parallax/parallax-provider"
import ParallaxSection from "@/components/parallax/parallax-section"
import Footer from "@/components/molecules/footer"

export default function Furniture() {
  return (
    <ParallaxProvider>
      <ParallaxSection type="fade-in-up" speed={1.2}>
        <LandingPage />
      </ParallaxSection>

      <ParallaxSection type="reveal-mask" speed={1}>
        <CraftsmanshipSection />
      </ParallaxSection>


        <CustomizeSection />

      <ParallaxSection type="rotate-in" speed={0.7}>
        <CustomDesignProcess />
      </ParallaxSection>

      <ParallaxSection type="fade-in-up" speed={1.3}>
        <ClientCreations />
      </ParallaxSection>

      <ParallaxSection type="zoom-out" speed={0.8}>
        <MaterialsAndFinishes />
      </ParallaxSection>

      <ParallaxSection type="rotate-in" speed={1.1}>
        <PricingSection />
      </ParallaxSection>

      <ParallaxSection type="scale-in" speed={0.8}>
        <TestimonialCarousel />
      </ParallaxSection>

      <Footer />
    </ParallaxProvider>
  )
}
