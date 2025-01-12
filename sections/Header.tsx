import Image from "next/image"
import { GoArrowRight } from "react-icons/go"
import Right from "@/assets/right.svg"
import Logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      {/* Banner */}
      <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-3">
        <p className="text-white/70 hidden md:block">
          Unlock Your Business’s Full Potential in the Digital Era 🌐✨
        </p>
        <div className="flex gap-1 items-center border-b border-transparent hover:border-gray-200 duration-200 cursor-pointer">
          <span className="">
            Get Started for Free — Transform Your Business Today 🚀
          </span>
          <GoArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Navbar */}
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="logo" height={40} width={40} />
          <span className="text-lg font-semibold text-black/80 hidden sm:block">
            SaaSify
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-black/70 items-center">
          <a href="#" className="hover:text-black transition-colors">
            About
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Customers
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Updates
          </a>
          <a href="#" className="hover:text-black transition-colors">
            Help
          </a>
          <button className="btn btn-primary px-6 py-2">Get for free</button>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="block md:hidden">
          <Image src={MenuIcon} alt="menuicon" height={24} width={24} />
        </button>
      </div>
    </header>
  )
}
