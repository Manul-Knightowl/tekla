"use client"
import { useState, useEffect } from "react"
import HomePage from "../components/organisms/home/homePage"
import OurStorySection from "@/components/organisms/home/ourstory-section"
import ServicesSection from "@/components/organisms/home/services-section"
import ProjectsSection from "@/components/organisms/home/projects-section"
import FurnitureSection from "@/components/organisms/home/furniture-section"
import TestimonialSection from "@/components/organisms/home/testimonial-section"
import ContactForm from "@/components/organisms/home/contactform-section"
import ContactUs from "@/components/organisms/home/contactus-section"
import LocationSection from "@/components/organisms/home/map-section"
import DesignProcess from "@/components/organisms/home/design-section"
import ParallaxProvider from "@/components/parallax/parallax-provider"
import ParallaxSection from "@/components/parallax/parallax-section"
import Footer from "@/components/molecules/footer"
import Loader from "@/components/organisms/home/loading-page" // Make sure this is your loader component

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Set timeout to match your loader animation duration
    // Adjust this based on how long your loader animations take (3.2s in your original)
    const timer = setTimeout(() => setLoading(false), 3200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <ParallaxProvider>
      <ParallaxSection type="zoom-out" speed={0.8}>
        <HomePage />
      </ParallaxSection>

      <ParallaxSection type="scale-in" speed={1.2}>
        <OurStorySection />
      </ParallaxSection>

      <ParallaxSection type="parallax-depth" speed={1.5}>
        <ServicesSection />
      </ParallaxSection>

      <ParallaxSection type="stagger-children" speed={0.9}>
        <ProjectsSection />
      </ParallaxSection>

      <ParallaxSection type="fade-in-up" speed={1}>
        <DesignProcess />
      </ParallaxSection>

      <ParallaxSection type="scale-in" speed={1.2}>
        <FurnitureSection />
      </ParallaxSection>

      <ParallaxSection type="fade-in" speed={1}>
        <TestimonialSection />
      </ParallaxSection>

        <ContactForm />

        <ContactUs />

      <ParallaxSection type="scale-in" speed={1.2}>
        <LocationSection />
      </ParallaxSection>

      <Footer />
    </ParallaxProvider>
  )
}