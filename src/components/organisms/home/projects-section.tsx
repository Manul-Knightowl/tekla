"use client"

import { useState } from "react"
import Image from "next/image"
import ParallaxSection from "@/components/parallax/parallax-section"

// Define project type
interface Project {
  id: number
  image: string
  title: string
  description: string
}

export default function ProjectsSection() {
  // Initial projects to display
  const initialProjects: Project[] = [
    {
      id: 1,
      image: "/projects/p1.png",
      title: "Timeless Design",
      description:
        "Where your space becomes a masterpiece. We specialize in elegant interior design solutions that are stylish, functional, and uniquely yours. Whether it's a home, office, or commercial space—we turn your vision into reality.",
    },
    {
      id: 2,
      image: "/projects/p2.png",
      title: "Timeless Design",
      description:
        "Where your space becomes a masterpiece. We specialize in elegant interior design solutions that are stylish, functional, and uniquely yours. Whether it's a home, office, or commercial space—we turn your vision into reality.",
    },
    {
      id: 3,
      image: "/projects/p3.png",
      title: "Timeless Design",
      description:
        "Where your space becomes a masterpiece. We specialize in elegant interior design solutions that are stylish, functional, and uniquely yours. Whether it's a home, office, or commercial space—we turn your vision into reality.",
    },
  ]

  // Additional projects to show when "Explore More" is clicked
  const additionalProjects: Project[] = [
    {
      id: 4,
      image: "/projects/p1.png",
      title: "Timeless Design",
      description:
        "Where your space becomes a masterpiece. We specialize in elegant interior design solutions that are stylish, functional, and uniquely yours. Whether it's a home, office, or commercial space—we turn your vision into reality.",
    },
    {
      id: 5,
      image: "/projects/p2.png",
      title: "Timeless Design",
      description:
        "Where your space becomes a masterpiece. We specialize in elegant interior design solutions that are stylish, functional, and uniquely yours. Whether it's a home, office, or commercial space—we turn your vision into reality.",
    },
  ]

  // State to track if additional projects are shown
  const [showMore, setShowMore] = useState(false)

  // Combine initial and additional projects if showMore is true
  const displayedProjects = showMore ? [...initialProjects, ...additionalProjects] : initialProjects

  return (
    <div className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header section with title and description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 mb-36">
          <div>
            <h2 className="text-4xl md:text-7xl font-medium mb-4 text-center border-b-2 border-white pb-20"
            style={{ fontFamily: "Ysabeau" }}>Our Completed <br /> Projects</h2>
          </div>
          <div>
            <ParallaxSection type="slide-from-right" speed={1.2}>
            <p className="text-sm text-gray-300 md:w-lg py-10">
              Where your space becomes a masterpiece. We specialize in elegant interior design solutions that are
              stylish, functional, and uniquely yours. Whether it&apos;s a home, office, or commercial space—we turn your
              vision into reality. Our experienced team is dedicated to transforming ordinary spaces into extraordinary
              experiences, ensuring every project is functional and fabulous.
            </p>
            </ParallaxSection>
          </div>
        </div>

        {/* Projects list */}
        <ParallaxSection type="slide-from-right" speed={1.2}>
        <div className="space-y-12">
          {displayedProjects.map((project) => (
            <div key={project.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="h-[300px] relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-light mb-4"
                  style={{ fontFamily: "Ysabeau" }}>{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-6"
                  style={{ fontFamily: "Montserrat" }}>{project.description}</p>
                  <div>
                    <button className="flex items-center justify-between gap-4 pl-4 pr-1 py-2 border-3 border-[#E5C767] text-white rounded-full w-[250px] h-[52px] hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                    style={{ fontFamily: "Montserrat" }}>
                      <span>Explore our Project</span>
                      <Image src="/arrow.png" alt="Arrow Right" width={40} height={40} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#FFFFFF] my-8"></div>
            </div>
          ))}
        </div>
        </ParallaxSection>

        {/* Explore More button */}
        {!showMore && (
          <div className="flex justify-end mt-4">
            <button onClick={() => setShowMore(true)} className="text-sm text-gray-300 hover:text-white"
              style={{ fontFamily: "Montserrat" }}>
              Explore More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
