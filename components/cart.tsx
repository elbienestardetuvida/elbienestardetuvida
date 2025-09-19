'use client'

import { useCart } from '@/contexts/cart-context'
import { Button } from '@/components/ui/button'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'

export function Cart() {
  const { state, dispatch } = useCart()

  const handleWhatsAppOrder = () => {
    if (state.items.length === 0) return

    const orderText = `¡Hola! Quiero hacer el siguiente pedido:\n\n${state.items
      .map(item => `• ${item.nombre} x${item.cantidad} - $${(item.precio * item.cantidad).toLocaleString()}`)
      .join('\n')}\n\n*Total: $${state.total.toLocaleString()}*\n\n¡Gracias!`

    const phoneNumber = "5493525XXXXXX" // Reemplazar con el número real
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

  return (
    <div
      id="cart-sidebar"
      className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out z-50 glass-card"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green-200">
          <h2 className="text-2xl font-bold text-green-800 flex items-center">
            <ShoppingBag className="w-6 h-6 mr-2" />
            Mi Carrito
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
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-green-300 mx-auto mb-4" />
              <p className="text-green-600 text-lg">Tu carrito está vacío</p>
              <p className="text-green-500 text-sm mt-2">¡Agregá productos para empezar!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="glass-card p-4 rounded-lg">
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
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-green-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-green-800">Total:</span>
              <span className="text-2xl font-bold text-green-700">
                ${state.total.toLocaleString()}
              </span>
            </div>
            
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              📱 Enviar Pedido por WhatsApp
            </Button>
            
            <Button
              variant="outline"
              onClick={() => dispatch({ type: 'CLEAR_CART' })}
              className="w-full border-red-300 text-red-600 hover:bg-red-50"
            >
              Vaciar Carrito
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
