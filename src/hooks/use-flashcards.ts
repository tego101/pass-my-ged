"use client"

import { useState, useCallback } from "react"
import type { Flashcard } from "@/lib/types"

export function useFlashcards(cards: Flashcard[]) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [knownIds, setKnownIds] = useState<Set<string>>(new Set())
  const [unknownIds, setUnknownIds] = useState<Set<string>>(new Set())

  const currentCard = cards[currentIndex]
  const isComplete = knownIds.size + unknownIds.size >= cards.length

  const flip = useCallback(() => setIsFlipped((f) => !f), [])

  const markKnown = useCallback(() => {
    setKnownIds((prev) => new Set(prev).add(cards[currentIndex].id))
    setIsFlipped(false)
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1)
    }
  }, [currentIndex, cards])

  const markUnknown = useCallback(() => {
    setUnknownIds((prev) => new Set(prev).add(cards[currentIndex].id))
    setIsFlipped(false)
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1)
    }
  }, [currentIndex, cards])

  const reset = useCallback(() => {
    setCurrentIndex(0)
    setIsFlipped(false)
    setKnownIds(new Set())
    setUnknownIds(new Set())
  }, [])

  const shuffle = useCallback(() => {
    reset()
  }, [reset])

  return {
    currentCard,
    currentIndex,
    isFlipped,
    isComplete,
    knownIds,
    unknownIds,
    knownCount: knownIds.size,
    unknownCount: unknownIds.size,
    total: cards.length,
    flip,
    markKnown,
    markUnknown,
    reset,
    shuffle,
  }
}
