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
import { Plus, Search, Filter, MoreHorizontal, Mail, Phone, Calendar, MapPin, Building } from "lucide-react"

const contactsData = [
  {
    id: 1,
    name: "Alex Thompson",
    email: "alex.thompson@techcorp.com",
    company: "TechCorp Solutions",
    position: "VP of Sales",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    type: "Customer",
    lastInteraction: "2 hours ago",
    avatar: "/professional-man.png",
  },
  {
    id: 2,
    name: "Maria Garcia",
    email: "maria.garcia@innovate.io",
    company: "Innovate Labs",
    position: "Marketing Director",
    phone: "+1 (555) 987-6543",
    location: "San Francisco, CA",
    type: "Prospect",
    lastInteraction: "1 day ago",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 3,
    name: "James Wilson",
    email: "james.w@startup.com",
    company: "StartupCo",
    position: "CEO",
    phone: "+1 (555) 456-7890",
    location: "Austin, TX",
    type: "Customer",
    lastInteraction: "3 days ago",
    avatar: "/professional-man.png",
  },
  {
    id: 4,
    name: "Sarah Kim",
    email: "sarah@enterprise.com",
    company: "Enterprise Inc",
    position: "CTO",
    phone: "+1 (555) 321-0987",
    location: "Seattle, WA",
    type: "Lead",
    lastInteraction: "5 hours ago",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 5,
    name: "Robert Chen",
    email: "robert.c@growth.co",
    company: "Growth Partners",
    position: "Operations Manager",
    phone: "+1 (555) 654-3210",
    location: "Chicago, IL",
    type: "Customer",
    lastInteraction: "2 days ago",
    avatar: "/professional-man.png",
  },
  {
    id: 6,
    name: "Jennifer Lopez",
    email: "j.lopez@consulting.com",
    company: "Consulting Pro",
    position: "Senior Consultant",
    phone: "+1 (555) 789-0123",
    location: "Miami, FL",
    type: "Prospect",
    lastInteraction: "1 week ago",
    avatar: "/professional-woman-diverse.png",
  },
]

const typeColors = {
  Customer: "bg-green-100 text-green-800 border-green-200",
  Prospect: "bg-blue-100 text-blue-800 border-blue-200",
  Lead: "bg-yellow-100 text-yellow-800 border-yellow-200",
}

export default function ContactsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredContacts = contactsData.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.position.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
                <h1 className="text-3xl font-bold text-foreground">Contacts</h1>
                <p className="text-muted-foreground">Manage your business contacts and relationships</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Contact
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">1,247</div>
                  <p className="text-xs text-green-600">+18% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Active Customers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">892</div>
                  <p className="text-xs text-green-600">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">New This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">156</div>
                  <p className="text-xs text-green-600">+24% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">78.5%</div>
                  <p className="text-xs text-green-600">+5.2% from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>All Contacts</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search contacts..."
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
                      <TableHead>Contact</TableHead>
                      <TableHead>Company & Position</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Last Interaction</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={contact.avatar || "/placeholder.svg"} alt={contact.name} />
                              <AvatarFallback>
                                {contact.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-foreground">{contact.name}</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {contact.email}
                              </div>
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {contact.phone}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-foreground flex items-center gap-1">
                              <Building className="h-3 w-3" />
                              {contact.company}
                            </div>
                            <div className="text-sm text-muted-foreground">{contact.position}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {contact.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={typeColors[contact.type as keyof typeof typeColors]}>{contact.type}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{contact.lastInteraction}</TableCell>
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
