import QuantumLogo from "@/assets/logo-quantum.png"
import CelestialLogo from "@/assets/logo-celestial.png"
import AcmeLogo from "@/assets/logo-acme.png"
import EchoLogo from "@/assets/logo-echo.png"
import PulseLogo from "@/assets/logo-pulse.png"
import ApexLogo from "@/assets/logo-apex.png"
import Image from "next/image"
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
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
          </div>
        </div>
      </div>
    </div>
  )
}
