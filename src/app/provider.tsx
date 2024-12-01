'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="system">
      <TooltipProvider>
        <Toaster />

        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}
