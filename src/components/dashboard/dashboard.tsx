"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Calculator,
  BookOpen,
  FlaskConical,
  Landmark,
  ArrowRight,
  Trophy,
  Target,
  BookMarked,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { subjects } from "@/data/subjects"
import { useProgress } from "@/hooks/use-progress"
import { getSubjectProgress } from "@/lib/storage"
import { cn } from "@/lib/utils"

const iconMap = {
  Calculator,
  BookOpen,
  FlaskConical,
  Landmark,
}

const colorMap: Record<string, string> = {
  blue: "from-blue-500 to-blue-600",
  emerald: "from-emerald-500 to-emerald-600",
  purple: "from-purple-500 to-purple-600",
  amber: "from-amber-500 to-amber-600",
}

const bgColorMap: Record<string, string> = {
  blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
  emerald: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
  purple: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
  amber: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
}

export function Dashboard() {
  const { progress } = useProgress()

  const totalTopics = subjects.reduce((acc, s) => acc + s.topics.length, 0)
  const studiedTopics = progress.studiedTopics.length
  const totalQuizzes = progress.quizResults.length
  const avgScore =
    progress.quizResults.length > 0
      ? Math.round(
          (progress.quizResults.reduce((acc, r) => acc + r.score / r.total, 0) /
            progress.quizResults.length) *
            100
        )
      : 0

  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <h1 className="text-4xl font-bold tracking-tight">
          Pass Your GED — For Free
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Study guides, practice quizzes, flashcards, and timed exams for all 4 GED subjects.
          No sign-up required. Start studying now.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: BookMarked, label: "Topics Studied", value: studiedTopics, total: totalTopics },
          { icon: Target, label: "Quizzes Taken", value: totalQuizzes, total: null },
          { icon: Trophy, label: "Avg Quiz Score", value: `${avgScore}%`, total: null },
          { icon: Clock, label: "Practice Exams", value: progress.examResults.length, total: null },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="pt-6 text-center">
                <stat.icon className="w-5 h-5 mx-auto text-muted-foreground mb-2" />
                <p className="text-2xl font-bold">{stat.value}</p>
                {stat.total !== null && (
                  <p className="text-xs text-muted-foreground">of {stat.total}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Choose a Subject</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {subjects.map((subject, i) => {
            const Icon = iconMap[subject.icon as keyof typeof iconMap]
            const subjectProgress = getSubjectProgress(subject.id)
            const progressPercent = Math.round(subjectProgress.avgQuizScore * 100)

            return (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link href={`/${subject.id}`}>
                  <Card className={cn(
                    "h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer",
                    bgColorMap[subject.color]
                  )}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white",
                          colorMap[subject.color]
                        )}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{subject.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {subject.topics.length} topics
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                      {subjectProgress.quizzesCompleted > 0 && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Progress</span>
                            <span>{progressPercent}%</span>
                          </div>
                          <Progress value={progressPercent} className="h-2" />
                          <p className="text-xs text-muted-foreground">
                            {subjectProgress.quizzesCompleted} quizzes completed
                          </p>
                        </div>
                      )}
                      <Button variant="ghost" className="w-full group">
                        Start Studying
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold">How the GED Works</h3>
                <p className="text-sm text-muted-foreground">
                  The GED test has 4 subjects. You need a score of 145+ on each to pass.
                  You can take them one at a time. Study at your own pace — all resources here are 100% free.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Badge variant="outline" className="p-2">Math: 115 min</Badge>
                <Badge variant="outline" className="p-2">RLA: 150 min</Badge>
                <Badge variant="outline" className="p-2">Science: 90 min</Badge>
                <Badge variant="outline" className="p-2">Social Studies: 70 min</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
