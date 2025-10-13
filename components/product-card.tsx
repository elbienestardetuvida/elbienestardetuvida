"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/contexts/toast-context"
import { motion } from "framer-motion"
import { cardHover, buttonBounce } from "@/lib/animations"

interface Producto {
  id: string
  nombre: string
  precio: number
  categoria: string
  imagen: string
  descuento?: string | null
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
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <Card className="glass-card transition-all duration-300 group overflow-hidden">
        <CardContent className="p-6">
          <motion.div 
            className="relative mb-4 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={producto.imagen || "/placeholder.svg"}
              alt={producto.nombre}
              className="w-full h-48 object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            {producto.descuento && (
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Badge className="absolute top-2 right-2 bg-red-500 text-white font-bold">
                  {producto.descuento}
                </Badge>
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h3 
              className="text-xl font-bold text-white drop-shadow-sm"
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {producto.nombre}
            </motion.h3>

            <Badge className={`${getCategoryColor(producto.categoria)} font-medium`}>
              {producto.categoria}
            </Badge>

            <motion.div 
              className="text-2xl font-bold text-white drop-shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              ${producto.precio.toLocaleString()}/kg
            </motion.div>

            <motion.div
              variants={buttonBounce}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 rounded-full transition-all duration-300"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Agregar al Carrito
              </Button>
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
