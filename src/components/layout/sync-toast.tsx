"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useToast } from "@/components/ui/toast"

export function SyncToast() {
  const searchParams = useSearchParams()
  const { toast } = useToast()

  useEffect(() => {
    const synced = searchParams.get("synced")
    const message = searchParams.get("message")
    if (synced === "true" && message) {
      toast(decodeURIComponent(message), "success")
    }
  }, [searchParams, toast])

  return null
}
