'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { OffersManager, OFERTAS } from '@/lib/offers'
import { useOffers } from '@/hooks/use-offers'

export function OffersDebug() {
  const { behavior, checkForOffer } = useOffers()
  const [stats, setStats] = useState({ total: 0, porMetodo: {} as Record<string, number> })

  useEffect(() => {
    setStats(OffersManager.getTrackingStats())
  }, [])

  const resetData = () => {
    localStorage.removeItem('elbienestar_offers')
    localStorage.removeItem('elbienestar_behavior')
    localStorage.removeItem('elbienestar_tracking')
    localStorage.removeItem('elbienestar_user_id')
    localStorage.removeItem('elbienestar_last_reset')
    window.location.reload()
  }

  const simulateBehavior = (type: string) => {
    switch (type) {
      case 'primera_visita':
        OffersManager.updateUserBehavior({
          esPrimeraVisita: true,
          paginasVisitadas: ['/'],
          seccionesExploradas: ['recetas', 'ofertas']
        })
        break
      case 'tiempo':
        OffersManager.updateUserBehavior({
          tiempoNavegacion: 200, // 3+ minutos
          paginasVisitadas: ['/', '/recetas']
        })
        break
      case 'interacciones':
        OffersManager.updateUserBehavior({
          interacciones: 5,
          paginasVisitadas: ['/', '/recetas', '/ofertas'],
          seccionesExploradas: ['frutas']
        })
        break
      case 'comportamiento':
        OffersManager.updateUserBehavior({
          esPrimeraVisita: false,
          tiempoNavegacion: 400,
          paginasVisitadas: ['/', '/ofertas', '/recetas'],
          seccionesExploradas: ['ofertas', 'recetas']
        })
        break
    }
    checkForOffer()
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <Card className="bg-white shadow-lg border-2 border-blue-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">🧪 Debug - Sistema de Ofertas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Estado actual */}
          <div className="text-xs space-y-1">
            <div><strong>Tiempo:</strong> {behavior.tiempoNavegacion}s</div>
            <div><strong>Páginas:</strong> {behavior.paginasVisitadas.length}</div>
            <div><strong>Interacciones:</strong> {behavior.interacciones}</div>
            <div><strong>Primera visita:</strong> {behavior.esPrimeraVisita ? 'Sí' : 'No'}</div>
            <div><strong>Secciones:</strong> {behavior.seccionesExploradas.join(', ') || 'Ninguna'}</div>
          </div>

          {/* Códigos mostrados */}
          <div>
            <div className="text-xs font-semibold mb-1">Códigos mostrados:</div>
            <div className="flex flex-wrap gap-1">
              {OffersManager.getShownOffers().map(codigo => (
                <Badge key={codigo} variant="outline" className="text-xs">
                  {codigo}
                </Badge>
              ))}
            </div>
          </div>

          {/* Estadísticas */}
          <div>
            <div className="text-xs font-semibold mb-1">Estadísticas:</div>
            <div className="text-xs">
              Total: {stats.total} | 
              WhatsApp: {stats.porMetodo.whatsapp || 0} | 
              Copiado: {stats.porMetodo.copiado || 0}
            </div>
          </div>

          {/* Botones de simulación */}
          <div className="space-y-2">
            <div className="text-xs font-semibold">Simular comportamiento:</div>
            <div className="grid grid-cols-2 gap-1">
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => simulateBehavior('primera_visita')}
              >
                Primera visita
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => simulateBehavior('tiempo')}
              >
                Tiempo (3min)
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => simulateBehavior('interacciones')}
              >
                Interacciones
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-xs h-7"
                onClick={() => simulateBehavior('comportamiento')}
              >
                Recurrente
              </Button>
            </div>
          </div>

          {/* Ofertas disponibles */}
          <div>
            <div className="text-xs font-semibold mb-1">Ofertas disponibles:</div>
            <div className="space-y-1 max-h-20 overflow-y-auto">
              {OFERTAS.map(oferta => (
                <div key={oferta.id} className="text-xs flex justify-between">
                  <span>{oferta.icono} {oferta.codigo}</span>
                  <span className="text-gray-500">{oferta.descuento}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botón de reset */}
          <Button
            size="sm"
            variant="destructive"
            className="w-full text-xs h-7"
            onClick={resetData}
          >
            🔄 Reset Todo
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
