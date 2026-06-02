"use client"

import { useState } from "react"
import { Link2, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { getActiveProfile } from "@/lib/profiles"
import { getAllProgressData } from "@/lib/storage"
import { generateSyncLink } from "@/lib/sync"

export function SyncDialog() {
  const [open, setOpen] = useState(false)
  const [syncLink, setSyncLink] = useState("")
  const [copied, setCopied] = useState(false)

  const handleGenerate = () => {
    const profile = getActiveProfile()
    const progress = getAllProgressData()
    const link = generateSyncLink({ profile, progress })
    setSyncLink(link)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(syncLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          setOpen(true)
          handleGenerate()
        }}
        className="flex items-center gap-1.5"
      >
        <Link2 className="w-4 h-4" />
        <span className="hidden sm:inline">Sync Device</span>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Link Another Device</DialogTitle>
          <DialogDescription>
            Copy this link and open it on another device to transfer your progress for the current profile.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              readOnly
              value={syncLink}
              className="flex-1 h-9 rounded-md border bg-muted px-3 text-xs outline-none truncate"
            />
            <Button size="sm" onClick={handleCopy} className="flex-shrink-0">
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="ml-1">{copied ? "Copied" : "Copy"}</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Progress is not synced automatically. Use a new link each time you want to transfer updated data.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
