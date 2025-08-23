"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts"

const salesData = [
  { month: "Jan", sales: 45000, deals: 12 },
  { month: "Feb", sales: 52000, deals: 15 },
  { month: "Mar", sales: 48000, deals: 11 },
  { month: "Apr", sales: 61000, deals: 18 },
  { month: "May", sales: 55000, deals: 16 },
  { month: "Jun", sales: 67000, deals: 20 },
]

const conversionData = [
  { stage: "Leads", count: 1247, rate: 100 },
  { stage: "Qualified", count: 623, rate: 50 },
  { stage: "Proposal", count: 187, rate: 15 },
  { stage: "Negotiation", count: 93, rate: 7.5 },
  { stage: "Closed", count: 62, rate: 5 },
]

export function SalesChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Sales by Month</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              sales: {
                label: "Sales ($)",
                color: "hsl(var(--chart-1))",
              },
              deals: {
                label: "Deals",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Conversion Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              rate: {
                label: "Conversion Rate (%)",
                color: "hsl(var(--chart-2))",
              },
              count: {
                label: "Count",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={conversionData}>
                <XAxis dataKey="stage" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="var(--color-rate)"
                  strokeWidth={3}
                  dot={{ fill: "var(--color-rate)", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
