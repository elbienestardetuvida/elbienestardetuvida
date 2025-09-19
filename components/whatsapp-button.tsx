'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre sus productos frescos.")
    const phoneNumber = "5493525XXXXXX" // Reemplazar con el número real
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl z-40 animate-bounce hover:animate-none transition-all duration-300"
      size="icon"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  )
}
