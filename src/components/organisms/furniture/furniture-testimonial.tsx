"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Our streamlined design process ensures your experience is smooth and stress-free. From initial consultation to the final touches, we collaborate closely with you to bring your vision to life — on time and within budget.",
    author: "Name Surname",
    position: "Position, Company name",
    image: "/carousel/carousel1.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The attention to detail and quality of craftsmanship exceeded our expectations. Every piece feels like it was made specifically for our space, and the customer service was exceptional throughout.",
    author: "Jane Smith",
    position: "Interior Designer, Design Studio",
    image: "/carousel/carousel2.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We've furnished three rooms with their pieces and couldn't be happier. The durability is impressive, and the designs are timeless. Worth every penny for furniture that truly makes a house feel like home.",
    author: "Robert Johnson",
    position: "Homeowner, Client",
    image: "/carousel/carousel3.png",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const goToSlide = (index: number) => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex(index)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
    }, 600) // Slightly longer than the CSS transition
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full mx-auto mt-40">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mb-20"
        style={{ fontFamily: "Ysabeau" }}>Furniture That Wins Hearts</h1>

        <p className="text-center text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-20 md:mb-36"
        style={{ fontFamily: "Montserrat" }}>
          We&apos;re proud to be a part of your spaces. Read what our customers have to say about the experience — from first
          switch to final delivery.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-18 lg:gap-18 relative">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg h-[300px] md:h-[400px] lg:h-[450px]">
            <div className="carousel-container absolute w-full h-full ">
              
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt="Furniture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
              
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="flex flex-col justify-center relative">
            <div className="flex justify-end space-x-2 mb-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-white hover:bg-gray-800 text-white"
                onClick={goToPrevious}
                disabled={isAnimating}
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Previous testimonial</span>
              </Button>
              <Button 
                variant="outline"
                size="icon"
                className="rounded-full border-white hover:bg-gray-800 text-white"
                onClick={goToNext}
                disabled={isAnimating}
              >
                <ArrowRight className="h-5 w-5" />
                <span className="sr-only">Next testimonial</span>
              </Button>
            </div>

            <div className="relative h-[350px] md:h-[350px] overflow-hidden mb-[150px] md:mb-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute w-full transition-all duration-500 ease-in-out ${
                    index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                  }`}
                >
                  <div className="flex mb-10 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-white text-white" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-lg mb-8 text-center justify-center"
                  style={{ fontFamily: "Montserrat" }}>&quot;{testimonial.quote}&quot;</blockquote>

                    <div className="flex flex-col items-center text-center mt-16">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                        alt="Testimonial Author"
                        width={100}
                        height={100}
                        className="h-12 w-12 rounded-full bg-gray-600 mb-2"
                    />
                    <p className="font-medium"
                    style={{ fontFamily: "Montserrat" }}>{testimonial.author}</p>
                    <p className="text-sm text-gray-400"
                    style={{ fontFamily: "Montserrat" }}>{testimonial.position}</p>
                    </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
