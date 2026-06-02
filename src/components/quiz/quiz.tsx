"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useQuiz } from "@/hooks/use-quiz"
import type { Question, SubjectId } from "@/lib/types"
import { cn } from "@/lib/utils"

interface QuizProps {
  questions: Question[]
  subjectId: SubjectId
  topicId: string
  onComplete?: (score: number, total: number, answers: number[]) => void
}

export function Quiz({ questions, onComplete }: QuizProps) {
  const {
    currentIndex,
    currentQuestion,
    selectedAnswer,
    showResult,
    isComplete,
    score,
    total,
    selectAnswer,
    confirmAnswer,
    nextQuestion,
    reset,
  } = useQuiz(questions)

  const [hasReported, setHasReported] = useState(false)

  const handleComplete = () => {
    if (!hasReported && onComplete) {
      onComplete(score, total, [])
      setHasReported(true)
    }
  }

  if (isComplete) {
    handleComplete()
    const percentage = Math.round((score / total) * 100)
    const passed = percentage >= 70

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <Card>
          <CardContent className="pt-8 pb-8 text-center space-y-6">
            <div className={cn(
              "mx-auto w-20 h-20 rounded-full flex items-center justify-center",
              passed ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-amber-100 dark:bg-amber-900/30"
            )}>
              {passed ? (
                <Trophy className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <RotateCcw className="w-10 h-10 text-amber-600 dark:text-amber-400" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {passed ? "Great job!" : "Keep practicing!"}
              </h2>
              <p className="text-muted-foreground mt-1">
                You scored {score} out of {total} ({percentage}%)
              </p>
            </div>
            <Progress value={percentage} className="h-3" />
            <div className="flex gap-3 justify-center">
              <Button onClick={reset} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
            {passed ? (
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                You passed! The GED passing score is 145/200 (about 70%).
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                You need 70% or higher to pass. Review the study guide and try again.
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">
          Question {currentIndex + 1} of {total}
        </Badge>
        <Badge variant="outline">
          Score: {score}/{currentIndex + (showResult ? 1 : 0)}
        </Badge>
      </div>
      <Progress value={((currentIndex + 1) / total) * 100} className="h-2" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentQuestion.options.map((option, i) => {
                const isSelected = selectedAnswer === i
                const isCorrect = i === currentQuestion.correctAnswer
                const showCorrect = showResult && isCorrect
                const showWrong = showResult && isSelected && !isCorrect

                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    disabled={showResult}
                    className={cn(
                      "w-full text-left p-4 rounded-lg border-2 transition-all",
                      "hover:border-primary/50 hover:bg-primary/5",
                      "disabled:cursor-default",
                      isSelected && !showResult && "border-primary bg-primary/10",
                      !isSelected && !showResult && "border-border",
                      showCorrect && "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20",
                      showWrong && "border-red-500 bg-red-50 dark:bg-red-900/20",
                      showResult && !isCorrect && !isSelected && "opacity-50"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border",
                        isSelected && !showResult && "border-primary text-primary",
                        showCorrect && "border-emerald-500 bg-emerald-500 text-white",
                        showWrong && "border-red-500 bg-red-500 text-white",
                        !isSelected && !showResult && "border-muted-foreground/30 text-muted-foreground"
                      )}>
                        {showCorrect ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : showWrong ? (
                          <XCircle className="w-4 h-4" />
                        ) : (
                          String.fromCharCode(65 + i)
                        )}
                      </span>
                      <span className="flex-1">{option}</span>
                    </div>
                  </button>
                )
              })}

              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={cn(
                      "p-4 rounded-lg mt-4",
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800"
                        : "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800"
                    )}>
                      <p className="font-medium text-sm mb-1">
                        {selectedAnswer === currentQuestion.correctAnswer ? "Correct!" : "Not quite."}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-end pt-2">
                {!showResult ? (
                  <Button
                    onClick={confirmAnswer}
                    disabled={selectedAnswer === -1}
                  >
                    Check Answer
                  </Button>
                ) : (
                  <Button onClick={nextQuestion}>
                    {currentIndex < total - 1 ? (
                      <>
                        Next Question
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      "See Results"
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
