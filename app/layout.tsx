import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { ToastProvider } from "@/contexts/toast-context"
import { OffersSystem } from "@/components/offers-system"
import { OffersDebug } from "@/components/offers-debug"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "El Bienestar de tu Vida - Verdulería y Carnicería",
  description:
    "Tu lugar para elegir salud y frescura. Frutas, verduras y carnes frescas en San José de la Dormida, Córdoba.",
  keywords: "verdulería, carnicería, frutas frescas, verduras, carnes, San José de la Dormida, Córdoba",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ToastProvider>
          <CartProvider>
            {children}
            <OffersSystem />
            {/* <OffersDebug /> */}
          </CartProvider>
        </ToastProvider>
        <Analytics />
      </body>
    </html>
  )
}
