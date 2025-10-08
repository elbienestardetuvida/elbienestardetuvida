'use client'

import { SimpleOffersModal } from './simple-offers-modal'
import { useSimpleOffers } from '@/hooks/use-simple-offers'

export function OffersSystem() {
  const { generatedOffer, showModal, closeModal } = useSimpleOffers()

  if (!showModal || !generatedOffer) {
    return null
  }

  return (
    <SimpleOffersModal
      generatedOffer={generatedOffer}
      onClose={closeModal}
    />
  )
}
