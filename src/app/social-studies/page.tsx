import { SubjectHub } from "@/components/subject/subject-hub"
import { getSubject } from "@/data/subjects"

export default async function SocialStudiesPage() {
  const subject = getSubject("social-studies")
  if (!subject) return null
  return <SubjectHub subject={subject} />
}
