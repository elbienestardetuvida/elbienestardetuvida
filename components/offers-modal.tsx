'use client'

import { useState, useEffect } from 'react'
import { X, Copy, MessageCircle, Camera, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Oferta, OffersManager } from '@/lib/offers'

interface OffersModalProps {
  oferta: Oferta
  onClose: () => void
}

export function OffersModal({ oferta, onClose }: OffersModalProps) {
  const [copied, setCopied] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(oferta.codigo)
      setCopied(true)
      OffersManager.trackOfferUsage(oferta.codigo, 'copiado')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `¡Hola! Quiero canjear mi código de descuento: ${oferta.codigo}\n\n` +
      `Oferta: ${oferta.descripcion}\n` +
      `Descuento: ${oferta.descuento}%\n\n` +
      `¿Podrían confirmarme la disponibilidad? ¡Gracias!`
    )
    const phoneNumber = "5493521418125"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    
    OffersManager.trackOfferUsage(oferta.codigo, 'whatsapp')
  }

  const handleScreenshot = () => {
    OffersManager.trackOfferUsage(oferta.codigo, 'screenshot')
    // El usuario tomará la captura manualmente
  }

  const formatValidityDate = () => {
    const date = new Date()
    date.setDate(date.getDate() + oferta.validaHasta)
    return date.toLocaleDateString('es-AR')
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 shadow-2xl animate-in zoom-in-95 duration-300">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl">{oferta.icono}</span>
              <div>
                <h2 className="text-2xl font-bold text-green-800">
                  ¡Felicidades! 🎉
                </h2>
                <p className="text-sm text-gray-600">
                  {oferta.mensaje}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Código destacado */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-2">Tu código de descuento:</p>
            <div className="bg-white border-2 border-dashed border-green-300 rounded-lg p-4 mb-2">
              <div className="text-3xl font-mono font-bold text-green-700 tracking-wider animate-pulse">
                {oferta.codigo}
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {oferta.descuento}% de descuento
            </Badge>
          </div>

          {/* Descripción de la oferta */}
          <div className="bg-white rounded-lg p-4 mb-6 border border-green-200">
            <h3 className="font-semibold text-gray-800 mb-2">
              {oferta.descripcion}
            </h3>
            <p className="text-sm text-gray-600">
              Válido hasta el {formatValidityDate()}
            </p>
          </div>

          {/* Botones de acción */}
          <div className="space-y-3">
            <Button
              onClick={handleCopyCode}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              disabled={copied}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  ¡Copiado!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copiar Código
                </>
              )}
            </Button>

            <Button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Enviar por WhatsApp
            </Button>

            <Button
              onClick={handleScreenshot}
              variant="outline"
              className="w-full border-green-300 text-green-700 hover:bg-green-50"
            >
              <Camera className="h-4 w-4 mr-2" />
              Tomar Captura
            </Button>
          </div>

          {/* Instrucciones */}
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-800 text-center">
              💡 <strong>Tip:</strong> Guarda este código o toma una captura para no perderlo
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
