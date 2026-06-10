"use client"

import type { ReactNode } from "react"
import { ThemeProvider } from "@/providers/theme-provider"
import { ToastProvider } from "@/components/ui/toast"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScratchPad } from "@/components/study/scratch-pad"

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScratchPad />
      </ToastProvider>
    </ThemeProvider>
  )
}
