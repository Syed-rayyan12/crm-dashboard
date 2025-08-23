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
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  Building,
  MapPin,
  Users,
  DollarSign,
} from "lucide-react"

const companiesData = [
  {
    id: 1,
    name: "TechCorp Solutions",
    industry: "Technology",
    size: "500-1000",
    location: "New York, NY",
    status: "Active Customer",
    revenue: 2500000,
    contacts: 12,
    deals: 8,
    lastActivity: "2 hours ago",
    logo: "/abstract-tech-logo.png",
  },
  {
    id: 2,
    name: "Innovate Labs",
    industry: "Software",
    size: "100-500",
    location: "San Francisco, CA",
    status: "Prospect",
    revenue: 850000,
    contacts: 6,
    deals: 3,
    lastActivity: "1 day ago",
    logo: "/innovation-lab-logo.png",
  },
  {
    id: 3,
    name: "StartupCo",
    industry: "Fintech",
    size: "10-50",
    location: "Austin, TX",
    status: "Lead",
    revenue: 150000,
    contacts: 3,
    deals: 2,
    lastActivity: "3 days ago",
    logo: "/startup-logo.png",
  },
  {
    id: 4,
    name: "Enterprise Inc",
    industry: "Manufacturing",
    size: "1000+",
    location: "Seattle, WA",
    status: "Active Customer",
    revenue: 5200000,
    contacts: 25,
    deals: 15,
    lastActivity: "5 hours ago",
    logo: "/enterprise-manufacturing-logo.png",
  },
  {
    id: 5,
    name: "Growth Partners",
    industry: "Consulting",
    size: "50-100",
    location: "Chicago, IL",
    status: "Active Customer",
    revenue: 750000,
    contacts: 8,
    deals: 5,
    lastActivity: "2 days ago",
    logo: "/consulting-firm-logo.png",
  },
  {
    id: 6,
    name: "Digital Dynamics",
    industry: "Marketing",
    size: "100-500",
    location: "Miami, FL",
    status: "Inactive",
    revenue: 320000,
    contacts: 4,
    deals: 1,
    lastActivity: "2 weeks ago",
    logo: "/digital-marketing-logo.png",
  },
]

const statusColors = {
  "Active Customer": "bg-green-100 text-green-800 border-green-200",
  Prospect: "bg-blue-100 text-blue-800 border-blue-200",
  Lead: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Inactive: "bg-gray-100 text-gray-800 border-gray-200",
}

export default function AccountsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCompanies = companiesData.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalRevenue = companiesData.reduce((sum, company) => sum + company.revenue, 0)
  const activeCustomers = companiesData.filter((company) => company.status === "Active Customer")
  const totalContacts = companiesData.reduce((sum, company) => sum + company.contacts, 0)

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
                <h1 className="text-3xl font-bold text-foreground">Accounts</h1>
                <p className="text-muted-foreground">Manage your company accounts and relationships</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Account
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{companiesData.length}</div>
                  <p className="text-xs text-green-600">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{activeCustomers.length}</div>
                  <p className="text-xs text-green-600">+3 new this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">${(totalRevenue / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-green-600">+28% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{totalContacts}</div>
                  <p className="text-xs text-green-600">+42 new this month</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Accounts</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search accounts..."
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
                      <TableHead>Company</TableHead>
                      <TableHead>Industry & Size</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCompanies.map((company) => (
                      <TableRow key={company.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 rounded-lg">
                              <AvatarImage src={company.logo || "/placeholder.svg"} alt={company.name} />
                              <AvatarFallback className="rounded-lg">
                                <Building className="h-4 w-4" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-foreground">{company.name}</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {company.contacts} contacts
                                </span>
                                <span>{company.deals} deals</span>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-foreground">{company.industry}</div>
                            <div className="text-sm text-muted-foreground">{company.size} employees</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {company.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={statusColors[company.status as keyof typeof statusColors]}>
                            {company.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium text-foreground flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            {(company.revenue / 1000).toLocaleString()}K
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{company.lastActivity}</TableCell>
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
                                Call Account
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar className="h-4 w-4 mr-2" />
                                Schedule Meeting
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Building className="h-4 w-4 mr-2" />
                                View Details
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
