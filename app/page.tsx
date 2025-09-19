import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuickActions } from "@/components/quick-actions"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Cart } from "@/components/cart"
import { OrderPreparation } from "@/components/order-preparation"
import { ToastContainer } from "@/components/toast-container"
import { FloatingCircles } from "@/components/floating-circles"

export default function HomePage() {
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
          <Hero />
          <QuickActions />
          <OrderPreparation />
          <FeaturedProducts />
        </main>
        <Footer />
        <WhatsAppButton />
        <Cart />
        <ToastContainer />
      </div>
    </div>
  )
}
