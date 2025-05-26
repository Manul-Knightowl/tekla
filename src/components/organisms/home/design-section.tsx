import Image from "next/image"
import { ChevronsDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function DesignProcess() {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d1.png",
      position: "right",
    },
    {
      number: 2,
      title: "Concept Development",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d2.png",
      position: "left",
    },
    {
      number: 3,
      title: "Design & Planning",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d3.png",
      position: "right",
    },
    {
      number: 4,
      title: "Execution & Styling",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d4.png",
      position: "left",
    },
    {
      number: 5,
      title: "Final Reveal",
      description:
        "where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish, functional, and uniquely yours. Whether it’s a home, office, or commercial space – we turn your vision into reality.",
      image: "/design/d5.png",
      position: "right",
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-20"
            style={{ fontFamily: "Ysabeau" }}
          >
            Design Process
          </h1>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 mb-12"
            style={{ fontFamily: "Montserrat" }}
          >
            Our streamlined design process ensures your experience is smooth and stress-free. From initial consultation
            to the final touches, we collaborate closely with you to bring your vision to life — on time and within
            budget.
          </p>
          <div className="flex justify-center">
            <ChevronsDown className="w-12 h-12 text-amber-400 animate-bounce" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-white"></div>

          {/* Steps */}
          <div className="relative z-10">
            {/* Prepare refs and inView states for each step using useInView hooks outside the map callback */}
            {(() => {
              // Move useInView hooks outside the map callback
              const refs: (React.RefCallback<HTMLDivElement> | undefined)[] = [];
              const inViews: boolean[] = [];
              steps.forEach(() => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const [ref, inView] = useInView({ triggerOnce: true });
                refs.push(ref);
                inViews.push(inView);
              });
              return steps.map((step, index) => {
                const ref = refs[index];
                const inView = inViews[index];

                const imageVariant = {
                  hidden: { opacity: 0, x: step.position === "right" ? 100 : -100 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                };

                const textVariant = {
                  hidden: { opacity: 0, x: step.position === "right" ? -100 : 100 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                };

                return (
                  <div
                    key={step.number}
                    ref={ref}
                    className={`flex flex-col ${
                      index !== steps.length - 1 ? "mb-24 md:mb-32" : ""
                    } ${step.position === "right" ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Image */}
                    <motion.div
                      variants={imageVariant}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className={`w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0`}
                    >
                      <div
                        className={`relative w-full max-w-sm h-64 md:h-80 ${
                          step.position === "right" ? "md:mr-8 lg:mr-16" : "md:ml-8 lg:ml-16"
                        }`}
                      >
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={`Step ${step.number}: ${step.title}`}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </motion.div>

                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-black"></div>

                    {/* Content */}
                    <motion.div
                      variants={textVariant}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className={`w-full md:w-1/2 flex flex-col justify-center ${
                        step.position === "right"
                          ? "md:pl-8 lg:pl-16 md:text-left"
                          : "md:pr-8 lg:pr-16 md:text-right"
                      }`}
                    >
                      <h3
                        className="text-xl md:text-2xl font-light mb-4"
                        style={{ fontFamily: "Ysabeau" }}
                      >
                        Step {step.number}: {step.title}
                      </h3>
                      <p
                        className="text-sm md:text-base text-gray-400"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
    </div>
  )
}
