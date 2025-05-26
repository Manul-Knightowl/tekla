"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface ParallaxLayersProps {
  children: ReactNode
  direction?: "vertical" | "horizontal"
  intensity?: number
  staggered?: boolean
}

export default function ParallaxLayers({
  children,
  direction = "vertical",
  intensity = 1,
  staggered = false,
}: ParallaxLayersProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const layers = container.querySelectorAll(":scope > *")

    layers.forEach((layer, index) => {
      // Calculate depth factor - deeper layers move more
      const depthFactor = staggered ? ((index + 1) / layers.length) * intensity : intensity

      // Calculate direction multiplier
      const directionMultiplier = index % 2 === 0 ? 1 : -1

      // Create animation based on direction
      if (direction === "vertical") {
        gsap.fromTo(
          layer,
          { y: 0 },
          {
            y: () => -50 * depthFactor * directionMultiplier,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        )
      } else {
        gsap.fromTo(
          layer,
          { x: 0 },
          {
            x: () => 50 * depthFactor * directionMultiplier,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        )
      }
    })

    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [direction, intensity, staggered])

  return (
    <div ref={containerRef} className="parallax-layers">
      {children}
    </div>
  )
}
