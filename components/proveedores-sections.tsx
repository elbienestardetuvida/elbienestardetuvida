"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  Apple,
  Truck,
  DollarSign,
  CheckCircle,
  Utensils,
  Building2,
  Store,
  Sandwich,
  ShoppingBag,
} from "lucide-react"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem, cardHover, buttonBounce } from "@/lib/animations"

// Mapping de strings a componentes de íconos
const iconMap = {
  Apple,
  Truck,
  MessageCircle,
  DollarSign,
  CheckCircle,
  Utensils,
  Building2,
  Store,
  Sandwich,
  ShoppingBag,
} as const

interface Beneficio {
  icon: string
  title: string
  description: string
  color: string
}

interface BeneficiosProps {
  beneficios: Beneficio[]
}

export function BeneficiosSection({ beneficios }: BeneficiosProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Por qué trabajar con nosotros?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {beneficios.map((beneficio, index) => {
            const Icon = iconMap[beneficio.icon as keyof typeof iconMap]
            return (
              <motion.div key={index} variants={staggerItem}>
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <Card className="glass-card p-8 text-center border-white/30 h-full">
                    <motion.div 
                      className="mb-6 flex justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${beneficio.color} flex items-center justify-center shadow-lg`}
                      >
                        {Icon && <Icon className="w-10 h-10 text-white" />}
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {beneficio.title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {beneficio.description}
                    </p>
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

interface TipoCliente {
  icon: string
  name: string
  description: string
}

interface TiposClientesProps {
  clientes: TipoCliente[]
}

export function TiposClientesSection({ clientes }: TiposClientesProps) {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trabajamos con
        </motion.h2>
        <motion.p 
          className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ofrecemos soluciones a medida para diferentes tipos de negocios
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clientes.map((cliente, index) => {
            const Icon = iconMap[cliente.icon as keyof typeof iconMap]
            return (
              <motion.div key={index} variants={staggerItem}>
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <Card className="glass-card p-8 flex flex-col items-center text-center border-white/30 h-full">
                    <motion.div 
                      className="mb-5"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {Icon && <Icon className="w-16 h-16 text-white drop-shadow-lg" />}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {cliente.name}
                    </h3>
                    <p className="text-white/85 text-base">
                      {cliente.description}
                    </p>
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

export function PorQueElegirnos() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-card p-12 md:p-16 text-center border-white/30">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Por qué elegirnos
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Somos una empresa local que combina{" "}
              <motion.span 
                className="font-semibold text-green-200"
                whileHover={{ scale: 1.1 }}
                style={{ display: "inline-block" }}
              >
                calidad
              </motion.span>
              ,{" "}
              <motion.span 
                className="font-semibold text-orange-200"
                whileHover={{ scale: 1.1 }}
                style={{ display: "inline-block" }}
              >
                compromiso
              </motion.span>{" "}
              y{" "}
              <motion.span 
                className="font-semibold text-yellow-200"
                whileHover={{ scale: 1.1 }}
                style={{ display: "inline-block" }}
              >
                cercanía
              </motion.span>
              .
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Nuestros productos son seleccionados con dedicación y
              entregados con responsabilidad. Entendemos las necesidades de
              tu negocio porque somos parte de la misma comunidad.
            </motion.p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

interface CTAFinalProps {
  whatsappMessage: string
}

export function CTAFinal({ whatsappMessage }: CTAFinalProps) {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glass-card p-12 md:p-16 border-white/30">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              ¡Sumá a tu negocio la frescura que se nota!
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Unite a los negocios que ya confían en nuestra calidad y
              servicio
            </motion.p>
            <a href={whatsappMessage} target="_blank" rel="noopener noreferrer">
              <motion.div
                variants={buttonBounce}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white font-bold px-12 py-7 rounded-full text-2xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300"
                >
                  📲 Escribinos al WhatsApp
                </Button>
              </motion.div>
            </a>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

