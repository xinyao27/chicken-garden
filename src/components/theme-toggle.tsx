'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { LucideMoon, LucideSun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  function handleToggleTheme(checked: boolean) {
    checked ? setTheme('light') : setTheme('dark')
  }

  return (
    <div>
      <div className="relative inline-grid h-7 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          checked={theme === 'light'}
          className="peer absolute inset-0 h-[inherit] w-auto data-[state=unchecked]:bg-input/50 [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
          id="theme-toggle"
          onCheckedChange={handleToggleTheme}
        />
        <span className="pointer-events-none relative ms-0.5 flex min-w-6 items-center justify-center text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full rtl:peer-data-[state=unchecked]:-translate-x-full">
          <LucideMoon aria-hidden="true" size={16} strokeWidth={2} />
        </span>
        <span className="pointer-events-none relative me-0.5 flex min-w-6 items-center justify-center text-center transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] peer-data-[state=unchecked]:invisible peer-data-[state=checked]:-translate-x-full peer-data-[state=checked]:text-background rtl:peer-data-[state=checked]:translate-x-full">
          <LucideSun aria-hidden="true" size={16} strokeWidth={2} />
        </span>
      </div>
      <Label className="sr-only" htmlFor="theme-toggle">
        Labeled switch
      </Label>
    </div>
  )
}
