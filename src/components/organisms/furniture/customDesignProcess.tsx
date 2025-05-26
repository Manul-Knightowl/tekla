"use client"

import { useState } from "react"
import Image from "next/image"

export default function CustomDesignProcess() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      num: "O1",
      label: "Step One",
      title: "Share Your Idea",
      description:
        "Browse our collection of customizable furniture across styles and categories. Choose your size, materials, finish, and design details — or start from scratch with your own idea. From cozy sofas to elegant dining tables, we bring your furniture dreams to life.",
      imageSrc: "/furnitureWebsite/customDesignProcess.png",
    },
    {
      num: "O2",
      label: "Step Two",
      title: "Design Collaboration",
      description:
        "Work closely with our design team to refine your ideas and create detailed plans for your custom furniture.",
      imageSrc: "/furnitureWebsite/customDesignProcess.png",
    },
    {
      num: "O3",
      label: "Step Three",
      title: "Production",
      description:
        "Our skilled craftsmen bring your design to life using high-quality materials and expert techniques.",
      imageSrc: "/furnitureWebsite/customDesignProcess.png",
    },
    {
      num: "O4",
      label: "Step Four",
      title: "Delivery & Setup",
      description: "We deliver your custom furniture to your home and ensure everything is set up perfectly.",
      imageSrc: "/furnitureWebsite/customDesignProcess.png",
    },
  ]

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8 mt-[200px] md:mt-[250px] lg:mt-[250px] xl:mt-[300px]">
      <h1 className="text-white text-4xl font-light mb-16 text-center" style={{ fontFamily: "Ysabeau" }}>
        Custom Design Process
      </h1>

      <div className="w-full max-w-7xl">
        <div className="border border-amber-500 grid grid-cols-12 min-h-[500px] overflow-hidden">
          {steps.map((step, index) => {
            const isActive = activeStep === index + 1
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(index + 1)}
                className={`${isActive ? "col-span-8" : "col-span-1"} relative ${
                  index < steps.length - 1 ? "border-r border-amber-500" : ""
                } transition-all duration-700 ease-in-out cursor-pointer flex flex-col`}
              >
                {/* Step Number */}
                <div className={`p-6 ${isActive ? "ml-6" : ""} transition-all duration-700 ease-in-out`}>
                  <span className="text-white text-xl font-light" style={{ fontFamily: "Ysabeau" }}>
                    {step.num}
                  </span>
                </div>

                {/* Active Content */}
                <div
                  className={`px-0 py-16 flex-1 flex flex-col items-start justify-center text-left relative transition-all duration-700 ease-in-out ${
                    isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                >
                  {isActive && (
                    <div className="ml-48 transition-all duration-700 ease-in-out delay-200">
                      <h2
                        className="text-white text-5xl font-light mb-10 transition-all duration-700 ease-in-out transform"
                        style={{ fontFamily: "Ysabeau" }}
                      >
                        {step.title}
                      </h2>
                      <p
                        className="text-gray-300 text-base mb-10 max-w-lg leading-relaxed transition-all duration-700 ease-in-out delay-100"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {step.description}
                      </p>
                      <div className="max-w-lg transition-all duration-700 ease-in-out delay-300 transform">
                        <Image
                          src={step.imageSrc || "/placeholder.svg"}
                          alt={step.title}
                          width={400}
                          height={250}
                          className="object-cover w-full h-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Vertical Step Label for Active Section */}
                  {isActive && (
                    <div className="absolute bottom-8 left-16 transition-all duration-700 ease-in-out delay-400">
                      <div className="transform -rotate-90 origin-bottom-left">
                        <span
                          className="text-white text-lg font-light tracking-wider whitespace-nowrap"
                          style={{ fontFamily: "Ysabeau" }}
                        >
                          {step.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Vertical Label for Inactive Steps */}
                {!isActive && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out">
                    <div className="transform mb-10 -rotate-90 origin-center">
                      <span
                        className="text-white text-lg  font-light tracking-wider whitespace-nowrap"
                        style={{ fontFamily: "Ysabeau" }}
                      >
                        {step.label}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
