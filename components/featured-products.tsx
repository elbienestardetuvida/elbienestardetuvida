"use client"

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const productosDestacados = [
  {
    id: '1',
    nombre: "Tomates Frescos",
    precio: 800,
    categoria: "Verduras",
    imagen: "/placeholder.svg?height=200&width=200&text=Tomates+Frescos",
    descuento: "20% OFF"
  },
  {
    id: '2',
    nombre: "Manzanas Rojas",
    precio: 1200,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Manzanas+Rojas",
    descuento: "15% OFF"
  },
  {
    id: '3',
    nombre: "Naranjas Jugosas",
    precio: 900,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Naranjas+Jugosas",
    descuento: "25% OFF"
  },
  {
    id: '4',
    nombre: "Lechuga Hidropónica",
    precio: 600,
    categoria: "Verduras",
    imagen: "/placeholder.svg?height=200&width=200&text=Lechuga+Hidropónica",
    descuento: "30% OFF"
  },
  {
    id: '5',
    nombre: "Bananas Orgánicas",
    precio: 1000,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Bananas+Orgánicas",
    descuento: "18% OFF"
  },
  {
    id: '6',
    nombre: "Zanahorias Frescas",
    precio: 750,
    categoria: "Verduras",
    imagen: "/placeholder.svg?height=200&width=200&text=Zanahorias+Frescas",
    descuento: "22% OFF"
  },
  {
    id: '7',
    nombre: "Limones Jugosos",
    precio: 850,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Limones+Jugosos",
    descuento: "15% OFF"
  },
  {
    id: '8',
    nombre: "Espinacas Orgánicas",
    precio: 950,
    categoria: "Verduras",
    imagen: "/placeholder.svg?height=200&width=200&text=Espinacas+Orgánicas",
    descuento: "28% OFF"
  }
]

export function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      const currentScroll = scrollContainerRef.current.scrollLeft
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })

      // Actualizar botones después del scroll
      setTimeout(() => {
        checkScrollButtons()
      }, 300)
    }
  }

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const handleScroll = () => {
    checkScrollButtons()
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🥬 Productos Destacados
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Los mejores productos frescos con ofertas especiales
          </p>
        </div>

        {/* Contenedor de scroll horizontal */}
        <div className="relative mb-8">
          {/* Botón izquierdo */}
          <Button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 ${
              canScrollLeft ? 'shadow-lg' : ''
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Botón derecho */}
          <Button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 ${
              canScrollRight ? 'shadow-lg' : ''
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Contenedor de productos con scroll */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {productosDestacados.map((producto) => (
              <div key={producto.id} className="flex-shrink-0 w-72">
                <ProductCard producto={producto} />
              </div>
            ))}
          </div>

          {/* Indicador de scroll */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(productosDestacados.length / 3) }).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/30 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/ofertas">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver Todas las Ofertas →
            </Button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
