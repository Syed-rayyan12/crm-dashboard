"use client"

import { useState } from "react"
import { CRMSidebar } from "@/components/crm-sidebar"
import { CRMHeader } from "@/components/crm-header"
import { KPICards } from "@/components/kpi-cards"
import { SalesPipeline } from "@/components/sales-pipeline"
import { ActivityFeed } from "@/components/activity-feed"
import { TasksWidget } from "@/components/tasks-widget"
import { SalesChart } from "@/components/sales-chart"
import { LeadsTable } from "@/components/leads-table"
import { ROIWidget } from "@/components/roi-widget"

export default function CRMDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <CRMSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <CRMHeader />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* KPI Cards */}
            <KPICards />

            {/* Sales Pipeline */}
            <SalesPipeline />

            {/* Charts */}
            <SalesChart />

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ActivityFeed />
              <TasksWidget />
              <ROIWidget />
            </div>

            {/* Leads Table */}
            <LeadsTable />
          </div>
        </main>
      </div>
    </div>
  )
}
