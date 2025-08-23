import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const leadsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    email: "sarah@techcorp.com",
    phone: "+1 (555) 123-4567",
    status: "hot",
    value: "$25,000",
    source: "Website",
  },
  {
    id: 2,
    name: "Mike Chen",
    company: "StartupXYZ",
    email: "mike@startupxyz.com",
    phone: "+1 (555) 234-5678",
    status: "warm",
    value: "$15,000",
    source: "Referral",
  },
  {
    id: 3,
    name: "Lisa Wang",
    company: "GrowthCo",
    email: "lisa@growthco.com",
    phone: "+1 (555) 345-6789",
    status: "cold",
    value: "$35,000",
    source: "LinkedIn",
  },
  {
    id: 4,
    name: "Tom Brown",
    company: "InsightInc",
    email: "tom@insightinc.com",
    phone: "+1 (555) 456-7890",
    status: "hot",
    value: "$45,000",
    source: "Cold Email",
  },
  {
    id: 5,
    name: "Emma Davis",
    company: "RetailPlus",
    email: "emma@retailplus.com",
    phone: "+1 (555) 567-8901",
    status: "warm",
    value: "$65,000",
    source: "Trade Show",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "hot":
      return "bg-red-100 text-red-800"
    case "warm":
      return "bg-yellow-100 text-yellow-800"
    case "cold":
      return "bg-blue-100 text-blue-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function LeadsTable() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Contact</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Company</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Value</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Source</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leadsData.map((lead) => (
                <tr key={lead.id} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/abstract-geometric-shapes.png?height=32&width=32&query=${lead.name}`} />
                        <AvatarFallback>
                          {lead.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-card-foreground">{lead.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{lead.email}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <p className="text-sm text-card-foreground">{lead.company}</p>
                  </td>
                  <td className="py-3 px-2">
                    <Badge className={`text-xs ${getStatusColor(lead.status)}`}>{lead.status}</Badge>
                  </td>
                  <td className="py-3 px-2">
                    <p className="text-sm font-medium text-accent">{lead.value}</p>
                  </td>
                  <td className="py-3 px-2">
                    <p className="text-sm text-muted-foreground">{lead.source}</p>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit Contact</DropdownMenuItem>
                          <DropdownMenuItem>Add to Campaign</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
