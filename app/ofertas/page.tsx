import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Cart } from "@/components/cart"
import { ProductCard } from "@/components/product-card"
import { ToastContainer } from "@/components/toast-container"
import { FloatingCircles } from "@/components/floating-circles"

const ofertas = [
  // 🥩 CARNICERÍA
  {
    id: "1",
    nombre: "Asado Surtido Día de la Madre (5kg)",
    precio: 50000,
    categoria: "Carnicería",
    imagen: "/images/asadodiadelamadre.png",
    descuento: null,
  },
  {
    id: "2",
    nombre: "Osobuco (1kg)",
    precio: 6300,
    categoria: "Carnicería",
    imagen: "/images/osobuco.png",
    descuento: null,
  },
  {
    id: "3",
    nombre: "Pata y Muslo (2kg)",
    precio: 5900,
    categoria: "Carnicería",
    imagen: "/images/pata-muslo.png",
    descuento: null,
  },
  {
    id: "4",
    nombre: "Pechuga (2kg)",
    precio: 15900,
    categoria: "Carnicería",
    imagen: "/images/pechuga.png",
    descuento: null,
  },
  {
    id: "5",
    nombre: "Alitas (3kg)",
    precio: 6800,
    categoria: "Carnicería",
    imagen: "/images/alitas.png",
    descuento: null,
  },
  {
    id: "6",
    nombre: "Milanesas de Carne (2kg)",
    precio: 18000,
    categoria: "Carnicería",
    imagen: "/images/milanesasdecarne.png",
    descuento: null,
  },

  // 🥕 VERDULERÍA Y FRUTAS
  {
    id: "7",
    nombre: "Bolson de Frutas Mix (2.5kg)",
    precio: 6500,
    categoria: "Frutas",
    imagen: "/images/bolson-fruta.png",
    descuento: null,
  },
  {
    id: "8",
    nombre: "Combo 2kg Papas + 2kg Cebolla",
    precio: 2800,
    categoria: "Verdulería",
    imagen: "/images/papasycebolla.png",
    descuento: null,
  },
  {
    id: "9",
    nombre: "Papas (4kg)",
    precio: 2000,
    categoria: "Verdulería",
    imagen: "/images/papas.png",
    descuento: null,
  },
  {
    id: "10",
    nombre: "Zanahorias (2kg)",
    precio: 2300,
    categoria: "Verdulería",
    imagen: "/images/zanahorias.png",
    descuento: null,
  },
];


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
