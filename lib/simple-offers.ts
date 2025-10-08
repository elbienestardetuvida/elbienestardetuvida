// Sistema simplificado de ofertas - Solo cuenta visitas

export interface SimpleOffer {
  id: string
  codigo: string
  descuento: number
  mensaje: string
  descripcion: string
  icono: string
  categoria: string
}

export interface GeneratedOffer {
  oferta: SimpleOffer
  codigoUnico: string
  codigoCompleto: string
  fechaGeneracion: number
}

// Múltiples ofertas con códigos originales
export const OFERTAS_DISPONIBLES: SimpleOffer[] = [
  {
    id: 'fresh-15',
    codigo: 'FRESCO',
    descuento: 15,
    mensaje: '¡Frescura que se nota!',
    descripcion: '15% OFF en frutas y verduras frescas',
    icono: '🥬',
    categoria: 'Verduras y Frutas'
  },
  {
    id: 'meat-20',
    codigo: 'CARNIVORO',
    descuento: 20,
    mensaje: '¡Para los amantes de la carne!',
    descripcion: '20% OFF en todas las carnes',
    icono: '🥩',
    categoria: 'Carnes'
  },
  {
    id: 'health-18',
    codigo: 'SALUD',
    descuento: 18,
    mensaje: '¡Tu bienestar nos importa!',
    descripcion: '18% OFF en productos saludables',
    icono: '💚',
    categoria: 'Productos Saludables'
  },
  {
    id: 'chicken-12',
    codigo: 'AVICOLA',
    descuento: 12,
    mensaje: '¡Pollo fresco del día!',
    descripcion: '12% OFF en pollo y aves',
    icono: '🐔',
    categoria: 'Aves'
  },
  {
    id: 'fruit-16',
    codigo: 'FRUTAL',
    descuento: 16,
    mensaje: '¡Dulce recompensa natural!',
    descripcion: '16% OFF en frutas de estación',
    icono: '🍎',
    categoria: 'Frutas'
  },
  {
    id: 'family-25',
    codigo: 'FAMILIA',
    descuento: 25,
    mensaje: '¡Para toda la familia!',
    descripcion: '25% OFF en compras mayores a $10000',
    icono: '👨‍👩‍👧‍👦',
    categoria: 'Combo Familiar'
  }
]

export class SimpleOffersManager {
  private static readonly VISITS_KEY = 'elbienestar_visit_count'
  private static readonly OFFER_SHOWN_KEY = 'elbienestar_offer_shown'
  private static readonly GENERATED_OFFER_KEY = 'elbienestar_generated_offer'

  // Obtener contador de visitas
  static getVisitCount(): number {
    if (typeof window === 'undefined') return 0
    const count = localStorage.getItem(this.VISITS_KEY)
    return count ? parseInt(count, 10) : 0
  }

  // Incrementar contador de visitas
  static incrementVisitCount(): void {
    if (typeof window === 'undefined') return
    const currentCount = this.getVisitCount()
    localStorage.setItem(this.VISITS_KEY, (currentCount + 1).toString())
  }

  // Verificar si la oferta ya fue mostrada
  static wasOfferShown(): boolean {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(this.OFFER_SHOWN_KEY) === 'true'
  }

  // Marcar oferta como mostrada
  static markOfferAsShown(): void {
    if (typeof window === 'undefined') return
    localStorage.setItem(this.OFFER_SHOWN_KEY, 'true')
  }

  // Verificar si debe mostrar la oferta
  static shouldShowOffer(): boolean {
    const visitCount = this.getVisitCount()
    const offerShown = this.wasOfferShown()
    return visitCount >= 15 && !offerShown
  }

  // Generar código único (6 caracteres alfanuméricos)
  private static generateUniqueCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // Sin 0, O, I, 1 para evitar confusión
    let result = ''
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  // Seleccionar una oferta aleatoria
  private static selectRandomOffer(): SimpleOffer {
    const randomIndex = Math.floor(Math.random() * OFERTAS_DISPONIBLES.length)
    return OFERTAS_DISPONIBLES[randomIndex]
  }

  // Generar oferta con código único
  static generateOffer(): GeneratedOffer {
    const oferta = this.selectRandomOffer()
    const codigoUnico = this.generateUniqueCode()
    const codigoCompleto = `${oferta.codigo}${codigoUnico}`
    
    const generatedOffer: GeneratedOffer = {
      oferta,
      codigoUnico,
      codigoCompleto,
      fechaGeneracion: Date.now()
    }

    // Guardar la oferta generada
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.GENERATED_OFFER_KEY, JSON.stringify(generatedOffer))
    }

    return generatedOffer
  }

  // Obtener oferta generada guardada
  static getGeneratedOffer(): GeneratedOffer | null {
    if (typeof window === 'undefined') return null
    
    const stored = localStorage.getItem(this.GENERATED_OFFER_KEY)
    if (!stored) return null

    try {
      return JSON.parse(stored) as GeneratedOffer
    } catch {
      return null
    }
  }

  // Reset todo (para testing)
  static resetAll(): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem(this.VISITS_KEY)
    localStorage.removeItem(this.OFFER_SHOWN_KEY)
    localStorage.removeItem(this.GENERATED_OFFER_KEY)
  }
}

