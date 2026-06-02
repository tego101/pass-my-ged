import type { SyncPayload } from "./types"

export function packSyncToken(payload: SyncPayload): string {
  const json = JSON.stringify(payload)
  return btoa(unescape(encodeURIComponent(json)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "")
}

export function unpackSyncToken(token: string): SyncPayload | null {
  try {
    let base64 = token.replace(/-/g, "+").replace(/_/g, "/")
    while (base64.length % 4 !== 0) base64 += "="
    const json = decodeURIComponent(escape(atob(base64)))
    return JSON.parse(json) as SyncPayload
  } catch {
    return null
  }
}

export function generateSyncLink(payload: SyncPayload): string {
  const token = packSyncToken(payload)
  return `${window.location.origin}/sync?token=${encodeURIComponent(token)}`
}
