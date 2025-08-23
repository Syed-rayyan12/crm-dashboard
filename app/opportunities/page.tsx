"use client"

import { useState } from "react"
import { CRMHeader } from "@/components/crm-header"
import { CRMSidebar } from "@/components/crm-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Plus, Search, Filter, MoreHorizontal, Mail, Phone, Calendar, DollarSign, TrendingUp } from "lucide-react"

const dealsData = [
  {
    id: 1,
    name: "Enterprise Software License",
    company: "TechCorp Solutions",
    contact: "Sarah Johnson",
    value: 125000,
    stage: "Negotiation",
    probability: 75,
    closeDate: "2024-02-15",
    lastActivity: "2 hours ago",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 2,
    name: "Cloud Migration Project",
    company: "Innovate Labs",
    contact: "Michael Chen",
    value: 85000,
    stage: "Proposal",
    probability: 60,
    closeDate: "2024-02-28",
    lastActivity: "1 day ago",
    avatar: "/professional-man.png",
  },
  {
    id: 3,
    name: "Marketing Automation Setup",
    company: "StartupCo",
    contact: "Emily Rodriguez",
    value: 45000,
    stage: "Discovery",
    probability: 25,
    closeDate: "2024-03-10",
    lastActivity: "3 days ago",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 4,
    name: "Data Analytics Platform",
    company: "Enterprise Inc",
    contact: "David Kim",
    value: 200000,
    stage: "Closed Won",
    probability: 100,
    closeDate: "2024-01-30",
    lastActivity: "5 hours ago",
    avatar: "/professional-man.png",
  },
  {
    id: 5,
    name: "Security Audit Services",
    company: "Growth Partners",
    contact: "Lisa Thompson",
    value: 35000,
    stage: "Qualification",
    probability: 40,
    closeDate: "2024-03-15",
    lastActivity: "2 days ago",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 6,
    name: "Custom Development",
    company: "Consulting Pro",
    contact: "Robert Wilson",
    value: 95000,
    stage: "Closed Lost",
    probability: 0,
    closeDate: "2024-01-20",
    lastActivity: "1 week ago",
    avatar: "/professional-man.png",
  },
]

const stageColors = {
  Discovery: "bg-blue-100 text-blue-800 border-blue-200",
  Qualification: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Proposal: "bg-orange-100 text-orange-800 border-orange-200",
  Negotiation: "bg-purple-100 text-purple-800 border-purple-200",
  "Closed Won": "bg-green-100 text-green-800 border-green-200",
  "Closed Lost": "bg-red-100 text-red-800 border-red-200",
}

export default function OpportunitiesPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDeals = dealsData.filter(
    (deal) =>
      deal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deal.contact.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalValue = dealsData.reduce((sum, deal) => sum + deal.value, 0)
  const wonDeals = dealsData.filter((deal) => deal.stage === "Closed Won")
  const activeDeals = dealsData.filter((deal) => !deal.stage.includes("Closed"))

  return (
    <div className="flex h-screen bg-background">
      <CRMSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <CRMHeader />

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Opportunities</h1>
                <p className="text-muted-foreground">Track and manage your sales opportunities</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Opportunity
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">${totalValue.toLocaleString()}</div>
                  <p className="text-xs text-green-600">+22% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Deals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{activeDeals.length}</div>
                  <p className="text-xs text-green-600">+8 new this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Won This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{wonDeals.length}</div>
                  <p className="text-xs text-green-600">
                    ${wonDeals.reduce((sum, deal) => sum + deal.value, 0).toLocaleString()} value
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Win Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">68.5%</div>
                  <p className="text-xs text-green-600">+4.2% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Opportunities</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search opportunities..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Opportunity</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Stage</TableHead>
                      <TableHead>Probability</TableHead>
                      <TableHead>Close Date</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredDeals.map((deal) => (
                      <TableRow key={deal.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium text-foreground">{deal.name}</div>
                            <div className="text-sm text-muted-foreground">{deal.company}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={deal.avatar || "/placeholder.svg"} alt={deal.contact} />
                              <AvatarFallback>
                                {deal.contact
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-foreground">{deal.contact}</div>
                              <div className="text-sm text-muted-foreground">{deal.lastActivity}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium text-foreground flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {deal.value.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={stageColors[deal.stage as keyof typeof stageColors]}>{deal.stage}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={deal.probability} className="w-16 h-2" />
                            <span className="text-sm text-muted-foreground">{deal.probability}%</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{deal.closeDate}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Mail className="h-4 w-4 mr-2" />
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Phone className="h-4 w-4 mr-2" />
                                Call Contact
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="h-4 w-4 mr-2" />
                                Schedule Meeting
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <TrendingUp className="h-4 w-4 mr-2" />
                                Update Stage
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
