import { MapPin, Clock, Phone, Instagram, CreditCard } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Visitanos en nuestro local
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Te esperamos con los brazos abiertos en el corazón de San José de la Dormida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="backdrop-blur-md bg-white/20 border-white/30">
            <CardContent className="p-6 text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Dirección</h3>
              <p className="text-green-100">
                Calle Pte. Perón 501<br />
                San José de la Dormida<br />
                Córdoba, Argentina
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/20 border-white/30">
            <CardContent className="p-6 text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Horarios</h3>
              <p className="text-green-100">
                Lunes a Viernes<br />
                8:00 - 13:00<br />
                16:00 - 20:00<br />
                Sábados: 8:00 - 13:00
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/20 border-white/30">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Contacto</h3>
              <p className="text-green-100">
                WhatsApp<br />
                +54 9 3525 XX-XXXX<br />
                <br />
                Pedidos y consultas
              </p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/20 border-white/30">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Redes</h3>
              <p className="text-green-100">
                @elbienestardetuvidaok<br />
                <br />
                Seguinos para ver<br />
                nuestras novedades
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <CreditCard className="w-6 h-6 mr-2" />
              Medios de Pago
            </h3>
            <div className="grid grid-cols-2 gap-4 text-green-100">
              <div>
                <h4 className="font-semibold text-white mb-2">Efectivo</h4>
                <p className="text-sm">Pesos argentinos</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Transferencia</h4>
                <p className="text-sm">Banco digital</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Débito</h4>
                <p className="text-sm">Todas las tarjetas</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Crédito</h4>
                <p className="text-sm">Visa, Mastercard</p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mapa de ubicación
            </h3>
            <div className="bg-green-600/30 rounded-lg h-48 flex items-center justify-center">
              <div className="text-center text-green-100">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Calle Pte. Perón 501</p>
                <p className="text-sm">San José de la Dormida, Córdoba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
