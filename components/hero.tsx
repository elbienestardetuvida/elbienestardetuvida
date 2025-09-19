import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-white rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo grande y centrado con efecto de entrada */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <Image
                src="/images/elbienestardetuvidalogo.png"
                alt="El Bienestar de tu Vida"
                width={220}
                height={220}
                className="mx-auto rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Eslogan mejorado */}
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Tu lugar para elegir{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">salud</span>{" "}
            y{" "}
            <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">frescura</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            En El Bienestar de tu Vida encontrás los productos más frescos y de mejor calidad. Somos una joven pareja
            comprometida con tu salud y bienestar.
          </p>

          {/* Botones principales mejorados */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="/ofertas">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white font-bold px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                🛒 Ver Ofertas
              </Button>
            </Link>
            <Link href="/recetas">
              <Button
                size="lg"
                variant="outline"
                className="glass-button border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold px-10 py-5 rounded-full text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-transparent"
              >
                👩‍🍳 Nuestras Recetas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
