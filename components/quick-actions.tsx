import { MapPin, Clock, Phone, Instagram, CreditCard, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function QuickActions() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Información del Local</h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">Todo lo que necesitás saber para visitarnos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">📍 Dirección</h3>
              <p className="text-white/80 drop-shadow-sm">
                Calle Pte. Perón 501
                <br />
                San José de la Dormida
                <br />
                Córdoba, Argentina
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">🕒 Horarios</h3>
              <p className="text-white/80 drop-shadow-sm">
                Lunes a Viernes
                <br />
                8:00 - 13:00 | 16:00 - 20:00
                <br />
                Sábados: 8:00 - 13:00
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">📱 WhatsApp</h3>
              <p className="text-white/80 drop-shadow-sm">
                +54 9 3525 XX-XXXX
                <br />
                Pedidos y consultas
                <br />
                Respuesta inmediata
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 drop-shadow-sm">📸 Instagram</h3>
              <p className="text-white/80 drop-shadow-sm">
                @elbienestardetuvidaok
                <br />
                Seguinos para ver
                <br />
                nuestras novedades
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
