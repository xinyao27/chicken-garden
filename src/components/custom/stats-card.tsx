'use client'

import { LucideMaximize2, LucideMoreHorizontal, LucideSearch, LucideZap } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ProgressRow from '@/components/custom/progress-row'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'

interface StatsCardProps {
  data: {
    key: string
    total: number
    devices: number
  }[]
  labels: string[]
  title: string
  titleSwitcherItems?: string[]
}

export default function StatsCard({ data, labels, title, titleSwitcherItems }: StatsCardProps) {
  const [search, setSearch] = useState('')

  const filteredData = useMemo(() => {
    const s = search.trim()
    if (!s) return data
    return data.filter((item) => item.key.toLowerCase().includes(s.toLowerCase()))
  }, [data, search])

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between border-b p-4">
        {titleSwitcherItems?.length ? (
          <RadioGroup className="flex flex-1 gap-2" value={title}>
            {titleSwitcherItems.map((label) => (
              <label
                key={label}
                className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg px-2 py-2 text-center text-muted-foreground outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-state=checked]]:text-foreground has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
              >
                <RadioGroupItem className="sr-only after:absolute after:inset-0" value={label} />
                <p className="text-sm font-medium leading-none">{label}</p>
              </label>
            ))}
          </RadioGroup>
        ) : (
          <div className="text-md px-1 font-medium">{title}</div>
        )}

        <div className="flex items-center gap-2">
          {labels.map((label) => (
            <p key={label} className="min-w-[70px] text-end text-[10px] font-medium uppercase text-muted-foreground">
              {label}
            </p>
          ))}
        </div>
      </CardHeader>
      <CardContent className="relative min-h-60 flex-1 py-2">
        {data?.length ? (
          <>
            <div className="flex flex-col gap-0.5">
              {data?.slice(0, 7).map((stat) => {
                const base = data[0].devices
                const progress = (stat.devices / base) * 100
                const row = {
                  key: stat.key,
                  values: [stat.total, stat.devices],
                }
                return <ProgressRow key={stat.key} progress={progress} row={row} />
              })}
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-secondary/80 to-secondary/0 dark:from-secondary/50" />

            <div className="absolute bottom-3.5 left-1/2 flex h-7 -translate-x-1/2 gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="h-full rounded-full" variant="outline">
                    View All <LucideMaximize2 className="ml-2 size-3.5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="flex h-[80vh] flex-col gap-0 overflow-hidden p-0">
                  <DialogHeader className="flex flex-row justify-between space-y-0 border-b bg-secondary/50 p-4">
                    <DialogTitle className="flex items-center font-medium">Referrers</DialogTitle>

                    <div className="flex items-center gap-2">
                      {labels.map((label) => (
                        <p
                          key={label}
                          className="min-w-[70px] text-end text-[10px] font-medium uppercase text-muted-foreground"
                        >
                          {label}
                        </p>
                      ))}
                      <p className="min-w-[70px] text-end text-[10px] font-medium uppercase text-muted-foreground">
                        Percentage
                      </p>
                    </div>
                  </DialogHeader>

                  <div className="flex-none px-3 py-2">
                    <div className="relative w-full">
                      <Input
                        className="peer ps-9"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                        <LucideSearch aria-hidden="true" size={16} strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  <ScrollArea className="flex-1">
                    <div className="flex min-h-48 flex-col gap-0.5">
                      {filteredData.map((stat) => {
                        const base = data[0].devices
                        const progress = (stat.devices / base) * 100
                        const total = data.reduce((acc, curr) => acc + curr.devices, 0)
                        const percentage = (stat.devices / total) * 100
                        const row = {
                          key: stat.key,
                          values: [stat.total, stat.devices],
                        }
                        const percentageText =
                          percentage < 0.1 ? `<0.1` : percentage < 0.5 ? `<0.5` : Math.round(percentage)
                        return (
                          <ProgressRow
                            key={stat.key}
                            progress={progress}
                            row={row}
                            percentage={
                              <div className="z-10 min-w-[70px] text-end">
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <span className="text-sm font-medium">{percentageText}%</span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="space-x-2 text-xs font-medium">
                                      <span>{stat.devices}</span>
                                      <span className="text-muted-foreground">{percentage.toFixed(2)}%</span>
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            }
                          />
                        )
                      })}
                    </div>

                    <ScrollBar orientation="horizontal" />
                  </ScrollArea>

                  <DialogFooter className="border-t bg-secondary/50 p-4">
                    <DialogClose asChild>
                      <Button className="w-full" variant="outline">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Button className="h-full rounded-full" size="icon" variant="outline">
                <LucideMoreHorizontal className="size-3.5" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-full border bg-background">
              <LucideZap className="size-4 text-muted-foreground" />
            </div>

            <div className="text-sm font-medium">No data</div>

            <div className="text-xs text-muted-foreground">
              <p>Set up custom events to gain a deeper understanding of user behavior on your site.</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
