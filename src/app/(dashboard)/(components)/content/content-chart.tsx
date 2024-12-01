'use client'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import NumberTicker from '@/components/custom/number-ticker'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import type { ChartConfig } from '@/components/ui/chart'

const items = [
  {
    label: 'Visitors',
    value: 'visitors',
  },
  {
    label: 'Page Views',
    value: 'page-views',
  },
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
]

export default function ContentChart() {
  return (
    <Card>
      <CardHeader className="border-b bg-background/50">
        <RadioGroup className="w-[440px] grid-cols-2 gap-0" defaultValue="visitors">
          {items.map((item) => (
            <label
              key={item.value}
              className={cn(
                'relative flex min-w-[220px] cursor-pointer flex-col gap-3 border-b-2 border-r border-b-transparent bg-background p-4 text-foreground transition-all has-[[data-state=checked]]:border-b-ring has-[[data-state=checked]]:bg-white dark:has-[[data-state=checked]]:bg-black',
              )}
            >
              <RadioGroupItem className="sr-only after:absolute after:inset-0" value={item.value} />
              <p className="truncate text-sm font-medium leading-none text-foreground">{item.label}</p>
              <NumberTicker className="text-3xl tracking-tighter" value={18077} />
            </label>
          ))}
        </RadioGroup>
      </CardHeader>

      <CardContent>
        <ChartContainer className="h-[400px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 36,
              top: 36,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="month"
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
              tickMargin={8}
            />
            <YAxis axisLine={false} tickCount={3} tickLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} cursor={false} />
            <Area
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              type="natural"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
