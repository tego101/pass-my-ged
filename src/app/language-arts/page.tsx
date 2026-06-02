import { SubjectHub } from "@/components/subject/subject-hub"
import { getSubject } from "@/data/subjects"

export default async function LanguageArtsPage() {
  const subject = getSubject("language-arts")
  if (!subject) return null
  return <SubjectHub subject={subject} />
}
