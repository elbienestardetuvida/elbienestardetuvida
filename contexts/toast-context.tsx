"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface Toast {
  id: string
  message: string
  type: "success" | "error" | "info"
  duration?: number
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (message: string, type?: Toast["type"], duration?: number) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (message: string, type: Toast["type"] = "success", duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, message, type, duration }

    setToasts((prev) => [...prev, newToast])

    setTimeout(() => {
      removeToast(id)
    }, duration)
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return <ToastContext.Provider value={{ toasts, addToast, removeToast }}>{children}</ToastContext.Provider>
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
