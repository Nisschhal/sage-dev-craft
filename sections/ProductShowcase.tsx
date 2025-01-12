import productImage from "@/assets/product-image.png"
import Image from "next/image"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container ">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <h2 className="tag">Boost Your Sales with Modern Solutions</h2>
          </div>
          <h2 className="text-3xl md:text-[54px] md:leading-[60px] gradient-text text-center mt-5">
            Unlock New Opportunities for Your Business
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
            Transform your business with modern tools—digitize your operations,
            streamline marketing, and effortlessly track sales with a fully
            responsive website ready in days. Stay ahead with professional,
            future-ready solutions tailored for your success.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="product image"
            className="hidden md:block absolute -top-32 -right-36"
            height={262}
            width={262}
          />
          <Image
            src={tubeImage}
            alt="product image"
            className="hidden md:block absolute bottom-24 -left-28"
            height={248}
            width={226}
          />
        </div>
      </div>
    </section>
  )
}
