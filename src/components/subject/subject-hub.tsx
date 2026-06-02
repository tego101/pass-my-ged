"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  BookOpen,
  HelpCircle,
  Layers,
  Timer,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { Subject } from "@/lib/types"
import { useProgress } from "@/hooks/use-progress"

interface SubjectHubProps {
  subject: Subject
}

export function SubjectHub({ subject }: SubjectHubProps) {
  const { progress } = useProgress()

  const getTopicProgress = (topicId: string) => {
    const key = `${subject.id}-${topicId}`
    const studied = progress.studiedTopics.includes(key)
    const quizResults = progress.quizResults.filter(
      (r) => r.subjectId === subject.id && r.topicId === topicId
    )
    const bestScore =
      quizResults.length > 0
        ? Math.max(...quizResults.map((r) => r.score / r.total))
        : 0
    return { studied, quizResults: quizResults.length, bestScore }
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-foreground">{subject.shortName}</span>
        </div>
        <h1 className="text-3xl font-bold">{subject.name}</h1>
        <p className="text-muted-foreground max-w-2xl">{subject.description}</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            icon: BookOpen,
            label: "Study Guides",
            description: "Learn key concepts",
            count: subject.topics.length,
          },
          {
            icon: HelpCircle,
            label: "Practice Quizzes",
            description: "Test your knowledge",
            count: subject.topics.reduce((acc, t) => acc + t.questions.length, 0),
          },
          {
            icon: Layers,
            label: "Flashcards",
            description: "Review key terms",
            count: subject.topics.reduce((acc, t) => acc + t.flashcards.length, 0),
          },
          {
            icon: Timer,
            label: "Practice Exam",
            description: "Simulate the real test",
            count: 1,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6 text-center">
                <item.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                <p className="font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
                <Badge variant="secondary" className="mt-2">{item.count}</Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Topics</h2>
        <div className="grid gap-4">
          {subject.topics.map((topic, i) => {
            const topicProgress = getTopicProgress(topic.id)

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {topicProgress.studied && (
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                          )}
                          {topic.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {topic.description}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <Badge variant="outline">{topic.questions.length} questions</Badge>
                        <Badge variant="outline">{topic.flashcards.length} cards</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {topicProgress.quizResults > 0 && (
                      <div className="mb-4 space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Best quiz score</span>
                          <span>{Math.round(topicProgress.bestScore * 100)}%</span>
                        </div>
                        <Progress value={topicProgress.bestScore * 100} className="h-2" />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2">
                      <Link href={`/${subject.id}/study/${topic.id}`}>
                        <Button variant="outline" size="sm">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Study
                        </Button>
                      </Link>
                      <Link href={`/${subject.id}/quiz/${topic.id}`}>
                        <Button variant="outline" size="sm">
                          <HelpCircle className="w-4 h-4 mr-1" />
                          Quiz
                        </Button>
                      </Link>
                      <Link href={`/${subject.id}/flashcards/${topic.id}`}>
                        <Button variant="outline" size="sm">
                          <Layers className="w-4 h-4 mr-1" />
                          Flashcards
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 pb-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 space-y-1">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Timer className="w-5 h-5 text-primary" />
                Full Practice Exam
              </h3>
              <p className="text-sm text-muted-foreground">
                Take a timed practice exam that simulates the real GED test conditions.
              </p>
            </div>
            <Link href={`/${subject.id}/practice-exam`}>
              <Button size="lg" className="group">
                Start Exam
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
