import ParallaxSection from "@/components/parallax/parallax-section"
import Image from "next/image"

export default function PricingSection() {
  return (
    <div className="relative w-full min-h-[720px] py-30 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src="/pricing-bg.png" alt="Fabric background" fill priority className="object-cover" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 text-white">
        <div className="flex flex-col items-center">
          <ParallaxSection type="scale-in" speed={0.8}>
          <h2 className="text-4xl md:text-5xl font-light mb-26 text-center">
            Pricing & <span className="italic">Quotes</span>
          </h2>
          </ParallaxSection>
          
          <ParallaxSection type="scale-in" speed={0.8}>
          <p className="text-center max-w-xl mb-36 text-sm md:text-base">
            Our pricing is based on your selected materials, dimensions, and design complexity. No surprises, just fair
            rates for quality craftsmanship. Fill out a quick form to get a personalized quote in 24 hours.
          </p>
          </ParallaxSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-36">
            <div className="text-center">
              <ParallaxSection type="scale-in" speed={0.8}>
              <h3 className="text-xl font-light">Affordable custom furniture</h3>
              </ParallaxSection>
            </div>
            <div className="text-center">
              <ParallaxSection type="scale-in" speed={0.8}>
              <h3 className="text-xl font-light">Transparent pricing</h3>
              </ParallaxSection>
            </div>
            <div className="text-center">
              <ParallaxSection type="scale-in" speed={0.8}>
              <h3 className="text-xl font-light">Get a free quote</h3>
              </ParallaxSection>
            </div>
          </div>

          <button className="flex items-center justify-between gap-4 pl-4 pr-1 -py-1 py-1 border-3 border-yellow-400 rounded-full hover:bg-yellow-400/10 transition-colors">
            <span className="mr-8 text-sm font-medium"
            style={{ fontFamily: "Montserrat" }}>CONTACT US NOW</span>
            <div className="rounded-full bg-white flex items-center justify-center">
              <Image src="/arrow.png" alt="Arrow Right" width={40} height={40} />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
