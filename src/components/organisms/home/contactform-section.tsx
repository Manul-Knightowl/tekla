"use client"

import { useEffect, useRef, useState } from "react"
import ParallaxSection from "@/components/parallax/parallax-section"
import Image from "next/image"

// Linear interpolation function for smooth transitions
function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

export default function ContactForm() {
  const sofaRef = useRef<HTMLImageElement>(null)
  const stoolRef = useRef<HTMLImageElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Current animation values
  const [sofaCurrentX, setSofaCurrentX] = useState(100)
  const [stoolCurrentX, setStoolCurrentX] = useState(120)
  const [currentOpacity, setCurrentOpacity] = useState(0)

  // Target animation values (where we want to animate to)
  const [sofaTargetX, setSofaTargetX] = useState(100)
  const [stoolTargetX, setStoolTargetX] = useState(120)
  const [targetOpacity, setTargetOpacity] = useState(0)

  // Animation frame reference
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    // Calculate target positions based on scroll
    const calculateTargets = () => {
      if (!sectionRef.current) return

      // Get the section's position relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far through the section we've scrolled (0 to 1)
      // Start animation when the section enters the viewport and end when it's 70% through
      const scrollProgress = Math.max(0, Math.min(1, 1 - rect.top / (windowHeight * 0.7)))

      // Set target positions
      setSofaTargetX(100 - scrollProgress * 100)
      setStoolTargetX(120 - scrollProgress * 120)
      setTargetOpacity(scrollProgress)
    }

    // Smooth animation loop
    const animate = () => {
      // Smoothing factor - lower = smoother but slower (0.05-0.15 is a good range)
      const smoothFactor = 0.08

      // Calculate new current values with lerp
      const newSofaX = lerp(sofaCurrentX, sofaTargetX, smoothFactor)
      const newStoolX = lerp(stoolCurrentX, stoolTargetX, smoothFactor)
      const newOpacity = lerp(currentOpacity, targetOpacity, smoothFactor)

      // Update state
      setSofaCurrentX(newSofaX)
      setStoolCurrentX(newStoolX)
      setCurrentOpacity(newOpacity)

      // Apply to DOM elements
      if (sofaRef.current) {
        sofaRef.current.style.transform = `translateX(${newSofaX}%)`
        sofaRef.current.style.opacity = `${newOpacity}`
      }

      if (stoolRef.current) {
        stoolRef.current.style.transform = `translateX(${newStoolX}%)`
        stoolRef.current.style.opacity = `${newOpacity}`
      }

      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation loop
    calculateTargets()
    animationRef.current = requestAnimationFrame(animate)

    // Add scroll event listener
    window.addEventListener("scroll", calculateTargets, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener("scroll", calculateTargets)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [sofaCurrentX, stoolCurrentX, currentOpacity, sofaTargetX, stoolTargetX, targetOpacity])

  return (
    <main className="min-h-screen">
      <section ref={sectionRef} className="relative w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#0a2920]">
          {/* Left side - Form */}
          <ParallaxSection type="reveal-mask" speed={1.5}>
            <div className="p-8 md:p-12 lg:p-16 mt-12 mb-20">
              <form className="space-y-8 max-w-md">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white text-sm" style={{ fontFamily: "Montserrat" }}>
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-white pb-2 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-white text-sm" style={{ fontFamily: "Montserrat" }}>
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-white pb-2 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-white text-sm" style={{ fontFamily: "Montserrat" }}>
                    Mobile Phone:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b border-white pb-2 text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-white text-sm" style={{ fontFamily: "Montserrat" }}>
                    Message:
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-transparent border-b border-white pb-2 text-white focus:outline-none focus:border-white resize-none"
                  />
                </div>
              </form>

              <div className="ml-26 mt-18">
                <button
                  type="submit"
                  className="flex items-center justify-between gap-4 pl-4 pr-1 -py-1 bg-[#e9c85d] text-black font-medium py-1 px-8 rounded-full hover:bg-[#d4b64a] transition-colors"
                  style={{ fontFamily: "Montserrat" }}
                >
                  SEND REQUEST
                  <Image src="/arrow.png" alt="Arrow Right" width={40} height={40} />
                </button>
              </div>
            </div>
          </ParallaxSection>

          <div className="relative w-full min-h-[600px]">
            {/* Text Content */}
            <div className="absolute inset-0 z-10 p-6 md:p-12 lg:p-16 flex flex-col justify-start">
              <ParallaxSection type="reveal-mask" speed={1.5}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 md:mb-8">
                  Let&apos;s Discuss
                  <br />
                  your project
                </h2>
                <p className="text-white/80 text-sm md:text-base max-w-lg">
                  where your space becomes a masterpiece. We specialize in custom interior design solutions that are
                  stylish, functional, and uniquely yours. Whether it&apos;s a home, office, or commercial space - we
                  turn your vision into reality.
                </p>
              </ParallaxSection>
            </div>

            {/* Sofa Image */}
            <div className="absolute z-20 top-[40%] md:top-[50%] w-[80%] md:w-[700px] left-[60%] md:left-1/2 lg:left-[55%] -translate-x-1/2 overflow-visible">
              <Image
                ref={sofaRef}
                src="/sofa.png"
                alt="Interior design showcase with a leather sofa and side table"
                width={1000}
                height={900}
                className="w-full h-auto will-change-transform"
                style={{ transform: "translateX(100%)", opacity: 0 }}
                priority
              />
            </div>

            {/* Stool Image */}
            <div className="absolute z-20 top-[30%] md:top-[33%] sm:left-auto sm:right-[80%] lg:right-[65%] w-[200px] md:w-[400px] overflow-visible">
              <Image
                ref={stoolRef}
                src="/stool.png"
                alt="Interior design stool"
                width={400}
                height={400}
                className="w-full h-auto will-change-transform"
                style={{ transform: "translateX(120%)", opacity: 0 }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
