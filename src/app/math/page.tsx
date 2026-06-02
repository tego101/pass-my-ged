import { SubjectHub } from "@/components/subject/subject-hub"
import { getSubject } from "@/data/subjects"

export default async function MathPage() {
  const subject = getSubject("math")
  if (!subject) return null
  return <SubjectHub subject={subject} />
}
