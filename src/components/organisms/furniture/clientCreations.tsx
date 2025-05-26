import Image from "next/image";

export default function ClientCreations() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-center text-3xl md:text-4xl font-normal mb-35"
          style={{ fontFamily: "Ysabeau" }}
        >
          Client Creations
        </h1>

        {/* Flex layout */}
        <div className="flex flex-col md:flex-row md:gap-3 lg:gap-5 justify-center items-start">
          {/* Left column */}
          <div className="h-full">
            <div className="relative h-[400px] md:h-[505px] lg:h-[680px] xl:h-[742px] w-[260px] md:w-[240px] lg:w-[280px] xl:w-[375px]">
              <Image
                src="/furnitureWebsite/clientCreations/image1.png"
                alt="Interior design with blue curtains and orange furniture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle column */}
          <div className="flex flex-col md:gap-2 lg:gap-4">
            <div className="relative h-[160px] md:h-[150px] lg:h-[190px] xl:h-[206px] w-[260px] md:w-[240px] lg:w-[300px] xl:w-[360px]">
              <Image
                src="/furnitureWebsite/clientCreations/image2.png"
                alt="Modern living room with wooden elements"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[180px] md:h-[170px] lg:h-[210px] xl:h-[240px] w-[260px] md:w-[240px] lg:w-[300px] xl:w-[360px]">
              <Image
                src="/furnitureWebsite/clientCreations/image3.png"
                alt="Cozy reading nook with chair"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] md:h-[170px] lg:h-[248px] xl:h-[263px] w-[260px] md:w-[240px] lg:w-[300px] xl:w-[360px]">
              <Image
                src="/furnitureWebsite/clientCreations/image4.png"
                alt="Cozy reading nook with chair"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col md:gap-1 lg:gap-3">
            <div className="relative h-[260px] md:h-[245px] lg:h-[360px] xl:h-[407px] w-[260px] md:w-[240px] lg:w-[300px] xl:w-[359px]">
              <Image
                src="/furnitureWebsite/clientCreations/image5.png"
                alt="Elegant living room with fireplace"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[230px] md:h-[255px] lg:h-[310px] xl:h-[324px] w-[260px] md:w-[240px] lg:w-[300px] xl:w-[359px]">
              <Image
                src="/furnitureWebsite/clientCreations/image6.png"
                alt="Bright living room with arched windows"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
