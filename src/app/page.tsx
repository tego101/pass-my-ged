import { Suspense } from "react"
import { Dashboard } from "@/components/dashboard/dashboard"
import { SyncToast } from "@/components/layout/sync-toast"

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <SyncToast />
      </Suspense>
      <Dashboard />
    </>
  )
}
