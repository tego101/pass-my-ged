"use client"

import { useState, useCallback } from "react"
import type { Question } from "@/lib/types"

export function useQuiz(questions: Question[]) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(questions.length).fill(-1)
  )
  const [showResult, setShowResult] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const currentQuestion = questions[currentIndex]
  const score = selectedAnswers.reduce(
    (acc, answer, i) =>
      answer === questions[i].correctAnswer ? acc + 1 : acc,
    0
  )

  const selectAnswer = useCallback(
    (answerIndex: number) => {
      if (showResult) return
      setSelectedAnswers((prev) => {
        const next = [...prev]
        next[currentIndex] = answerIndex
        return next
      })
    },
    [currentIndex, showResult]
  )

  const confirmAnswer = useCallback(() => {
    setShowResult(true)
  }, [])

  const nextQuestion = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setShowResult(false)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, questions.length])

  const reset = useCallback(() => {
    setCurrentIndex(0)
    setSelectedAnswers(new Array(questions.length).fill(-1))
    setShowResult(false)
    setIsComplete(false)
  }, [questions.length])

  return {
    currentIndex,
    currentQuestion,
    selectedAnswers,
    selectedAnswer: selectedAnswers[currentIndex],
    showResult,
    isComplete,
    score,
    total: questions.length,
    selectAnswer,
    confirmAnswer,
    nextQuestion,
    reset,
  }
}
