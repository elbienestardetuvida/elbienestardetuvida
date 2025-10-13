"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { scaleIn, staggerContainer, staggerItem, buttonBounce } from "@/lib/animations"

interface ProveedoresHeroProps {
  whatsappMessage: string
}

export function ProveedoresHero({ whatsappMessage }: ProveedoresHeroProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <motion.div 
        className="container mx-auto text-center relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <motion.div className="mb-8" variants={scaleIn}>
            <motion.div 
              className="relative inline-block bg-white/90 rounded-full p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/elbienestardetuvidalogo.png"
                alt="El Bienestar de tu Vida"
                width={180}
                height={180}
                className="mx-auto rounded-full shadow-2xl"
                priority
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={staggerItem}
          >
            ¿Buscás proveedor de{" "}
            <motion.span 
              className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              style={{ display: "inline-block" }}
            >
              frutas
            </motion.span>
            ,{" "}
            <motion.span 
              className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              style={{ display: "inline-block" }}
            >
              verduras
            </motion.span>{" "}
            y{" "}
            <motion.span 
              className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              style={{ display: "inline-block" }}
            >
              carnes
            </motion.span>
            ?
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Te ofrecemos productos de primera calidad con atención
            personalizada y envíos directos desde{" "}
            <span className="font-semibold">
              San José de la Dormida
            </span>
            .
          </motion.p>

          {/* CTA principal */}
          <motion.div variants={staggerItem}>
            <a href={whatsappMessage} target="_blank" rel="noopener noreferrer">
              <motion.div
                variants={buttonBounce}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-bold px-12 py-7 rounded-full text-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                >
                  <MessageCircle className="w-8 h-8 mr-3" />
                  Contactanos por WhatsApp
                </Button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

