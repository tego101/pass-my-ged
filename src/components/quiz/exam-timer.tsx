"use client"

import { Timer, Pause, Play, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useTimer } from "@/hooks/use-timer"
import { cn } from "@/lib/utils"

interface ExamTimerProps {
  durationMinutes: number
  onTimeUp?: () => void
}

export function ExamTimer({ durationMinutes, onTimeUp }: ExamTimerProps) {
  const totalSeconds = durationMinutes * 60
  const { isRunning, formatted, progress, start, pause, reset } = useTimer(
    totalSeconds,
    onTimeUp
  )

  const isLow = progress > 0.8

  return (
    <Card className={cn(
      "transition-colors",
      isLow && "border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/10"
    )}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Timer className={cn(
              "w-5 h-5",
              isLow ? "text-red-600 dark:text-red-400" : "text-muted-foreground"
            )} />
            <span className={cn(
              "text-2xl font-mono font-bold tabular-nums",
              isLow && "text-red-600 dark:text-red-400"
            )}>
              {formatted}
            </span>
          </div>
          <div className="flex gap-2">
            {!isRunning ? (
              <Button size="sm" onClick={start}>
                <Play className="w-4 h-4 mr-1" />
                Start
              </Button>
            ) : (
              <Button size="sm" variant="outline" onClick={pause}>
                <Pause className="w-4 h-4 mr-1" />
                Pause
              </Button>
            )}
            <Button size="sm" variant="ghost" onClick={reset}>
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <Progress value={progress * 100} className="h-1.5 mt-3" />
      </CardContent>
    </Card>
  )
}
