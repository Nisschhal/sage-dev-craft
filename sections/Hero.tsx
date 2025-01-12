import Cog from "@/assets/cog.png"
import Cylinder from "@/assets/cylinder.png"
import Noddle from "@/assets/noodle.png"
import { CallToAction } from "./CallToAction"
import { GoArrowRight } from "react-icons/go"
import Image from "next/image"

export const Hero = () => {
  return (
    <section className="p-5 pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
      <div className="container mx-auto">
        <div className="md:flex items-center lg:gap-12 ">
          {/* Text  */}
          <div className="md:w-[478px]">
            {/* Small Heading */}
            <p className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Your Business, Digitized
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6 ">
              Unlock Growth with Digital Solutions
            </h1>

            {/* Supporting Text */}
            <p className="text-xl text-[#010d3e] tracking-tight mt-6 ">
              Empower your business to stay ahead in a competitive world. We
              specialize in creating tailored websites and strategies that drive
              growth, connect you to your customers, and future-proof your
              brand.
            </p>
            <p className="text-lg font-light text-[#010d3e] mt-2">
              Your vision, our expertise—together, we create success.
            </p>

            {/* Call to Action */}
            <div className="flex items-center gap-1 mt-8">
              <button className="btn btn-primary">Transform Today</button>
              <button className="btn btn-text flex items-center gap-2">
                <span> Learn more</span> <GoArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="xl:ml-20 mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image
              src={Cog}
              alt="hero image"
              className="md:absolute  md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={Cylinder}
              alt="cylinder image"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
            />
            <Image
              src={Noddle}
              alt="noddle image"
              width={220}
              height={220}
              className="hidden lg:block top-[524px] left-[448px] md:absolute rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
