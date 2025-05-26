"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Loader() {
  const [showText, setShowText] = useState(false)
  const router = useRouter()

  return (
    <motion.main
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landingPage_backround.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center px-4">
        {/* Since 2008 text positioned 67px from top */}
        <p
          className="mt-[67px] text-center text-sm text-white/80 sm:text-sm md:text-base"
          style={{ fontFamily: "Montserrat" }}
        >
          Since 2008
        </p>

        {/* TEKLA Heading */}
        <motion.h1
          layoutId="tekla-logo"
          className="mt-30 text-center text-8xl font-[400] tracking-[0.3em] text-white md:text-[8rem] lg:text-[10rem]"
          style={{ fontFamily: "Ysabeau" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          TEKLA
        </motion.h1>

        <motion.p
          className="mt-[120px] text-sm text-white/80 sm:text-base md:text-lg"
          style={{ fontFamily: "Montserrat" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Designs That Reflect Your Lifestyle
        </motion.p>

        {/* Slider Button */}
        <motion.div
          className="mt-[50px] relative h-[41px] w-[178px] rounded-[30px] border-3 border-[#E5C767]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* White Circle */}
          <motion.div
            className="absolute top-1/2 left-1 h-[31px] w-[31px] -translate-y-1/2 rounded-full bg-white"
            initial={{ x: 0 }}
            animate={{ x: 135 }}
            transition={{
              delay: 2, // <-- wait 2 seconds before moving
              duration: 1.2,
              ease: "easeInOut",
            }}
            onUpdate={() => setShowText(true)} // Trigger text display during movement
            onAnimationComplete={() => {
              // Navigate to home page when animation completes
              setTimeout(() => {
                router.push("/")
              }, 300)
            }}
          />

          {/* Explore Text */}
          {showText && (
            <motion.span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-white/80 md:text-lg"
              style={{ fontFamily: "Montserrat" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              explore
            </motion.span>
          )}
        </motion.div>
      </div>
    </motion.main>
  )
}
