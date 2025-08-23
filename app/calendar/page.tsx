"use client"

import { useState } from "react"
import { CRMHeader } from "@/components/crm-header"
import { CRMSidebar } from "@/components/crm-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, ChevronLeft, ChevronRight, CalendarIcon, Clock, Users } from "lucide-react"

const calendarEvents = [
  {
    id: 1,
    title: "Sales Meeting with TechCorp",
    time: "09:00 AM",
    duration: "1 hour",
    type: "Meeting",
    attendees: ["Sarah Johnson", "Michael Chen"],
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Product Demo for Innovate Labs",
    time: "02:00 PM",
    duration: "45 minutes",
    type: "Demo",
    attendees: ["Emily Rodriguez"],
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Follow-up Call with StartupCo",
    time: "04:30 PM",
    duration: "30 minutes",
    type: "Call",
    attendees: ["David Kim"],
    color: "bg-orange-500",
  },
]

export default function CalendarPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentDate] = useState(new Date())

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

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
                <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
                <p className="text-muted-foreground">Manage your meetings and appointments</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                New Event
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Calendar View */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        {formatDate(currentDate)}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Today
                        </Button>
                        <Button variant="outline" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {calendarEvents.map((event) => (
                        <div key={event.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50">
                          <div className={`w-1 h-16 rounded-full ${event.color}`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium text-foreground">{event.title}</h3>
                              <Badge variant="secondary">{event.type}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {event.time} ({event.duration})
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {event.attendees.length} attendees
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {event.attendees.map((attendee, index) => (
                                <Avatar key={index} className="h-6 w-6">
                                  <AvatarImage src="/placeholder.svg" alt={attendee} />
                                  <AvatarFallback className="text-xs">
                                    {attendee
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Events */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <div className="font-medium text-foreground mb-1">Tomorrow</div>
                        <div className="text-muted-foreground">Team standup meeting</div>
                        <div className="text-muted-foreground">9:00 AM - 9:30 AM</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-foreground mb-1">Friday</div>
                        <div className="text-muted-foreground">Quarterly review</div>
                        <div className="text-muted-foreground">2:00 PM - 4:00 PM</div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-foreground mb-1">Next Week</div>
                        <div className="text-muted-foreground">Client presentation</div>
                        <div className="text-muted-foreground">Monday 10:00 AM</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
