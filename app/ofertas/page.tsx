import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Cart } from "@/components/cart"
import { ProductCard } from "@/components/product-card"
import { ToastContainer } from "@/components/toast-container"
import { FloatingCircles } from "@/components/floating-circles"

const ofertas = [
  {
    id: "1",
    nombre: "Tomates Frescos",
    precio: 800,
    categoria: "Verduras",
    imagen: "/placeholder.svg?height=200&width=200&text=Tomates+Frescos",
    descuento: "20% OFF",
  },
  {
    id: "2",
    nombre: "Manzanas Rojas",
    precio: 1200,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Manzanas+Rojas",
    descuento: "15% OFF",
  },
  {
    id: "3",
    nombre: "Carne de Res",
    precio: 3500,
    categoria: "Carnes",
    imagen: "/placeholder.svg?height=200&width=200&text=Carne+de+Res",
    descuento: "10% OFF",
  },
  {
    id: "4",
    nombre: "Naranjas Jugosas",
    precio: 900,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Naranjas+Jugosas",
    descuento: "25% OFF",
  },
  {
    id: "5",
    nombre: "Lechuga Criolla",
    precio: 600,
    categoria: "Verduras",
    imagen: "/placeholder.svg?height=200&width=200&text=Lechuga+Criolla",
    descuento: "30% OFF",
  },
  {
    id: "6",
    nombre: "Pollo Fresco",
    precio: 2800,
    categoria: "Carnes",
    imagen: "/placeholder.svg?height=200&width=200&text=Pollo+Fresco",
    descuento: "12% OFF",
  },
  {
    id: "7",
    nombre: "Bananas",
    precio: 700,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Bananas",
    descuento: "18% OFF",
  },
  {
    id: "8",
    nombre: "Zanahorias",
    precio: 500,
    categoria: "Verduras",
    imagen: "/placeholder.svg?height=200&width=200&text=Zanahorias",
    descuento: "22% OFF",
  },
]

export default function OfertasPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">Ofertas Semanales</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
              Los mejores precios en productos frescos y de calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ofertas.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-sm">
                ¡Ofertas válidas hasta agotar stock!
              </h3>
              <p className="text-white/90 drop-shadow-sm">
                Visitanos en Calle Pte. Perón 501, San José de la Dormida, Córdoba
              </p>
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
