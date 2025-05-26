import ParallaxSection from "@/components/parallax/parallax-section"
import Image from "next/image"

export default function CraftsmanshipSection() {
  return (
    <section className="w-full">
      {/* Custom column widths: 3fr for image, 2fr for content */}
      <div className="grid md:grid-cols-[2.5fr_2fr]">
        {/* Image Section */}
        <div className="relative h-[300px] md:h-[257px] lg:h-[330px] xl:h-[427px]">
          <Image
            src="/furnitureWebsite/craftsmanshipStory.png"
            alt="Furniture showroom with wooden tables and chairs"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
        </div>

        {/* Content Section */}
<div className="bg-[#0D2821] text-white p-8  flex items-center">
  <div className="max-w-lg text-start ">
    <ParallaxSection type="slide-from-right" speed={1.2}>
    <h2
      className="text-3xl md:text-2xl lg:text-3xl  xl:text-4xl font-light mb-6"
      style={{ fontFamily: "Ysabeau" }}
    >
      Our Craftsmanship Story
    </h2>
    <p
      className="text-sm md:text-[10px] lg:text-[12px] xl:text-sm"
      style={{ fontFamily: "Montserrat" }}
    >
      Born from a love for design and detail, [Your Shop Name] blends traditional craftsmanship with modern
      aesthetics. Every piece we create is made with premium materials, skilled hands, and a deep respect for
      your vision. Our goal? To build furniture that lasts generations.
    </p>
    </ParallaxSection>
  </div>
</div>

      </div>
    </section>
  )
}
