"use client"

import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Users } from 'lucide-react'
import { Receta } from '@/data/recetas'
import { motion } from 'framer-motion'
import { cardHover } from '@/lib/animations'

interface RecipeCardProps {
  receta: Receta
}

const getDifficultyColor = (dificultad: string) => {
  switch (dificultad) {
    case 'Muy Fácil':
      return 'bg-green-500/20 text-green-700 border-green-300'
    case 'Fácil':
      return 'bg-blue-500/20 text-blue-700 border-blue-300'
    case 'Intermedio':
      return 'bg-orange-500/20 text-orange-700 border-orange-300'
    default:
      return 'bg-gray-500/20 text-gray-700 border-gray-300'
  }
}

export function RecipeCard({ receta }: RecipeCardProps) {
  return (
    <Link href={`/recetas/${receta.slug}`}>
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
      >
        <Card className="glass-card bg-orange-50/50 transition-all duration-300 cursor-pointer group overflow-hidden">
          <CardHeader className="p-0">
            <motion.div 
              className="relative w-full overflow-hidden rounded-t-lg" 
              style={{ aspectRatio: '22/15' }}
            >
              <motion.img
                src={receta.imagen || "/placeholder.svg"}
                alt={receta.nombre}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </CardHeader>
          <CardContent className="p-6">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div>
                <motion.h3 
                  className="text-xl font-bold text-white mb-2 group-hover:text-orange-600 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {receta.nombre}
                </motion.h3>
                <p className="text-white text-sm line-clamp-2">
                  {receta.descripcion}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-orange-700">
                <motion.div 
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                >
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{receta.tiempo}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.1 }}
                >
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{receta.porciones}</span>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge className={`${getDifficultyColor(receta.dificultad)} font-medium`}>
                  {receta.dificultad}
                </Badge>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
