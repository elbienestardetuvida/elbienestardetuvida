import Image from "next/image"
import { Heart, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass-card border-t border-white/10 py-16 mt-20">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="El Bienestar de tu Vida"
                width={50}
                height={50}
                className="rounded-full shadow-lg"
              />
              <div>
                <h3 className="text-white font-bold text-lg drop-shadow-sm">El Bienestar de tu Vida</h3>
                <p className="text-white/80 drop-shadow-sm">Verdulería y Carnicería</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start text-white/80 mb-4">
              <MapPin className="w-5 h-5 mr-2 text-green-300" />
              <div>
                <p className="font-medium">Calle Pte. Perón 501</p>
                <p className="text-sm">San José de la Dormida, Córdoba</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start text-white/80">
              <Instagram className="w-5 h-5 mr-2 text-purple-300" />
              <span className="font-medium">@elbienestardetuvidaok</span>
            </div>
          </div>

          <div className="text-center">
            <div className="glass-card bg-white/10 p-8 rounded-2xl">
              <h4 className="text-white font-bold mb-3 flex items-center justify-center text-lg drop-shadow-sm">
                <Heart className="w-6 h-6 mr-2 text-red-400" />
                Testimonial
              </h4>
              <p className="text-white/90 italic text-lg leading-relaxed drop-shadow-sm">
                "Nuestros clientes son nuestra mejor publicidad"
              </p>
              <div className="flex justify-center mt-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-300 text-lg drop-shadow-sm">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="mb-6">
              <h4 className="text-white font-bold text-lg mb-3 drop-shadow-sm">Horarios de Atención</h4>
              <div className="text-white/80 space-y-1">
                <p>
                  <span className="font-medium">Lun - Vie:</span> 8:00 - 13:00 | 16:00 - 20:00
                </p>
                <p>
                  <span className="font-medium">Sábados:</span> 8:00 - 13:00
                </p>
                <p>
                  <span className="font-medium">Domingos:</span> Cerrado
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/90 font-semibold mb-2 text-lg drop-shadow-sm">Gracias por elegir</p>
              <p className="text-3xl font-bold text-white drop-shadow-lg">el bienestar de tu vida</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">© 2024 El Bienestar de tu Vida. Todos los derechos reservados.</p>
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-300 rounded-full mr-2"></span>
                Productos Frescos
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-orange-300 rounded-full mr-2"></span>
                Atención Familiar
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-red-300 rounded-full mr-2"></span>
                Calidad Garantizada
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
