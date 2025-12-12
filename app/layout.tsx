import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "BiteTogether - Kết nối bạn bè qua món ăn",
  description:
    "Ứng dụng mạng xã hội kết nối bạn bè xung quanh niềm đam mê ẩm thực. Chia sẻ, khám phá và thưởng thức cùng nhau.",
  generator: "v0.app",
  keywords: ["food", "social", "friends", "sharing", "restaurant", "cooking"],
}

export const viewport: Viewport = {
  themeColor: "#FFC526",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${plusJakarta.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
