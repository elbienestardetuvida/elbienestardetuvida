"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, scaleIn, staggerContainer, staggerItem, buttonBounce } from "@/lib/animations"

export function Hero() {
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
        <div className="max-w-4xl mx-auto">
          {/* Logo grande y centrado con efecto de entrada */}
          <motion.div className="mb-8" variants={scaleIn}>
            <motion.div 
              className="relative inline-block bg-white/90 rounded-full p-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/elbienestardetuvidalogo.png"
                alt="El Bienestar de tu Vida"
                width={220}
                height={220}
                className="mx-auto rounded-full shadow-2xl"
                priority
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </motion.div>

          {/* Eslogan mejorado */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            variants={staggerItem}
          >
            Tu lugar para elegir{" "}
            <motion.span 
              className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              salud
            </motion.span>{" "}
            y{" "}
            <motion.span 
              className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              frescura
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            En El Bienestar de tu Vida encontrás los productos más frescos y de mejor calidad. Estamos ubicados en San José de la Dormida, Córdoba.
          </motion.p>

          {/* Botones principales mejorados */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            variants={staggerItem}
          >
            <Link href="/ofertas">
              <motion.div
                variants={buttonBounce}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white font-bold px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                >
                  🛒 Ver Ofertas
                </Button>
              </motion.div>
            </Link>
            <Link href="/recetas">
              <motion.div
                variants={buttonBounce}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-button border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 bg-transparent"
                >
                  👩‍🍳 Nuestras Recetas
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
