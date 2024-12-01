'use client'

import { LucideCalendar, LucideMoreHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { addDays, addMonths, format, isSameYear, isThisYear } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import type { DateRange } from 'react-day-picker'

type DateRangeType = 'calendar' | 'quick'

const quickDateRanges = [
  {
    value: '24h',
    label: 'Last 24 Hours',
    from: addDays(new Date(), -1),
    to: new Date(),
  },
  {
    value: '7d',
    label: 'Last 7 Days',
    from: addDays(new Date(), -7),
    to: new Date(),
  },
  {
    value: '30d',
    label: 'Last 30 Days',
    from: addDays(new Date(), -30),
    to: new Date(),
  },
  {
    value: '90d',
    label: 'Last 3 Months',
    from: addMonths(new Date(), -3),
    to: new Date(),
  },
  {
    value: '12m',
    label: 'Last 12 Months',
    from: addMonths(new Date(), -12),
    to: new Date(),
  },
  {
    value: '24m',
    label: 'Last 24 Months',
    from: addMonths(new Date(), -24),
    to: new Date(),
  },
]

export default function HeaderActions() {
  const [environment, setEnvironment] = useState('production')
  const [dateRangeType, setDateRangeType] = useState<DateRangeType>('calendar')
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  const previewDateRange = useMemo(() => {
    if (!date) return ''
    const from = date.from ?? new Date()
    const to = date.to ?? addDays(new Date(), 7)

    if (isSameYear(from, to) && isThisYear(from)) {
      return `${format(from, 'MMM')} ${format(from, 'd')} - ${format(to, 'd')}`
    }
  }, [date])

  const handleDateRangeChange = (range: DateRange | undefined, type: DateRangeType) => {
    setDateRangeType(type)
    setDate(range)
  }

  return (
    <div className="flex items-center gap-2">
      {/* switch environment */}
      <Select value={environment} onValueChange={setEnvironment}>
        <SelectTrigger>
          <SelectValue placeholder="Select an environment" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="production">Production</SelectItem>
          <SelectItem value="preview">Preview</SelectItem>
          <SelectItem value="all">All Environments</SelectItem>
        </SelectContent>
      </Select>

      {/* switch date range */}
      <div className="flex w-44 flex-none rounded">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size={dateRangeType === 'quick' ? 'icon' : 'default'}
              variant="outline"
              className={cn(
                '-me-px flex-none rounded-e-none',
                dateRangeType === 'calendar' && 'flex-1 justify-start overflow-hidden px-2',
              )}
            >
              <LucideCalendar className={cn('size-4', dateRangeType === 'calendar' && 'mr-2')} />
              {dateRangeType === 'calendar' && <div className="truncate">{previewDateRange}</div>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              initialFocus
              defaultMonth={date?.from}
              mode="range"
              selected={date}
              onSelect={(d) => handleDateRangeChange(d, 'calendar')}
            />
          </PopoverContent>
        </Popover>

        <Select
          onValueChange={(value) => {
            const range = quickDateRanges.find((r) => r.value === value)
            if (range) {
              handleDateRangeChange(range, 'quick')
            }
          }}
        >
          <SelectTrigger
            className={cn(
              'overflow-hidden rounded-s-none [&>span]:truncate [&>span]:text-nowrap',
              dateRangeType === 'calendar' && 'size-9 px-2 [&>span]:hidden',
              dateRangeType === 'quick' && 'flex-1',
            )}
          >
            <SelectValue placeholder="Select Period" />
          </SelectTrigger>
          <SelectContent>
            {quickDateRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* other actions */}
      <Button className="flex-none" size="icon" variant="outline">
        <LucideMoreHorizontal className="size-4" />
      </Button>
    </div>
  )
}
