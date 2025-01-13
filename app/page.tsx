"use client"
import { CallToAction } from "@/sections/CallToAction"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { Hero } from "@/sections/Hero"
import { LogoTicker } from "@/sections/LogoTicker"
import { Pricing } from "@/sections/Pricing"
import { ProductShowcase } from "@/sections/ProductShowcase"
import { Testimonials } from "@/sections/Testimonials"
import { useState } from "react"
export default function Home() {
  const [active, setActive] = useState("home")
  return (
    <>
      <Header active={active} setActive={setActive} />
      <Hero setActive={setActive} />
      <LogoTicker />
      <ProductShowcase setActive={setActive} />
      <Pricing setActive={setActive} />
      <Testimonials setActive={setActive} />
      <CallToAction setActive={setActive} />
      <Footer />
    </>
  )
}
