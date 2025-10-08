"use client"

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const productosDestacados = [
  {
    id: '1',
    nombre: "Sandía Brasilera",
    precio: 2000,
    categoria: "Frutas",
    imagen: "/images/sandiabrasilera.png",
    descuento: "10% OFF"
  },
  {
    id: '2',
    nombre: "Frutillas",
    precio: 11000,
    categoria: "Frutas",
    imagen: "/images/frutillas.png",
    descuento: "15% OFF"
  },
  {
    id: '3',
    nombre: "Melón",
    precio: 4600,
    categoria: "Frutas",
    imagen: "/images/melon.png",
    descuento: "12% OFF"
  },
  {
    id: '4',
    nombre: "Ananá",
    precio: 7800,
    categoria: "Frutas",
    imagen: "/images/anana.png",
    descuento: "10% OFF"
  },
  {
    id: '5',
    nombre: "Uvas",
    precio: 12000,
    categoria: "Frutas",
    imagen: "/images/uvas.png",
    descuento: "18% OFF"
  },
  {
    id: '6',
    nombre: "Lechuga hidroponica",
    precio: 1800,
    categoria: "Verduras",
    imagen: "/images/lechugahidroponica.png",
    descuento: "20% OFF"
  },
  // {
  //   id: '9',
  //   nombre: "Rúcula hidroponica",
  //   precio: 1500,
  //   categoria: "Verduras",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Rúcula",
  //   descuento: "10% OFF"
  // },
  {
    id: '10',
    nombre: "Achicoria Hidropónica",
    precio: 1650,
    categoria: "Verduras",
    imagen: "/images/achicoria.png",
    descuento: "10% OFF"
  },
  // {
  //   id: '11',
  //   nombre: "Hidropónica",
  //   precio: 3500,
  //   categoria: "Verduras",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Hidropónica",
  //   descuento: "12% OFF"
  // },
  // {
  //   id: '12',
  //   nombre: "Medallón de Merluza",
  //   precio: 8400,
  //   categoria: "Pescados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Medallón+de+",
  //   descuento: "20% OFF"
  // },
  // {
  //   id: '13',
  //   nombre: "Nuggets",
  //   precio: 8900,
  //   categoria: "Congelados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Nuggets",
  //   descuento: "18% OFF"
  // },
  // {
  //   id: '14',
  //   nombre: "Medallón de Pollo",
  //   precio: 8400,
  //   categoria: "Congelados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Medallón+de+Pollo",
  //   descuento: "15% OFF"
  // },
  // {
  //   id: '15',
  //   nombre: "Filet de Merluza a las Finas Hierbas",
  //   precio: 11000,
  //   categoria: "Pescados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Filet+Merluza+Finas+Hierbas",
  //   descuento: "18% OFF"
  // },
  // {
  //   id: '16',
  //   nombre: "Barritas de Muzzarella",
  //   precio: 13500,
  //   categoria: "Congelados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Barritas+de+Muzzarella",
  //   descuento: "22% OFF"
  // },
  // {
  //   id: '17',
  //   nombre: "Tortilla de Espinaca",
  //   precio: 8150,
  //   categoria: "Congelados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Tortilla+de+Espinaca",
  //   descuento: "15% OFF"
  // },
  // {
  //   id: '18',
  //   nombre: "Papas Congeladas",
  //   precio: 4500,
  //   categoria: "Congelados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Papas+Congeladas",
  //   descuento: "10% OFF"
  // },
  // {
  //   id: '19',
  //   nombre: "Rabas",
  //   precio: 24200,
  //   categoria: "Pescados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Rabas",
  //   descuento: "20% OFF"
  // },
  // {
  //   id: '20',
  //   nombre: "Papas Noisette",
  //   precio: 9000,
  //   categoria: "Congelados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Papas+Noisette",
  //   descuento: "12% OFF"
  // },
  // {
  //   id: '21',
  //   nombre: "Milanesas de Soja",
  //   precio: 7500,
  //   categoria: "Congelados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Milanesas+de+Soja",
  //   descuento: "15% OFF"
  // },
  // {
  //   id: '22',
  //   nombre: "Patitas de Pollo",
  //   precio: 8400,
  //   categoria: "Congelados",
  //   imagen: "/placeholder.svg?height=200&width=200&text=Patitas+de+Pollo",
  //   descuento: "18% OFF"
  // }
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
    <section className="py-16">
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
