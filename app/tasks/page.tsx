"use client"

import { useState } from "react"
import { CRMHeader } from "@/components/crm-header"
import { CRMSidebar } from "@/components/crm-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, MoreHorizontal, Calendar, Clock, User, CheckCircle2, Circle } from "lucide-react"

const tasksData = [
  {
    id: 1,
    title: "Follow up with TechCorp Solutions",
    description: "Send proposal for enterprise software license",
    assignee: "Sarah Johnson",
    dueDate: "2024-02-15",
    priority: "High",
    status: "In Progress",
    category: "Sales",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 2,
    title: "Prepare demo for Innovate Labs",
    description: "Create custom demo showcasing cloud migration features",
    assignee: "Michael Chen",
    dueDate: "2024-02-18",
    priority: "Medium",
    status: "To Do",
    category: "Demo",
    avatar: "/professional-man.png",
  },
  {
    id: 3,
    title: "Contract review for Enterprise Inc",
    description: "Review and finalize contract terms for data analytics platform",
    assignee: "Emily Rodriguez",
    dueDate: "2024-02-12",
    priority: "High",
    status: "Completed",
    category: "Legal",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 4,
    title: "Quarterly business review with Growth Partners",
    description: "Schedule and prepare QBR presentation",
    assignee: "David Kim",
    dueDate: "2024-02-20",
    priority: "Medium",
    status: "To Do",
    category: "Account Management",
    avatar: "/professional-man.png",
  },
  {
    id: 5,
    title: "Update CRM data for StartupCo",
    description: "Clean and update contact information and deal status",
    assignee: "Lisa Thompson",
    dueDate: "2024-02-14",
    priority: "Low",
    status: "In Progress",
    category: "Data Management",
    avatar: "/professional-woman-diverse.png",
  },
  {
    id: 6,
    title: "Training session for new sales team",
    description: "Conduct CRM training for 3 new sales representatives",
    assignee: "Robert Wilson",
    dueDate: "2024-02-16",
    priority: "Medium",
    status: "To Do",
    category: "Training",
    avatar: "/professional-man.png",
  },
]

const priorityColors = {
  High: "bg-red-100 text-red-800 border-red-200",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Low: "bg-green-100 text-green-800 border-green-200",
}

const statusIcons = {
  "To Do": Circle,
  "In Progress": Clock,
  Completed: CheckCircle2,
}

export default function TasksPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTasks, setSelectedTasks] = useState<number[]>([])

  const filteredTasks = tasksData.filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const todoTasks = filteredTasks.filter((task) => task.status === "To Do")
  const inProgressTasks = filteredTasks.filter((task) => task.status === "In Progress")
  const completedTasks = filteredTasks.filter((task) => task.status === "Completed")

  const toggleTaskSelection = (taskId: number) => {
    setSelectedTasks((prev) => (prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]))
  }

  const TaskCard = ({ task }: { task: (typeof tasksData)[0] }) => {
    const StatusIcon = statusIcons[task.status as keyof typeof statusIcons]
    return (
      <Card className="mb-3">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Checkbox
              checked={selectedTasks.includes(task.id)}
              onCheckedChange={() => toggleTaskSelection(task.id)}
              className="mt-1"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <StatusIcon className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium text-foreground truncate">{task.title}</h3>
                <Badge className={priorityColors[task.priority as keyof typeof priorityColors]} size="sm">
                  {task.priority}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={task.avatar || "/placeholder.svg"} alt={task.assignee} />
                      <AvatarFallback className="text-xs">
                        {task.assignee
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{task.assignee}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{task.dueDate}</span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Task</DropdownMenuItem>
                    <DropdownMenuItem>Change Status</DropdownMenuItem>
                    <DropdownMenuItem>Assign to Someone</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete Task</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
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
                <h1 className="text-3xl font-bold text-foreground">Tasks</h1>
                <p className="text-muted-foreground">Manage and track your team's tasks and activities</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{tasksData.length}</div>
                  <p className="text-xs text-green-600">+12 new this week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{inProgressTasks.length}</div>
                  <p className="text-xs text-blue-600">Active tasks</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{completedTasks.length}</div>
                  <p className="text-xs text-green-600">This week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Overdue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">3</div>
                  <p className="text-xs text-red-600">Need attention</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Task Management</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search tasks..."
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
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All Tasks ({filteredTasks.length})</TabsTrigger>
                    <TabsTrigger value="todo">To Do ({todoTasks.length})</TabsTrigger>
                    <TabsTrigger value="progress">In Progress ({inProgressTasks.length})</TabsTrigger>
                    <TabsTrigger value="completed">Completed ({completedTasks.length})</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-6">
                    <div className="space-y-3">
                      {filteredTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="todo" className="mt-6">
                    <div className="space-y-3">
                      {todoTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="progress" className="mt-6">
                    <div className="space-y-3">
                      {inProgressTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="completed" className="mt-6">
                    <div className="space-y-3">
                      {completedTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
