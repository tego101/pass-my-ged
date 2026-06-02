import { SubjectHub } from "@/components/subject/subject-hub"
import { getSubject } from "@/data/subjects"

export default async function SciencePage() {
  const subject = getSubject("science")
  if (!subject) return null
  return <SubjectHub subject={subject} />
}
