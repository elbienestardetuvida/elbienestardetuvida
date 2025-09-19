"use client"

import { useToast } from "@/contexts/toast-context"
import { CheckCircle, XCircle, Info, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ToastContainer() {
  const { toasts, removeToast } = useToast()

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "error":
        return <XCircle className="w-5 h-5 text-red-600" />
      case "info":
        return <Info className="w-5 h-5 text-blue-600" />
      default:
        return <CheckCircle className="w-5 h-5 text-green-600" />
    }
  }

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "info":
        return "bg-blue-50 border-blue-200"
      default:
        return "bg-green-50 border-green-200"
    }
  }

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`glass-card ${getBackgroundColor(toast.type)} p-4 rounded-lg shadow-lg animate-slide-up flex items-center justify-between max-w-md mx-auto`}
        >
          <div className="flex items-center space-x-3">
            {getIcon(toast.type)}
            <p className="text-sm font-medium text-gray-800">{toast.message}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeToast(toast.id)}
            className="h-6 w-6 text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}
