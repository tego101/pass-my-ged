"use client"

import { useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  StickyNote,
  Plus,
  Minus,
  GripHorizontal,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScratchPadCanvas } from "./scratch-pad-canvas"
import { useScratchPad } from "@/hooks/use-scratch-pad"

export function ScratchPad() {
  const {
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
  } = useScratchPad()

  const dragRef = useRef({ dragging: false, startX: 0, startY: 0, startPadX: 0, startPadY: 0 })
  const resizeRef = useRef({ dragging: false, startX: 0, startY: 0, startW: 0, startH: 0 })
  const padRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLTextAreaElement>(null)

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault()
      const el = padRef.current
      if (!el) return
      el.setPointerCapture(e.pointerId)
      dragRef.current = {
        dragging: true,
        startX: e.clientX,
        startY: e.clientY,
        startPadX: data.position.x,
        startPadY: data.position.y,
      }
    },
    [data.position]
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const d = dragRef.current
      if (!d.dragging) return
      const dx = e.clientX - d.startX
      const dy = e.clientY - d.startY
      updatePosition(d.startPadX + dx, d.startPadY + dy)
    },
    [updatePosition]
  )

  const handlePointerUp = useCallback(() => {
    dragRef.current.dragging = false
  }, [])

  const handleResizeDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const el = e.currentTarget
      el.setPointerCapture(e.pointerId)
      resizeRef.current = {
        dragging: true,
        startX: e.clientX,
        startY: e.clientY,
        startW: data.size.w,
        startH: data.size.h,
      }
    },
    [data.size]
  )

  const handleResizeMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const r = resizeRef.current
      if (!r.dragging) return
      const dx = e.clientX - r.startX
      const dy = e.clientY - r.startY
      updateSize(Math.max(300, r.startW + dx), Math.max(350, r.startH + dy))
    },
    [updateSize]
  )

  const handleResizeUp = useCallback(() => {
    resizeRef.current.dragging = false
  }, [])

  const hasPages = data.pages.length > 0

  return (
    <>
      {data.isMinimized ? (
        <button
          onClick={toggleMinimize}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center"
          title="Open scratch pad"
        >
          <StickyNote className="w-5 h-5" />
          {data.pages.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
              {data.pages.length}
            </span>
          )}
        </button>
      ) : (
        <motion.div
          ref={padRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed z-50 flex flex-col rounded-xl border bg-card shadow-2xl overflow-hidden"
          style={{
            left: data.position.x,
            top: data.position.y,
            width: data.size.w,
            height: data.size.h,
          }}
          onPointerMove={(e) => {
            handlePointerMove(e)
            handleResizeMove(e)
          }}
          onPointerUp={() => {
            handlePointerUp()
            handleResizeUp()
          }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 border-b bg-muted/30 cursor-grab active:cursor-grabbing select-none"
            onPointerDown={handlePointerDown}
          >
            <GripHorizontal className="w-4 h-4 text-muted-foreground shrink-0" />
            <StickyNote className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm font-medium">Scratch Pad</span>
            <div className="flex-1" />
            <button
              onClick={toggleMinimize}
              className="p-1 rounded hover:bg-muted text-muted-foreground"
              title="Minimize"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={close}
              className="p-1 rounded hover:bg-muted text-muted-foreground"
              title="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {hasPages && (
            <div className="flex items-center gap-1 px-3 py-1.5 border-b bg-muted/20 overflow-x-auto">
              {data.pages.map((p, i) => (
                <div
                  key={p.id}
                  className={`group flex items-center gap-1 px-2.5 py-1 rounded-md text-xs cursor-pointer transition-colors whitespace-nowrap ${
                    p.id === data.activePageId
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                  onClick={() => switchPage(p.id)}
                >
                  <span>Page {i + 1}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      deletePage(p.id)
                    }}
                    className="p-0.5 rounded hover:bg-muted-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Delete page"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              <button
                onClick={addPage}
                className="p-1 rounded hover:bg-muted text-muted-foreground shrink-0"
                title="Add page"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <div className="flex-1 flex flex-col min-h-0">
            {activePage ? (
              <>
                <div className="flex-1 min-h-0">
                  <ScratchPadCanvas
                    drawing={activePage.drawing}
                    onSave={updateDrawing}
                  />
                </div>
                <div className="border-t flex-shrink-0">
                  <textarea
                    ref={textRef}
                    value={activePage.text}
                    onChange={(e) => updateText(e.target.value)}
                    placeholder="Type notes here..."
                    className="w-full h-24 p-3 text-sm resize-none bg-background outline-none placeholder:text-muted-foreground/50"
                  />
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <StickyNote className="w-10 h-10" />
                <p className="text-sm">No pages yet</p>
                <Button size="sm" onClick={addPage}>
                  <Plus className="w-4 h-4 mr-1" />
                  New Page
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </>
  )
}
