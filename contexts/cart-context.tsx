'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'

export interface CartItem {
  id: string
  nombre: string
  precio: number
  cantidad: number
  categoria: string
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'cantidad'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; cantidad: number } }
  | { type: 'CLEAR_CART' }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
        }
      }
      
      const newItems = [...state.items, { ...action.payload, cantidad: 1 }]
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
      }
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload)
      return {
        items: newItems,
        total: newItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
      }
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, cantidad: Math.max(0, action.payload.cantidad) }
          : item
      ).filter(item => item.cantidad > 0)
      
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
      }
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0 }
    
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
