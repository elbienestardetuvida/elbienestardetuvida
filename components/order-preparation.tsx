import { Clock, CheckCircle, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function OrderPreparation() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🕒 Preparamos tu Pedido</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Para tu comodidad, podemos tener tu pedido listo para que lo retires a la hora que más te convenga
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="glass-card hover:scale-105 transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-sm">1. Hacé tu Pedido</h3>
              <p className="text-white/80 drop-shadow-sm">
                Contactanos por WhatsApp o agregá productos al carrito y envianos tu lista
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-sm">2. Elegí la Hora</h3>
              <p className="text-white/80 drop-shadow-sm">
                Decinos a qué hora querés pasar a retirar y nosotros lo tendremos listo
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300 text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 drop-shadow-sm">3. Retirá y Listo</h3>
              <p className="text-white/80 drop-shadow-sm">
                Llegá a la hora acordada y tu pedido estará preparado para llevar
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="glass-card bg-white/20 p-8 max-w-2xl mx-auto rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">⏰ Horarios de Preparación</h3>
            <div className="grid md:grid-cols-2 gap-6 text-white/90">
              <div>
                <h4 className="font-semibold mb-2">Pedidos Express</h4>
                <p className="text-sm">Listos en 10-15 minutos</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pedidos Programados</h4>
                <p className="text-sm">Con 1 hora de anticipación minimo</p>
              </div>
            </div>
            <Button className="mt-6 bg-white text-green-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-full">
              📱 Hacer Pedido Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
