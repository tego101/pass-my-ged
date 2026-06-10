"use client"

import { useCallback } from "react"
import type { ScratchPadPage, ScratchPadData } from "@/lib/types"
import { DEFAULT_SCRATCH_PAD } from "@/lib/types"
import { useProgress } from "./use-progress"

function createPage(): ScratchPadPage {
  const id = `sp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const now = new Date().toISOString()
  return { id, text: "", drawing: "", createdAt: now, updatedAt: now }
}

export function useScratchPad() {
  const { progress, update } = useProgress()
  const data: ScratchPadData = progress.scratchPadData ?? DEFAULT_SCRATCH_PAD

  const activePage = data.pages.find((p) => p.id === data.activePageId) ?? null

  const setData = useCallback(
    (fn: (d: ScratchPadData) => ScratchPadData) => {
      update((p) => {
        const next = fn(p.scratchPadData ?? DEFAULT_SCRATCH_PAD)
        return { ...p, scratchPadData: next }
      })
    },
    [update]
  )

  const addPage = useCallback(() => {
    const page = createPage()
    setData((d) => ({
      ...d,
      activePageId: page.id,
      pages: [...d.pages, page],
      isMinimized: false,
    }))
  }, [setData])

  const deletePage = useCallback(
    (pageId: string) => {
      setData((d) => {
        const pages = d.pages.filter((p) => p.id !== pageId)
        if (pages.length === 0) return { ...d, pages, activePageId: "" }
        const activePageId =
          d.activePageId === pageId ? pages[pages.length - 1].id : d.activePageId
        return { ...d, pages, activePageId }
      })
    },
    [setData]
  )

  const switchPage = useCallback(
    (pageId: string) => {
      setData((d) => ({ ...d, activePageId: pageId, isMinimized: false }))
    },
    [setData]
  )

  const updateText = useCallback(
    (text: string) => {
      setData((d) => ({
        ...d,
        pages: d.pages.map((p) =>
          p.id === d.activePageId
            ? { ...p, text, updatedAt: new Date().toISOString() }
            : p
        ),
      }))
    },
    [setData]
  )

  const updateDrawing = useCallback(
    (drawing: string) => {
      setData((d) => ({
        ...d,
        pages: d.pages.map((p) =>
          p.id === d.activePageId
            ? { ...p, drawing, updatedAt: new Date().toISOString() }
            : p
        ),
      }))
    },
    [setData]
  )

  const toggleMinimize = useCallback(() => {
    setData((d) => ({ ...d, isMinimized: !d.isMinimized }))
  }, [setData])

  const close = useCallback(() => {
    setData((d) => ({ ...d, isMinimized: true }))
  }, [setData])

  const updatePosition = useCallback(
    (x: number, y: number) => {
      setData((d) => ({ ...d, position: { x, y } }))
    },
    [setData]
  )

  const updateSize = useCallback(
    (w: number, h: number) => {
      setData((d) => ({ ...d, size: { w, h } }))
    },
    [setData]
  )

  return {
    data,
    activePage,
    addPage,
    deletePage,
    switchPage,
    updateText,
    updateDrawing,
    toggleMinimize,
    close,
    updatePosition,
    updateSize,
  }
}
