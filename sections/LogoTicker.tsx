"use client"
import QuantumLogo from "@/assets/logo-quantum.png"
import CelestialLogo from "@/assets/logo-celestial.png"
import AcmeLogo from "@/assets/logo-acme.png"
import EchoLogo from "@/assets/logo-echo.png"
import PulseLogo from "@/assets/logo-pulse.png"
import ApexLogo from "@/assets/logo-apex.png"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
export const LogoTicker = () => {
  const logoRef = useRef<HTMLDivElement>(null)
  // Parallax Effect for logo container---
  // const { scrollYProgress } = useScroll({
  //   target: logoRef,
  //   offset: ["0.1 1", "1 0.1"],
  // })

  // const x = useTransform(scrollYProgress, [0, 1], [-350, 350])

  // const x = "-50%"

  return (
    <div ref={logoRef} className="py-8 md:py-12 bg-white">
      <div className="">
        <div className="flex max-w-[80%] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* Logo First set 1 */}
            <Image src={AcmeLogo} alt="acme logo" className="logo-ticker-img" />
            <Image
              src={QuantumLogo}
              alt="quantum logo"
              className="logo-ticker-img"
            />
            <Image src={EchoLogo} alt="echo logo" className="logo-ticker-img" />
            <Image
              src={CelestialLogo}
              alt="celestial logo"
              className="logo-ticker-img"
            />
            <Image
              src={PulseLogo}
              alt="pulse logo"
              className="logo-ticker-img"
            />
            <Image src={ApexLogo} alt="apex logo" className="logo-ticker-img" />
            {/* Logo First set 2 */}
            <Image src={AcmeLogo} alt="acme logo" className="logo-ticker-img" />
            <Image
              src={QuantumLogo}
              alt="quantum logo"
              className="logo-ticker-img"
            />
            <Image src={EchoLogo} alt="echo logo" className="logo-ticker-img" />
            <Image
              src={CelestialLogo}
              alt="celestial logo"
              className="logo-ticker-img"
            />
            <Image
              src={PulseLogo}
              alt="pulse logo"
              className="logo-ticker-img"
            />
            <Image src={ApexLogo} alt="apex logo" className="logo-ticker-img" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
