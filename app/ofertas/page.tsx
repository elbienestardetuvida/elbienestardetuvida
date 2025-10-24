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
    nombre: "Puchero",
    precio: 5500,
    categoria: "Carnicería",
    imagen: "/images/osobuco.png",
    descuento: null,
  },
  {
    id: "2",
    nombre: "Agujas",
    precio: 7500,
    categoria: "Carnicería",
    imagen: "/images/agujas.png",
    descuento: null,
  },
  {
    id: "3",
    nombre: "Pulpa de cerdo",
    precio: 6500,
    categoria: "Carnicería",
    imagen: "/images/pulpadecerdo.png",
    descuento: null,
  },
  {
    id: "4",
    nombre: "Carne molida (2kg)",
    precio: 16000,
    categoria: "Carnicería",
    imagen: "/images/molida.png",
    descuento: null,
  },
  {
    id: "5",
    nombre: "Pollo fresco (kg)",
    precio: 3500,
    categoria: "Carnicería",
    imagen: "/images/pollofresco.png",
    descuento: null,
  },
  {
    id: "6",
    nombre: "Pata y Muslo (2kg)",
    precio: 5800,
    categoria: "Carnicería",
    imagen: "/images/pata-muslo.png",
    descuento: null,
  },
  {
    id: "7",
    nombre: "Menudo (2kg)",
    precio: 2000,
    categoria: "Carnicería",
    imagen: "/images/menudo.png",
    descuento: null,
  },
  {
    id: "8",
    nombre: "Alitas (2kg)",
    precio: 5500,
    categoria: "Carnicería",
    imagen: "/images/alitas.png",
    descuento: null,
  },

  // 🥕 VERDULERÍA Y FRUTAS
  {
    id: "9",
    nombre: "Tomate (2kg)",
    precio: 6500,
    categoria: "Verdulería",
    imagen: "/images/tomate.png",
    descuento: null,
  },
  {
    id: "10",
    nombre: "Brócoli (unidad)",
    precio: 2500,
    categoria: "Verdulería",
    imagen: "/iamges/brocoli.pnh",
    descuento: null,
  },
  {
    id: "11",
    nombre: "Acelga",
    precio: 700,
    categoria: "Verdulería",
    imagen: "/images/acelga.png",
    descuento: null,
  },
  {
    id: "12",
    nombre: "Naranja (2kg)",
    precio: 2000,
    categoria: "Frutas",
    imagen: "/images/naranja.png",
    descuento: null,
  },
  {
    id: "13",
    nombre: "Banana (2kg)",
    precio: 4900,
    categoria: "Frutas",
    imagen: "/images/bananas.png",
    descuento: null,
  },
  {
    id: "14",
    nombre: "Lechuga Repollada (kg)",
    precio: 950,
    categoria: "Verdulería",
    imagen: "/images/lechugarepollada.png",
    descuento: null,
  },
  {
    id: "15",
    nombre: "Papa (2kg)",
    precio: 950,
    categoria: "Verdulería",
    imagen: "/images/papas.png",
    descuento: null,
  },
  {
    id: "16",
    nombre: "Cebolla (2kg)",
    precio: 1300,
    categoria: "Verdulería",
    imagen: "/images/cebolla.png",
    descuento: null,
  },
  {
    id: "17",
    nombre: "Paltas (3 unidades)",
    precio: 3500,
    categoria: "Frutas",
    imagen: "/images/paltas.png",
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
