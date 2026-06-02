import { Suspense } from "react"
import { SyncPageContent } from "./sync-content"
import { Loader2 } from "lucide-react"

export default function SyncPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <Loader2 className="w-10 h-10 animate-spin mx-auto text-primary" />
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      }
    >
      <SyncPageContent />
    </Suspense>
  )
}
