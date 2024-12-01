'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { prettyNumber } from '@/lib/pretty'
import type { ReactNode } from 'react'

interface ProgressRowProps {
  row: {
    key: string
    values: number[]
  }
  progress: number
  percentage?: ReactNode
}

export default function ProgressRow({ row, progress, percentage }: ProgressRowProps) {
  return (
    <button className="border-l-2 border-transparent px-2 py-0.5 transition-all hover:border-foreground hover:bg-accent/50">
      <div className="relative flex items-center justify-between px-2 py-1">
        <p className="z-10 text-xs font-medium">{row.key}</p>

        <div className="flex gap-2">
          {row.values.map((value, index) => (
            <div key={index} className="z-10 min-w-[70px] text-end">
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-sm font-semibold">{prettyNumber(value)}</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs font-medium">{value}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
          {percentage}
        </div>

        {/* progress */}
        <div
          className="absolute inset-0 z-0 min-w-2 rounded bg-accent transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </button>
  )
}
