"use client"
import avatar1 from "@/assets/avatar-1.png"
import avatar2 from "@/assets/avatar-2.png"
import avatar3 from "@/assets/avatar-3.png"
import avatar4 from "@/assets/avatar-4.png"
import avatar5 from "@/assets/avatar-5.png"
import avatar6 from "@/assets/avatar-6.png"
import avatar7 from "@/assets/avatar-7.png"
import avatar8 from "@/assets/avatar-8.png"
import avatar9 from "@/assets/avatar-9.png"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { motion, useInView } from "framer-motion"
import React, { useEffect, useRef } from "react"
interface Testimonial {
  text: string
  imageSrc: string
  name: string
  username: string
}

const testimonials: Testimonial[] = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
]

// 3 columns
const firstColumn: Testimonial[] = testimonials.slice(0, 3)
const secondColmun: Testimonial[] = testimonials.slice(3, 6)
const thirdColumn: Testimonial[] = testimonials.slice(6, 9)

export const TestimonialColumn = ({
  testimonials,
  classNames,
  duration,
}: {
  testimonials: Testimonial[]
  classNames?: string
  duration?: number
}) => {
  return (
    <div className={twMerge(classNames)}>
      <motion.div
        className={twMerge("flex flex-col gap-6 pb-6 ")}
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {/* // double the items to repeat on 50% distance which is 100% width for each, resulting looping effect */}
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div>
                  <p>{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={testimonial.imageSrc}
                    alt="user"
                    height={40}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <span className="font-medium leading-5 tracking-tight">
                      {testimonial.name}
                    </span>
                    <span className="leading-5 tracking-tighter">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

export const Testimonials = ({
  setActive,
}: {
  setActive: (value: string) => void
}) => {
  const testimonialRef = useRef(null)

  const isInView = useInView(testimonialRef)

  useEffect(() => {
    if (isInView) setActive("testimonials")
  }, [isInView])

  return (
    <section id="testimonials" ref={testimonialRef}>
      <div className="container mx-auto">
        <div className="section-header">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title gradient-text mt-5">
            What our users say
          </h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex mt-14 justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          {/*Column 1:mask-image */}
          <TestimonialColumn testimonials={firstColumn} duration={15} />
          {/*Column 2:mask-image */}
          <TestimonialColumn
            testimonials={secondColmun}
            classNames="hidden md:block"
            duration={19}
          />
          {/*Column 3:mask-image */}
          <TestimonialColumn
            testimonials={thirdColumn}
            classNames="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}
