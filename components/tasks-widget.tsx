"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, User } from "lucide-react"

interface Task {
  id: string
  title: string
  assignee: string
  dueDate: string
  priority: "high" | "medium" | "low"
  completed: boolean
}

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Follow up with TechCorp proposal",
    assignee: "John Doe",
    dueDate: "2024-01-15",
    priority: "high",
    completed: false,
  },
  {
    id: "2",
    title: "Prepare demo for GrowthCo",
    assignee: "Jane Smith",
    dueDate: "2024-01-16",
    priority: "medium",
    completed: false,
  },
  {
    id: "3",
    title: "Send contract to RetailPlus",
    assignee: "Mike Chen",
    dueDate: "2024-01-17",
    priority: "high",
    completed: true,
  },
  {
    id: "4",
    title: "Schedule meeting with AppVenture",
    assignee: "Lisa Wang",
    dueDate: "2024-01-18",
    priority: "low",
    completed: false,
  },
]

export function TasksWidget() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newTask, setNewTask] = useState("")
  const [showAddTask, setShowAddTask] = useState(false)

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask,
        assignee: "John Doe",
        dueDate: new Date().toISOString().split("T")[0],
        priority: "medium",
        completed: false,
      }
      setTasks([...tasks, task])
      setNewTask("")
      setShowAddTask(false)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground">Tasks & Reminders</CardTitle>
          <Button
            size="sm"
            onClick={() => setShowAddTask(!showAddTask)}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Task
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showAddTask && (
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Enter new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
            />
            <Button onClick={addTask} size="sm">
              Add
            </Button>
          </div>
        )}
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start gap-3 p-3 rounded-lg border border-border">
              <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p
                    className={`text-sm font-medium ${task.completed ? "line-through text-muted-foreground" : "text-card-foreground"}`}
                  >
                    {task.title}
                  </p>
                  <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>{task.priority}</Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{task.assignee}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{task.dueDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
