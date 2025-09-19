import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Cart } from "@/components/cart"
import { recetas } from "@/data/recetas"
import { notFound } from "next/navigation"
import { Clock, Users, ChefHat } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ToastContainer } from "@/components/toast-container"
import { FloatingCircles } from "@/components/floating-circles"

interface RecipePageProps {
  params: {
    slug: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  const receta = recetas.find((r) => r.slug === params.slug)

  if (!receta) {
    notFound()
  }

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
          <div className="max-w-4xl mx-auto">
            <Link href="/recetas">
              <Button
                variant="outline"
                className="mb-6 glass-card bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                ← Volver a Recetas
              </Button>
            </Link>

            <div className="glass-card p-8 mb-8">
              <img
                src={receta.imagen || "/placeholder.svg"}
                alt={receta.nombre}
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-6"
              />

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{receta.nombre}</h1>

              <p className="text-xl text-white/90 mb-6 drop-shadow-sm">{receta.descripcion}</p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{receta.tiempo}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">{receta.porciones}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <ChefHat className="w-5 h-5" />
                  <Badge className="bg-orange-200 text-orange-800 border-orange-300">{receta.dificultad}</Badge>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center drop-shadow-sm">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">
                    1
                  </span>
                  Ingredientes
                </h2>
                <ul className="space-y-3">
                  {receta.ingredientes.map((ingrediente, index) => (
                    <li key={index} className="flex items-center text-white/90">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {ingrediente}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center drop-shadow-sm">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">
                    2
                  </span>
                  Preparación
                </h2>
                <ol className="space-y-4">
                  {receta.pasos.map((paso, index) => (
                    <li key={index} className="flex text-white/90">
                      <span className="bg-orange-200 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{paso}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="glass-card p-6 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-sm">
                ¡Conseguí todos los ingredientes en nuestro local!
              </h3>
              <p className="text-white/90 mb-4 drop-shadow-sm">
                Productos frescos y de la mejor calidad para que tu receta quede perfecta
              </p>
              <Link href="/ofertas">
                <Button className="bg-green-500 hover:bg-green-600 text-white">Ver Productos en Oferta</Button>
              </Link>
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
