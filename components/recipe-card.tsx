import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Users } from 'lucide-react'
import { Receta } from '@/data/recetas'

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
      <Card className="glass-card bg-orange-50/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
        <CardHeader className="p-0">
          <div className="relative w-full overflow-hidden rounded-t-lg" style={{ aspectRatio: '22/15' }}>
            <img
              src={receta.imagen || "/placeholder.svg"}
              alt={receta.nombre}
              className="w-full h-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-orange-800 mb-2 group-hover:text-orange-600 transition-colors">
                {receta.nombre}
              </h3>
              <p className="text-orange-600 text-sm line-clamp-2">
                {receta.descripcion}
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-orange-700">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{receta.tiempo}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span className="text-sm">{receta.porciones}</span>
              </div>
            </div>

            <Badge className={`${getDifficultyColor(receta.dificultad)} font-medium`}>
              {receta.dificultad}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
