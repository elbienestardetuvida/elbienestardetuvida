"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state } = useCart()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="glass-header sticky top-0 z-50 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4 pb-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="El Bienestar de tu Vida"
              width={45}
              height={45}
              className="rounded-full"
            />
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg drop-shadow-sm">El Bienestar</h1>
              <p className="text-white/80 text-xs drop-shadow-sm">de tu Vida</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link-header text-white hover:text-green-500">
              Inicio
            </Link>
            <Link href="/ofertas" className="nav-link-header text-white hover:text-green-500">
              Ofertas
            </Link>
            <Link href="/recetas" className="nav-link-header text-white hover:text-green-500">
              Recetas
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              className="relative glass-button text-white hover:text-white"
              onClick={() => {
                const cartElement = document.getElementById("cart-sidebar")
                if (cartElement) {
                  cartElement.classList.toggle("translate-x-full")
                }
              }}
            >
              <ShoppingCart className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.cantidad, 0)}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glass-button text-white hover:text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 glass-card mt-2 rounded-2xl bg-black/20 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="nav-link-mobile px-4 py-2 text-white hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                🏠 Inicio
              </Link>
              <Link
                href="/ofertas"
                className="nav-link-mobile px-4 py-2 text-white hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                🏷️ Ofertas
              </Link>
              <Link
                href="/recetas"
                className="nav-link-mobile px-4 py-2 text-white hover:text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                👩‍🍳 Recetas
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
