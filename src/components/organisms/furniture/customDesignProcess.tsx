"use client"

import { useState } from "react";
import Image from "next/image";

export default function CustomDesignProcess() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: "01",
      label: "Step One",
      title: "Share Your Idea",
      description:
        "Browse our collection of customizable furniture across styles and categories. Choose your size, materials, finish, and design details — or start from scratch with your own idea. From cozy sofas to elegant dining tables, we bring your furniture dreams to life.",
      imageSrc: "/furnitureWebsite/customDesignProcess.png",
    },
    {
      num: "02",
      label: "Step Two",
      title: "Design Collaboration",
      description:
        "Work closely with our design team to refine your ideas and create detailed plans for your custom furniture.",
      imageSrc: "/furnitureWebsite/customDesignProcess.png",
    },
    {
      num: "03",
      label: "Step Three",
      title: "Production",
      description:
        "Our skilled craftsmen bring your design to life using high-quality materials and expert techniques.",
      imageSrc: "/furnitureWebsite/customDesignProcess.png",
    },
    {
      num: "04",
      label: "Step Four",
      title: "Delivery & Setup",
      description:
        "We deliver your custom furniture to your home and ensure everything is set up perfectly.",
      imageSrc: "/furnitureWebsite/customDesignProcess.png",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 mt-[250px]">
      <h1
        className="text-white text-2xl md:text-3xl lg:text-4xl font-light mb-10 text-center"
        style={{ fontFamily: "Ysabeau" }}
      >
        Custom Design Process
      </h1>

      {/* Fixed grid: Always 10 columns */}
      <div className="w-full max-w-6xl grid grid-cols-10 border border-amber-600">
        {steps.map((step, index) => (
          <div
            key={step.num}
            className={`col-span-${
              activeStep === index + 1 ? "7" : "1"
            } relative p-4 md:p-6 lg:p-8 border-r border-amber-600 flex flex-col ${
              index === steps.length - 1 ? "border-r-0" : ""
            }`}
            onClick={() => setActiveStep(index + 1)}
            style={{ cursor: "pointer" }}
          >
            <span
              className="text-white text-xl md:text-2xl mb-3"
              style={{ fontFamily: "Ysabeau" }}
            >
              {step.num}
            </span>

            {activeStep === index + 1 && (
              <div className="mx-4 md:mx-10 lg:mx-20 text-start">
                <h2
                  className="text-white text-xl md:text-2xl font-light mb-4"
                  style={{ fontFamily: "Ysabeau" }}
                >
                  {step.title}
                </h2>
                <p
                  className="text-gray-400 text-[11px] md:text-[12px] mb-6 max-w-sm"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {step.description}
                </p>
                <div className="w-[250px] md:w-[300px] lg:w-[350px]">
                  <Image
                    src={step.imageSrc}
                    alt={step.title}
                    width={350}
                    height={200}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            )}

            {/* Vertical label */}
            <div className="absolute left-35 bottom-8 transform -translate-y-4 -translate-x-full rotate-270 origin-bottom-left ">
              <span
                className="text-white text-sm md:text-md tracking-widest whitespace-nowrap"
                style={{ fontFamily: "Ysabeau" }}
              >
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
