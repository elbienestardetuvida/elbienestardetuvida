"use client"

import { useState } from "react"
import { Clock, CheckCircle, Phone, ArrowRight, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const steps = [
  {
    id: 1,
    title: "Hacé tu Pedido",
    description: "Contactanos por WhatsApp o agregá productos al carrito y envianos tu lista",
    icon: Phone,
    color: "from-green-500 to-green-600",
    details: [
      "📱 Escríbenos por WhatsApp con tu pedido",
      "🛒 Agrega productos al carrito en nuestra web",
      "📝 Envíanos la lista de lo que necesitas",
      "✅ Confirmamos tu pedido y precios"
    ]
  },
  {
    id: 2,
    title: "Elegí la Hora",
    description: "Decinos a qué hora querés pasar a retirar y nosotros lo tendremos listo",
    icon: Clock,
    color: "from-orange-500 to-orange-600",
    details: [
      "⏰ Pedidos Express: 10-15 minutos",
      "📅 Pedidos Programados: 1 hora mínimo",
      "🕐 Elegí el horario que más te convenga",
      "📞 Te confirmamos cuando esté listo"
    ]
  },
  {
    id: 3,
    title: "Retirá y Listo",
    description: "Llegá a la hora acordada y tu pedido estará preparado para llevar",
    icon: CheckCircle,
    color: "from-green-500 to-green-600",
    details: [
      "🚗 Vení a retirar en el horario acordado",
      "📦 Tu pedido estará listo y organizado",
      "💳 Pagá al retirar o por transferencia",
      "🏠 ¡Disfrutá de tus productos frescos!"
    ]
  }
]

export function OrderPreparation() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex)
  }

  const currentStepData = steps[currentStep]
  const IconComponent = currentStepData.icon

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🕒 Preparamos tu Pedido</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Para tu comodidad, podemos tener tu pedido listo para que lo retires a la hora que más te convenga
          </p>
        </div>

        {/* Indicadores de pasos */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => goToStep(index)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-gradient-to-r from-green-500 to-green-600 scale-110 shadow-lg'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                >
                  {step.id}
                </button>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-1 mx-2 rounded-full transition-all duration-300 ${
                    index < currentStep ? 'bg-green-500' : 'bg-white/30'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contenido del paso actual */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="glass-card hover:scale-[1.02] transition-all duration-500 text-center overflow-hidden">
            <CardContent className="p-8">
              <div className={`bg-gradient-to-r ${currentStepData.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse`}>
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-sm">
                {currentStepData.id}. {currentStepData.title}
              </h3>
              
              <p className="text-lg text-white/80 drop-shadow-sm mb-6">
                {currentStepData.description}
              </p>

              {/* Detalles del paso */}
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {currentStepData.details.map((detail, index) => (
                  <div key={index} className="flex items-center text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                    <span className="text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controles de navegación */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Button
            onClick={prevStep}
            variant="outline"
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-3 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Anterior
          </Button>
          
          <span className="text-white/70 text-sm">
            Paso {currentStep + 1} de {steps.length}
          </span>
          
          <Button
            onClick={nextStep}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-bold"
          >
            Siguiente
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Información adicional */}
        <div className="text-center">
          <div className="glass-card bg-white/20 p-8 max-w-2xl mx-auto rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">⏰ Horarios de Preparación</h3>
            <div className="grid md:grid-cols-2 gap-6 text-white/90">
              <div>
                <h4 className="font-semibold mb-2">Pedidos Express</h4>
                <p className="text-sm">Listos en 10-15 minutos</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pedidos Programados</h4>
                <p className="text-sm">Con 1 hora de anticipación mínimo</p>
              </div>
            </div>
            <Button className="mt-6 bg-white text-green-700 hover:bg-gray-100 font-bold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              📱 Hacer Pedido Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
