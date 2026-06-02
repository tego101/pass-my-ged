"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, Trophy, RotateCcw, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ExamTimer } from "./exam-timer"
import type { Question, SubjectId } from "@/lib/types"
import { cn } from "@/lib/utils"

interface PracticeExamProps {
  questions: Question[]
  subjectId: SubjectId
  subjectName: string
  durationMinutes: number
  onComplete?: (score: number, total: number, timeSpent: number) => void
}

export function PracticeExam({
  questions,
  subjectName,
  durationMinutes,
  onComplete,
}: PracticeExamProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1))
  const [isComplete, setIsComplete] = useState(false)
  const [showReview, setShowReview] = useState(false)

  const currentQuestion = questions[currentIndex]
  const score = answers.reduce(
    (acc, answer, i) => (answer === questions[i].correctAnswer ? acc + 1 : acc),
    0
  )
  const answeredCount = answers.filter((a) => a !== -1).length

  const selectAnswer = (answerIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[currentIndex] = answerIndex
      return next
    })
  }

  const finishExam = () => {
    setIsComplete(true)
    onComplete?.(score, questions.length, durationMinutes * 60)
  }

  const handleTimeUp = () => {
    finishExam()
  }

  const reset = () => {
    setCurrentIndex(0)
    setAnswers(new Array(questions.length).fill(-1))
    setIsComplete(false)
    setShowReview(false)
  }

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 70

    if (showReview) {
      return (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Review Answers</h2>
            <Button variant="outline" onClick={() => setShowReview(false)}>
              Back to Results
            </Button>
          </div>
          {questions.map((q, i) => {
            const userAnswer = answers[i]
            const isCorrect = userAnswer === q.correctAnswer

            return (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                      isCorrect ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-red-100 dark:bg-red-900/30"
                    )}>
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                    </div>
                    <CardTitle className="text-base">
                      {i + 1}. {q.question}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {q.options.map((opt, j) => (
                    <div
                      key={j}
                      className={cn(
                        "p-3 rounded-lg text-sm",
                        j === q.correctAnswer && "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800",
                        j === userAnswer && j !== q.correctAnswer && "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800",
                        j !== q.correctAnswer && j !== userAnswer && "opacity-50"
                      )}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + j)}.</span>
                      {opt}
                      {j === q.correctAnswer && <span className="ml-2 text-emerald-600 text-xs">(Correct)</span>}
                      {j === userAnswer && j !== q.correctAnswer && <span className="ml-2 text-red-600 text-xs">(Your answer)</span>}
                    </div>
                  ))}
                  <p className="text-sm text-muted-foreground pt-2 border-t mt-3">
                    {q.explanation}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )
    }

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
                <Clock className="w-10 h-10 text-amber-600 dark:text-amber-400" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                {passed ? "You passed the practice exam!" : "Keep studying — you'll get there!"}
              </h2>
              <p className="text-muted-foreground mt-1">
                {subjectName} Practice Exam
              </p>
            </div>
            <div className="text-4xl font-bold">{percentage}%</div>
            <Progress value={percentage} className="h-3" />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-emerald-600">{score}</p>
                <p className="text-xs text-muted-foreground">Correct</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">{questions.length - score}</p>
                <p className="text-xs text-muted-foreground">Incorrect</p>
              </div>
              <div>
                <p className="text-2xl font-bold">{questions.length}</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>
            <Separator />
            <div className="flex gap-3 justify-center flex-wrap">
              <Button onClick={() => setShowReview(true)} variant="outline">
                Review Answers
              </Button>
              <Button onClick={reset}>
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Exam
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              GED passing score: 145/200 (approximately 70%)
            </p>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <ExamTimer durationMinutes={durationMinutes} onTimeUp={handleTimeUp} />

      <div className="flex items-center justify-between">
        <Badge variant="secondary">
          Question {currentIndex + 1} of {questions.length}
        </Badge>
        <Badge variant="outline">
          {answeredCount}/{questions.length} answered
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion.options.map((option, i) => (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              className={cn(
                "w-full text-left p-4 rounded-lg border-2 transition-all",
                "hover:border-primary/50 hover:bg-primary/5",
                answers[currentIndex] === i
                  ? "border-primary bg-primary/10"
                  : "border-border"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border",
                  answers[currentIndex] === i
                    ? "border-primary text-primary bg-primary/10"
                    : "border-muted-foreground/30 text-muted-foreground"
                )}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      <div className="flex gap-2 flex-wrap justify-center">
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              "w-9 h-9 rounded-lg text-xs font-medium border transition-all",
              i === currentIndex && "border-primary bg-primary text-primary-foreground",
              i !== currentIndex && answers[i] !== -1 && "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300",
              i !== currentIndex && answers[i] === -1 && "border-border text-muted-foreground hover:border-primary/50"
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={finishExam}
          variant="destructive"
          disabled={answeredCount < questions.length}
        >
          {answeredCount < questions.length
            ? `Answer all questions (${questions.length - answeredCount} remaining)`
            : "Submit Exam"}
        </Button>
      </div>
    </div>
  )
}
