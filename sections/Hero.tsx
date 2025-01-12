import Cog from "@/assets/cog.png"
import { CallToAction } from "./CallToAction"
export const Hero = () => {
  return (
    <div className="p-5 pt-8 pb-20">
      {/* Hero text */}
      <p>Future has here</p>
      <h1>The Only Solution for you Business</h1>
      <p>You have ideas, we have solutions</p>
      <p>Transform you business marks into digital footprint</p>
      <div className="flex flex-start">
        <CallToAction>Get Started</CallToAction>
      </div>
    </div>
  )
}
