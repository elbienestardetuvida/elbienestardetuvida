'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { OffersManager } from '@/lib/offers'

export function OffersStats() {
  const [stats, setStats] = useState({ total: 0, porMetodo: {} as Record<string, number> })

  useEffect(() => {
    setStats(OffersManager.getTrackingStats())
  }, [])

  if (stats.total === 0) {
    return null
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">📊 Estadísticas de Ofertas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{stats.total}</div>
            <div className="text-sm text-gray-600">Códigos utilizados</div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Por método:</h4>
            {Object.entries(stats.porMetodo).map(([metodo, cantidad]) => (
              <div key={metodo} className="flex justify-between items-center">
                <span className="text-sm capitalize">
                  {metodo === 'whatsapp' ? '📱 WhatsApp' : 
                   metodo === 'copiado' ? '📋 Copiado' : 
                   metodo === 'screenshot' ? '📸 Captura' : metodo}
                </span>
                <Badge variant="secondary">{cantidad}</Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
