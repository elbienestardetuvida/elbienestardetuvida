"use client"

import { MapPin, Clock, Phone, Instagram, CreditCard, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations"

export function QuickActions() {
  const actions = [
    {
      icon: MapPin,
      title: "📍 Dirección",
      content: ["Calle Facundo Quiroga, Esq. Pte. Perón 501", "San José de la Dormida", "Córdoba, Argentina"],
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Clock,
      title: "🕒 Horarios",
      content: ["Lunes a Sabados", "8:00 - 13:00 | 17:00 - 21:00", "Domingos: 9:00 - 13:00"],
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Phone,
      title: "📱 WhatsApp",
      content: ["+54 9 3521 418125", "Pedidos y consultas", "Respuesta inmediata"],
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Instagram,
      title: "📸 Instagram",
      content: ["@elbienestardetuvida.ok", "Seguinos para ver", "nuestras novedades"],
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: CreditCard,
      title: "💳 Medios de Pago",
      content: ["Efectivo, Débito, Crédito", "Transferencias", "Todos los medios"],
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Heart,
      title: "❤️ Atención",
      content: ["Atención personalizada", "Productos seleccionados", "Compromiso local"],
      gradient: "from-green-500 to-green-600",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-green-400 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Información del Local
          </motion.h2>
          <motion.span 
            className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Todo lo que necesitás saber para visitarnos
          </motion.span>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <motion.div key={index} variants={staggerItem}>
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <Card className="glass-card transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className={`bg-gradient-to-r ${action.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.h3 
                        className="text-lg font-bold text-white mb-2 drop-shadow-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {action.title}
                      </motion.h3>
                      <p className="text-white/80 drop-shadow-sm">
                        {action.content.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < action.content.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
