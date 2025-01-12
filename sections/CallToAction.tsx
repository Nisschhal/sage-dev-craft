import { twMerge } from "tailwind-merge"
export const CallToAction = ({
  className,
  icon,
  variant,
}: {
  className?: string
  icon?: React.ReactNode
  variant?: string
}) => {
  return (
    <button
      className={twMerge(
        "py-2 px-4 rounded-lg bg-black",
        variant && "bg-transparent text-black"
      )}
    >
      {label} {icon && icon}
    </button>
  )
}
