import ParallaxSection from "@/components/parallax/parallax-section"
import Image from "next/image"

export default function MaterialsAndFinishes() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl h-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-60 mb-40">
        {/* Left Panel */}
        <div className="bg-[#183932] px-8 md:px-12 flex flex-col justify-center py-40">
          <ParallaxSection type="slide-from-left" speed={1.2}>
          <h1 className="text-3xl md:text-4xl text-white font-light mb-22 text-center">Materials & Finishes</h1>

          <p className="text-white/90 text-sm md:text-base text-center leading-relaxed"
          style={{ fontFamily: "Montserrat" }}>
            Browse our collection of customizable furniture across styles and categories. Choose your size, materials,
            finish, or design options, or start from scratch with your own idea. From coffee tables to dining tables, we
            bring your furniture dreams to life.
          </p>
          </ParallaxSection>
        </div>

        {/* Right Panel - Grid of Options */}
        <div className="grid grid-cols-2 gap-4">
          {/* Solid Wood Options */}
          <div className="flex flex-col items-center justify-center text-center p-4">
            <ParallaxSection type="slide-from-right" speed={1.2}>
            <div className="mb-4">
              <Image
                src="/furnitureWebsite/MaterialsAndFinishes/solidWoodOption.png"
                alt="Solid Wood Options"
                width={32}
                height={32}
                className="h-8 w-8 text-[#d4af37]"
              />
            </div>
            <h3 className="text-white font-light text-sm md:text-base">Solid Wood</h3>
            <p className="text-white font-light text-sm md:text-base">Options</p>
            </ParallaxSection>
          </div>

          {/* Upholstery & Fabrics */}
          <div className="flex flex-col items-center justify-center text-center p-4">
            <ParallaxSection type="slide-from-right" speed={1.2}>
            <div className="mb-4">
              <Image
                src="/furnitureWebsite/MaterialsAndFinishes/UpholsteryAndFabrics.png"
                alt="Upholstery & Fabrics"
                width={32}
                height={32}
                className="h-8 w-8 text-[#d4af37]"
              />
            </div>
            <h3 className="text-white font-light text-sm md:text-base">Upholstery &</h3>
            <p className="text-white font-light text-sm md:text-base">Fabrics</p>
            </ParallaxSection>
          </div>

          {/* Color Stains & Paints */}
          <div className="flex flex-col items-center justify-center text-center p-4">
            <ParallaxSection type="slide-from-right" speed={1.2}>
            <div className="mb-4">
              <Image
                src="/furnitureWebsite/MaterialsAndFinishes/ColorStainsAndPaints.png"
                alt="Color Stains & Paints"
                width={32}
                height={32}
                className="h-8 w-8 text-[#d4af37]"
              />
            </div>
            <h3 className="text-white font-light text-sm md:text-base">Color Stains &</h3>
            <p className="text-white font-light text-sm md:text-base">Paints</p>
            </ParallaxSection>
          </div>

          {/* Hardware & Accessories */}
          <div className="flex flex-col items-center justify-center text-center p-4">
            <ParallaxSection type="slide-from-right" speed={1.2}>
            <div className="mb-4">
              <Image
                src="/furnitureWebsite/MaterialsAndFinishes/HardwareAndAccessories.png"
                alt="Hardware & Accessories"
                width={32}
                height={32}
                className="h-8 w-8 text-[#d4af37]"
              />
            </div>
            <h3 className="text-white font-light text-sm md:text-base">Hardware &</h3>
            <p className="text-white font-light text-sm md:text-base">Accessories</p>
            </ParallaxSection>
          </div>
          
        </div>
      </div>
    </div>
  )
}
