"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, Mail, User } from "lucide-react"

interface ContactFormProveedoresProps {
  whatsappNumber: string
}

export function ContactFormProveedores({ whatsappNumber }: ContactFormProveedoresProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nombre = formData.get("nombre")
    const telefono = formData.get("telefono")
    const mensaje = formData.get("mensaje")

    const whatsappText = `Hola! Soy ${nombre}.\nTeléfono: ${telefono}\n\n${mensaje}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappText
    )}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Dejanos tu consulta
        </h2>
        <p className="text-xl text-white/90">
          Completá el formulario y te contactamos a la brevedad
        </p>
      </div>

      <Card className="glass-card p-8 md:p-12 border-white/30">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-white font-semibold mb-2 text-lg"
            >
              <User className="inline w-5 h-5 mr-2" />
              Nombre completo
            </label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              required
              placeholder="Tu nombre"
              className="bg-white/90 border-white/50 text-gray-900 placeholder:text-gray-500 text-lg py-6"
            />
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-white font-semibold mb-2 text-lg"
            >
              <Phone className="inline w-5 h-5 mr-2" />
              Teléfono
            </label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              required
              placeholder="Ej: 3521418125"
              className="bg-white/90 border-white/50 text-gray-900 placeholder:text-gray-500 text-lg py-6"
            />
          </div>

          <div>
            <label
              htmlFor="mensaje"
              className="block text-white font-semibold mb-2 text-lg"
            >
              <Mail className="inline w-5 h-5 mr-2" />
              Mensaje
            </label>
            <Textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              placeholder="Contanos qué productos necesitás y en qué cantidad..."
              className="bg-white/90 border-white/50 text-gray-900 placeholder:text-gray-500 text-lg resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-6 rounded-lg text-xl shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Enviar por WhatsApp
          </Button>
        </form>
      </Card>
    </div>
  )
}


