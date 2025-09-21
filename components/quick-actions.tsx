import { MapPin, Clock, Phone, Instagram, CreditCard, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function QuickActions() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">Información del Local</h2>
          <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">Todo lo que necesitás saber para visitarnos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">📍 Dirección</h3>
              <p className="text-white/80 drop-shadow-sm">
                Calle Facundo Quiroga, Esq. Pte. Perón 501
                <br />
                San José de la Dormida
                <br />
                Córdoba, Argentina
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">🕒 Horarios</h3>
              <p className="text-white/80 drop-shadow-sm">
                Lunes a Sabados
                <br />
                8:00 - 13:00 | 17:00 - 21:00
                <br />
                Domingos: 9:00 - 13:00
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">📱 WhatsApp</h3>
              <p className="text-white/80 drop-shadow-sm">
                +54 9 3521 418125
                <br />
                Pedidos y consultas
                <br />
                Respuesta inmediata
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">📸 Instagram</h3>
              <p className="text-white/80 drop-shadow-sm">
                @elbienestardetuvida.ok
                <br />
                Seguinos para ver
                <br />
                nuestras novedades
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">💳 Medios de Pago</h3>
              <p className="text-white/80 drop-shadow-sm">
                Efectivo, Débito, Crédito
                <br />
                Transferencias
                <br />
                Todos los medios
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">❤️ Atención</h3>
              <p className="text-white/80 drop-shadow-sm">
                Atención personalizada
                <br />
                Productos seleccionados
                <br />
                Compromiso local
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
