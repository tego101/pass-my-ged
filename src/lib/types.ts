export type SubjectId = "math" | "language-arts" | "science" | "social-studies"

export interface Subject {
  id: SubjectId
  name: string
  shortName: string
  description: string
  icon: string
  color: string
  topics: Topic[]
}

export interface Topic {
  id: string
  name: string
  description: string
  studyGuide: StudyGuide
  questions: Question[]
  flashcards: Flashcard[]
}

export interface StudyGuide {
  introduction: string
  sections: StudySection[]
  keyFormulas?: string[]
  tips: string[]
}

export interface StudySection {
  title: string
  content: string
  examples?: string[]
}

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Flashcard {
  id: string
  term: string
  definition: string
}

export interface QuizResult {
  subjectId: SubjectId
  topicId: string
  score: number
  total: number
  date: string
  answers: number[]
}

export interface ExamResult {
  subjectId: SubjectId
  score: number
  total: number
  date: string
  timeSpent: number
  answers: number[]
}

export interface ScratchPadPage {
  id: string
  text: string
  drawing: string
  createdAt: string
  updatedAt: string
}

export interface ScratchPadData {
  activePageId: string
  pages: ScratchPadPage[]
  isMinimized: boolean
  position: { x: number; y: number }
  size: { w: number; h: number }
}

export const DEFAULT_SCRATCH_PAD: ScratchPadData = {
  activePageId: "",
  pages: [],
  isMinimized: true,
  position: { x: 16, y: 100 },
  size: { w: 400, h: 500 },
}

export interface UserProgress {
  studiedTopics: string[]
  quizResults: QuizResult[]
  examResults: ExamResult[]
  flashcardProgress: Record<string, string[]>
  scratchPadData: ScratchPadData
}

export interface Profile {
  id: string
  name: string
  createdAt: string
}

export interface ProfilesData {
  activeProfileId: string
  profiles: Profile[]
}

export interface SyncPayload {
  profile: Profile
  progress: UserProgress
}
