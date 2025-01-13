"use client"
import { GoArrowRight } from "react-icons/go"
import { twMerge } from "tailwind-merge"
import starImage from "@/assets/star.png"
import sprintImage from "@/assets/spring.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const CallToAction = () => {
  const callRef = useRef<HTMLScriptElement>(null)
  const { scrollYProgress } = useScroll({
    target: callRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [150, -150])
  return (
    <section
      ref={callRef}
      className="bg-gradient-to-b from-[#eaeefe] to-[#183ec2]/20 py-24 md:py-36 overflow-x-clip "
    >
      <div className="md:px-8 mx-auto">
        {/* Header  */}
        <div className="section-header relative">
          <h2 className="section-title gradient-text">
            Sign up for free today
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of acomplishment with an app designed to track
            your progress and motivate your efforts
          </p>
          <motion.img
            src={starImage.src}
            alt="star image"
            width={360}
            className="absolute hidden md:block -left-[350px] -top-[137px]"
            style={{
              y,
            }}
          />
          <motion.img
            src={sprintImage.src}
            alt="spring image"
            width={360}
            className="absolute hidden md:block top-[19px] -right-[331px]"
            style={{
              y,
            }}
          />
        </div>
        {/* Call to Action */}
        <div className="flex justify-center items-center gap-1 mt-10">
          <button className="btn btn-primary">Get now for free</button>
          <button className="btn btn-text flex items-center gap-1">
            <span> Learn more</span> <GoArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
