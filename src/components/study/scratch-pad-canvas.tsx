"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { Pencil, Eraser, Undo2 } from "lucide-react"

interface ScratchPadCanvasProps {
  drawing: string
  onSave: (dataUrl: string) => void
}

type Tool = "pen" | "eraser"

const COLORS = ["#000000", "#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#8b5cf6"]

export function ScratchPadCanvas({ drawing, onSave }: ScratchPadCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [tool, setTool] = useState<Tool>("pen")
  const [color, setColor] = useState(COLORS[0])
  const [lineWidth, setLineWidth] = useState(2)
  const [undoStack, setUndoStack] = useState<string[]>([])

  const lastPoint = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0)
    }
    if (drawing) {
      img.src = drawing
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [drawing])

  const saveSnapshot = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    setUndoStack((prev) => {
      const next = [...prev, canvas.toDataURL()]
      return next.slice(-20)
    })
  }, [])

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    }
  }

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.setPointerCapture(e.pointerId)
    saveSnapshot()
    setIsDrawing(true)
    lastPoint.current = getPos(e)
  }

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!ctx || !canvas || !lastPoint.current) return

    const pos = getPos(e)
    ctx.beginPath()
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y)
    ctx.lineTo(pos.x, pos.y)
    ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color
    ctx.lineWidth = tool === "eraser" ? lineWidth * 4 : lineWidth
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.stroke()
    lastPoint.current = pos
  }

  const stopDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    setIsDrawing(false)
    lastPoint.current = null
    const canvas = canvasRef.current
    if (canvas) {
      canvas.releasePointerCapture(e.pointerId)
      onSave(canvas.toDataURL())
    }
  }

  const undo = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const prev = undoStack.pop()
    if (!prev) return
    setUndoStack([...undoStack])
    const img = new Image()
    img.onload = () => {
      const ctx = canvas.getContext("2d")!
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0)
      onSave(canvas.toDataURL())
    }
    img.src = prev
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 relative min-h-0">
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          className="absolute inset-0 w-full h-full cursor-crosshair bg-white dark:bg-zinc-900 rounded-lg"
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
        />
      </div>
      <div className="flex items-center gap-2 p-2 border-t bg-muted/30 flex-shrink-0">
        <button
          onClick={() => setTool("pen")}
          className={`p-1.5 rounded transition-colors ${
            tool === "pen"
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted text-muted-foreground"
          }`}
          title="Pen"
        >
          <Pencil className="w-4 h-4" />
        </button>
        <button
          onClick={() => setTool("eraser")}
          className={`p-1.5 rounded transition-colors ${
            tool === "eraser"
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted text-muted-foreground"
          }`}
          title="Eraser"
        >
          <Eraser className="w-4 h-4" />
        </button>
        <div className="w-px h-5 bg-border mx-1" />
        {COLORS.map((c) => (
          <button
            key={c}
            onClick={() => {
              setColor(c)
              setTool("pen")
            }}
            className={`w-5 h-5 rounded-full border-2 transition-all ${
              color === c ? "border-foreground scale-110" : "border-transparent"
            }`}
            style={{ backgroundColor: c }}
            title={c}
          />
        ))}
        <div className="w-px h-5 bg-border mx-1" />
        <input
          type="range"
          min={1}
          max={8}
          value={lineWidth}
          onChange={(e) => setLineWidth(Number(e.target.value))}
          className="w-16 h-1"
          title="Stroke size"
        />
        <span className="text-xs text-muted-foreground w-4">{lineWidth}px</span>
        <div className="flex-1" />
        <button
          onClick={undo}
          disabled={undoStack.length === 0}
          className="p-1.5 rounded hover:bg-muted text-muted-foreground disabled:opacity-30"
          title="Undo"
        >
          <Undo2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
