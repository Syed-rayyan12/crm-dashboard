import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Target, Percent } from "lucide-react"

export function ROIWidget() {
  const revenue = 847000
  const cost = 298000
  const roi = (((revenue - cost) / cost) * 100).toFixed(1)
  const profit = revenue - cost

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground flex items-center gap-2">
          <Percent className="h-5 w-5 text-chart-1" />
          ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-chart-1" />
                <span className="text-sm font-medium text-muted-foreground">Total Revenue</span>
              </div>
              <p className="text-2xl font-bold text-card-foreground">${revenue.toLocaleString()}</p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-chart-2" />
                <span className="text-sm font-medium text-muted-foreground">Total Cost</span>
              </div>
              <p className="text-2xl font-bold text-card-foreground">${cost.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-card-foreground">Return on Investment</span>
              </div>
              <span className="text-3xl font-bold text-accent">{roi}%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Profit: <span className="font-medium text-card-foreground">${profit.toLocaleString()}</span>
            </p>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>ROI = (Revenue - Cost) / Cost × 100</p>
            <p className="mt-1">Based on current month data</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
