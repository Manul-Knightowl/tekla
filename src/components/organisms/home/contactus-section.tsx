import ParallaxSection from "@/components/parallax/parallax-section"
import Image from "next/image"

export default function ContactUs() {
  return (
    <div className="relative w-full bg-black text-white min-h-[500px] flex items-center">
      <div className="container py-12 md:py-24 mt-56 mb-28">
        <div className="flex items-center space-x-10 md:px-20 mb-20">
          <div className="h-px bg-white w-2/5" />
          <ParallaxSection type="zoom-out" speed={1.3}>
          <h2 className="text-3xl md:text-7xl font-medium"
          style={{ fontFamily: "Ysabeau" }}>Contact us</h2>
          </ParallaxSection>
        </div>
        <div className="flex items-center gap-20 md:gap-40">
          <div className="relative h-[300px] md:h-[600px]">
            <ParallaxSection type="slide-from-left" speed={1.2}>
            <Image
              src="/couch.png"
              alt="Yellow sofa"
              width={800}
              height={300}
              className="object-contain object-left"
            />
            </ParallaxSection>
          </div>

          <ParallaxSection type="slide-from-right" speed={1.2}>
          <div className="space-y-8 w-lg">
            <div className="space-y-16 mt-12">
              <div>
                <p className="text-xl text-white mb-4"
                style={{ fontFamily: "Ysabeau" }}>Call us at</p>
                <p className="text-sm"
                style={{ fontFamily: "Montserrat" }}>+94 721213159</p>
              </div>

              <div>
                <p className="text-xl text-white mb-4"
                style={{ fontFamily: "Ysabeau" }}>Email Address</p>
                <p className="text-sm"
                style={{ fontFamily: "Montserrat" }}>tekla@gmail.com</p>
              </div>

              <div>
                <p className="text-xl text-white mb-4"
                style={{ fontFamily: "Ysabeau" }}>office address</p>
                <p className="text-sm"
                style={{ fontFamily: "Montserrat" }}>104/1/1 High Level Rd, Colombo 00600</p>
              </div>
            </div>
          </div>
          </ParallaxSection>
        </div>
      </div>
    </div>
  )
}
