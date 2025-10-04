export interface Oferta {
  id: string
  codigo: string
  descuento: number
  categoria: string
  mensaje: string
  descripcion: string
  trigger: TriggerConfig
  validaHasta: number // días de validez
  icono: string
}

export interface TriggerConfig {
  tipo: 'tiempo' | 'paginas' | 'interacciones' | 'comportamiento' | 'primera_visita'
  valor: number
  condiciones?: string[]
}

export interface UserBehavior {
  tiempoNavegacion: number
  paginasVisitadas: string[]
  interacciones: number
  esPrimeraVisita: boolean
  seccionesExploradas: string[]
  ultimaActividad: number
}

export interface TrackingData {
  codigoUsado: string
  timestamp: number
  metodo: 'whatsapp' | 'copiado' | 'screenshot'
  usuario: string
}

// Base de datos de ofertas
export const OFERTAS: Oferta[] = [
  {
    id: 'carne-15',
    codigo: 'CARNE15',
    descuento: 15,
    categoria: 'carnes',
    mensaje: '¡Carnes frescas te esperan!',
    descripcion: '15% OFF en tu próxima compra de carnes',
    trigger: {
      tipo: 'comportamiento',
      valor: 1,
      condiciones: ['ofertas', 'tiempo_minimo']
    },
    validaHasta: 7,
    icono: '🥩'
  },
  {
    id: 'fruta-12',
    codigo: 'FRUTA12',
    descuento: 12,
    categoria: 'frutas',
    mensaje: '¡Dulce recompensa!',
    descripcion: '12% OFF en frutas frescas de temporada',
    trigger: {
      tipo: 'interacciones',
      valor: 3,
      condiciones: ['recetas', 'frutas']
    },
    validaHasta: 7,
    icono: '🍎'
  },
  {
    id: 'verde-10',
    codigo: 'VERDE10',
    descuento: 10,
    categoria: 'verduras',
    mensaje: '¡Verde que te quiero verde!',
    descripcion: '10% OFF en verduras frescas',
    trigger: {
      tipo: 'tiempo',
      valor: 180, // 3 minutos
      condiciones: ['recetas']
    },
    validaHasta: 7,
    icono: '🥬'
  },
  {
    id: 'pollo-13',
    codigo: 'POLLO13',
    descuento: 13,
    categoria: 'aves',
    mensaje: '¡Vuelo directo al ahorro!',
    descripcion: '13% OFF en pollo y aves',
    trigger: {
      tipo: 'primera_visita',
      valor: 1,
      condiciones: ['multiple_secciones']
    },
    validaHasta: 7,
    icono: '🐔'
  },
  {
    id: 'familia-14',
    codigo: 'FAMILIA14',
    descuento: 14,
    categoria: 'combo',
    mensaje: '¡Para toda la familia!',
    descripcion: '14% OFF en compras mayores a $5000',
    trigger: {
      tipo: 'comportamiento',
      valor: 1,
      condiciones: ['visitante_recurrente', 'tiempo_extendido']
    },
    validaHasta: 7,
    icono: '👨‍👩‍👧‍👦'
  }
]

// Utilidades para el manejo de ofertas
export class OffersManager {
  private static readonly STORAGE_KEY = 'elbienestar_offers'
  private static readonly BEHAVIOR_KEY = 'elbienestar_behavior'
  private static readonly TRACKING_KEY = 'elbienestar_tracking'

  // Obtener comportamiento del usuario
  static getUserBehavior(): UserBehavior {
    if (typeof window === 'undefined') {
      return {
        tiempoNavegacion: 0,
        paginasVisitadas: [],
        interacciones: 0,
        esPrimeraVisita: true,
        seccionesExploradas: [],
        ultimaActividad: Date.now()
      }
    }

    const stored = localStorage.getItem(this.BEHAVIOR_KEY)
    if (stored) {
      return JSON.parse(stored)
    }

    return {
      tiempoNavegacion: 0,
      paginasVisitadas: [],
      interacciones: 0,
      esPrimeraVisita: true,
      seccionesExploradas: [],
      ultimaActividad: Date.now()
    }
  }

  // Actualizar comportamiento del usuario
  static updateUserBehavior(updates: Partial<UserBehavior>): void {
    if (typeof window === 'undefined') return

    const current = this.getUserBehavior()
    const updated = { ...current, ...updates, ultimaActividad: Date.now() }
    localStorage.setItem(this.BEHAVIOR_KEY, JSON.stringify(updated))
  }

  // Obtener ofertas ya mostradas
  static getShownOffers(): string[] {
    if (typeof window === 'undefined') return []

    const stored = localStorage.getItem(this.STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  }

  // Marcar oferta como mostrada
  static markOfferAsShown(codigo: string): void {
    if (typeof window === 'undefined') return

    const shown = this.getShownOffers()
    if (!shown.includes(codigo)) {
      shown.push(codigo)
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(shown))
    }
  }

  // Verificar si una oferta debe mostrarse
  static shouldShowOffer(oferta: Oferta, behavior: UserBehavior): boolean {
    const shownOffers = this.getShownOffers()
    
    // No mostrar si ya se mostró esta semana
    if (shownOffers.includes(oferta.codigo)) {
      return false
    }

    // Verificar trigger específico
    switch (oferta.trigger.tipo) {
      case 'tiempo':
        return behavior.tiempoNavegacion >= oferta.trigger.valor

      case 'paginas':
        return behavior.paginasVisitadas.length >= oferta.trigger.valor

      case 'interacciones':
        return behavior.interacciones >= oferta.trigger.valor

      case 'primera_visita':
        return behavior.esPrimeraVisita && this.checkConditions(oferta.trigger.condiciones, behavior)

      case 'comportamiento':
        return this.checkConditions(oferta.trigger.condiciones, behavior)

      default:
        return false
    }
  }

  // Verificar condiciones específicas
  private static checkConditions(condiciones: string[] = [], behavior: UserBehavior): boolean {
    return condiciones.every(condicion => {
      switch (condicion) {
        case 'ofertas':
          return behavior.paginasVisitadas.includes('/ofertas')
        case 'recetas':
          return behavior.paginasVisitadas.includes('/recetas')
        case 'frutas':
          return behavior.seccionesExploradas.includes('frutas')
        case 'tiempo_minimo':
          return behavior.tiempoNavegacion >= 120 // 2 minutos
        case 'tiempo_extendido':
          return behavior.tiempoNavegacion >= 300 // 5 minutos
        case 'multiple_secciones':
          return behavior.seccionesExploradas.length >= 2
        case 'visitante_recurrente':
          return !behavior.esPrimeraVisita
        default:
          return true
      }
    })
  }

  // Obtener oferta elegible
  static getEligibleOffer(): Oferta | null {
    const behavior = this.getUserBehavior()
    const eligibleOffers = OFERTAS.filter(oferta => 
      this.shouldShowOffer(oferta, behavior)
    )

    if (eligibleOffers.length === 0) return null

    // Seleccionar oferta aleatoria de las elegibles
    const randomIndex = Math.floor(Math.random() * eligibleOffers.length)
    return eligibleOffers[randomIndex]
  }

  // Registrar tracking
  static trackOfferUsage(codigo: string, metodo: 'whatsapp' | 'copiado' | 'screenshot'): void {
    if (typeof window === 'undefined') return

    const tracking: TrackingData = {
      codigoUsado: codigo,
      timestamp: Date.now(),
      metodo,
      usuario: this.generateUserId()
    }

    const stored = localStorage.getItem(this.TRACKING_KEY)
    const trackingData = stored ? JSON.parse(stored) : []
    trackingData.push(tracking)
    localStorage.setItem(this.TRACKING_KEY, JSON.stringify(trackingData))
  }

  // Generar ID único de usuario
  private static generateUserId(): string {
    let userId = localStorage.getItem('elbienestar_user_id')
    if (!userId) {
      userId = 'user_' + Math.random().toString(36).substr(2, 9)
      localStorage.setItem('elbienestar_user_id', userId)
    }
    return userId
  }

  // Obtener estadísticas de tracking
  static getTrackingStats(): { total: number; porMetodo: Record<string, number> } {
    if (typeof window === 'undefined') return { total: 0, porMetodo: {} }

    const stored = localStorage.getItem(this.TRACKING_KEY)
    const trackingData: TrackingData[] = stored ? JSON.parse(stored) : []

    const porMetodo = trackingData.reduce((acc, item) => {
      acc[item.metodo] = (acc[item.metodo] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return {
      total: trackingData.length,
      porMetodo
    }
  }

  // Reset semanal (llamar cada lunes)
  static resetWeeklyOffers(): void {
    if (typeof window === 'undefined') return

    const lastReset = localStorage.getItem('elbienestar_last_reset')
    const now = Date.now()
    const weekInMs = 7 * 24 * 60 * 60 * 1000

    if (!lastReset || (now - parseInt(lastReset)) > weekInMs) {
      localStorage.removeItem(this.STORAGE_KEY)
      localStorage.setItem('elbienestar_last_reset', now.toString())
    }
  }
}
