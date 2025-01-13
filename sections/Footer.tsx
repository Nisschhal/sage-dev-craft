import Logo from "@/assets/logosaas.png"
import Image from "next/image"
import {
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitchFill,
  RiTwitterFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri"

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className=" px-8 mx-auto">
        {" "}
        {/* Logo */}
        <div className="inline-flex flex-col items-center  ">
          <Image
            src={Logo}
            alt="logo"
            height={40}
            width={40}
            className="relative"
          />
          <span className="text-lg font-semibold bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb29,#71c2ef,#ebffff,#dd7ddf)] text-transparent bg-clip-text">
            ../SageCraftDev
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <a href="#home" className="hover:text-black transition-colors">
            Home
          </a>
          <a href="#features" className="hover:text-black transition-colors">
            Features
          </a>

          <a href="#pricing" className="hover:text-black transition-colors">
            Pricing
          </a>
          <a
            href="#testimonials"
            className="hover:text-black transition-colors"
          >
            Testimonials
          </a>
        </nav>
        {/* Socials */}
        <div className="flex justify-center gap-6 mt-6">
          <RiInstagramFill />
          <RiFacebookFill />
          <RiTwitterXFill />
          <RiPinterestFill />
          <RiYoutubeFill />
        </div>
        {/* Copyright */}
        <p className="text-xs mt-6">
          &copy; 2024 SageCraftDev. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
