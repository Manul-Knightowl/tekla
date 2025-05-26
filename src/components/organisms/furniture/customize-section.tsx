"use client"

import ParallaxSection from "@/components/parallax/parallax-section"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type SectionName = "Living Room" | "Bedroom" | "Dining & Kitchen" | "Office" | "Outdoor Furniture";

export default function CustomizeSection() {
  const [hoveredSection, setHoveredSection] = useState<SectionName | null>(null)

  const image4Src: Record<SectionName, string> = {
    "Living Room": "/furnitureWebsite/costomizesSection/image4_1.png",
    Bedroom: "/furnitureWebsite/costomizesSection/image4_2.png",
    "Dining & Kitchen": "/furnitureWebsite/costomizesSection/image4_3.png",
    Office: "/furnitureWebsite/costomizesSection/image4_4.png",
    "Outdoor Furniture": "/furnitureWebsite/costomizesSection/image4_5.png",
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-4 mt-20 mx-10">
      <div className="text-center space-y-4 mb-8">
        <ParallaxSection type="fade-in-up" speed={0.9}>
          <h1
            className="text-5xl md:text-3xl font-light"
            style={{ fontFamily: "Ysabeau" }}
          >
            Customize your furniture
          </h1>
          <p
            className="text-sm md:text-xs text-gray-400 max-w-xl mx-auto mt-15 mb-20"
            style={{ fontFamily: "Montserrat" }}
          >
            Browse our collection of customizable furniture across styles and
            categories. Choose your size, materials, finish, and design details—or
            start from scratch with your own idea. From cozy sofas to elegant dining
            tables.
          </p>
        </ParallaxSection>
      </div>
      <div className="max-w-6xl w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Navigation */}
          <div className="flex flex-col space-y-12">
            <ParallaxSection type="slide-from-left" speed={1.2}>
              <nav
                className="md:space-y-9 lg:space-y-15"
                style={{ fontFamily: "Montserrat" }}
              >
                {(["Living Room", "Bedroom", "Dining & Kitchen", "Office", "Outdoor Furniture"] as SectionName[]).map(
                  (section) => (
                    <Link
                      key={section}
                      href="#"
                      className="block hover:text-gray-300 transition-colors lg:text-[20px] md:text-sm"
                      onMouseEnter={() => setHoveredSection(section)}
                      onMouseLeave={() => setHoveredSection(null)}
                    >
                      {section}
                    </Link>
                  )
                )}
              </nav>
            </ParallaxSection>
          </div>

          <div className="relative w-fit bg-black ">
            {/* Overlapping layout */}
            <ParallaxSection type="slide-from-right" speed={1.2}>
              <div className="relative z-10 flex md:space-x-3 lg:space-x-6">
                {/* 3 vertical images */}
                <Image
                  src="/furnitureWebsite/costomizesSection/image1.png"
                  alt="Pink chair"
                  width={170}
                  height={509}
                  className="object-cover lg:h-[509px] lg:w-[170px] md:h-[300px] md:w-[100px]"
                />
                <Image
                  src="/furnitureWebsite/costomizesSection/image2.png"
                  alt="Shelving unit"
                  width={170}
                  height={509}
                  className="object-cover lg:h-[509px] lg:w-[170px] md:h-[300px] md:w-[100px]"
                />
                <Image
                  src="/furnitureWebsite/costomizesSection/image3.png"
                  alt="Static image"
                  width={170}
                  height={509}
                  className="object-cover lg:h-[509px] lg:w-[170px] md:h-[300px] md:w-[100px]"
                />
              </div>
            </ParallaxSection>
            {/* Sofa and table overlapping bottom */}
            <div className="absolute md:top-40 md:right-[120px] lg:top-70 lg:right-[200px] z-20 flex items-end justify-between w-full px-4">
              <Image
                src={hoveredSection ? image4Src[hoveredSection] : "/furnitureWebsite/costomizesSection/image4.png"}
                alt="Dynamic sofa"
                width={612}
                height={408}
                className="object-contain lg:h-[408px] lg:w-[612px] md:h-[250px] md:w-[400px]"
              />
              <Image
                src="/furnitureWebsite/costomizesSection/image5.png"
                alt="Nesting tables"
                width={158}
                height={126}
                className="object-contain lg:h-[126px] lg:w-[158px] md:h-[80px] md:w-[100px] right-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
