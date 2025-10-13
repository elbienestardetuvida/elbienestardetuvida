import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatingCircles } from "@/components/floating-circles"
import { ContactFormProveedores } from "@/components/contact-form-proveedores"
import {
  Apple,
  Truck,
  MessageCircle,
  DollarSign,
  CheckCircle,
  Utensils,
  Building2,
  Store,
  Sandwich,
  ShoppingBag,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Proveedor de Frutas, Verduras y Carnes | El Bienestar de tu Vida",
  description:
    "Ofrecemos productos frescos y de calidad al por mayor para bares, restaurantes, hospitales y verdulerías en San José de la Dormida.",
  keywords:
    "proveedor mayorista, frutas por mayor, verduras por mayor, carnes por mayor, San José de la Dormida, distribuidor alimentos, proveedor restaurantes, proveedor hospitales",
  openGraph: {
    title: "Proveedor de Frutas, Verduras y Carnes | El Bienestar de tu Vida",
    description:
      "Productos frescos de calidad al por mayor para tu negocio. Envíos directos desde San José de la Dormida.",
    type: "website",
  },
}

export default function ProveedoresPage() {
  const whatsappNumber = "5493521418125"
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const whatsappMessage = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola! Me interesa recibir información sobre sus servicios de proveedor mayorista."
  )}`

  const beneficios = [
    {
      icon: Apple,
      title: "Productos frescos y seleccionados",
      description: "Cuidadosamente elegidos para garantizar la mejor calidad",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Truck,
      title: "Envíos a domicilio",
      description: "Entregamos directamente en tu negocio de forma puntual",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Atención personalizada",
      description: "Trato directo y cercano para entender tus necesidades",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: DollarSign,
      title: "Precios especiales por volumen",
      description: "Mejores tarifas según la cantidad que necesites",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: CheckCircle,
      title: "Calidad garantizada",
      description: "Compromiso con productos de primera en cada entrega",
      color: "from-purple-400 to-purple-600",
    },
  ]

  const tiposClientes = [
    {
      icon: Utensils,
      name: "Restaurantes",
      description: "Ingredientes frescos para tus mejores platos",
    },
    {
      icon: Building2,
      name: "Hospitales",
      description: "Nutrición de calidad para el cuidado de la salud",
    },
    {
      icon: Store,
      name: "Bares",
      description: "Productos para ofrecer lo mejor a tus clientes",
    },
    {
      icon: Sandwich,
      name: "Sanguicherías",
      description: "Frescura que se nota en cada bocado",
    },
    {
      icon: ShoppingBag,
      name: "Verdulerías",
      description: "Variedad y calidad para tu comercio",
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-400 via-orange-300 to-orange-500">
      {/* Capa oscura encima del gradiente */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Círculos flotantes */}
      <FloatingCircles />

      {/* Contenido */}
      <div className="relative z-10">
        <Header />

        <main>
          {/* Hero Section */}
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
              <div className="max-w-5xl mx-auto">
                {/* Logo */}
                <div className="mb-8 animate-fade-in-up">
                  <div className="relative inline-block bg-white/90 rounded-full p-2">
                    <Image
                      src="/images/elbienestardetuvidalogo.png"
                      alt="El Bienestar de tu Vida"
                      width={180}
                      height={180}
                      className="mx-auto rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div>

                {/* Título principal */}
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  ¿Buscás proveedor de{" "}
                  <span className="bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                    frutas
                  </span>
                  ,{" "}
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                    verduras
                  </span>{" "}
                  y{" "}
                  <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
                    carnes
                  </span>
                  ?
                </h1>

                {/* Subtítulo */}
                <p
                  className="text-xl md:text-2xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  Te ofrecemos productos de primera calidad con atención
                  personalizada y envíos directos desde{" "}
                  <span className="font-semibold">
                    San José de la Dormida
                  </span>
                  .
                </p>

                {/* CTA principal */}
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <a href={whatsappMessage} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-bold px-12 py-7 rounded-full text-2xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                    >
                      <MessageCircle className="w-8 h-8 mr-3" />
                      Contactanos por WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Sección de Beneficios */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-7xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                ¿Por qué trabajar con nosotros?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {beneficios.map((beneficio, index) => {
                  const Icon = beneficio.icon
                  return (
                    <Card
                      key={index}
                      className="glass-card hover-lift p-8 text-center border-white/30 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="mb-6 flex justify-center">
                        <div
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${beneficio.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {beneficio.title}
                      </h3>
                      <p className="text-white/90 text-lg leading-relaxed">
                        {beneficio.description}
                      </p>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Sección de Tipos de Clientes */}
          <section className="py-20 px-4 bg-black/20">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                Trabajamos con
              </h2>
              <p className="text-xl text-white/90 text-center mb-16 max-w-3xl mx-auto">
                Ofrecemos soluciones a medida para diferentes tipos de negocios
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tiposClientes.map((cliente, index) => {
                  const Icon = cliente.icon
                  return (
                    <Card
                      key={index}
                      className="glass-card p-8 flex flex-col items-center text-center hover-lift border-white/30 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="mb-5">
                        <Icon className="w-16 h-16 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {cliente.name}
                      </h3>
                      <p className="text-white/85 text-base">
                        {cliente.description}
                      </p>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Sección "Por qué elegirnos" */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
              <Card className="glass-card p-12 md:p-16 text-center border-white/30">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Por qué elegirnos
                </h2>
                <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
                  Somos una empresa local que combina{" "}
                  <span className="font-semibold text-green-200">calidad</span>
                  ,{" "}
                  <span className="font-semibold text-orange-200">
                    compromiso
                  </span>{" "}
                  y{" "}
                  <span className="font-semibold text-yellow-200">
                    cercanía
                  </span>
                  .
                </p>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                  Nuestros productos son seleccionados con dedicación y
                  entregados con responsabilidad. Entendemos las necesidades de
                  tu negocio porque somos parte de la misma comunidad.
                </p>
              </Card>
            </div>
          </section>

          {/* Formulario de Contacto */}
          <section className="py-20 px-4 bg-black/20">
            <ContactFormProveedores whatsappNumber={whatsappNumber} />
          </section>

          {/* CTA Final */}
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-5xl text-center">
              <div className="glass-card p-12 md:p-16 border-white/30 animate-pulse-soft">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  ¡Sumá a tu negocio la frescura que se nota!
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                  Unite a los negocios que ya confían en nuestra calidad y
                  servicio
                </p>
                <a href={whatsappMessage} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white font-bold px-12 py-7 rounded-full text-2xl shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                  >
                    📲 Escribinos al WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>

      {/* Schema Markup para SEO Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "El Bienestar de tu Vida",
            description:
              "Proveedor mayorista de frutas, verduras y carnes frescas en San José de la Dormida, Córdoba",
            image: "/images/elbienestardetuvidalogo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San José de la Dormida",
              addressRegion: "Córdoba",
              addressCountry: "AR",
            },
            telephone: "+5493521418125",
            priceRange: "$$",
            openingHours: "Mo-Sa 08:00-20:00",
            servesCuisine: "Frutas, Verduras, Carnes",
            areaServed: {
              "@type": "City",
              name: "San José de la Dormida",
            },
          }),
        }}
      />
    </div>
  )
}

