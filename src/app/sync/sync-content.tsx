"use client"

import { useEffect, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { unpackSyncToken } from "@/lib/sync"
import { importProgress, saveProgress } from "@/lib/storage"
import {
  getProfilesData,
  saveProfilesData,
  setActiveProfile,
} from "@/lib/profiles"
import type { Profile, SyncPayload } from "@/lib/types"
import { Loader2 } from "lucide-react"

function resolveSync(token: string | null): { status: "loading" | "success" | "error"; message: string } | null {
  if (!token) {
    return { status: "error", message: "No sync data found. Please use a valid sync link." }
  }

  const payload: SyncPayload | null = unpackSyncToken(token)
  if (!payload) {
    return { status: "error", message: "Invalid sync data. The link may be corrupted." }
  }

  const existingData = getProfilesData()
  const existingProfile = existingData.profiles.find(
    (p) => p.id === payload.profile.id
  )

  if (existingProfile) {
    setActiveProfile(existingProfile.id)
    importProgress(payload.progress)
    return { status: "success", message: `Progress synced to existing profile "${existingProfile.name}".` }
  }

  const newProfile: Profile = {
    ...payload.profile,
    createdAt: payload.profile.createdAt,
  }
  existingData.profiles.push(newProfile)
  existingData.activeProfileId = newProfile.id
  saveProfilesData(existingData)
  saveProgress(payload.progress)
  return { status: "success", message: `New profile "${newProfile.name}" created and progress imported.` }
}

export function SyncPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const token = searchParams.get("token")
  const result = useMemo(() => resolveSync(token), [token])

  const status = result?.status ?? "loading"
  const message = result?.message ?? "Decoding sync data..."

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        router.push(`/?synced=true&message=${encodeURIComponent(message)}`)
      }, 1500)
      return () => clearTimeout(timer)
    }
    if (status === "error") {
      const timer = setTimeout(() => {
        router.push("/")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [status, message, router])

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4">
        {status === "loading" && (
          <Loader2 className="w-10 h-10 animate-spin mx-auto text-primary" />
        )}
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  )
}
