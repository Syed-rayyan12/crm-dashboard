import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, Target, DollarSign, Percent } from "lucide-react"

const kpiData = [
  {
    title: "Total Leads",
    value: "1,247",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-chart-1",
  },
  {
    title: "Active Deals",
    value: "89",
    change: "+8.2%",
    trend: "up",
    icon: Target,
    color: "text-chart-2",
  },
  {
    title: "Closed Deals",
    value: "156",
    change: "+15.3%",
    trend: "up",
    icon: Target,
    color: "text-chart-3",
  },
  {
    title: "Revenue",
    value: "$847K",
    change: "+22.1%",
    trend: "up",
    icon: DollarSign,
    color: "text-chart-1",
  },
  {
    title: "ROI",
    value: "284%",
    change: "-2.4%",
    trend: "down",
    icon: Percent,
    color: "text-chart-2",
  },
]

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {kpiData.map((kpi, index) => (
        <Card key={index} className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">{kpi.title}</CardTitle>
            <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{kpi.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {kpi.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              <span className={kpi.trend === "up" ? "text-green-500" : "text-red-500"}>{kpi.change}</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
