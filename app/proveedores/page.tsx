import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatingCircles } from "@/components/floating-circles"
import { ContactFormProveedores } from "@/components/contact-form-proveedores"
import { ProveedoresHero } from "@/components/proveedores-hero"
import { 
  BeneficiosSection, 
  TiposClientesSection, 
  PorQueElegirnos,
  CTAFinal 
} from "@/components/proveedores-sections"

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
      icon: "Apple",
      title: "Productos frescos y seleccionados",
      description: "Cuidadosamente elegidos para garantizar la mejor calidad",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "Truck",
      title: "Envíos a domicilio",
      description: "Entregamos directamente en tu negocio de forma puntual",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "MessageCircle",
      title: "Atención personalizada",
      description: "Trato directo y cercano para entender tus necesidades",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: "DollarSign",
      title: "Precios especiales por volumen",
      description: "Mejores tarifas según la cantidad que necesites",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: "CheckCircle",
      title: "Calidad garantizada",
      description: "Compromiso con productos de primera en cada entrega",
      color: "from-purple-400 to-purple-600",
    },
  ]

  const tiposClientes = [
    {
      icon: "Utensils",
      name: "Restaurantes",
      description: "Ingredientes frescos para tus mejores platos",
    },
    {
      icon: "Building2",
      name: "Hospitales",
      description: "Nutrición de calidad para el cuidado de la salud",
    },
    {
      icon: "Store",
      name: "Bares",
      description: "Productos para ofrecer lo mejor a tus clientes",
    },
    {
      icon: "Sandwich",
      name: "Sanguicherías",
      description: "Frescura que se nota en cada bocado",
    },
    {
      icon: "ShoppingBag",
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
          <ProveedoresHero whatsappMessage={whatsappMessage} />

          <BeneficiosSection beneficios={beneficios} />

          <TiposClientesSection clientes={tiposClientes} />

          <PorQueElegirnos />

          {/* Formulario de Contacto */}
          <section className="py-20 px-4 bg-black/20">
            <ContactFormProveedores whatsappNumber={whatsappNumber} />
          </section>

          <CTAFinal whatsappMessage={whatsappMessage} />
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

