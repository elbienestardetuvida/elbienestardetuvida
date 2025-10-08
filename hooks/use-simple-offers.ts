'use client'

import { useState, useEffect, useCallback } from 'react'
import { SimpleOffersManager, GeneratedOffer } from '@/lib/simple-offers'

export function useSimpleOffers() {
  const [showModal, setShowModal] = useState(false)
  const [visitCount, setVisitCount] = useState(0)
  const [generatedOffer, setGeneratedOffer] = useState<GeneratedOffer | null>(null)

  // Verificar si debe mostrar la oferta
  const checkForOffer = useCallback(() => {
    if (SimpleOffersManager.shouldShowOffer()) {
      // Verificar si ya existe una oferta generada
      let offer = SimpleOffersManager.getGeneratedOffer()
      
      // Si no existe, generar una nueva
      if (!offer) {
        offer = SimpleOffersManager.generateOffer()
      }
      
      setGeneratedOffer(offer)
      setShowModal(true)
      SimpleOffersManager.markOfferAsShown()
    }
  }, [])

  // Incrementar visitas al cargar la página
  useEffect(() => {
    SimpleOffersManager.incrementVisitCount()
    setVisitCount(SimpleOffersManager.getVisitCount())
    
    // Verificar si debe mostrar la oferta
    checkForOffer()
  }, [checkForOffer])

  // Cerrar modal
  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return {
    generatedOffer,
    showModal,
    visitCount,
    closeModal,
  }
}

