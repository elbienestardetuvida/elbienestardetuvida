"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/images/recetas1.png",
    alt: "Frutas y verduras frescas",
    title: "El Bienestar de tu Vida",
  },
  {
    src: "/images/recetas2.png",
    alt: "Carnes de calidad",
    title: "El Bienestar de tu Vida",
  },
  {
    src: "/images/recetas3.png",
    alt: "Recetas saludables",
    title: "El Bienestar de tu Vida",
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
            {/* Contenedor con aspect ratio 1100:750 (22:15) */}
            <div className="relative w-full" style={{ aspectRatio: '22/15' }}>
              <img
                src={carouselImages[currentIndex].src || "/placeholder.svg"}
                alt={carouselImages[currentIndex].alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  {carouselImages[currentIndex].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 glass-button text-white hover:bg-white/20 w-10 h-10 md:w-12 md:h-12 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 glass-button text-white hover:bg-white/20 w-10 h-10 md:w-12 md:h-12 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 md:mt-6 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white shadow-lg scale-110" : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
