import type { Profile, ProfilesData } from "./types"

const PROFILES_KEY = "pass-my-ged-profiles"

function defaultData(): ProfilesData {
  const defaultProfile: Profile = {
    id: "default",
    name: "Default",
    createdAt: new Date().toISOString(),
  }
  return {
    activeProfileId: defaultProfile.id,
    profiles: [defaultProfile],
  }
}

export function getProfilesData(): ProfilesData {
  if (typeof window === "undefined") return defaultData()
  try {
    const raw = localStorage.getItem(PROFILES_KEY)
    if (!raw) return defaultData()
    return JSON.parse(raw) as ProfilesData
  } catch {
    return defaultData()
  }
}

export function saveProfilesData(data: ProfilesData): void {
  if (typeof window === "undefined") return
  localStorage.setItem(PROFILES_KEY, JSON.stringify(data))
}

export function getActiveProfile(): Profile {
  const data = getProfilesData()
  return (
    data.profiles.find((p) => p.id === data.activeProfileId) || data.profiles[0]
  )
}

export function getActiveProfileId(): string {
  return getActiveProfile().id
}

export function setActiveProfile(profileId: string): void {
  const data = getProfilesData()
  if (data.profiles.some((p) => p.id === profileId)) {
    data.activeProfileId = profileId
    saveProfilesData(data)
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("profile-change"))
    }
  }
}

export function createProfile(name: string): Profile {
  const data = getProfilesData()
  const profile: Profile = {
    id: `profile-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: name.trim(),
    createdAt: new Date().toISOString(),
  }
  data.profiles.push(profile)
  saveProfilesData(data)
  return profile
}

export function deleteProfile(profileId: string): void {
  const data = getProfilesData()
  if (data.profiles.length <= 1) return
  data.profiles = data.profiles.filter((p) => p.id !== profileId)
  if (data.activeProfileId === profileId) {
    data.activeProfileId = data.profiles[0].id
  }
  saveProfilesData(data)
}

export function getProfiles(): Profile[] {
  return getProfilesData().profiles
}

export function ensureDefaultProfile(): void {
  const data = getProfilesData()
  if (data.profiles.length === 0) {
    saveProfilesData(defaultData())
  }
}
