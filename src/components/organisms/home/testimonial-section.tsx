"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import ParallaxSection from "@/components/parallax/parallax-section"

// Define testimonial data structure
type Testimonial = {
  quote: string
  name: string
  position: string
  company: string
}

export default function TestimonialSection() {
  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      quote:
        "Our streamlined design process ensures your experience is smooth and stress-free. From initial consultation to the final touches, we collaborate closely with you to bring your vision to life — on time and within budget.",
      name: "Name Surname",
      position: "Position",
      company: "Company name",
    },
    {
      quote:
        "Working with this team was an absolute pleasure. Their attention to detail and commitment to excellence exceeded our expectations at every turn.",
      name: "Client Two",
      position: "CEO",
      company: "Company Two",
    },
    {
      quote:
        "The level of creativity and technical expertise brought to our project was impressive. They delivered exactly what we needed, when we needed it.",
      name: "Client Three",
      position: "Director",
      company: "Company Three",
    },
    {
      quote:
        "From concept to completion, the process was seamless. Their ability to translate our ideas into reality made all the difference in our project's success.",
      name: "Client Four",
      position: "Manager",
      company: "Company Four",
    },
  ]

  // State to track the selected testimonial
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Get the current testimonial
  const currentTestimonial = testimonials[selectedIndex]

  return (
    <div className="bg-black text-white py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        <ParallaxSection type="slide-from-left" speed={1.2}>
        <h1 className="text-4xl md:text-5xl font-light text-center mb-8"
        style={{ fontFamily: "Ysabeau" }}>Our Customers</h1>
        </ParallaxSection>

          <ParallaxSection type="slide-from-right" speed={1.2}>
        <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-12 text-gray-300"
        style={{ fontFamily: "Ysabeau" }}>
          Our streamlined design process ensures your experience is smooth and stress-free. From initial consultation to
          the final touches, we collaborate closely with you to bring your vision to life — on time and within budget.
        </p>
        </ParallaxSection>

        <div className="border-2 border-[#E5C767] pt-6 md:pt-10 relative w-full max-w-6xl">
          <div className="flex justify-center mb-24">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-white text-white" />
              ))}
            </div>
          </div>

          <blockquote className="text-center mb-14 text-sm md:text-base lg:text-lg px-10 md:px-40 lg:px-40 md:h-24">
            <p className="italic">&quot;{currentTestimonial.quote}&quot;</p>
          </blockquote>

          <div className="flex flex-col items-center mb-10">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full mb-3"></div>
            <p className="font-medium"
            style={{ fontFamily: "Ysabeau" }}>{currentTestimonial.name}</p>
            <p className="text-sm text-gray-400"
            style={{ fontFamily: "Ysabeau" }}>
              {currentTestimonial.position}, {currentTestimonial.company}
            </p>
          </div>

          <div className="grid grid-cols-4 text-white border-t-2 border-[#E5C767] [&>*:not(:last-child)]:border-r-2 [&>*]:border-[#E5C767]">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`py-4 text-center text-xs md:text-sm
                  ${selectedIndex === index
                    ? "text-black border-black"
                    : "bg-transparent text-white hover:bg-black/30"
                  }`}
              >
                Client {index + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
