"use client"

import { use } from "react"
import Link from "next/link"
import { PracticeExam } from "@/components/quiz/practice-exam"
import { getSubject } from "@/data/subjects"
import { addExamResult } from "@/lib/storage"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { SubjectId } from "@/lib/types"

const examDurations: Record<string, number> = {
  math: 115,
  "language-arts": 150,
  science: 90,
  "social-studies": 70,
}

interface PracticeExamPageProps {
  params: Promise<{ subject: string }>
}

export default function PracticeExamPage({ params }: PracticeExamPageProps) {
  const { subject } = use(params)
  const subjectData = getSubject(subject)

  if (!subjectData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Subject not found</h1>
        <Link href="/">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </div>
    )
  }

  const allQuestions = subjectData.topics.flatMap((t) => t.questions)
  const duration = examDurations[subject] || 90

  const handleComplete = (score: number, total: number, timeSpent: number) => {
    addExamResult({
      subjectId: subject as SubjectId,
      score,
      total,
      date: new Date().toISOString(),
      timeSpent,
      answers: [],
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">Dashboard</Link>
        <span>/</span>
        <Link href={`/${subject}`} className="hover:text-foreground transition-colors capitalize">{subject.replace("-", " ")}</Link>
        <span>/</span>
        <span className="text-foreground">Practice Exam</span>
      </div>
      <PracticeExam
        questions={allQuestions}
        subjectId={subject as SubjectId}
        subjectName={subjectData.name}
        durationMinutes={duration}
        onComplete={handleComplete}
      />
    </div>
  )
}
