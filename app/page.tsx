'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  Mail,
  Settings,
  User,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              shadcn/ui Components
            </h1>
            <p className="text-muted-foreground mt-2">
              A comprehensive showcase of essential UI components
            </p>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New message received</DropdownMenuItem>
                <DropdownMenuItem>Your profile was updated</DropdownMenuItem>
                <DropdownMenuItem>New login detected</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Preferences</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <Alert>
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was a problem processing your request.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Total Users</CardTitle>
                  <CardDescription>Active users this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12,345</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="text-green-600">+20.1%</span> from last
                    month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue</CardTitle>
                  <CardDescription>Total revenue generated</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$45,231</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="text-green-600">+12.5%</span> from last
                    month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Conversions</CardTitle>
                  <CardDescription>Conversion rate this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">24.8%</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="text-red-600">-2.3%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: 'Alice Johnson',
                    action: 'created a new project',
                    time: '2 hours ago',
                    status: 'active',
                  },
                  {
                    name: 'Bob Smith',
                    action: 'uploaded 5 files',
                    time: '4 hours ago',
                    status: 'completed',
                  },
                  {
                    name: 'Carol White',
                    action: 'commented on task',
                    time: '6 hours ago',
                    status: 'pending',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {item.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {item.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.action}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          item.status === 'active'
                            ? 'default'
                            : item.status === 'completed'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {item.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>Send us a message</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Send Message</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Settings</CardTitle>
                  <CardDescription>
                    Update your account preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="@username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="guest">Guest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell us about yourself" />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications">Email Notifications</Label>
                      <Checkbox id="notifications" />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="marketing">Marketing Emails</Label>
                      <Checkbox id="marketing" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Component Examples</CardTitle>
                <CardDescription>
                  Various UI component demonstrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Buttons */}
                <div className="space-y-2">
                  <Label>Buttons</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>

                <Separator />

                {/* Badges */}
                <div className="space-y-2">
                  <Label>Badges</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                </div>

                <Separator />

                {/* Dialog Example */}
                <div className="space-y-2">
                  <Label>Dialog</Label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button variant="destructive">Delete</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <Separator />

                {/* Icon Buttons */}
                <div className="space-y-2">
                  <Label>Icon Buttons</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button size="icon" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <User className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>Built with Next.js 15 and shadcn/ui</p>
        </div>
      </div>
    </div>
  )
}
