"use client"
import productImage from "@/assets/product-image.png"
import Image from "next/image"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import { useRef } from "react"

export const ProductShowcase = () => {
  const productRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: productRef,

    // start = scrollEffect | end = when productRef hits end of the view port
    // 'containerScrollAction' 'viewport' // start container scroll effect when it hits the end of the view port
    // end container scroll effect when it hits the start point of view port

    // 'containerPosition, viewPortPostition'
    // start end
    // there are various ways to interprest it but i think
    // offSet takes two items: start end, start's first item denotes position of targeElement, 2nd denotes position of viewport
    // 2nd item again says that when target 'end' position hits the viewport 'start' position end the effect.
    // conclusion offset ['start', 'end']  // start and end is the effect duration, each takes, 'tragetViewport screenViewport'

    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="">
        <div className="section-header">
          <div className="flex justify-center">
            <h2 className="tag">Boost Your Sales with Modern Solutions</h2>
          </div>
          <h2 className="section-title gradient-text mt-5">
            Unlock New Opportunities for Your Business
          </h2>
          <p className="section-description mt-5">
            Transform your business with modern tools—digitize your operations,
            streamline marketing, and effortlessly track sales with a fully
            responsive website ready in days. Stay ahead with professional,
            future-ready solutions tailored for your success.
          </p>
        </div>
        <div className="relative mx-auto md:w-[80%]">
          <Image src={productImage} alt="product image" className="mt-10 " />
          <motion.img
            src={pyramidImage.src}
            alt="product image"
            className="hidden md:block absolute -top-32 -right-36"
            height={262}
            width={262}
            style={{
              y,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="product image"
            className="hidden md:block absolute bottom-24 -left-28"
            height={248}
            width={226}
            style={{
              y,
            }}
          />
        </div>
      </div>
    </section>
  )
}
