'use client'

import { useState, useEffect } from 'react'
import { X, Copy, MessageCircle, Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GeneratedOffer } from '@/lib/simple-offers'

interface SimpleOffersModalProps {
  generatedOffer: GeneratedOffer
  onClose: () => void
}

export function SimpleOffersModal({ generatedOffer, onClose }: SimpleOffersModalProps) {
  const [copied, setCopied] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const { oferta, codigoCompleto } = generatedOffer

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(codigoCompleto)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `¡Hola! Quiero usar mi código de descuento único: ${codigoCompleto}\n\n` +
      `Categoría: ${oferta.categoria}\n` +
      `${oferta.descripcion}\n` +
      `Descuento: ${oferta.descuento}%\n\n` +
      `¿Me confirman la disponibilidad? ¡Gracias!`
    )
    const phoneNumber = "5493521418125"
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#10b981', '#f59e0b', '#3b82f6', '#ef4444', '#8b5cf6'][Math.floor(Math.random() * 5)],
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
                <h2 className="text-2xl font-bold text-green-800 flex items-center gap-2">
                  ¡Felicidades!
                  <Sparkles className="w-5 h-5 text-yellow-500" />
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

          {/* Mensaje especial */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-3 mb-4 text-center">
            <p className="text-sm font-semibold text-orange-800">
              🎁 ¡Este es tu código único y exclusivo!
            </p>
          </div>

          {/* Código destacado */}
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600 mb-2">Tu código de descuento único:</p>
            <div className="bg-white border-2 border-dashed border-green-300 rounded-lg p-4 mb-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-100/50 to-blue-100/50 animate-pulse"></div>
              <div className="text-2xl font-mono font-bold text-green-700 tracking-wider relative z-10 break-all">
                {codigoCompleto}
              </div>
            </div>
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {oferta.descuento}% OFF
              </Badge>
              <Badge variant="outline" className="border-purple-300 text-purple-700">
                {oferta.categoria}
              </Badge>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              ⚡ Código generado exclusivamente para ti
            </div>
          </div>

          {/* Descripción de la oferta */}
          <div className="bg-white rounded-lg p-4 mb-6 border border-green-200">
            <h3 className="font-semibold text-gray-800 mb-2">
              {oferta.descripcion}
            </h3>
            <p className="text-sm text-gray-600">
              Válido en tu próxima compra
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
          </div>

          {/* Instrucciones */}
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-800 text-center">
              💡 <strong>Importante:</strong> Este código es único e intransferible. Guárdalo para tu próxima compra.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

