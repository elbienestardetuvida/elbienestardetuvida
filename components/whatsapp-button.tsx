'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre sus productos frescos.")
    const phoneNumber = "5493521418125"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl z-40 animate-pulse hover:animate-none transition-all duration-600"
      size="icon"
    >
      <Image src="/whatsappvida.png" alt="WhatsApp" width={24} height={24} />
    </Button>
  )
}
