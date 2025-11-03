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
    nombre: "1KG Falda Económica",
    precio: 5000,
    categoria: "Carnicería",
    imagen: "/images/pulpadecerdo.png",
    descuento: null,
  },
  {
    id: "2",
    nombre: "2KG de Chorizos",
    precio: 14000,
    categoria: "Carnicería",
    imagen: "/images/chorizos.png",
    descuento: null,
  },
  {
    id: "3",
    nombre: "1KG Pulpa de Cerdo",
    precio: 6800,
    categoria: "Carnicería",
    imagen: "/images/pulpa-cerdo.png",
    descuento: null,
  },
  {
    id: "4",
    nombre: "1KG Bocado de Cerdo",
    precio: 6500,
    categoria: "Carnicería",
    imagen: "/images/bocado-cerdo.png",
    descuento: null,
  },
  {
    id: "5",
    nombre: "3KG de Asado Surtido (6 personas)",
    precio: 28000,
    categoria: "Carnicería",
    imagen: "/images/asado-surtido.png",
    descuento: null,
  },
  {
    id: "6",
    nombre: "4KG de Surtida (Todos los cortes)",
    precio: 32000,
    categoria: "Carnicería",
    imagen: "/images/surtida.png",
    descuento: null,
  },
  {
    id: "7",
    nombre: "Oferta Imperdible (½ Molida, ½ Costeleta, ½ Milanesas, ½ Agujas)",
    precio: 17000,
    categoria: "Carnicería",
    imagen: "/images/oferta-imperdible.png",
    descuento: null,
  },

  // 🥕 VERDULERÍA Y FRUTAS
  {
    id: "8",
    nombre: "2 Choclos",
    precio: 1200,
    categoria: "Verdulería",
    imagen: "/images/choclos.png",
    descuento: null,
  },
  {
    id: "9",
    nombre: "1KG de Limón",
    precio: 2600,
    categoria: "Verdulería",
    imagen: "/images/limon.png",
    descuento: null,
  },
  {
    id: "10",
    nombre: "3KG de Papas",
    precio: 1500,
    categoria: "Verdulería",
    imagen: "/images/papas.png",
    descuento: null,
  },
  {
    id: "11",
    nombre: "2KG de Cebollas + 1KG de Zanahoria",
    precio: 2700,
    categoria: "Verdulería",
    imagen: "/images/cebolla-zanahoria.png",
    descuento: null,
  },
  {
    id: "12",
    nombre: "1KG de Bananas",
    precio: 2500,
    categoria: "Frutas",
    imagen: "/images/bananas.png",
    descuento: null,
  },
  {
    id: "13",
    nombre: "2 Atados de Lechugín",
    precio: 2300,
    categoria: "Verdulería",
    imagen: "/images/lechugin.png",
    descuento: null,
  },
  {
    id: "14",
    nombre: "Bolson de Frutas",
    precio: 4900,
    categoria: "Frutas",
    imagen: "/images/bolson-frutas.png",
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
          {/* OFERTA IMPERDIBLE - SOLO POR HOY LUNES */}
          <div className="mb-12 relative overflow-hidden rounded-3xl border-4 border-orange-500 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 opacity-90"></div>
            <div className="relative z-10 p-8">
              {/* Header de la oferta */}
              <div className="text-center mb-8">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full mb-4 border-2 border-white/30">
                  <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg tracking-wider">
                    OFERTA IMPERDIBLE 🔥
                  </h2>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  SOLO POR HOY LUNES
                </p>
              </div>

              {/* Grid de ofertas especiales */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Costilla de Novillo */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      Kg Costilla de Novillo
                    </h3>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl py-4 px-6 mt-4">
                      <p className="text-4xl md:text-5xl font-black drop-shadow-md">$7.000</p>
                      <p className="text-sm md:text-base font-medium mt-1">por kilogramo</p>
                    </div>
                  </div>
                </div>

                {/* Puchero */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      Kg de Puchero
                    </h3>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl py-4 px-6 mt-4">
                      <p className="text-4xl md:text-5xl font-black drop-shadow-md">$5.000</p>
                      <p className="text-sm md:text-base font-medium mt-1">por kilogramo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer de la oferta */}
              <div className="text-center mt-6">
                <p className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                  ⏰ ¡Aprovechá estas ofertas exclusivas de hoy! ⏰
                </p>
              </div>
            </div>
          </div>

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
