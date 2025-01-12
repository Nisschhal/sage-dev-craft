import Image from "next/image"
import { GoArrowRight } from "react-icons/go"
import Right from "@/assets/right.svg"
import Logo from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"
export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        {/* Banner */}
        <p className="text-white/60 hidden md:block">
          Streamline your business and let it grow
        </p>
        <div className="flex gap-1 items-center">
          <p>Get started for free</p>
          {/* <Image
            src={Right}
            alt="arrow right"
            className="border-white text-white"
          /> */}
          <GoArrowRight />
        </div>
      </div>
      {/* Navbar */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="logo" height={40} width={40} />
          <Image src={MenuIcon} alt="menuicon" />

          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
