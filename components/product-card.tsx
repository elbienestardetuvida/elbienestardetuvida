"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/contexts/toast-context"

interface Producto {
  id: string
  nombre: string
  precio: number
  categoria: string
  imagen: string
  descuento?: string
}

interface ProductCardProps {
  producto: Producto
}

const getCategoryColor = (categoria: string) => {
  switch (categoria) {
    case "Frutas":
      return "bg-orange-500/20 text-orange-700 border-orange-300"
    case "Verduras":
      return "bg-green-500/20 text-green-700 border-green-300"
    case "Carnes":
      return "bg-red-500/20 text-red-700 border-red-300"
    default:
      return "bg-gray-500/20 text-gray-700 border-gray-300"
  }
}

export function ProductCard({ producto }: ProductCardProps) {
  const { dispatch } = useCart()
  const { addToast } = useToast()

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria,
      },
    })

    // Show success toast
    addToast(`✅ ${producto.nombre} agregado al carrito`, "success")
  }

  return (
    <Card className="glass-card hover:scale-105 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <img
            src={producto.imagen || "/placeholder.svg"}
            alt={producto.nombre}
            className="w-full h-48 object-cover rounded-lg"
          />
          {producto.descuento && (
            <Badge className="absolute top-2 right-2 bg-red-500 text-white font-bold">{producto.descuento}</Badge>
          )}
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white drop-shadow-sm">{producto.nombre}</h3>

          <Badge className={`${getCategoryColor(producto.categoria)} font-medium`}>{producto.categoria}</Badge>

          <div className="text-2xl font-bold text-white drop-shadow-sm">${producto.precio.toLocaleString()}/kg</div>

          <Button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-full transition-all duration-300 transform group-hover:scale-105"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Agregar al Carrito
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
