"use client"

import { useState, useCallback, useEffect } from "react"
import type { UserProgress } from "@/lib/types"
import { getProgress, saveProgress } from "@/lib/storage"

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => getProgress())

  const refresh = useCallback(() => {
    setProgress(getProgress())
  }, [])

  useEffect(() => {
    const handler = () => setProgress(getProgress())
    window.addEventListener("profile-change", handler)
    return () => window.removeEventListener("profile-change", handler)
  }, [])

  const update = useCallback((updater: (p: UserProgress) => UserProgress) => {
    setProgress((prev) => {
      const next = updater(prev)
      saveProgress(next)
      return next
    })
  }, [])

  return { progress, refresh, update }
}
