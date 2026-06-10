import type { UserProgress, QuizResult, ExamResult } from "./types"
import { DEFAULT_SCRATCH_PAD } from "./types"
import { getActiveProfileId } from "./profiles"

function getStorageKey(): string {
  const profileId = getActiveProfileId()
  return `pass-my-ged-progress-${profileId}`
}

const defaultProgress: UserProgress = {
  studiedTopics: [],
  quizResults: [],
  examResults: [],
  flashcardProgress: {},
  scratchPadData: DEFAULT_SCRATCH_PAD,
}

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress
  try {
    const raw = localStorage.getItem(getStorageKey())
    if (!raw) return defaultProgress
    return JSON.parse(raw) as UserProgress
  } catch {
    return defaultProgress
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return
  localStorage.setItem(getStorageKey(), JSON.stringify(progress))
}

export function markTopicStudied(topicKey: string): void {
  const progress = getProgress()
  if (!progress.studiedTopics.includes(topicKey)) {
    progress.studiedTopics.push(topicKey)
    saveProgress(progress)
  }
}

export function addQuizResult(result: QuizResult): void {
  const progress = getProgress()
  progress.quizResults.push(result)
  saveProgress(progress)
}

export function addExamResult(result: ExamResult): void {
  const progress = getProgress()
  progress.examResults.push(result)
  saveProgress(progress)
}

export function updateFlashcardProgress(
  topicKey: string,
  knownCardIds: string[]
): void {
  const progress = getProgress()
  progress.flashcardProgress[topicKey] = knownCardIds
  saveProgress(progress)
}

export function getSubjectProgress(subjectId: string): {
  topicsStudied: number
  avgQuizScore: number
  quizzesCompleted: number
  examsCompleted: number
  bestExamScore: number
} {
  const progress = getProgress()
  const studiedTopics = progress.studiedTopics.filter((t) =>
    t.startsWith(subjectId)
  )
  const quizResults = progress.quizResults.filter(
    (r) => r.subjectId === subjectId
  )
  const examResults = progress.examResults.filter(
    (r) => r.subjectId === subjectId
  )

  const avgQuizScore =
    quizResults.length > 0
      ? quizResults.reduce((sum, r) => sum + r.score / r.total, 0) /
        quizResults.length
      : 0

  const bestExamScore =
    examResults.length > 0
      ? Math.max(...examResults.map((r) => r.score / r.total))
      : 0

  return {
    topicsStudied: studiedTopics.length,
    avgQuizScore,
    quizzesCompleted: quizResults.length,
    examsCompleted: examResults.length,
    bestExamScore,
  }
}

export function resetProgress(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(getStorageKey())
}

export function importProgress(progress: UserProgress): void {
  saveProgress(progress)
}

export function getAllProgressData(): UserProgress {
  return getProgress()
}
