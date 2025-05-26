"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type ParallaxType =
  | "fade-in"
  | "fade-in-up"
  | "scale-in"
  | "slide-from-right"
  | "slide-from-left"
  | "stagger-children"
  | "parallax-depth"
  | "reveal-mask"
  | "pin-section"
  | "rotate-in"
  | "parallax-horizontal"
  | "zoom-out"
  | "3d-tilt"
  | "color-shift"

interface ParallaxSectionProps {
  children: ReactNode
  type: ParallaxType
  speed?: number
  delay?: number
}

export default function ParallaxSection({ children, type, speed = 1, delay = 0 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    let animation: gsap.core.Timeline | gsap.core.Tween
    const section = sectionRef.current
    const childrenContainer = childrenRef.current

    // Make sure GSAP plugins are registered
    gsap.registerPlugin(ScrollTrigger)

    // Create different animations based on the type
    switch (type) {
      case "fade-in":
        animation = gsap.fromTo(
          section,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5 * speed,
            delay,
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=100",
              end: "bottom center",
              scrub: true,
            },
          },
        )
        break

      case "fade-in-up":
        animation = gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5 * speed,
            delay,
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=100",
              end: "center center",
              scrub: 0.5,
            },
          },
        )
        break

      case "scale-in":
        animation = gsap.fromTo(
          section,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5 * speed,
            delay,
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=100",
              end: "center center",
              scrub: 0.5,
            },
          },
        )
        break

      case "slide-from-right":
        animation = gsap.fromTo(
          section,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5 * speed,
            delay,
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=100",
              end: "center center",
              scrub: 0.5,
            },
          },
        )
        break

      case "slide-from-left":
        animation = gsap.fromTo(
          section,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5 * speed,
            delay,
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=100",
              end: "center center",
              scrub: 0.5,
            },
          },
        )
        break

      case "stagger-children":
        if (childrenContainer) {
          const children = childrenContainer.querySelectorAll(":scope > *")
          animation = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top bottom-=100",
              end: "center center",
              scrub: 0.5,
            },
          })

          animation.fromTo(
            children,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8 * speed,
              stagger: 0.2,
              delay,
            },
          )
        }
        break

      case "parallax-depth":
        // Create a multi-layer parallax effect
        if (childrenContainer) {
          const layers = childrenContainer.querySelectorAll(":scope > *")

          layers.forEach((layer, index) => {
            const depth = (layers.length - index) / layers.length

            gsap.fromTo(
              layer,
              { y: 0 },
              {
                y: () => -100 * depth * speed,
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            )
          })
        }
        break

      case "reveal-mask":
        // Create a revealing mask effect
        gsap.set(section, { overflow: "hidden" })

        animation = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "center center",
            scrub: 1.5,
          },
        })

        animation.fromTo(
          section,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.5 * speed,
            delay,
          },
        )
        break

      case "pin-section":
        // Pin the section while other content scrolls
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
        })
        break

case "rotate-in":
  animation = gsap.fromTo(
    section,
    { opacity: 0, rotation: -15 }, // Increased from -5 to -25
    {
      opacity: 1,
      rotation: 0,
      duration: 1.5 * speed,
      delay,
      scrollTrigger: {
        trigger: section,
        start: "top bottom-=100",
        end: "center center",
        scrub: 0.5,
      },
    },
  )
  break


      case "parallax-horizontal":
        // Horizontal parallax effect
       const animation1 = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })

        if (childrenContainer) {
          const layers = childrenContainer.querySelectorAll(":scope > *")
          layers.forEach((layer, index) => {
            const direction = index % 2 === 0 ? -1 : 1
            const depth = (layers.length - index) / layers.length
            animation1.fromTo(
              layer,
              { x: 0 },
              {
                x: 100 * direction * depth * speed,
                ease: "none",
              },
              0,
            )
          })
        }
        break

      case "zoom-out":
        animation = gsap.fromTo(
          section,
          { scale: 1.2, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5 * speed,
            delay,
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "center center",
              scrub: 0.5,
            },
          },
        )
        break

      case "3d-tilt":
        // Create a 3D tilt effect based on scroll position
        animation = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })

        animation.fromTo(
          section,
          {
            rotationY: -5,
            rotationX: 5,
            transformPerspective: 1000,
          },
          {
            rotationY: 5,
            rotationX: -5,
            ease: "none",
          },
          0,
        )
        break

      case "color-shift":
        // Shift background color based on scroll position
        animation = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })

        animation.fromTo(
          section,
          {
            backgroundColor: "rgba(255,255,255,0)",
          },
          {
            backgroundColor: "rgba(245,245,245,0.8)",
            ease: "none",
          },
          0,
        )
        break
    }

    // Clean up on unmount
    return () => {
      if (animation) {
        animation.kill()
      }
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [type, speed, delay])

  return (
    <div ref={sectionRef} className="parallax-section">
      <div ref={childrenRef} className="parallax-content">
        {children}
      </div>
    </div>
  )
}
