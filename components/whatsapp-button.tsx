'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre sus productos frescos.")
    const phoneNumber = "5493521418125"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        scale: { duration: 0.5, delay: 0.5 },
        opacity: { duration: 0.5, delay: 0.5 },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
        transition: { 
          rotate: { duration: 0.5 },
          scale: { duration: 0.2 }
        }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300"
        size="icon"
      >
        <Image src="/Whatsappvida.png" alt="WhatsApp" width={24} height={24} />
      </Button>
      
      {/* Efecto de onda */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-400"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.div>
  )
}
