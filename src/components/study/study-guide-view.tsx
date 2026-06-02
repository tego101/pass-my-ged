"use client"

import { motion } from "framer-motion"
import { BookOpen, Lightbulb, Calculator, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { StudyGuide } from "@/lib/types"

interface StudyGuideViewProps {
  guide: StudyGuide
  topicName: string
  onMarkComplete?: () => void
}

export function StudyGuideView({ guide, topicName, onMarkComplete }: StudyGuideViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto space-y-6"
    >
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle>{topicName}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Study Guide</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{guide.introduction}</p>
        </CardContent>
      </Card>

      {guide.sections.map((section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {i + 1}
                </span>
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed">{section.content}</p>
              {section.examples && section.examples.length > 0 && (
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Examples:</p>
                  {section.examples.map((example, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      <span className="font-mono text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}

      {guide.keyFormulas && guide.keyFormulas.length > 0 && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" />
              Key Formulas to Remember
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {guide.keyFormulas.map((formula, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="font-mono text-xs">
                    {i + 1}
                  </Badge>
                  <span className="font-mono">{formula}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {guide.tips.length > 0 && (
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-amber-800 dark:text-amber-200">
              <Lightbulb className="w-5 h-5" />
              Test-Taking Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {guide.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {onMarkComplete && (
        <div className="flex justify-center pt-4">
          <Button onClick={onMarkComplete} size="lg">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark as Studied
          </Button>
        </div>
      )}
    </motion.div>
  )
}
