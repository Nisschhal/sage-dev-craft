import { GoCheckbox } from "react-icons/go"
import { twMerge } from "tailwind-merge"
interface PricingPlan {
  title: string
  monthlyPrice: number
  buttonText: string
  popular: boolean
  inverse: boolean
  features: string[]
}

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
]

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="section-heading">
          <h2 className="section-title gradient-text">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimiated tasks, better security, and
            exclusive features.
          </p>
        </div>
        {/* Price Cards */}
        <div className="flex flex-col gap-6 items-center mt-5 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((pricing: PricingPlan, index: number) => (
            <div
              key={index}
              className={twMerge(
                `p-10 border border-[#f1f1f1] rounded-3xl shadow-[0_7px_14px_#d2d2d2] max-w-xs w-full`,
                pricing.inverse == true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/60",
                    pricing.inverse === true && "text-white/60"
                  )}
                >
                  {pricing.title}
                </h3>
                {/* Show popular  */}
                {pricing.popular === true && (
                  <div>
                    <div className="inline-flex text-sm  px-4 py-1.5 rounded-xl border border-white/20">
                      <span className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb29,#71c2ef,#ebffff,#dd7ddf)] text-transparent bg-clip-text">
                        Popular
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-7">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${pricing.monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/60">
                  /month
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full mt-7",
                  pricing.inverse === true && "bg-white text-black"
                )}
              >
                {pricing.buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {pricing.features.map((feature, idx) => (
                  <li key={idx} className="text-sm flex items-center gap-2">
                    <GoCheckbox />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
