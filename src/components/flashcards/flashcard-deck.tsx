"use client"

import { motion } from "framer-motion"
import { ThumbsUp, ThumbsDown, RotateCcw, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useFlashcards } from "@/hooks/use-flashcards"
import type { Flashcard } from "@/lib/types"
import { cn } from "@/lib/utils"

interface FlashcardDeckProps {
  cards: Flashcard[]
  topicKey: string
}

export function FlashcardDeck({ cards }: FlashcardDeckProps) {
  const {
    currentCard,
    currentIndex,
    isFlipped,
    isComplete,
    knownCount,
    unknownCount,
    total,
    flip,
    markKnown,
    markUnknown,
    reset,
  } = useFlashcards(cards)

  if (isComplete) {
    const percentage = Math.round((knownCount / total) * 100)

    return (
      <div className="max-w-lg mx-auto">
        <Card>
          <CardContent className="pt-8 pb-8 text-center space-y-6">
            <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">{percentage}%</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Deck Complete!</h2>
              <p className="text-muted-foreground mt-1">
                You knew {knownCount} out of {total} cards
              </p>
            </div>
            <div className="flex gap-4 justify-center text-sm">
              <div className="flex items-center gap-1 text-emerald-600">
                <ThumbsUp className="w-4 h-4" /> {knownCount} known
              </div>
              <div className="flex items-center gap-1 text-amber-600">
                <ThumbsDown className="w-4 h-4" /> {unknownCount} to review
              </div>
            </div>
            <Button onClick={reset} variant="outline">
              <RotateCcw className="w-4 h-4 mr-2" />
              Study Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Badge variant="secondary">
          Card {currentIndex + 1} of {total}
        </Badge>
        <div className="flex gap-3 text-sm">
          <span className="text-emerald-600">{knownCount} known</span>
          <span className="text-amber-600">{unknownCount} review</span>
        </div>
      </div>
      <Progress value={((currentIndex + 1) / total) * 100} className="h-2" />

      <div
        className="cursor-pointer perspective-1000"
        onClick={flip}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && flip()}
      >
        <motion.div
          className="relative w-full min-h-[280px]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card
            className="absolute inset-0 flex items-center justify-center p-8"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardContent className="text-center space-y-4 pt-6">
              <Badge variant="outline">Term</Badge>
              <p className="text-2xl font-bold">{currentCard.term}</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Eye className="w-3 h-3" /> Tap to reveal definition
              </p>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "absolute inset-0 flex items-center justify-center p-8",
              "bg-primary/5 border-primary/20"
            )}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <CardContent className="text-center space-y-4 pt-6">
              <Badge variant="outline">Definition</Badge>
              <p className="text-lg leading-relaxed">{currentCard.definition}</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                <Eye className="w-3 h-3" /> Tap to flip back
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="flex gap-3 justify-center">
        <Button
          variant="outline"
          onClick={markUnknown}
          className="flex-1 max-w-[160px] border-amber-300 text-amber-700 hover:bg-amber-50 dark:hover:bg-amber-900/20"
        >
          <ThumbsDown className="w-4 h-4 mr-2" />
          Still Learning
        </Button>
        <Button
          onClick={markKnown}
          className="flex-1 max-w-[160px] bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          <ThumbsUp className="w-4 h-4 mr-2" />
          I Know This
        </Button>
      </div>
    </div>
  )
}
