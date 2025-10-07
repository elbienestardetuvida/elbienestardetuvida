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
    nombre: "Pulpa en Trozo",
    precio: 10900,
    categoria: "Carnicería",
    imagen: "/images/pulpa en trozo.png",
    descuento: null,
  },
  {
    id: "2",
    nombre: "Agujas",
    precio: 7900,
    categoria: "Carnicería",
    imagen: "/images/agujas.png",
    descuento: null,
  },
  {
    id: "3",
    nombre: "Falda",
    precio: 7500,
    categoria: "Carnicería",
    imagen: "/images/ofertas/falda.png",
    descuento: null,
  },
  {
    id: "4",
    nombre: "Pata Muslo (2kg)",
    precio: 5700,
    categoria: "Carnicería",
    imagen: "/images/ofertas/pata-muslo.png",
    descuento: null,
  },
  {
    id: "5",
    nombre: "Alitas (3kg)",
    precio: 6500,
    categoria: "Carnicería",
    imagen: "/images/ofertas/alitas.png",
    descuento: null,
  },
  {
    id: "6",
    nombre: "Supremas (2kg)",
    precio: 16000,
    categoria: "Carnicería",
    imagen: "/images/ofertas/supremas.png",
    descuento: null,
  },
  {
    id: "7",
    nombre: "Pechuga (2kg)",
    precio: 15400,
    categoria: "Carnicería",
    imagen: "/images/ofertas/pechuga.png",
    descuento: null,
  },

  // 🥕 VERDULERÍA Y FRUTAS
  {
    id: "8",
    nombre: "Maples de Huevos (2)",
    precio: 10000,
    categoria: "Verdulería",
    imagen: "/images/ofertas/huevos.png",
    descuento: "15% OFF",
  },
  {
    id: "9",
    nombre: "Papas (3kg)",
    precio: 1500,
    categoria: "Verdulería",
    imagen: "/images/ofertas/papas.png",
    descuento: "15% OFF",
  },
  {
    id: "10",
    nombre: "Cebolla (2kg)",
    precio: 1300,
    categoria: "Verdulería",
    imagen: "/images/ofertas/cebolla.png",
    descuento: "15% OFF",
  },
  {
    id: "11",
    nombre: "Bolson Mix de Fruta",
    precio: 8500,
    categoria: "Frutas",
    imagen: "/images/ofertas/bolson-fruta.png",
    descuento: "15% OFF",
  },
  {
    id: "12",
    nombre: "Bolson de Verdura Familiar",
    precio: 8000,
    categoria: "Verdulería",
    imagen: "/images/ofertas/bolson-verdura.png",
    descuento: "15% OFF",
  },
  {
    id: "13",
    nombre: "Bolson Familiar (Tomate, Zanahoria, Zapallito, Lechuga, Acelga)",
    precio: 8000,
    categoria: "Verdulería",
    imagen: "/images/ofertas/bolson-familiar.png",
    descuento: "15% OFF",
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
