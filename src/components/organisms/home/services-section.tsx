"use client"

import ParallaxSection from "@/components/parallax/parallax-section"
import { useRef, useEffect } from "react"

export default function ServicesSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  const services = [
    "Office design",
    "Residential design",
    "Commercial space design",
    "Renovation & Remodeling",
    "Furniture & Decor Selection",
    "Virtual Design Consultations",
  ]

  return (
    <div className="relative w-full h-[800px] overflow-hidden mt-40">
      {/* Background Video */}
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/mp4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Top Black Bar */}
      <div className="absolute top-0 left-0 w-full bg-black py-6 px-4 z-10">
        <h2 className="text-white text-3xl md:text-7xl font-normal text-center"
          style={{ fontFamily: "Ysabeau" }}>
          Our Services <span className="inline-block w-32 h-px bg-white ml-4 align-middle"></span>
        </h2>
      </div>

      {/* Services Glass Panel */}
      <div className="absolute right-24 top-4/7 transform -translate-y-1/2 z-10 w-full max-w-[320px] md:max-w-[450px] backdrop-blur-md rounded-3xl overflow-hidden">
        <div className="p-6 md:p-8 border border-white">
          <ParallaxSection type="slide-from-right" speed={1.2}>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className={`pb-4 ${index < services.length - 1 ? "border-b border-gray-300/50 pt-2 pb-6" : ""}`}
                >
                  <h3 className="text-[black] text-lg md:text-2xl font-medium"
                    style={{ fontFamily: "Ysabeau" }}>
                    {service}
                  </h3>
                </li>
              ))}
            </ul>
          </ParallaxSection>
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black h-8 z-10"></div>
    </div>
  )
}
