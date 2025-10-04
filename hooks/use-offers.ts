'use client'

import { useState, useEffect, useCallback } from 'react'
import { Oferta, OfertaGenerada, OffersManager, UserBehavior } from '@/lib/offers'

export function useOffers() {
  const [currentOffer, setCurrentOffer] = useState<OfertaGenerada | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [behavior, setBehavior] = useState<UserBehavior>(OffersManager.getUserBehavior())

  // Actualizar comportamiento del usuario
  const updateBehavior = useCallback((updates: Partial<UserBehavior>) => {
    OffersManager.updateUserBehavior(updates)
    setBehavior(prev => ({ ...prev, ...updates }))
  }, [])

  // Verificar si debe mostrar una oferta
  const checkForOffer = useCallback(() => {
    // Reset semanal si es necesario
    OffersManager.resetWeeklyOffers()

    // Obtener oferta elegible con código único
    const eligibleOffer = OffersManager.getEligibleOfferWithUniqueCode()
    
    if (eligibleOffer) {
      setCurrentOffer(eligibleOffer)
      setShowModal(true)
      // Marcar como mostrada
      OffersManager.markOfferAsShown(eligibleOffer.oferta.codigo)
    }
  }, [])

  // Cerrar modal
  const closeModal = useCallback(() => {
    setShowModal(false)
    setCurrentOffer(null)
  }, [])

  // Efecto para monitorear el comportamiento
  useEffect(() => {
    let startTime = Date.now()
    let intervalId: NodeJS.Timeout

    // Actualizar tiempo de navegación cada 30 segundos
    const updateTime = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000)
      updateBehavior({ tiempoNavegacion: elapsed })
    }

    intervalId = setInterval(updateTime, 30000) // Cada 30 segundos

    // Cleanup
    return () => {
      clearInterval(intervalId)
      // Guardar tiempo final
      const finalTime = Math.floor((Date.now() - startTime) / 1000)
      updateBehavior({ tiempoNavegacion: finalTime })
    }
  }, [updateBehavior])

  // Efecto para detectar cambios de página
  useEffect(() => {
    const handlePageChange = () => {
      const currentPath = window.location.pathname
      updateBehavior(prev => ({
        paginasVisitadas: [...new Set([...prev.paginasVisitadas, currentPath])]
      }))

      // Detectar secciones exploradas
      const sections: string[] = []
      if (currentPath.includes('/recetas')) sections.push('recetas')
      if (currentPath.includes('/ofertas')) sections.push('ofertas')
      if (currentPath.includes('/frutas')) sections.push('frutas')
      if (currentPath.includes('/verduras')) sections.push('verduras')
      if (currentPath.includes('/carnes')) sections.push('carnes')

      if (sections.length > 0) {
        updateBehavior(prev => ({
          seccionesExploradas: [...new Set([...prev.seccionesExploradas, ...sections])]
        }))
      }
    }

    // Ejecutar inmediatamente
    handlePageChange()

    // Escuchar cambios de URL (para navegación SPA)
    window.addEventListener('popstate', handlePageChange)
    
    return () => {
      window.removeEventListener('popstate', handlePageChange)
    }
  }, [updateBehavior])

  // Efecto para detectar interacciones
  useEffect(() => {
    const handleInteraction = () => {
      updateBehavior(prev => ({
        interacciones: prev.interacciones + 1
      }))
    }

    // Escuchar clicks, scrolls, etc.
    document.addEventListener('click', handleInteraction)
    document.addEventListener('scroll', handleInteraction, { passive: true })

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('scroll', handleInteraction)
    }
  }, [updateBehavior])

  // Efecto para verificar ofertas periódicamente
  useEffect(() => {
    // Verificar inmediatamente solo si ya hay comportamiento suficiente
    const behavior = OffersManager.getUserBehavior()
    if (behavior.tiempoNavegacion >= 60 || behavior.interacciones >= 5) {
      checkForOffer()
    }

    // Verificar cada 2 minutos (menos agresivo)
    const interval = setInterval(checkForOffer, 120000)

    return () => clearInterval(interval)
  }, [checkForOffer])

  // Efecto para detectar intento de salida
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Solo mostrar oferta si no se ha mostrado ninguna
      if (!OffersManager.getShownOffers().length) {
        checkForOffer()
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [checkForOffer])

  return {
    currentOffer,
    showModal,
    behavior,
    closeModal,
    checkForOffer,
    updateBehavior
  }
}
