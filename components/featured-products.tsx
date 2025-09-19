import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'

const productosDestacados = [
  {
    id: '1',
    nombre: "Tomates Frescos",
    precio: 800,
    categoria: "Verduras",
    imagen: "/placeholder.svg?height=200&width=200&text=Tomates+Frescos",
    descuento: "20% OFF"
  },
  {
    id: '2',
    nombre: "Manzanas Rojas",
    precio: 1200,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Manzanas+Rojas",
    descuento: "15% OFF"
  },
  {
    id: '4',
    nombre: "Naranjas Jugosas",
    precio: 900,
    categoria: "Frutas",
    imagen: "/placeholder.svg?height=200&width=200&text=Naranjas+Jugosas",
    descuento: "25% OFF"
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Productos Destacados
          </h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Los mejores productos frescos con ofertas especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {productosDestacados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
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
    </section>
  )
}
