"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Calendar, User } from "lucide-react"

interface Deal {
  id: string
  title: string
  company: string
  value: string
  contact: string
  date: string
  probability: number
}

const pipelineStages = [
  {
    name: "Prospecting",
    deals: [
      {
        id: "1",
        title: "Website Redesign",
        company: "TechCorp",
        value: "$25K",
        contact: "Sarah Johnson",
        date: "2024-01-15",
        probability: 20,
      },
      {
        id: "2",
        title: "CRM Implementation",
        company: "StartupXYZ",
        value: "$15K",
        contact: "Mike Chen",
        date: "2024-01-18",
        probability: 25,
      },
    ],
  },
  {
    name: "Qualification",
    deals: [
      {
        id: "3",
        title: "Marketing Automation",
        company: "GrowthCo",
        value: "$35K",
        contact: "Lisa Wang",
        date: "2024-01-20",
        probability: 40,
      },
      {
        id: "4",
        title: "Data Analytics",
        company: "InsightInc",
        value: "$45K",
        contact: "Tom Brown",
        date: "2024-01-22",
        probability: 45,
      },
    ],
  },
  {
    name: "Proposal",
    deals: [
      {
        id: "5",
        title: "E-commerce Platform",
        company: "RetailPlus",
        value: "$65K",
        contact: "Emma Davis",
        date: "2024-01-25",
        probability: 70,
      },
    ],
  },
  {
    name: "Negotiation",
    deals: [
      {
        id: "6",
        title: "Mobile App Development",
        company: "AppVenture",
        value: "$85K",
        contact: "Alex Rodriguez",
        date: "2024-01-28",
        probability: 85,
      },
    ],
  },
  {
    name: "Closed Won",
    deals: [
      {
        id: "7",
        title: "Cloud Migration",
        company: "CloudFirst",
        value: "$55K",
        contact: "Rachel Green",
        date: "2024-01-30",
        probability: 100,
      },
    ],
  },
]

export function SalesPipeline() {
  const [draggedDeal, setDraggedDeal] = useState<Deal | null>(null)

  const handleDragStart = (deal: Deal) => {
    setDraggedDeal(deal)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, targetStage: string) => {
    e.preventDefault()
    // In a real app, you would update the deal's stage here
    setDraggedDeal(null)
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Sales Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {pipelineStages.map((stage, stageIndex) => (
            <div
              key={stageIndex}
              className="flex-shrink-0 w-72"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.name)}
            >
              <div className="bg-muted rounded-lg p-3 mb-3">
                <h3 className="font-semibold text-muted-foreground text-sm">
                  {stage.name} ({stage.deals.length})
                </h3>
              </div>
              <div className="space-y-3">
                {stage.deals.map((deal) => (
                  <div
                    key={deal.id}
                    draggable
                    onDragStart={() => handleDragStart(deal)}
                    className="bg-card border border-border rounded-lg p-4 cursor-move hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-card-foreground text-sm">{deal.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {deal.probability}%
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{deal.company}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <DollarSign className="h-3 w-3" />
                        <span className="font-medium text-accent">{deal.value}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{deal.contact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{deal.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
