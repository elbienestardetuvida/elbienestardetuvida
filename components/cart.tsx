'use client'

import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { X, Plus, Minus, ShoppingBag, Clock, Sparkles, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

// Productos sugeridos para cross-selling
const productosSugeridos = [
  {
    id: 'sugerido-1',
    nombre: "Manzanas Rojas",
    precio: 1200,
    categoria: "Frutas",
    descuento: "15% OFF"
  },
  {
    id: 'sugerido-2',
    nombre: "Lechuga Hidropónica",
    precio: 600,
    categoria: "Verduras",
    descuento: "30% OFF"
  },
  {
    id: 'sugerido-3',
    nombre: "Naranjas Jugosas",
    precio: 900,
    categoria: "Frutas",
    descuento: "25% OFF"
  }
]

export function Cart() {
  const { state, dispatch } = useCart()
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false)

  const handleWhatsAppOrder = () => {
    if (state.items.length === 0) return

    const orderText = `¡Hola! Quiero hacer el siguiente pedido:\n\n${state.items
      .map(item => `• ${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toLocaleString()}`)
      .join('\n')}\n\n*Total: $${state.total.toLocaleString()}*\n\n📍 *¿A qué hora paso a retirar?*\n✅ Retiro flexible - Elegí tu horario\n\n¡Gracias!`

    const phoneNumber = "5493521418125"
    const encodedText = encodeURIComponent(orderText)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank')
  }

  const updateQuantity = (id: string, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, cantidad: newQuantity }
    })
  }

  const removeItem = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    })
  }

  const agregarProductoSugerido = (producto: typeof productosSugeridos[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        categoria: producto.categoria
      }
    })
  }

  return (
    <div
      id="cart-sidebar"
      className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50 glass-card overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green-200 bg-gradient-to-r from-green-50 to-green-100">
          <h2 className="text-2xl font-bold text-green-800 flex items-center">
            <ShoppingBag className="w-6 h-6 mr-2" />
            Mi Carrito
            {state.items.length > 0 && (
              <span className="ml-2 bg-green-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
                {state.items.length}
              </span>
            )}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const cartElement = document.getElementById('cart-sidebar')
              if (cartElement) {
                cartElement.classList.add('translate-x-full')
              }
            }}
            className="text-green-600 hover:text-green-800"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-green-300 mx-auto mb-4" />
              <p className="text-white text-lg font-semibold">Tu carrito está vacío</p>
              <p className="text-white text-sm mt-2 mb-4">¡Agregá productos frescos y aprovechá nuestras ofertas!</p>
              
              {/* Productos destacados cuando el carrito está vacío */}
              <div className="mt-6 space-y-3">
                <p className="text-white font-semibold flex items-center justify-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Productos Destacados
                </p>
                {productosSugeridos.slice(0, 3).map((producto) => (
                  <div key={producto.id} className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg text-left">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-green-800 text-sm">{producto.nombre}</p>
                        <p className="text-xs text-green-600">{producto.categoria}</p>
                        <p className="text-sm font-bold text-green-700">${producto.precio.toLocaleString()}/kg</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-semibold block mb-2">
                          {producto.descuento}
                        </span>
                        <Button
                          size="sm"
                          onClick={() => agregarProductoSugerido(producto)}
                          className="bg-green-600 hover:bg-green-700 text-white text-xs"
                        >
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/ofertas">
                <Button className="mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                  Ver Todas las Ofertas
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Mensaje motivacional */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg mb-4 shadow-md">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">🎉 ¡Excelente elección!</p>
                    <p className="text-xs mt-1">Retirá tu pedido cuando quieras. Lo preparamos en 10-15 minutos o programalo para más tarde.</p>
                  </div>
                </div>
              </div>

              {/* Items del carrito */}
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={item.id} className="glass-card p-4 rounded-lg border-2 border-green-100">
                    <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-green-800">{item.nombre}</h3>
                      <p className="text-sm text-green-600">{item.categoria}</p>
                      <p className="text-lg font-bold text-green-700">
                        ${item.precio.toLocaleString()}/kg
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                        className="h-8 w-8"
                        disabled={item.cantidad <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="font-semibold text-green-800 min-w-[2rem] text-center">
                        {item.cantidad}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-800">
                        ${(item.precio * item.cantidad).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

              {/* Productos sugeridos (cross-selling) */}
              <div className="mt-4">
                <button
                  onClick={() => setMostrarSugerencias(!mostrarSugerencias)}
                  className="w-full bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg text-left hover:from-purple-100 hover:to-purple-200 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-semibold text-purple-800 text-sm">
                        ¿Querés agregar algo más?
                      </span>
                    </div>
                    <span className="text-purple-600 text-xs">
                      {mostrarSugerencias ? '▲' : '▼'}
                    </span>
                  </div>
                </button>

                {mostrarSugerencias && (
                  <div className="mt-2 space-y-2">
                    {productosSugeridos
                      .filter(sugerido => !state.items.some(item => item.id === sugerido.id))
                      .slice(0, 2)
                      .map((producto) => (
                        <div key={producto.id} className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-semibold text-purple-800 text-sm">{producto.nombre}</p>
                              <p className="text-xs text-purple-600">{producto.categoria}</p>
                              <p className="text-sm font-bold text-purple-700">${producto.precio.toLocaleString()}/kg</p>
                            </div>
                            <div className="text-right">
                              <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full font-semibold block mb-2">
                                {producto.descuento}
                              </span>
                              <Button
                                size="sm"
                                onClick={() => agregarProductoSugerido(producto)}
                                className="bg-purple-600 hover:bg-purple-700 text-white text-xs"
                              >
                                + Agregar
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-green-200 p-6 space-y-3 bg-gradient-to-r from-green-50 to-green-100">
            {/* Resumen de precios */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-green-800">Total:</span>
                <span className="text-2xl font-bold text-green-700">
                  ${state.total.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Info de retiro flexible */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-xs text-blue-800">
                <Clock className="w-4 h-4 inline mr-1" />
                <strong>Retiro flexible:</strong> Elegí tu horario al confirmar
              </p>
            </div>
            
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              📱 Confirmar Pedido por WhatsApp
            </Button>
            
            <Button
              variant="outline"
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="w-full border-red-300 text-red-600 hover:bg-red-50 text-sm"
            >
              Vaciar Carrito
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
