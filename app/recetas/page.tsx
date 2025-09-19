import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Cart } from "@/components/cart"
import { RecipeCard } from "@/components/recipe-card"
import { recetas } from "@/data/recetas"
import { ImageCarousel } from "@/components/image-carousel"
import { ToastContainer } from "@/components/toast-container"
import { FloatingCircles } from "@/components/floating-circles"

export default function RecetasPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-400 via-orange-300 to-orange-500">
      {/* Capa oscura encima del gradiente */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Círculos flotantes */}
      <FloatingCircles />

      {/* Contenido */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Recetas Saludables</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
              Deliciosas recetas con nuestros productos frescos para una alimentación saludable
            </p>
          </div>

          <ImageCarousel />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recetas.map((receta) => (
              <RecipeCard key={receta.slug} receta={receta} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-sm">
                ¡Todos los ingredientes los encontrás en nuestro local!
              </h3>
              <p className="text-white/90 drop-shadow-sm">Productos frescos y de calidad para tus recetas favoritas</p>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
        <Cart />
        <ToastContainer />
      </div>
    </div>
  )
}
