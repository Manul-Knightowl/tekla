"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type TriggerEffect =
  | "fade-in"
  | "slide-up"
  | "slide-right"
  | "slide-left"
  | "zoom-in"
  | "rotate"
  | "blur-in"
  | "bounce"
  | "flip"
  | "shake"

interface ParallaxScrollTriggerProps {
  children: ReactNode
  effect: TriggerEffect
  threshold?: number // 0-1, when the animation should start (0 = top of element at bottom of viewport)
  duration?: number
  delay?: number
  stagger?: number // For multiple children
}

export default function ParallaxScrollTrigger({
  children,
  effect,
  threshold = 0.2,
  duration = 1,
  delay = 0,
  stagger = 0.1,
}: ParallaxScrollTriggerProps) {
  const triggerRef = useRef<HTMLDivElement>(null)
  const elementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!triggerRef.current) return

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    const trigger = triggerRef.current
    const elements = elementsRef.current?.children || []

    let animation: gsap.core.Tween | gsap.core.Timeline

    // Set initial state based on effect
    switch (effect) {
      case "fade-in":
        gsap.set(elements, { opacity: 0 })
        break
      case "slide-up":
        gsap.set(elements, { opacity: 0, y: 50 })
        break
      case "slide-right":
        gsap.set(elements, { opacity: 0, x: -50 })
        break
      case "slide-left":
        gsap.set(elements, { opacity: 0, x: 50 })
        break
      case "zoom-in":
        gsap.set(elements, { opacity: 0, scale: 0.8 })
        break
      case "rotate":
        gsap.set(elements, { opacity: 0, rotation: -10 })
        break
      case "blur-in":
        gsap.set(elements, { opacity: 0, filter: "blur(10px)" })
        break
      case "bounce":
        gsap.set(elements, { opacity: 0, y: -20 })
        break
      case "flip":
        gsap.set(elements, { opacity: 0, rotationX: 90 })
        break
      case "shake":
        gsap.set(elements, { opacity: 0 })
        break
    }

    // Create animation based on effect
    const createAnimation = () => {
      switch (effect) {
        case "fade-in":
          return gsap.to(elements, { opacity: 1, duration, stagger, delay })
        case "slide-up":
          return gsap.to(elements, { opacity: 1, y: 0, duration, stagger, delay })
        case "slide-right":
          return gsap.to(elements, { opacity: 1, x: 0, duration, stagger, delay })
        case "slide-left":
          return gsap.to(elements, { opacity: 1, x: 0, duration, stagger, delay })
        case "zoom-in":
          return gsap.to(elements, { opacity: 1, scale: 1, duration, stagger, delay })
        case "rotate":
          return gsap.to(elements, { opacity: 1, rotation: 0, duration, stagger, delay })
        case "blur-in":
          return gsap.to(elements, { opacity: 1, filter: "blur(0px)", duration, stagger, delay })
        case "bounce":
          return gsap.to(elements, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            delay,
            ease: "elastic.out(1, 0.3)",
          })
        case "flip":
          return gsap.to(elements, {
            opacity: 1,
            rotationX: 0,
            duration,
            stagger,
            delay,
            ease: "power3.out",
          })
        case "shake":
          const timeline = gsap.timeline({ delay })
          timeline.to(elements, { opacity: 1, duration: duration * 0.3 })
          timeline.to(elements, {
            x: "+=10",
            duration: 0.1,
            repeat: 5,
            yoyo: true,
            stagger,
          })
          return timeline
      }
    }

    // Create scroll trigger
    ScrollTrigger.create({
      trigger,
      start: `top bottom-=${threshold * 100}%`,
      onEnter: () => {
        animation = createAnimation()
      },
      once: true,
    })

    // Clean up
    return () => {
      if (animation) animation.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [effect, threshold, duration, delay, stagger])

  return (
    <div ref={triggerRef} className="parallax-scroll-trigger">
      <div ref={elementsRef} className="parallax-elements">
        {children}
      </div>
    </div>
  )
}
