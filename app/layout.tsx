import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { twMerge } from "tailwind-merge"
const dm_sans = DM_Sans({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sage Dev Craft",
  description: "Best way to build website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={twMerge(dm_sans.className, "antialiased")}>
        {children}
      </body>
    </html>
  )
}
