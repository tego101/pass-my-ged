import type { Subject } from "@/lib/types"
import { mathTopics } from "@/data/math/topics"
import { languageArtsTopics } from "@/data/language-arts/topics"
import { scienceTopics } from "@/data/science/topics"
import { socialStudiesTopics } from "@/data/social-studies/topics"

export const subjects: Subject[] = [
  {
    id: "math",
    name: "Mathematical Reasoning",
    shortName: "Math",
    description:
      "Algebra, geometry, basic math, and data analysis. The GED math test has 46 questions and lasts 115 minutes.",
    icon: "Calculator",
    color: "blue",
    topics: mathTopics,
  },
  {
    id: "language-arts",
    name: "Reasoning Through Language Arts",
    shortName: "Language Arts",
    description:
      "Reading comprehension, grammar, writing, and vocabulary. The GED RLA test has about 46 questions plus an essay and lasts 150 minutes.",
    icon: "BookOpen",
    color: "emerald",
    topics: languageArtsTopics,
  },
  {
    id: "science",
    name: "Science",
    shortName: "Science",
    description:
      "Life science, physical science, Earth and space science. The GED Science test has 34 questions and lasts 90 minutes.",
    icon: "FlaskConical",
    color: "purple",
    topics: scienceTopics,
  },
  {
    id: "social-studies",
    name: "Social Studies",
    shortName: "Social Studies",
    description:
      "US history, civics and government, economics, and geography. The GED Social Studies test has 35 questions and lasts 70 minutes.",
    icon: "Landmark",
    color: "amber",
    topics: socialStudiesTopics,
  },
]

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id)
}

export function getTopic(subjectId: string, topicId: string) {
  const subject = getSubject(subjectId)
  return subject?.topics.find((t) => t.id === topicId)
}
