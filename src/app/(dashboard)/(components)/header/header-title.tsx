import { LucideExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export default function HeaderTitle() {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <h1 className="text-3xl font-medium">React Scan Analytics</h1>
      </div>

      <div className="flex h-4 items-center gap-2.5">
        <Link className="flex items-center gap-0.5 font-medium" href="https://react-scan.com" target="_blank">
          react-scan.com
          <LucideExternalLink className="ml-1 size-3" />
        </Link>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <span className="relative inline-flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-full rounded-full bg-green-500" />
          </span>

          <Tooltip>
            <TooltipTrigger>
              <span className="text-sm font-medium text-muted-foreground">3 online</span>
            </TooltipTrigger>
            <TooltipContent>Visitors in the past 3 minutes</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
