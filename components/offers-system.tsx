'use client'

import { OffersModal } from './offers-modal'
import { useOffers } from '@/hooks/use-offers'

export function OffersSystem() {
  const { currentOffer, showModal, closeModal } = useOffers()

  if (!showModal || !currentOffer) {
    return null
  }

  return (
    <OffersModal
      oferta={currentOffer}
      onClose={closeModal}
    />
  )
}
