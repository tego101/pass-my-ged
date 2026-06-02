"use client"

import { useState } from "react"
import { User, Plus, Check, Trash2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  getProfiles,
  getActiveProfile,
  setActiveProfile,
  createProfile,
  deleteProfile,
} from "@/lib/profiles"
import type { Profile } from "@/lib/types"

interface ProfileSelectorProps {
  onProfileChange?: () => void
}

export function ProfileSelector({ onProfileChange }: ProfileSelectorProps) {
  const [open, setOpen] = useState(false)
  const [profiles, setProfiles] = useState<Profile[]>(() => getProfiles())
  const [activeProfile, setActiveProfileState] = useState<Profile>(() => getActiveProfile())
  const [newName, setNewName] = useState("")

  const refresh = () => {
    setProfiles(getProfiles())
    setActiveProfileState(getActiveProfile())
  }

  const handleSelect = (id: string) => {
    setActiveProfile(id)
    refresh()
    setOpen(false)
    onProfileChange?.()
  }

  const handleCreate = () => {
    const name = newName.trim()
    if (!name) return
    createProfile(name)
    setNewName("")
    refresh()
  }

  const handleDelete = (id: string) => {
    deleteProfile(id)
    refresh()
    onProfileChange?.()
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => { setOpen(!open); refresh() }}
        className="flex items-center gap-1.5"
      >
        <User className="w-4 h-4" />
        <span className="max-w-[80px] truncate hidden sm:inline">
          {activeProfile?.name || "Profile"}
        </span>
        <ChevronDown className={cn("w-3 h-3 transition-transform", open && "rotate-180")} />
      </Button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-50 w-64 rounded-lg border bg-popover p-2 shadow-lg">
            <div className="space-y-1 mb-2">
              {profiles.map((p) => (
                <div
                  key={p.id}
                  className={cn(
                    "flex items-center justify-between rounded-md px-2 py-1.5 text-sm",
                    p.id === activeProfile?.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-muted cursor-pointer"
                  )}
                  onClick={() => handleSelect(p.id)}
                >
                  <div className="flex items-center gap-2 truncate">
                    <User className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{p.name}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {p.id === activeProfile?.id && (
                      <Check className="w-3.5 h-3.5 text-primary" />
                    )}
                    {profiles.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(p.id)
                        }}
                        className="p-0.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-2 flex gap-1">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCreate()}
                placeholder="New profile name"
                className="flex-1 h-7 rounded-md border bg-transparent px-2 text-xs outline-none focus:border-primary"
              />
              <Button size="sm" onClick={handleCreate} className="h-7 text-xs">
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
