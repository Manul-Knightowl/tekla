"use client"

import { type ReactNode, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"

interface ParallaxProviderProps {
  children: ReactNode
}

export default function ParallaxProvider({ children }: ParallaxProviderProps) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    // Create smooth scrolling effect
    const smoother = ScrollSmoother.create({
      smooth: 1.5, // Adjust smoothness (higher = smoother)
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1, // Light smoothing for touch devices
    })

    // Set up global scroll properties
    ScrollTrigger.defaults({
      toggleActions: "play pause resume reset",
      markers: false, // Set to true during development to see trigger points
    })

    // Clean up on unmount
    return () => {
      smoother.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}
