"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/placeholder.svg?height=400&width=800&text=Frutas+y+Verduras+Frescas",
    alt: "Frutas y verduras frescas",
    title: "Productos Frescos Diarios",
  },
  {
    src: "/placeholder.svg?height=400&width=800&text=Carnes+de+Calidad",
    alt: "Carnes de calidad",
    title: "Carnes Seleccionadas",
  },
  {
    src: "/placeholder.svg?height=400&width=800&text=Recetas+Saludables",
    alt: "Recetas saludables",
    title: "Recetas con Ingredientes Frescos",
  },
  {
    src: "/placeholder.svg?height=400&width=800&text=Local+Familiar",
    alt: "Nuestro local familiar",
    title: "Atención Personalizada",
  },
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="relative h-64 md:h-96">
              <img
                src={carouselImages[currentIndex].src || "/placeholder.svg"}
                alt={carouselImages[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{carouselImages[currentIndex].title}</h3>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-button text-white hover:bg-white/20 w-12 h-12"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-button text-white hover:bg-white/20 w-12 h-12"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white shadow-lg" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
