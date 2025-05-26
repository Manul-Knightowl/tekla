import Image from "next/image"
import Link from "next/link"

export default function FurnitureSection() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h1 className="text-3xl md:text-7xl lg:text-7xl font-medium text-gray-900 mb-14 flex items-center gap-4"
            style={{ fontFamily: "Ysabeau" }}>
              Customize Your Furniture
              <span className="hidden md:inline-block w-62 h-0.5 bg-[#E5C767]"></span>
            </h1>
            <p className="text-gray-600 max-w-3xl mb-10"
            style={{ fontFamily: "Montserrat" }}>
              Where your space becomes a masterpiece. We specialize in custom design solutions that are stylish,
              functional, and uniquely yours. Whether it&apos;s a home, office, or commercial space - we turn your
              vision into reality. From cozy apartments to expansive commercial spaces, we offer end-to-end design
              services tailored to your needs and style. Our approach combines trend-forward thinking with timeless
              elegance, ensuring every project is functional and fabulous.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 mb-12">
            <div className="relative group overflow-hidden ">
              <Image
                src="/furniture/bathroom.png"
                alt="Bathroom design"
                width={300}
                height={400}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white text-xl font-medium"
                style={{ fontFamily: "Ysabeau" }}>Bathroom</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden ">
              <Image
                src="/furniture/chair.png"
                alt="Chair design"
                width={300}
                height={400}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white text-xl font-medium"
                style={{ fontFamily: "Ysabeau" }}>Chair</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden ">
              <Image
                src="/furniture/decor.png"
                alt="Decor design"
                width={300}
                height={400}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white text-xl font-medium"
                style={{ fontFamily: "Ysabeau" }}>Decor</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden ">
              <Image
                src="/furniture/lamp.png"
                alt="Lamp design"
                width={300}
                height={400}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end p-4">
                <h3 className="text-white text-xl font-medium"
                style={{ fontFamily: "Ysabeau" }}>Lamp</h3>
              </div>
            </div>
          </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center items-center sm:items-stretch">
              <Link
                href="/furniture"
                className="flex items-center justify-between gap-4 pl-4 pr-1 -py-1 border-3 w-[220px] h-[52px] border-yellow-400 rounded-full text-gray-800 hover:bg-gray-300 transition-colors duration-300"
              >
                Explore More
                <Image src="/arrow.png" alt="Arrow Right" width={40} height={40} />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between gap-4 pl-4 pr-1 -py-1 border-3 border-[#E5C767] bg-yellow-400 text-black rounded-full w-[280px] h-[52px] hover:bg-yellow-500 hover:text-black transition-colors duration-300"
              >
                Customize Your Furniture
                <Image src="/arrow.png" alt="Arrow Right" width={40} height={40} />
              </Link>
            </div>

        </div>
      </section>
    </main>
  )
}
