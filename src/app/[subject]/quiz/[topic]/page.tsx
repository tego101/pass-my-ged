"use client"

import { use } from "react"
import Link from "next/link"
import { Quiz } from "@/components/quiz/quiz"
import { getTopic } from "@/data/subjects"
import { addQuizResult } from "@/lib/storage"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { SubjectId } from "@/lib/types"

interface QuizPageProps {
  params: Promise<{ subject: string; topic: string }>
}

export default function QuizPage({ params }: QuizPageProps) {
  const { subject, topic } = use(params)
  const topicData = getTopic(subject, topic)

  if (!topicData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Topic not found</h1>
        <Link href={`/${subject}`}>
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Subject
          </Button>
        </Link>
      </div>
    )
  }

  const handleComplete = (score: number, total: number, answers: number[]) => {
    addQuizResult({
      subjectId: subject as SubjectId,
      topicId: topic,
      score,
      total,
      date: new Date().toISOString(),
      answers,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">Dashboard</Link>
        <span>/</span>
        <Link href={`/${subject}`} className="hover:text-foreground transition-colors capitalize">{subject.replace("-", " ")}</Link>
        <span>/</span>
        <span className="text-foreground">Quiz: {topicData.name}</span>
      </div>
      <Quiz
        questions={topicData.questions}
        subjectId={subject as SubjectId}
        topicId={topic}
        onComplete={handleComplete}
      />
    </div>
  )
}
