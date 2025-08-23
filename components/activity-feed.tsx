import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Calendar, MessageSquare } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "call",
    icon: Phone,
    title: "Called Sarah Johnson",
    description: "Discussed website redesign requirements",
    time: "2 hours ago",
    user: "John Doe",
    status: "completed",
  },
  {
    id: 2,
    type: "email",
    icon: Mail,
    title: "Sent proposal to TechCorp",
    description: "Website redesign proposal with timeline",
    time: "4 hours ago",
    user: "Jane Smith",
    status: "sent",
  },
  {
    id: 3,
    type: "meeting",
    icon: Calendar,
    title: "Meeting with GrowthCo",
    description: "Marketing automation demo scheduled",
    time: "1 day ago",
    user: "Mike Chen",
    status: "scheduled",
  },
  {
    id: 4,
    type: "follow-up",
    icon: MessageSquare,
    title: "Follow-up with RetailPlus",
    description: "Checking on e-commerce platform decision",
    time: "2 days ago",
    user: "Lisa Wang",
    status: "pending",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "sent":
      return "bg-blue-100 text-blue-800"
    case "scheduled":
      return "bg-yellow-100 text-yellow-800"
    case "pending":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function ActivityFeed() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="bg-muted rounded-full p-2">
                <activity.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-card-foreground">{activity.title}</p>
                  <Badge className={`text-xs ${getStatusColor(activity.status)}`}>{activity.status}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Avatar className="h-5 w-5">
                    <AvatarFallback className="text-xs">
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">
                    {activity.user} • {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
