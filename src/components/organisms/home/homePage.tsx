"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import ParallaxSection from "@/components/parallax/parallax-section"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "@/components/molecules/navbar"

export default function Home() {
  return (
    <AnimatePresence mode="wait">
      <main className="relative min-h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/intirior-design.png" alt="Interior design background" fill priority className="object-cover" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Logo */}
          <header className="pt-8 px-6 lg:px-12 md:px-8 text-center relative">
            {/* Logo in top left corner */}
            <div className="absolute left-6 lg:left-15 md:left-8 top-8">
              <Image 
                src="/Homepage_logo.png" 
                alt="Tekla Logo" 
                width={97} 
                height={79} 
                className="object-contain"
              />
            </div>
            
            <div className="inline-block">
              <motion.h1 
                layoutId="tekla-logo" 
                className="text-white lg:text-xl md:text-lg font-light tracking-[0.2em]" 
                style={{ fontFamily: "Ysabeau" }}
                transition={{ duration: 0.8 }}
              >
                TEKLA
              </motion.h1>
              <p className="text-white/80 text-[12px] md:text-sm tracking-wider pt-1">Since 2008</p>
            </div>
          </header>

          {/* Navbar */}
          <div className="mt-4">
            <Navbar />
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-start justify-start flex-grow px-6 lg:px-12 md:px-8 mt-[60px]">
            <div className="w-full">
              <div className="mx-auto w-fit">
                <motion.h2
                  className="text-white text-2xl lg:text-[65px] xl:text-[80px] md:text-[36px] font-light tracking-wide"
                  style={{ fontFamily: "Ysabeau" }}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Transform Your Space with <br />
                </motion.h2>

                <motion.p
                  className="text-white text-[10px] mt-4 lg:max-w-sm xl:max-w-lg md:max-w-[250px]"
                  style={{ fontFamily: "Montserrat" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Where your space becomes a masterpiece. We specialize in custom interior design solutions that are stylish,
                  functional, and uniquely yours. Whether it&apos;s a home, office, or commercial space - we turn your vision into
                  reality.
                </motion.p>

                <motion.h2
                  className="text-white text-2xl lg:text-[65px] xl:text-[80px] md:text-[36px] font-light tracking-wide lg:ml-[455px] xl:ml-[570px] md:ml-[250px] mt-[-60px]"
                  style={{ fontFamily: "Ysabeau" }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  Timeless Design <br />

                  {/* Action Buttons */}
                  <motion.div 
                    className="flex flex-col md:flex-row items-center md:items-start gap-4 mt-8 ml-4 lg:ml-0 md:ml-2 md:justify-center lg:gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    {/* Get in Touch Button */}
                    <Link
                      href="#contact"
                      className="flex items-center justify-between gap-4 pl-4 pr-1 py-2 border-3 border-[#E5C767] text-white rounded-full transition-colors w-[261px]  md:h-[37px] lg:h-[52px] lg:w-[215px] xl:w-[280px] md:w-[150px] hover:border-yellow-400"
                    >
                      <span
                        className="  lg:text-[12px] xl:text-sm md:text-[10px] tracking-wider mx-auto"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        GET IN TOUCH
                      </span>
                      <div className="bg-white md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="text-black h-4 w-4" />
                      </div>
                    </Link>

                    {/* Services Button */}
                    <Link
                      href="#services"
                      className="flex items-center justify-between gap-4 pl-4 pr-1 py-2 bg-[#E5C767] text-black rounded-full hover:bg-yellow-400 transition-colors w-[261px]  md:h-[35px] lg:h-[52px] lg:w-[215px] xl:w-[280px] md:w-[150px]"
                    >
                      <span
                        className="lg:text-[12px] xl:text-sm md:text-[10px] tracking-wider mx-auto"
                        style={{ fontFamily: "Montserrat" }}
                      >
                        SERVICES
                      </span>
                      <div className="bg-white md:w-7 md:h-7 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
                        <ArrowUpRight className="text-black h-4 w-4" />
                      </div>
                    </Link>
                  </motion.div>
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Elliptical Shape Above Carousel */}
          <div className="w-full flex justify-center relative z-20 mt-50">
            <div
              className="bg-[#0D2821] absolute"
              style={{
                width: '100%',
                height: '80px',
                borderRadius: '100%',
                transform: 'translateY(-10px)',
              }}
            />
          </div>

          {/* Continuous Scrolling Carousel */}
          <div className="w-full overflow-hidden relative mt-8 z-10">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div> {/* Blurred Background */}
            <div
              className="flex gap-[95px] md:gap-[50px] relative z-10"
              style={{
                animation: "scroll 30s linear infinite",
              }}
            >
              {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((index, i) => (
                <div
                  key={i}
                  className="lg:w-[300px] lg:h-[350px] md:w-[240px] md:h-[280px] flex-shrink-0 relative transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg z-10"></div>
                  <Image
                    src={`/homePage_carosal-${index}.png`}
                    alt={`Design ${index}`}
                    width={230}
                    height={290}
                    className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Elliptical Shape Below Carousel */}
          <div className="w-full flex justify-center relative z-20">
            <div
              className="bg-[#0D2821] absolute"
              style={{
                width: '100%',
                height: '80px',
                borderRadius: '100%',
                transform: 'translateY(-40px)',
              }}
            />
          </div>

          <ParallaxSection type="reveal-mask">
            <div className="w-full bg-[#0D2821] py-18 text-white z-10">
              <div className="container mx-auto px-4 md:px-40">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-[20px] lg:gap-[40px] xl:gap-[130px] justify-center">
                  {[
                    { value: "17+", label: "Years of work of\nour agency" },
                    { value: "30+", label: "architectural\nprojects" },
                    { value: "50+", label: "Happy clients" },
                    { value: "200+", label: "created unique\ninteriors" },
                  ].map(({ value, label }, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <h3 className="text-4xl md:text-3xl lg:text-4xl font-light text-center" style={{ fontFamily: "Ysabeau" }}>
                        {value}
                      </h3>

                      <div className="relative mt-4 mb-1 w-full flex justify-center">
                        <div className="w-[6rem] h-px bg-white"></div>
                      </div>

                      <div className="mt-2 w-[6rem]">
                        <p
                          className="text-[10px] md:text-[8px] lg:text-[11px] leading-snug whitespace-pre-line text-left"
                          style={{ fontFamily: "Montserrat" }}
                        >
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ParallaxSection>
        </div>

        {/* Add this style tag for the animations */}
        <style jsx global>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-335px * 5)); }
          }
        `}</style>
      </main>
    </AnimatePresence>
  )
}