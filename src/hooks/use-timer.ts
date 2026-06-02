"use client"

import { useState, useEffect, useCallback, useRef } from "react"

export function useTimer(initialSeconds: number, onComplete?: () => void) {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (!isRunning) return
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          if (intervalRef.current) clearInterval(intervalRef.current)
          onCompleteRef.current?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning])

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])
  const reset = useCallback(() => {
    setIsRunning(false)
    setSeconds(initialSeconds)
  }, [initialSeconds])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  const formatted = `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  const progress = (initialSeconds - seconds) / initialSeconds

  return { seconds, isRunning, formatted, progress, start, pause, reset }
}
